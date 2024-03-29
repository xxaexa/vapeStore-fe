import {
  useGetProductsQuery,
  useFilterProductsQuery,
} from "../../redux/api/productApi";
import { Card, Category, Navbar } from "../../components/";
import { useAppSelector } from "../../redux/store";
import { toggleFalse } from "./../../redux/features/toggleSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardLoader from "../../components/loader/CardLoader";
import CardLoaderMobile from "../../components/loader/CardLoaderMobile";

const Products = () => {
  const category = useAppSelector((state) => state.categoryState.category);
  const { data: products = [], isLoading } = useGetProductsQuery();
  // const isLoading = true;
  const { data: FilteredProducts } = useFilterProductsQuery(category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleFalse());
  }, []);

  return (
    <div>
      <Navbar isSidebar={false} />
      <div className="px-4 md:px-0 max-w-7xl mx-auto pt-[32px] md:pt-[46px]">
        <div>
          <Category />
        </div>
        {isLoading ? (
          <>
            <CardLoader />
            <CardLoaderMobile />
          </>
        ) : category != "" ? (
          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 pad-custom mt-4">
            {FilteredProducts!.map((product) => (
              <Card key={product._id} {...product} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4  gap-8 pad-custom mt-4">
            {products.map((product) => (
              <Card key={product._id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
