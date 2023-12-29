import { FormInputProps } from "./types";

const FormInput = ({
  value,
  label,
  name,
  type,
  handleChange,
}: FormInputProps) => {
  return (
    <div className="flex flex-col text-lg md:text-xl my-2">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="border-[1px] border-purple-500 rounded-lg mt-2 px-2 outline-none focus:border-purple-900"
        onChange={handleChange}
      />
    </div>
  );
};
export default FormInput;
