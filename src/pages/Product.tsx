import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useGetProductQuery } from "../redux/api/productApi";
import { addItem } from "../redux/features/cartSlice";
import { title } from "../utils/tittle";
import { Breadcrumb, Navbar, RelatedCard } from "../components";

import { formatPrice } from "../utils/formatPrice";
import img from "./../assets/product/a.jpg";
import { cartProduct } from "./types";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: product, isLoading } = useGetProductQuery(id);

  const singleProduct = Array.isArray(product) ? product[0] : product;
  const cartProduct: cartProduct = {
    cartID: singleProduct?._id || "",
    productID: singleProduct?._id || "",
    img: singleProduct?.img || "",
    title: singleProduct?.title || "",
    price: singleProduct?.price || 0,
    amount: singleProduct?.amount || 0,
  };

  title(singleProduct?.title);
  const breadCrumbs = [
    { name: `${singleProduct?.title?.substring(0, 20)} ...` },
  ];
  return (
    <div>
      <Navbar />
      <div className="w-10/12 lg:w-8/12 mx-auto pt-16 md:pt-24">
        {isLoading ? (
          <div className="flex justify-center mt-8">{/* <Loading /> */}</div>
        ) : (
          <section className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-2/3 ">
              <Breadcrumb breadCrumbs={breadCrumbs} />
              <img src={img} alt={img} className="md:h-[500px] rounded-lg" />
            </div>
            <div className="md:w-1/3 text-xl flex gap-8 flex-col">
              <h2 className="mt-5 md:mt-0 size-custom">
                {singleProduct?.title}
              </h2>
              <p className="text-md md:text-2xl">
                {formatPrice(singleProduct?.price)}
              </p>
              <p className="size-custom">{singleProduct?.desc}</p>
              <div className="flex flex-col gap-2">
                <button
                  className="mt-4 text-lg md:text-2xl bg-purple-400 px-4 py-1 rounded-lg text-white hover:bg-purple-300"
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
        <RelatedCard />
      </div>
    </div>
  );
};
export default Product;
