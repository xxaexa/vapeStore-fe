import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import { CardProps } from "./types";
import a from "./../assets/product/a.jpg";

const Card = ({ title, price, img }: CardProps) => {
  const navigate = useNavigate();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="rounded-lg box-sizing relative ease-in-out duration-500 box-shadow tracking-widest"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <p className="absolute top-1 right-2 text-xl">{formatPrice(price)}</p>
      <img src={a} alt={title} />
      {isHovering ? (
        <div className="bg-black font-semibold text-white text-2xl w-full h-full absolute top-0 rounded-lg bg-opacity-50 flex justify-center flex-col items-center space-y-4 tracking-widest">
          <p className="text-center">{title}</p>
          <button onClick={() => navigate(`/product/${title}`)}>Detail</button>
        </div>
      ) : null}
    </div>
  );
};
export default Card;
