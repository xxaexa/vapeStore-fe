import { useEffect, useState } from "react";
import { FormInput } from "../components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { title } from "../utils/tittle";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { useLoginUserMutation } from "../redux/api/authApi";
import { setUser } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  title("Login");
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

  return (
    <div className="bg-purple-100 min-h-screen flex justify-center items-center">
      <div className=" box-shadow rounded-lg text-center text-xl  w-96 p-4">
        <h2 className="text-2xl my-4 font-bold mb-4">LOGIN</h2>
        <form onSubmit={handleSubmit} className="flex gap-8 flex-col">
          <FormInput
            label={"EMAIL"}
            type={"email"}
            name={"email"}
            value={values.email}
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
            Login
          </button>
          <p>
            Dont have account ?
            <Link to={"/register"}>
              <span> Register</span>
            </Link>
          </p>
          {/* <button
            type="submit"
            className="bg-white px-2 py-1 rounded-lg w-24 mx-auto">
            Demo
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
