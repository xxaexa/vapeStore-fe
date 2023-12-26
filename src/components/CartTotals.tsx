import { useAppSelector } from "../redux/store";
import { formatPrice } from "../utils/formatPrice";
import { CartTotalsProps } from "./types";

const CartTotals = ({ isCartPage }: CartTotalsProps) => {
  const cartState = useAppSelector((state) => state.cartState);

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        {/* SUBTOTAL */}
        <p className="flex justify-between size-custom">
          <span>Subtotal</span>
          <span className="font-medium">
            {formatPrice(cartState?.cartTotal)}
          </span>
        </p>

        <p className="flex justify-between size-custom">
          <span>Shipping</span>
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
          <span>Order Total</span>
          <span className="font-medium">
            {formatPrice(cartState?.orderTotal)}
          </span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
