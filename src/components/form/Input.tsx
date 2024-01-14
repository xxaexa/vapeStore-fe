import { CustomInputProps } from "../../types";
import RegularText from "../text/RegularText";

const Input = ({
  value,
  label,
  name,
  type,
  handleChange,
  style,
}: CustomInputProps) => {
  return (
    <div className="flex flex-col text-lg md:text-xl my-2">
      <RegularText text={label} />
      <input
        type={type}
        name={name}
        value={value}
        className={`border-b-[1px] border-purple-500  mt-2 px-2 outline-none focus:border-purple-900 text-xs md:text-sm ${style}`}
        onChange={handleChange}
      />
    </div>
  );
};
export default Input;
