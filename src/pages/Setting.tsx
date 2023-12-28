import { FormInput } from "../components";
import { useState } from "react";
import React from "react";
import { toast } from "react-toastify";

const Setting = () => {
  const initialState = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("success ygy");
    // dispatch(registerUser(values))
  };

  return (
    <div className="lg:ml-64 text-xl pt-4">
      <h2 className="size-custom uppercase font-bold border-b-2  pt-16 md:pt-4 border-purple-300">
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

        <button className="mt-4 px-2 py-1 rounded-lg w-24 mx-auto text-lg md:text-xl bg-blue-400 hover:bg-white text-white hover:text-blue-400 border-blue-400 border-[1px] duration-300 ease-linear">
          UPDATE
        </button>
      </form>
    </div>
  );
};
export default Setting;
