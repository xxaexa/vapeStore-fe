import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CardProps } from "./types";

const Card = ({ title, img }: CardProps) => {
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
      className="rounded-lg box-sizing relative ease-in-out duration-500 box-shadow tracking-widest "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={img} alt={title} className="rounded-lg md:h-[250px]" />
      {isHovering ? (
        <div
          className={`bg-black font-semibold text-white text-2xl w-full h-full absolute top-0 rounded-lg bg-opacity-50 flex justify-center flex-col items-center space-y-4 tracking-widest transition-all`}
        >
          <p className="text-center">{title}</p>
          <button onClick={() => navigate(`/product/${title}`)}>Detail</button>
        </div>
      ) : null}
    </div>
  );
};
export default Card;
