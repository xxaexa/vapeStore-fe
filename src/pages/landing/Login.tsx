import { useEffect, useState } from "react";
import Input from "../../components/form/Input";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createTitlePage } from "../../utils";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { setUser } from "../../redux/features/userSlice";
import { getUserFromLocalStorage } from "../../utils";
import { useDispatch } from "react-redux";
import LargeText from "../../components/text/LargeText";
import RegularText from "../../components/text/RegularText";
import ImageLogReg from "../../components/image/ImageLogReg";

const Login = () => {
  createTitlePage("Login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = getUserFromLocalStorage();

  const [loginUser, { isLoading, isError, isSuccess, error }] =
    useLoginUserMutation();

  const initialState = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (values.email === "" || values.password === "") {
      return toast.error("Please input ");
    } else {
      const user = await loginUser(values).unwrap();
      dispatch(setUser(user));
    }
  };

  const handleLoginAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    values.email = import.meta.env.VITE_DEMO_ADMIN_EMAIL;
    values.password = import.meta.env.VITE_DEMO_ADMIN_PASSWORD;
    const user = await loginUser(values).unwrap();
    dispatch(setUser(user));
  };

  const handleLoginMember = async (e: React.FormEvent) => {
    e.preventDefault();
    values.email = import.meta.env.VITE_DEMO_MEMBER_EMAIL;
    values.password = import.meta.env.VITE_DEMO_MEMBER_PASSWORD;
    const user = await loginUser(values).unwrap();
    dispatch(setUser(user));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Success");
      navigate("/dashboard");
    } else if (isError) {
      console.log(error);
      toast.error((error as any).data.msg);
    }
  }, [isLoading]);

  if (user) {
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  }

  const mainColor = "bg-black text-white";

  return (
    <div className={`min-h-screen flex items-center w-full ${mainColor}`}>
      <ImageLogReg />
      <div className="md:box-shadow rounded-lg text-xl w-full md:w-1/5 p-4">
        <LargeText text={"Login"} style="font-bold uppercase mb-2" />
        <form onSubmit={handleSubmit} className="flex gap-8 flex-col">
          <Input
            label={"EMAIL"}
            type={"email"}
            name={"email"}
            value={values.email}
            handleChange={handleChange}
            style={"text-black rounded-lg"}
          />

          <Input
            label={"PASSWORD"}
            name={"password"}
            type={"password"}
            value={values.password}
            handleChange={handleChange}
            style={"text-black rounded-lg"}
          />
          <div className="text-black flex flex-col space-y-4">
            <button className="bg-white px-2 py-1 rounded-lg w-24 mx-auto">
              <RegularText text={"Login"} />
            </button>
            <button
              onClick={handleLoginAdmin}
              type="button"
              className="bg-white px-2 py-1 rounded-lg  mx-auto"
            >
              <RegularText text={"Login Demo Admin"} />
            </button>
            <button
              onClick={handleLoginMember}
              type="button"
              className="bg-white px-2 py-1 rounded-lg  mx-auto"
            >
              <RegularText text={"Login Demo Member"} />
            </button>
          </div>
          <div className="flex gap-2 justify-center">
            <RegularText text={"Don't have account ?"} />

            <Link to={"/register"}>
              <RegularText text={"Register"} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
