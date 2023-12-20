import { useDispatch } from "react-redux";
import { Order } from "../components";
import { useGetOrdersQuery } from "../redux/api/orderApi";
import { getUserFromLocalStorage } from "../utils/localStorage";

const AccountOrder = () => {
  const user = getUserFromLocalStorage();
  const { data: orders, isLoading } = useGetOrdersQuery(user.user._id);

  const dispatch = useDispatch();

  return (
    <div className="lg:ml-64 text-xl max-w-7xl ">
      <h2 className="text-2xl uppercase font-bold border-b-2 border-purple-300">
        ORDER HISTORY
      </h2>
      {isLoading ? (
        <>ss</>
      ) : (
        orders?.map((order, index) => <Order key={index} {...order} />)
      )}
    </div>
  );
};
export default AccountOrder;
