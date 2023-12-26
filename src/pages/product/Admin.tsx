import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApi";
import { Loading, ProductBox } from "../../components";

const Admin = () => {
  const { data: products = [], isLoading } = useGetProductsQuery();
  return (
    <div className="lg:ml-64 text-xl max-w-7xl  pt-16 md:pt-4">
      <div className="flex justify-between border-b-2 border-purple-300">
        <h2 className="size-custom uppercase font-bold ">PRODUCT LIST</h2>
        <Link to={"add"}>
          <button className="size-custom ">ADD PRODUCT</button>
        </Link>
      </div>

      <div className="grid gap-8 mt-4">
        {isLoading ? (
          <Loading />
        ) : (
          products.map((product) => (
            <ProductBox key={product._id} {...product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
