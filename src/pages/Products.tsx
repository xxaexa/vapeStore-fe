import {
  useGetProductsQuery,
  useFilterProductsQuery,
} from "../redux/api/productApi";
import { Card, Loading, Slick, Category, Navbar } from "../components";
import ScrollDiv from "../components/ScrollNav";
import { useAppSelector } from "../redux/store";

const Products = () => {
  const category = useAppSelector((state) => state.categoryState.category);
  const { data: products = [], isLoading } = useGetProductsQuery();
  const { data: FilteredProducts } = useFilterProductsQuery(category);

  return (
    <div>
      <section className="hidden md:block">
        <ScrollDiv />
        <Slick />
      </section>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-14 md:mt-[190px] mb-12">
        <div>
          <Category />
        </div>
        {isLoading ? (
          <Loading />
        ) : category != "" ? (
          <div className="grid md:grid-cols-3 gird-cols-1 gap-8 pad-custom">
            {FilteredProducts!.map((product) => (
              <Card key={product._id} {...product} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gird-cols-1 gap-8 pad-custom">
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
