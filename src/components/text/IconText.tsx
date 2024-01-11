import { IconTextProps } from "../../types";

const IconText = ({ icon, style }: IconTextProps) => {
  return <p className={`text-sm md:text-lg mr-2 ${style}`}>{icon}</p>;
};

export default IconText;
