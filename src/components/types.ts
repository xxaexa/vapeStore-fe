import { ChangeEvent } from "react";

export interface CardProps {
  title: string;
  price: number;
  img: string;
  id: string;
}

export interface CategoryProps {
  category: string;
}

export interface FormInputProps {
  type: string;
  name: string;
  value: string;
  label?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ItemCartProps {
  cartID: string | undefined;
  img: string | undefined;
  title: string | undefined;
  price: number | undefined;
}

export interface OrderProps {
  status: string | undefined;
  address: string | undefined;
}
