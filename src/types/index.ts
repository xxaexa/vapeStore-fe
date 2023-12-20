import { ChangeEvent } from "react";

export interface ListBoxProps {
  id: string;
  src: string;
  title: string;
  currency: string;
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
