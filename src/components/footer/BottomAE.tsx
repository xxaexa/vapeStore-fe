import LargeText from "../text/LargeText";
import { IoSaveOutline } from "react-icons/io5";
import IconText from "../text/IconText";

const BottomAE = () => {
  return (
    <div
      onClick={() => alert()}
      className="fixed md:hidden flex justify-center items-center bottom-0 w-full bg-purple-100 cursor-pointer p-2 rounded-t-lg text-slate-700 text-center"
    >
      <IconText icon={<IoSaveOutline />} />
      <LargeText text={"SAVE"} />
    </div>
  );
};

export default BottomAE;
