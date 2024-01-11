import { Input } from "./../../../../components";
import { useState } from "react";
import React from "react";
import { toast } from "react-toastify";

const Account = () => {
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
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 mt-4 md:gap-8"
      >
        <Input
          label={"EMAIL"}
          name={"email"}
          type={"email"}
          value={values.email}
          handleChange={handleChange}
        />

        <Input
          label={"USERNAME"}
          type={"text"}
          name={"username"}
          value={values.username}
          handleChange={handleChange}
        />

        <Input
          label={"PASSWORD"}
          name={"password"}
          type={"password"}
          value={values.password}
          handleChange={handleChange}
        />

        <Input
          label={"CONFIRM PASSWORD"}
          name={"confirmPassword"}
          type={"password"}
          value={values.confirmPassword}
          handleChange={handleChange}
        />
      </form>
    </div>
  );
};
export default Account;
