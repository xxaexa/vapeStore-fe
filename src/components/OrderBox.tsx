import { formatPrice } from "../utils/formatPrice";
import { OrderBoxProps } from "./types";

const OrderBox = ({ index, status, orderTotal }: OrderBoxProps) => {
  return (
    <div className="border-[1px] rounded-lg p-4  size-custom cursor-pointer">
      <div className="flex justify-between flex-row my-2 space-x-4  ">
        <img
          src=""
          alt=""
          className="h-[100px] w-[200px] rounded-lg bg-gray-200"
        />
        <div className="flex flex-col justify-between">
          <p className="md:text-center">VPST-ORDER-00{index + 1}</p>
          <p>{status}</p>
          <p>{formatPrice(orderTotal)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
