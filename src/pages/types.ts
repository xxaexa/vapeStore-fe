export interface cartProduct {
  cartID: string;
  productID: string;
  img: string;
  title: string;
  price: number;
  amount: number;
}

export interface CheckoutState {
  _id: string;
  userName: string;
  address: string;
  userId: number;
  cartTotal?: number | null;
  shipping?: number | null;
  products?: Product[]; // Sesuaikan dengan tipe yang benar, misalnya IProduct[]
  amount?: number | null;
  orderTotal?: number | null;
}

interface Product {
  cartID: string | undefined;
  productID: string;
  img: string;
  title: string;
  price: number;
  amount: number;
}
