import CartTotals from "../components/CartTotals";
import FormInput from "../components/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { title } from "../utils/tittle";
import { useAppSelector } from "../redux/store";
import { useCreateOrderMutation } from "../redux/api/orderApi";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/features/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  title("Checkout");
  // const { cartItems, cartTotal, numItemsInCart, shipping, tax, orderTotal } =
  //   useAppSelector((state) => state.cartState.cartState);
  const cartState = useAppSelector((state) => state.cartState);
  console.log(cartState.cartTotal);
  // const { user } = useSelector((state) => state.user);
  // const idUser = user.user.id;
  const [createOrder, { isLoading, isError, isSuccess, error }] =
    useCreateOrderMutation();

  const initialState = {
    id: "1",
    userName: "",
    address: "",
    userId: 1,
    cartTotal: cartState?.cartTotal,
    shipping: cartState?.shipping,
    products: cartState?.cartItems,
    amount: cartState?.numItemsInCart,
    orderTotal: cartState?.orderTotal,
  };
  // };
  const [values, setValues] = useState(initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createOrder(values);
    dispatch(clearCart());
    toast.info("as");
    (values.userName = ""), (values.address = "");
    setTimeout(() => {
      navigate("/account/order");
    }, 3000);
  };

  return (
    <div className="w-10/12 lg:w-8/12 mx-auto">
      <form onSubmit={handleSubmit}>
        <h4 className="text-2xl mt-8 text-center uppercase font-bold border-b-2 border-purple-300">
          shipping information
        </h4>
        <div className="mt-6 grid gap-8 md:grid-cols-2 items-start">
          <div className="box-shadow p-4">
            <FormInput
              label="name"
              name="userName"
              type="text"
              value={values.userName}
              handleChange={(e) =>
                setValues({ ...values, userName: e.target.value })
              }
            />

            <FormInput
              label="address"
              name="address"
              type="text"
              value={values.address}
              handleChange={(e) => {
                setValues({ ...values, address: e.target.value });
              }}
            />
          </div>
          <div className="box-shadow p-4">
            <CartTotals />
          </div>
        </div>
        <button
          className="mx-auto block mt-12 text-xl hover:bg-purple-300 hover:text-white border-2 border-purple-300 rounded-lg px-4 py-1 duration-300 ease-out"
          type="submit"
        >
          ORDER
        </button>
      </form>
    </div>
  );
};
export default Checkout;
