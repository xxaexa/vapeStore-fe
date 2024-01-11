import { TextProps } from "../../types";

const LargeText = ({ text, style }: TextProps) => {
  return <p className={`text-sm md:text-lg ${style}`}>{text}</p>;
};

export default LargeText;
