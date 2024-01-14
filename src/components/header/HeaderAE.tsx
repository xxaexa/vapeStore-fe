import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { IoSaveOutline } from "react-icons/io5";
import LargeText from "../text/LargeText";
import IconText from "../text/IconText";
import { HeaderAEProps } from "../../types";
import { toggleModal } from "../../redux/features/toggleSlice";
import { useDispatch } from "react-redux";

const HeaderAE = ({ text, link, isOrderPage }: HeaderAEProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex border-b-2 border-purple-300 items-center justify-between gap-2 font-bold">
      <div className="flex gap-2">
        <button onClick={() => navigate(`/dashboard/${link}`)}>
          <FaArrowLeft />
        </button>
        <LargeText text={text} />
      </div>
      {isOrderPage ? (
        <></>
      ) : (
        <div
          className="hidden md:flex items-center gap-1 cursor-pointer"
          onClick={() => dispatch(toggleModal())}
        >
          <IconText icon={<IoSaveOutline />} style={"text-sm md:text-lg "} />
          <LargeText text={"SAVE"} />
        </div>
      )}
    </div>
  );
};

export default HeaderAE;
