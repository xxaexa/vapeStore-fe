import { useAppSelector } from "../redux/store";
import { formatPrice } from "../utils/";
import { CartTotalsProps } from "../types";
import RegularText from "./text/RegularText";

const CartTotals = ({ isCartPage }: CartTotalsProps) => {
  const cartState = useAppSelector((state) => state.cartState);

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        {/* SUBTOTAL */}
        <p className="flex justify-between size-custom">
          <RegularText text={"Subtotal"} />

          <RegularText text={formatPrice(cartState?.cartTotal)} />
        </p>

        <p className="flex justify-between size-custom">
          <span className="text-xs">Shipping</span>

          {isCartPage ? (
            <span className="font-medium">-</span>
          ) : (
            <select className="px-2">
              <option value="" selected>
                Choose
              </option>
              <option value="">Express</option>
              <option value="">Regular</option>
            </select>
          )}
        </p>

        <p className="flex justify-between size-custom">
          <RegularText text={"Order Total"} />

          <RegularText text={formatPrice(cartState?.orderTotal)} />
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
