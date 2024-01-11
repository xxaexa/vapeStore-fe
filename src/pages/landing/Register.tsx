import { useEffect, useState } from "react";
import Input from "../../components/form/Input";
import { useRegisterUserMutation } from "../../redux/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTitlePage } from "../../utils";

import RegularText from "../../components/text/RegularText";
import ImageLogReg from "../../components/image/ImageLogReg";
const Register = () => {
  createTitlePage("Register");
  const navigate = useNavigate();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
    registerUser(values);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("register success");
      navigate("/login");
    } else if (isError) {
      toast.error("Email / Username is already exist");
      console.log(error);
    }
  }, [isLoading]);

  const mainColor = "bg-black text-white";

  return (
    <div className={`min-h-screen flex items-center w-full ${mainColor}`}>
      <ImageLogReg />
      <div className="md:box-shadow rounded-lg text-xl w-full md:w-1/5 p-4">
        <h2 className="text-2xl my-4 font-bold mb-4">REGISTER</h2>
        <form onSubmit={handleSubmit} className="flex gap-8 flex-col">
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
          <div className="text-black">
            <button className="bg-white px-2 py-1 rounded-lg w-24 text-black mx-auto">
              <RegularText text={"Register"} />
            </button>
          </div>

          <div className="flex gap-2 justify-center">
            <RegularText text={" Have account ?"} />

            <Link to={"/login"}>
              <RegularText text={"Login"} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
