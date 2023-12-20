import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../redux/api/productApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { title } from "../utils/tittle";
import { Breadcrumb } from "../components";
import img from "./../assets/product/a.jpg";
import { addItem } from "../redux/features/cartSlice";
import { formatPrice } from "../utils/formatPrice";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  const { data: product, isLoading } = useGetProductQuery(id);

  const singleProduct = Array.isArray(product) ? product[0] : product;

  const cartProduct = {
    cartID: singleProduct?.id,
    productID: singleProduct?.id,
    img: singleProduct?.img,
    title: singleProduct?.title,
    price: singleProduct?.price,
    amount: singleProduct?.amount,
  };

  title(singleProduct?.title);
  const breadCrumbs = [
    { name: `${singleProduct?.title?.substring(0, 20)} ...` },
  ];
  return (
    <div className="w-10/12 lg:w-8/12 mx-auto">
      {isLoading ? (
        <div className="flex justify-center mt-24">{/* <Loading /> */}</div>
      ) : (
        <section className="flex flex-col md:flex-row items-center ">
          <div className="md:w-2/3 ">
            <Breadcrumb breadCrumbs={breadCrumbs} />
            <img src={img} alt={img} className="h-[500px]" />
          </div>
          <div className="md:w-1/3 text-xl flex gap-8 flex-col">
            <p className="text-2xl"> {formatPrice(singleProduct?.price)} </p>
            <h2>{singleProduct?.title}</h2>
            <p>{singleProduct?.desc}</p>
            <div className="flex flex-col  gap-2">
              {/* AMOUNT */}
              <div className="form-control w-full max-w-xs">
                <label className="label" htmlFor="amount">
                  <h4 className="text-md font-medium -tracking-wider capitalize">
                    Qty
                  </h4>
                  <div className="flex">
                    <button
                      className="pr-2"
                      onClick={() => {
                        if (qty === 1) {
                          return;
                        } else {
                          setQty(qty - 1);
                        }
                      }}
                    >
                      -
                    </button>
                    <h2>{qty}</h2>
                    <button
                      className="pl-2"
                      onClick={() => {
                        setQty(qty + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </label>
              </div>

              <button
                className="mt-4 text-2xl bg-purple-400 px-4 py-1 rounded-lg text-white hover:bg-purple-300"
                onClick={() => {
                  // if (!user) {
                  //   return navigate("/cart");
                  // } else {
                  dispatch(addItem({ product: cartProduct }));
                  navigate("/cart");
                  // }
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
export default Product;
