import { DashCont, HeaderAE } from "../../../../components";
import { useParams } from "react-router-dom";
import { useGetOrderQuery } from "../../../../redux/api/orderApi";
import RegularText from "../../../../components/text/RegularText";
import { formatPrice, formatDate } from "../../../../utils";

const index = () => {
  const { id } = useParams();
  const { data: order, isLoading } = useGetOrderQuery(id);

  return (
    <DashCont>
      <HeaderAE text={"DETAIL ORDER"} link={"order"} isOrderPage={true} />

      {isLoading ? (
        <>loadz</>
      ) : (
        <div className="pb-12">
          {order?.map((o) => (
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="w-full md:w-2/3 ">
                <div className="flex flex-row justify-between box-shadow my-4 p-4 rounded-lg">
                  <div className="">
                    <RegularText text={"Order Code"} />
                    <RegularText text={o.orderId} />
                  </div>

                  <div className="text-right">
                    <RegularText text={"Order Status"} />
                    <RegularText text={o.status} />
                  </div>
                </div>

                <div className="flex flex-col justify-between box-shadow my-4 p-4 rounded-lg">
                  <div className="w-full flex justify-between">
                    <RegularText text={"Order Date"} />
                    <RegularText text={formatDate(o.createdAt)} />
                  </div>

                  <div className="my-2">
                    {o.products?.map((product) => (
                      <div className="flex flex-row justify-between">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-[200px]"
                        />
                        <div className="text-right">
                          <RegularText text={product.title} />
                          <RegularText text={product.price} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between box-shadow my-2 p-4 md:w-1/3 h-fit rounded-lg">
                <div>
                  <RegularText text={"Product Total"} />
                  <RegularText text={"Shipping Total"} />
                  <RegularText text={"Order Total"} />
                </div>
                <div className="text-right">
                  <RegularText text={formatPrice(o.orderTotal)} />
                  <RegularText text={formatPrice(o.shipping)} />
                  <RegularText text={formatPrice(o.orderTotal)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashCont>
  );
};

export default index;
