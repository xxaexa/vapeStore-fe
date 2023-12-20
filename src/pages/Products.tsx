import { useGetProductsQuery } from "../redux/api/productApi";
import Loading from "../components/Loading";
import Card from "../components/Card";

const Products = () => {
  const { data: products = [], isLoading } = useGetProductsQuery();

  return (
    <div className="max-w-7xl mx-auto">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-3 gird-cols-1 gap-8">
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
