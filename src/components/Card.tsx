import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CardProps } from "../types";
import RegularText from "./text/RegularText";
import img from "./../assets/bg/man.jpg";

const Card = ({ title }: CardProps) => {
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
      className="rounded-lg box-sizing relative ease-in-out duration-500 box-shadow tracking-widest flex justify-center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={img} alt={title} className="rounded-lg " />
      {isHovering ? (
        <div
          className={`bg-black font-semibold text-white text-2xl w-full h-full absolute top-0 rounded-lg bg-opacity-50 flex justify-center flex-col items-center space-y-4 tracking-widest transition-all`}
        >
          <RegularText text={title} />

          <button onClick={() => navigate(`/product/${title}`)}>
            <RegularText text={"Detail"} style="tracking-widest" />
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default Card;
