import LargeText from "../text/LargeText";
import { ImPlus } from "react-icons/im";
import IconText from "../text/IconText";
import { useNavigate } from "react-router-dom";
import { BottomDashProps } from "../../types";

const BottomDash = ({ text, link }: BottomDashProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${link}`)}
      className="fixed md:hidden flex justify-center items-center bottom-0 w-full bg-purple-100 cursor-pointer p-2 rounded-t-lg text-slate-700 text-center"
    >
      <IconText icon={<ImPlus />} />
      <LargeText text={text} />
    </div>
  );
};

export default BottomDash;
