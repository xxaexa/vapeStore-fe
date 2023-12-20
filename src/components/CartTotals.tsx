import { useAppSelector } from "../redux/store";

import { formatPrice } from "../utils/formatPrice";

const CartTotals = () => {
  const cartState = useAppSelector((state) => state.cartState);
  // const { cartTotal, shipping, tax, orderTotal } = useSelector(
  //   (state) => state.cart
  // )

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-xl">
          <span>Subtotal</span>
          <span className="font-medium">
            {formatPrice(cartState?.cartTotal)}
          </span>
        </p>

        <p className="flex justify-between text-xl">
          <span>Shipping</span>
          <span className="font-medium">
            {formatPrice(cartState?.shipping)}
          </span>
        </p>

        <p className="flex justify-between text-xl">
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
