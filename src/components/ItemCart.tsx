import { useState } from "react";
import { useDispatch } from "react-redux";
import { formatPrice } from "../utils/";
import { removeItem } from "../redux/features/cartSlice";
import { ItemCartProps } from "../types";
import { AiOutlineDelete } from "react-icons/ai";
import RegularText from "./text/RegularText";
const ItemCart = ({ cartID, img, title, price }: ItemCartProps) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ cartID: cartID }));
  };

  return (
    <div
      key={cartID}
      className="mb-12 flex gap-y-4 lg:flex-row flex-wrap  border-base-300 last:border-b-0 text-xl justify-between "
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="w-1/2 md:h-52 md:w-52 rounded-lg object-cover"
      />
      {/* INFO */}
      <div className="flex flex-col lg:text-right justify-between ">
        <div className="sm:ml-16 sm:w-48">
          {/* TITLE */}
          <RegularText text={title} style="text-right" />
        </div>
        {/* AMOUNT */}
        <div className="text-right">
          <label htmlFor="amount" className="label p-0">
            <div className="flex items-center justify-end">
              <button
                className="w-8 h-8"
                onClick={() => {
                  if (amount === 1) {
                    return 1;
                  } else {
                    setAmount(amount - 1);
                  }
                }}
              >
                <RegularText text={"-"} style="text-center" />
              </button>

              <RegularText text={amount} style="text-xl" />

              <button className="w-8 h-8" onClick={() => setAmount(amount + 1)}>
                <RegularText text={"+"} style="text-center" />
              </button>
            </div>
          </label>

          <br />
        </div>

        <RegularText text={formatPrice(price * amount)} />
        <div className="flex justify-end">
          {/* REMOVE */}
          <button
            className="text-xl rounded-lg text-left"
            onClick={handleRemove}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemCart;
