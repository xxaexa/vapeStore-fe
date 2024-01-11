import { Loading, OrderBox } from "./../../components";
import { useGetOrdersUserQuery } from "./../../redux/api/orderApi";
import { getUserFromLocalStorage } from "../../utils";

const OrderBoxM = () => {
  const user = getUserFromLocalStorage();
  const { data: order, isLoading: loadingOrder } = useGetOrdersUserQuery(
    user.user._id
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
      {loadingOrder ? (
        <Loading />
      ) : (
        order?.map((order, index) => <OrderBox key={index} {...order} />)
      )}
    </div>
  );
};

export default OrderBoxM;
