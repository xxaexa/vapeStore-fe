import { useAppSelector } from "../redux/store";
import { CartTotalsProps } from "../types";
import { formatPrice } from "../utils/";
import RegularText from "./text/RegularText";

const CartTotals = ({ isCartPage }: CartTotalsProps) => {
  const cartState = useAppSelector((state) => state.cartState);
  console.log(cartState);
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between size-custom">
        <RegularText text={"Price Product"} />
        <RegularText text={formatPrice(cartState?.cartTotal)} />
      </div>
      {isCartPage ? (
        <></>
      ) : (
        <>
          {" "}
          <div className="flex flex-col md:flex-row justify-between size-custom">
            <RegularText text={"Shipping"} />
            <RegularText text={formatPrice(cartState?.shipping)} />
          </div>
          <div className="flex flex-col md:flex-row justify-between size-custom mt-4">
            <RegularText text={"Order Total"} />
            <RegularText text={formatPrice(cartState?.orderTotal)} />
          </div>
        </>
      )}
    </div>
  );
};
export default CartTotals;
