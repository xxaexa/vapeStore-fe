import React, { ChangeEvent } from "react";

export interface HeaderAEProps {
  text: string;
  link: string;
  isOrderPage?: boolean;
}
export interface ListBoxProps {
  id: string;
  src: string;
  title: string;
  currency: string;
}

export interface BottomDashProps {
  text: string;
  link: string;
}

export interface ButtonProps {
  text: string;
}

export interface InputProps {
  type: string;
  name: string;
  value: string;
  label?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IconTextProps {
  icon: React.ReactNode;
  style?: string;
}

export interface cartProduct {
  cartID: string;
  productID: string;
  img: string;
  title: string;
  price: number;
  amount: number;
}

export interface NavbarProps {
  isSidebar: boolean;
}

export interface TextProps {
  text?: string | number | undefined;
  style?: string;
}

export interface ProductState {
  cartID: string | undefined;
  productID: string;
  img?: string;
  title: string;
  price: number;
  amount: number;
}
export interface CheckoutState {
  userName: string;
  address: string;
  userId: number;
  cartTotal?: number | null;
  shipping?: number | null;
  products?: ProductState[] | null | undefined;
  amount?: number | null;
  orderTotal?: number | null;
}

export interface HeaderDashboardProps {
  text: string;
  product?: boolean;
}

export interface GenericResponse {
  email: string;
  username: string;
  password: string;
  id: string;
}

export interface IProductRequest {
  title: string;
  price: number;
  img: string;
  _id: string;
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface IRegisterProps {
  email: string;
  username: string;
  password: string;
}

export interface IUser {
  email: string;
  username: string;
  password: string;
  id: string;
}

export interface User {
  email: string;
  _id: string;
  username: string;
}

export interface IApiResponse {
  data: IProductResponse[];
}

export interface IProductResponse {
  status: string;
  _id: string;
  title: string;
  desc: string;
  img?: string;
  categories: string[];
  price: number;
  created_at: string;
  updated_at: string;
  __v: number;
  amount: number;
  stock: number;
}

export interface Product extends IProductResponse {
  status: string;
  _id: string;
  title: string;
  desc: string;
  img?: string;
  categories: string[];
  price: number;
  created_at: string;
  updated_at: string;
  __v: number;
  amount: number;
  stock: number;
}

export interface IOrderResponse {
  _id: string;
  userName: string;
  address: string;
  userId: number;
  cartTotal: number;
  shipping: number;
  products: Product[];
  amount: number;
  orderTotal: number;
  status: string;
  orderId: string;
  createdAt: string;
}

export interface CardProps {
  title: string;
  img?: string;
  _id: string;
}

export interface CategoryProps {
  category: string;
}

export interface CustomInputProps {
  type: string;
  name: string;
  value: string | number | undefined;
  label?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: string;
}

export interface ItemCartProps {
  amount: number;
  cartID: string | undefined;
  img: string | undefined;
  title: string | undefined;
  price: number;
}

export interface OrderProps {
  status: string | undefined;
  address: string | undefined;
}

export interface OrderBoxProps {
  index: number;
  status: string;
  orderTotal: number;
}

export interface CartTotalsProps {
  isCartPage?: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
}
