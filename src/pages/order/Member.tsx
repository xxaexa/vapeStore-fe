import { Loading, OrderBox } from "../../components";
import { useGetOrdersQuery } from "../../redux/api/orderApi";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const Member = () => {
  const user = getUserFromLocalStorage();
  const { data: orders, isLoading: loadingOrders } = useGetOrdersQuery(
    user.user._id
  );
  return (
    <div className="lg:ml-64 text-xl max-w-7xl pt-16 md:pt-4">
      <h2 className="size-custom  uppercase font-bold border-b-2 border-purple-300">
        ORDER HISTORY
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {loadingOrders ? (
          <Loading />
        ) : (
          orders?.map((order, index) => <OrderBox key={index} {...order} />)
        )}
      </div>
    </div>
  );
};

export default Member;
