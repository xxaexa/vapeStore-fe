import { TextProps } from "../../types";

const RegularText = ({ text, style }: TextProps) => {
  return <p className={`text-xs md:text-sm  ${style}`}>{text}</p>;
};

export default RegularText;
