import { formatPrice } from "../../utils/";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/api/productApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { TbEdit, TbTrash } from "react-icons/tb";
import { Loading } from "..";
import RegularText from "../text/RegularText";
import IconText from "../text/IconText";
import { useNavigate } from "react-router-dom";

export interface BoxProps {
  title: string;
  img?: string;
  stock?: number;
  price: number;
  _id: string;
}

const ProductBox = () => {
  const navigate = useNavigate();
  const [deleteProduct, { isLoading, isSuccess }] = useDeleteProductMutation();
  const { data: products = [], isLoading: loadingProduct } =
    useGetProductsQuery();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Success delete");
    }
  }, [isLoading]);

  return (
    <div className="grid gap-8 mt-4 mb-16">
      {loadingProduct ? (
        <Loading />
      ) : (
        products.map((product) => (
          <div
            key={product._id}
            className="border-[1px] rounded-lg p-4 flex flex-row items-center justify-between size-custom"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-[150px] md:w-1/5 rounded-lg"
            />
            <div className=" hidden md:block w-1/5">
              <RegularText text={"Name"} style="text-right" />
              <RegularText text={product.title} style="text-right" />
            </div>

            <div className=" hidden md:block w-1/5">
              <RegularText text={"Price"} style="text-right" />
              <RegularText
                text={formatPrice(product.price)}
                style="text-right"
              />
            </div>
            <div className=" hidden md:block w-1/5">
              <RegularText text={"Stock"} style="text-right" />
              <RegularText text={product.stock} style="text-right" />
            </div>
            <div className="hidden md:flex justify-end gap-2 w-1/5">
              <button onClick={() => navigate(`edit/${product.title}`)}>
                <IconText icon={<TbEdit />} style="text-right" />
              </button>

              <button onClick={() => deleteProduct(product._id)}>
                <IconText icon={<TbTrash />} style="text-right" />
              </button>
            </div>
            <div className=" md:hidden text-right text-sm flex flex-col space-y-2">
              <h2>
                Name : <span className="line-2 ">{product.title}</span>
              </h2>
              <RegularText
                text={`Price : ${formatPrice(product.price)}`}
                style="text-right"
              />
              <RegularText
                text={`Stock : ${product.stock}`}
                style="text-right"
              />
              <div className="flex flex-row gap-4 justify-end">
                <Link to={`edit/${product.title}`}>
                  <TbEdit className="w-5 h-5" />
                </Link>
                <button onClick={() => deleteProduct(product._id)}>
                  <TbTrash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductBox;
