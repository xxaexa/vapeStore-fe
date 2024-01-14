import { Loading } from "./../../components";
import { useGetOrderUserQuery } from "./../../redux/api/orderApi";
import { getUserFromLocalStorage } from "../../utils";
import RegularText from "../text/RegularText";
import { formatPrice } from "../../utils";
import { useNavigate } from "react-router-dom";

const OrderBoxM = () => {
  const user = getUserFromLocalStorage();
  const { data: ordersUser, isLoading: loadingOrder } = useGetOrderUserQuery(
    user.user._id
  );

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 mb-10">
      {loadingOrder ? (
        <Loading />
      ) : (
        ordersUser?.map((orderUser, index) => (
          <div
            key={index}
            className="flex justify-between flex-row my-2 space-x-4  border-[1px] rounded-lg p-2"
          >
            <img
              src={orderUser?.products[0].img}
              alt=""
              className="h-[100px] w-[200px] rounded-lg object-contain"
            />
            <div className="flex flex-col justify-between">
              <RegularText text={orderUser.orderId} style="text-right" />
              <RegularText
                text={formatPrice(orderUser.orderTotal)}
                style="text-right"
              />
              <button
                className="bg-blue-200 w-fit px-2 rounded-lg"
                onClick={() => navigate(`${orderUser.orderId}`)}
              >
                <RegularText text={"Details"} style="text-right" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderBoxM;
