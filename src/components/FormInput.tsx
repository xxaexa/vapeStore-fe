import { FormInputProps } from "./types";

const FormInput = ({
  value,
  label,
  name,
  type,
  handleChange,
}: FormInputProps) => {
  return (
    <div className="flex flex-col text-xl">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className="border-2  px-2 outline-none"
        onChange={handleChange}
      />
    </div>
  );
};
export default FormInput;
