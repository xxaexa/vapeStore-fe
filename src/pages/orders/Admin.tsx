import { Loading, OrderBox } from "../../components";
import { useGetOrdersUserQuery } from "../../redux/api/orderApi";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const Admin = () => {
  const user = getUserFromLocalStorage();
  const { data: order, isLoading: loadingOrder } = useGetOrdersUserQuery(
    user.user._id
  );

  return (
    <div className="lg:ml-64 text-xl max-w-7xl pt-16 md:pt-4">
      <h2 className="size-custom uppercase font-bold border-b-2 border-purple-300">
        ORDER
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {loadingOrder ? (
          <Loading />
        ) : (
          order?.map((order, index) => (
            <OrderBox key={index} index={index} {...order} />
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
