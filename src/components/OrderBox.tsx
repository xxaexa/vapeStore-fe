import img from "./../assets/product/a.jpg";
import { Link } from "react-router-dom";

const OrderBox = () => {
  return (
    <Link to={"1"}>
      <div className="border-[1px] rounded-lg p-4 w-fit size-custom cursor-pointer">
        <p className="text-center">VPST-ORDER-001</p>
        <div className="flex flex-row my-2 space-x-4  ">
          <img src={img} alt="" className="w-[150px] md:w-[200px] rounded-lg" />
          <div className="flex flex-col justify-between">
            <p>Menunggu Dikirim</p>
            <p>RP 120.000</p>
            <p>29/02/2024</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderBox;
