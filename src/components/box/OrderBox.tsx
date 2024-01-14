import { formatPrice } from "../../utils/";
import { useGetOrdersQuery } from "../../redux/api/orderApi";
import { Loading } from "..";
import RegularText from "../text/RegularText";
import { useNavigate } from "react-router-dom";

const OrderBox = () => {
  const navigate = useNavigate();
  const { data: order, isLoading: loadingOrder } = useGetOrdersQuery();
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 mb-10">
        {loadingOrder ? (
          <Loading />
        ) : (
          order?.map((order, index) => (
            <div
              key={index}
              className="flex justify-between flex-row my-2 space-x-4  border-[1px] rounded-lg p-2"
            >
              <img
                src={order?.products[0].img}
                alt=""
                className="h-[100px] w-[200px] rounded-lg object-contain"
              />
              <div className="flex flex-col justify-between">
                <RegularText text={order.orderId} style="text-right" />
                <RegularText
                  text={formatPrice(order.orderTotal)}
                  style="text-right"
                />
                <button
                  className="bg-blue-200 w-fit px-2 rounded-lg"
                  onClick={() => navigate(`${order.orderId}`)}
                >
                  <RegularText text={"Details"} style="text-right" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderBox;
