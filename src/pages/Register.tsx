import { useEffect, useState } from "react";
import { FormInput } from "../components";
import { useRegisterUserMutation } from "../redux/api/authApi";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { title } from "../utils/tittle";
const Register = () => {
  title("Register");

  const initialState = {
    email: "",
    username: "",
    password: "",
  };
  const [registerUser, { isLoading, isError, isSuccess, error }] =
    useRegisterUserMutation();

  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
    await registerUser(values);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("register success");
    } else if (isError) {
      console.log(error);
    }
  }, [isLoading]);

  return (
    <div className="bg-purple-100 min-h-screen flex justify-center items-center">
      <div className=" box-shadow rounded-lg text-center text-xl  w-96 p-4">
        <h2 className="text-2xl my-4 font-bold mb-4">REGISTER</h2>
        <form onSubmit={handleSubmit} className="flex gap-8 flex-col">
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

          <button className="bg-white px-2 py-1 rounded-lg w-24 mx-auto">
            Register
          </button>
          <p>
            Have account ?
            <Link to={"/login"}>
              <span> Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
