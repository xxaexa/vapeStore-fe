import { useState } from "react";
// import { removeItem, editItem } from './../features/cart/cartSlice'
import { useDispatch } from "react-redux";
// import { formatPrice } from '../utils'
import { formatPrice } from "../utils/formatPrice";
import { removeItem } from "../redux/features/cartSlice";
import { ItemCartProps } from "./types";

const ItemCart = ({ cartID, img, title, price }: ItemCartProps) => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ cartID: cartID }));
  };
  const handleAmount = () => {
    // dispatch(editItem({ cartID, amount: parseInt(e.target.value) }))
  };

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 lg:flex-row flex-wrap  border-base-300 pb-6 last:border-b-0 text-xl justify-between "
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="h-52 w-52 rounded-lg object-cover"
      />
      {/* INFO */}
      <div className="flex flex-col lg:text-right justify-between ">
        <div className="sm:ml-16 sm:w-48">
          {/* TITLE */}
          <h3 className="capitalize font-medium">{title}</h3>
        </div>
        {/* AMOUNT */}
        <div className="">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <br />
          {/* <select
            name="amount"
            id="amount"
            className=" text-left mt-2 select select-base select-bordered select-xs w-24 border-2 border-black"
            value={amount}
            onChange={handleAmount}
          ></select> */}
        </div>
        <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
        <div>
          {/* REMOVE */}
          <button
            className="w-32  text-xl text-red-400 rounded-lg border-2 border-red-400 hover:text-white hover:bg-red-400"
            onClick={handleRemove}
          >
            REMOVE
          </button>
        </div>
      </div>
    </article>
  );
};
export default ItemCart;
