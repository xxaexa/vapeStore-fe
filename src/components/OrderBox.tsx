import { Link } from "react-router-dom";

const OrderBox = () => {
  return (
    <Link to={"1"}>
      <div className="border-[1px] rounded-lg p-4 w-fit size-custom cursor-pointer">
        <p className="text-center">VPST-ORDER-001</p>
        <div className="flex flex-row my-2 space-x-4  ">
          <img
            src=""
            alt=""
            className="w-[150px] md:w-[200px] rounded-lg bg-gray-200"
          />
          <div className="flex flex-col justify-between">
            <p>Menunggu Dikirim</p>
            <p>price</p>
            <p>date</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderBox;
