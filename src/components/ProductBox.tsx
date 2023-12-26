import { formatPrice } from "../utils/formatPrice";
import a from "./../assets/product/a.jpg";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../redux/api/productApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import deleteIcon from "./../assets/icons/delete.svg";
import edit from "./../assets/icons/edit.svg";

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
      <img src={a} alt={img} className="w-[150px] md:w-[200px] rounded-lg" />

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
      <div className="flex gap-2">
        <Link to={`edit/${title}`}>
          <img src={edit} className="w-5" />
        </Link>
        <button onClick={() => deleteProduct(_id)}>
          <img src={deleteIcon} className="w-5" />
        </button>
      </div>
      <div className="block md:hidden text-right text-sm">
        <h2>
          Name : <span className="line-2 ">{title}</span>
        </h2>
        <h2>Price : {formatPrice(price)}</h2>
        <p> Stock : {stock}</p>
      </div>
    </div>
  );
};

export default ProductBox;
