import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface Product {
  cartID: string;
  productID: string;
  img: string;
  title: string;
  price: number;
  amount: number;
}

interface CartState {
  cartItems: Product[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  orderTotal: number;
}

const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const storedCart = localStorage.getItem("cart") as string;
  const cartData = JSON.parse(storedCart) || defaultState;
  return cartData;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action: PayloadAction<{ product: Product }>) => {
      const { product } = action.payload;

      const item = state.cartItems.find(
        (i) => i.cartID === (product && product.cartID)
      );
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Produk ditambahkan ke keranjang");
    },
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (
      state,
      action: PayloadAction<{ cartID: string | undefined }>
    ) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);

      if (product) {
        state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
        state.numItemsInCart -= product.amount;
        state.cartTotal -= product.price * product.amount;
        cartSlice.caseReducers.calculateTotals(state);
        toast.success("Product delete");
      }
    },
    editItem: (
      state,
      action: PayloadAction<{ cartID: string | undefined; amount: number }>
    ) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);
      if (item) {
        state.numItemsInCart += amount - item.amount;
        state.cartTotal += item.price * (amount - item.amount);
        item.amount = amount;
        cartSlice.caseReducers.calculateTotals(state);
      }
    },
    setShipping: (state, action: PayloadAction<{ shipping: number }>) => {
      const { shipping } = action.payload;
      state.shipping = shipping;
      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      state.orderTotal = state.cartTotal + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem, setShipping } =
  cartSlice.actions;

export default cartSlice.reducer;
