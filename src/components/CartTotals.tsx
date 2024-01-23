import { useAppSelector } from "../redux/store";
import { CartTotalsProps } from "../types";
import { formatPrice } from "../utils/";
import RegularText from "./text/RegularText";

const CartTotals = ({
  isBottomComp,
  isCartPage,
  isCheckoutPage,
}: CartTotalsProps) => {
  const cartState = useAppSelector((state) => state.cartState);
  return (
    <div className="">
      {isCheckoutPage ? (
        <div className="flex flex-col justify-between size-custom ">
          <RegularText text={"Order Total"} />
          <RegularText text={formatPrice(cartState?.orderTotal)} />
        </div>
      ) : (
        <>
          <div
            className={`flex md:flex-row justify-between size-custom ${
              isCartPage ? "flex-col" : ""
            }`}
          >
            <RegularText text={"Price Product"} />
            <RegularText text={formatPrice(cartState?.cartTotal)} />
          </div>
          {isBottomComp ? null : (
            <>
              <div className="flex flex-row justify-between size-custom">
                <RegularText text={"Shipping"} />
                <RegularText text={formatPrice(cartState?.shipping)} />
              </div>
              <div className="hidden md:flex flex-row justify-between size-custom mt-4">
                <RegularText text={"Order Total"} />
                <RegularText text={formatPrice(cartState?.orderTotal)} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default CartTotals;
