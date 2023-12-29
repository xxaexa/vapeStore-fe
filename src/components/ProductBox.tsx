import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../redux/api/productApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { TbEdit, TbTrash } from "react-icons/tb";

export interface BoxProps {
  title: string;
  img?: string;
  stock?: number;
  price: number;
  _id: string;
}

const ProductBox = ({ _id, title, img, stock, price }: BoxProps) => {
  const [deleteProduct, { isLoading, isSuccess }] = useDeleteProductMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Success delete");
    }
  }, [isLoading]);

  return (
    <div className="border-[1px] rounded-lg p-4 flex flex-row items-center justify-between size-custom">
      <img src={img} alt={img} className="w-[150px] md:w-[200px] rounded-lg" />
      <div className=" hidden md:block">
        <h2>Name</h2>
        <h2>{title}</h2>
      </div>
      <div className=" hidden md:block">
        <h2>Price</h2>
        <h2>{formatPrice(price)}</h2>
      </div>
      <div className=" hidden md:block">
        <h2>Stock</h2>
        <h2>{stock}</h2>
      </div>
      <div className="hidden md:flex gap-2">
        <Link to={`edit/${title}`}>
          <TbEdit className="w-7 h-7" />
        </Link>
        <button onClick={() => deleteProduct(_id)}>
          <TbTrash className="w-7 h-7" />
        </button>
      </div>
      <div className=" md:hidden text-right text-sm flex flex-col space-y-2">
        <h2>
          Name : <span className="line-2 ">{title}</span>
        </h2>
        <h2>Price : {formatPrice(price)}</h2>
        <p> Stock : {stock}</p>
        <div className="flex flex-row gap-4 justify-end">
          <Link to={`edit/${title}`}>
            <TbEdit className="w-5 h-5" />
          </Link>
          <button onClick={() => deleteProduct(_id)}>
            <TbTrash className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
