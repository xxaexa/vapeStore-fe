import { CartTotals, Input, Navbar } from "../../components";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createTitlePage } from "../../utils/";
import { useAppSelector } from "../../redux/store";
import { useCreateOrderMutation } from "../../redux/api/orderApi";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/features/cartSlice";
import { CheckoutState } from "../../types";

const Checkout = () => {
  createTitlePage("Checkout");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartState = useAppSelector((state) => state.cartState);

  const [createOrder, { isLoading, isSuccess, error }] =
    useCreateOrderMutation();

  const initialState: CheckoutState = {
    _id: "1",
    userName: "",
    address: "",
    userId: 1,
    cartTotal: cartState?.cartTotal,
    shipping: cartState?.shipping,
    products: cartState?.cartItems,
    amount: cartState?.numItemsInCart,
    orderTotal: cartState?.orderTotal,
  };

  const [values, setValues] = useState(initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createOrder(values);
    dispatch(clearCart());
    toast.info("Successfully checkout");
    (values.userName = ""), (values.address = "");

    setTimeout(() => {
      navigate("/account/order");
    }, 3000);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("order created");
    } else {
      console.log(error);
    }
  }, [isLoading]);

  return (
    <div>
      <Navbar isSidebar={false} />
      <div className="w-10/12 lg:w-8/12 mx-auto pt-24">
        <form onSubmit={handleSubmit}>
          <h4 className="text-2xl mt-8 uppercase font-bold border-b-2 border-purple-300">
            CHECKOUT
          </h4>
          <div className="mt-6 grid gap-8 md:grid-cols-2 items-start">
            <div className="box-shadow p-4">
              <Input
                label="name"
                name="userName"
                type="text"
                value={values.userName}
                handleChange={(e) =>
                  setValues({ ...values, userName: e.target.value })
                }
              />

              <Input
                label="address"
                name="address"
                type="text"
                value={values.address}
                handleChange={(e) => {
                  setValues({ ...values, address: e.target.value });
                }}
              />
            </div>
            <div className="box-shadow p-4">
              <CartTotals isCartPage={false} />
            </div>
          </div>
          <button
            className="mx-auto block mt-12 text-xl hover:bg-purple-300 hover:text-white border-2 border-purple-300 rounded-lg px-4 py-1 duration-300 ease-out"
            type="submit"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};
export default Checkout;
