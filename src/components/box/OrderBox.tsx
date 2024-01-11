import { formatPrice } from "../../utils/";
import { useGetOrdersQuery } from "../../redux/api/orderApi";
import { Loading } from "..";
import RegularText from "../text/RegularText";

const OrderBox = () => {
  const { data: order, isLoading: loadingOrder } = useGetOrdersQuery();
  return (
    <div className=" rounded-lg p-4 size-custom cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {loadingOrder ? (
          <Loading />
        ) : (
          order?.map((order, index) => (
            <div
              key={index}
              className="flex justify-between flex-row my-2 space-x-4  border-[1px] rounded-lg p-2"
            >
              <img
                src=""
                alt=""
                className="h-[100px] w-[200px] rounded-lg bg-gray-200"
              />
              <div className="flex flex-col justify-between">
                <RegularText
                  text={`VPST-ORDER-00${index + 1}`}
                  style="text-right"
                />
                <RegularText text={order.status} style="text-right" />
                <RegularText
                  text={formatPrice(order.orderTotal)}
                  style="text-right"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderBox;
