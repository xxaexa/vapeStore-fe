import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { IoSaveOutline } from "react-icons/io5";
import LargeText from "../text/LargeText";
import IconText from "../text/IconText";
import { HeaderAEProps } from "../../types";

const HeaderAE = ({ text, link }: HeaderAEProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex border-b-2 border-purple-300 items-center justify-between gap-2 font-bold">
      <div className="flex gap-2">
        <button onClick={() => navigate(`/dashboard/${link}`)}>
          <FaArrowLeft />
        </button>
        <LargeText text={text} />
      </div>
      <div className="hidden md:flex items-center gap-1 cursor-pointer">
        <IconText icon={<IoSaveOutline />} style={"text-sm md:text-lg "} />
        <LargeText text={"SAVE"} />
      </div>
    </div>
  );
};

export default HeaderAE;
