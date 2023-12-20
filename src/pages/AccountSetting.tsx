import { FormInput } from "../components";
import { useState } from "react";
// import { registerUser } from './../features/user/userSlice'
import { useDispatch } from "react-redux";

const AccountSetting = () => {
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault()
    // dispatch(registerUser(values))
  };

  return (
    <div className="lg:ml-64 text-xl">
      <h2 className="text-2xl uppercase font-bold border-b-2 border-purple-300">
        UPDATE ACCOUNT
      </h2>
      <form onSubmit={handleSubmit} className="flex mt-8 flex-col lg:w-96">
        <FormInput
          label={"EMAIL"}
          name={"email"}
          type={"email"}
          value={values.email}
          handleChange={handleChange}
        />

        <FormInput
          label={"USERNAME"}
          type={"text"}
          name={"username"}
          value={values.username}
          handleChange={handleChange}
        />

        <FormInput
          label={"PASSWORD"}
          name={"password"}
          type={"password"}
          value={values.password}
          handleChange={handleChange}
        />

        <FormInput
          label={"CONFIRM PASSWORD"}
          name={"confirmPassword"}
          type={"password"}
          value={values.confirmPassword}
          handleChange={handleChange}
        />

        <button className="px-2 py-1 rounded-lg w-24 mt-8 bg-purple-300 text-white hover:bg-white hover:text-purple-300 duration-300 ease-out hover:border-purple-300 border-2">
          Update
        </button>
      </form>
    </div>
  );
};
export default AccountSetting;
