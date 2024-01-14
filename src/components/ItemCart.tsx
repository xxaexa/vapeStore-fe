import { useDispatch } from "react-redux";
import { formatPrice } from "../utils/";
import { removeItem } from "../redux/features/cartSlice";
import { ItemCartProps } from "../types";
import { AiOutlineDelete } from "react-icons/ai";
import RegularText from "./text/RegularText";
import { editItem } from "../redux/features/cartSlice";

const ItemCart = ({ cartID, img, title, price, amount }: ItemCartProps) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ cartID: cartID }));
  };

  console.log(amount);

  return (
    <div
      key={cartID}
      className="my-6 flex gap-y-4 lg:flex-row flex-wrap justify-between p-4 box-shadow rounded-lg"
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="rounded-lg object-cover text-xs md:text-lg  w-[150px] md:w-[200px]"
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
                    return; // Tidak melakukan apa-apa jika amount sudah 1
                  } else {
                    const newAmount = amount - 1;
                    dispatch(editItem({ cartID, amount: newAmount }));
                  }
                }}
              >
                <RegularText text={"-"} style="text-center" />
              </button>

              <RegularText text={amount} style="text-xl" />

              <button
                className="w-8 h-8"
                onClick={() => {
                  const newAmount = amount + 1;
                  dispatch(editItem({ cartID, amount: newAmount }));
                }}
              >
                <RegularText text={"+"} style="text-center" />
              </button>
            </div>
          </label>
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
