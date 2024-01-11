import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useGetProductQuery } from "../../redux/api/productApi";
import { addItem } from "../../redux/features/cartSlice";
import { Breadcrumb, Navbar, RelatedCard } from "../../components";

import { formatPrice, createTitlePage } from "../../utils/";
import { cartProduct } from "../../types";
import { getUserFromLocalStorage } from "../../utils/";

import RegularText from "../../components/text/RegularText";
import LargeText from "../../components/text/LargeText";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = getUserFromLocalStorage();

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

  const breadCrumbs = [
    { name: `${singleProduct?.title?.substring(0, 20)} ...` },
  ];
  createTitlePage(singleProduct?.title);
  return (
    <div>
      <Navbar isSidebar={false} />
      <div className="px-4 md:px-0 max-w-7xl mx-auto pt-8 md:pt-24">
        {isLoading ? (
          <div className="flex justify-center mt-8">{/* <Loading /> */}</div>
        ) : (
          <section className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-2/3 ">
              <Breadcrumb breadCrumbs={breadCrumbs} />
              <img
                src={singleProduct?.img}
                alt={singleProduct?.img}
                className="md:h-[500px] rounded-lg"
              />
            </div>
            <div className="md:w-1/3 text-xl flex gap-8 flex-col">
              <LargeText text={singleProduct?.title} />
              <RegularText text={formatPrice(singleProduct?.price)} />
              <RegularText text={singleProduct?.desc} />
              <div className="hidden md:flex flex-col gap-2">
                <button
                  className="mt-4 bg-purple-400 px-4  rounded-lg text-white hover:bg-purple-300"
                  onClick={() => {
                    if (!user) {
                      return navigate("/cart");
                    } else {
                      dispatch(addItem({ product: cartProduct }));
                      navigate("/cart");
                    }
                  }}
                >
                  <LargeText text={"ADD TO CART"} />
                </button>
              </div>
            </div>
          </section>
        )}
        <RelatedCard />
      </div>
      <button
        className="fixed md:hidden bg-purple-400 rounded-t-lg py-2 text-white hover:bg-purple-300 bottom-0 w-full"
        onClick={() => {
          if (!user) {
            return navigate("/cart");
          } else {
            dispatch(addItem({ product: cartProduct }));
            navigate("/cart");
          }
        }}
      >
        <LargeText text={"ADD TO CART"} />
      </button>
    </div>
  );
};
export default Product;
