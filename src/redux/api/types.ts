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
  id: string;
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
  id: string;
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
  id: string;
  title: string;
  desc: string;
  img?: string;
  categories: string[];
  price: number;
  created_at: string;
  updated_at: string;
  __v: number;
  amount: number;
}

export interface IOrderResponse {
  id: string;
  userName: string;
  address: string;
  userId: number;
  cartTotal: number;
  shipping: number;
  products: IProductResponse[];
  amount: number;
  orderTotal: number;
}
