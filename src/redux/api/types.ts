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
  username: string;
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

interface IUserResponse {
  user: User[];
  accessToken: string;
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
}
