import LargeText from "../text/LargeText";
import { HeaderDashboardProps } from "../../types";
import { ImPlus } from "react-icons/im";
import IconText from "../text/IconText";
import { Link } from "react-router-dom";

const HeaderDashboard = ({ text, product }: HeaderDashboardProps) => {
  return (
    <div className="uppercase font-bold border-b-2 border-purple-300 mb-2 flex justify-between">
      <LargeText text={text} />
      {product && (
        <Link to={"add"}>
          <button className="size-custom  items-center hidden md:flex">
            <IconText icon={<ImPlus />} />
            <LargeText text={"ADD PRODUCT"} />
          </button>
        </Link>
      )}
    </div>
  );
};

export default HeaderDashboard;
