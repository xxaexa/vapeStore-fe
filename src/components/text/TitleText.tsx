import { TextProps } from "../../types";

const TitleText = ({ text }: TextProps) => {
  return (
    <p className="text-xl md:text-3xl text-center mb-8 font-bold">{text}</p>
  );
};

export default TitleText;
