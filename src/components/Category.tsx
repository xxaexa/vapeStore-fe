import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";
import { setCategory, resetCategory } from "../redux/features/categorySlice";
import RegularText from "./text/RegularText";
import mod from "./../assets/icons/mod.png";
import pod from "./../assets/icons/pod.png";
import liquid from "./../assets/icons/liquid.png";
import rda from "./../assets/icons/atomizer.png";
import all from "./../assets/icons/grid.png";
import cat from "./../assets/icons/catridge.png";

const Category = () => {
  const dispatch = useDispatch();
  const category = useAppSelector((state) => state.categoryState.category);

  return (
    <div className="pl-4 md:pl-0 mt-2 flex md:justify-center items-center p-2 text-xl lg:text-2xl uppercase gap-4 flex-row shrink-0 overflow-auto">
      {/* all categories */}
      <p
        className={`cursor-pointer group  transition-all duration-300 ease-in-out ${
          category === "" ? "" : ""
        }  `}
        onClick={() => dispatch(resetCategory())}
      >
        <img src={all} alt="" className="w-[20px] px-0.5 mx-auto py-1" />
        <RegularText
          style={`flex cursor-pointer group  transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat hover:bg-[length:100%_2px] ${
            category === ""
              ? "bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat  bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "bg-[length:0%_2px]"
          }`}
          text={"ALL"}
        />
      </p>
      {/* mod categories */}
      <div
        className={`cursor-pointer flex flex-col items-center group  transition-all duration-300 ease-in-out`}
        onClick={() => dispatch(setCategory("Mod"))}
      >
        <img src={mod} alt="" className="w-[25px]" />
        <RegularText
          style={`flex cursor-pointer group  transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat hover:bg-[length:100%_2px] ${
            category === "Mod"
              ? "bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat  bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "bg-[length:0%_2px]"
          }`}
          text={"MOD"}
        />
      </div>
      {/* pod categories */}
      <div
        className={`cursor-pointer flex flex-col items-center group  transition-all duration-300 ease-in-out`}
        onClick={() => dispatch(setCategory("Pod"))}
      >
        <img src={pod} alt="" className="w-[25px]" />
        <RegularText
          style={`flex cursor-pointer group  transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat hover:bg-[length:100%_2px] ${
            category === "Pod"
              ? "bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat  bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "bg-[length:0%_2px]"
          }`}
          text={"POD"}
        />
      </div>

      {/* liquid categories */}
      <div
        className={`cursor-pointer flex flex-col items-center justify-center group  transition-all duration-300 ease-in-out`}
        onClick={() => dispatch(setCategory("Liquid"))}
      >
        <img src={liquid} alt="" className="w-[25px]" />
        <RegularText
          style={`flex cursor-pointer group  transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat hover:bg-[length:100%_2px] ${
            category === "Liquid"
              ? "bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat  bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "bg-[length:0%_2px]"
          }`}
          text={"LIQUID"}
        />
      </div>

      {/* RDA*/}
      <p
        className={`cursor-pointer group  transition-all duration-300 ease-in-out`}
        onClick={() => dispatch(setCategory("Catridge"))}
      >
        <img src={cat} alt="" className="w-[25px] mx-auto block" />
        <RegularText
          style={`flex cursor-pointer group  transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat hover:bg-[length:100%_2px] ${
            category === "Catridge"
              ? "bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat  bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "bg-[length:0%_2px]"
          }`}
          text={"CATRIDGE"}
        />
      </p>

      {/* RDA*/}
      <div
        className={`cursor-pointer flex items-center flex-col justify-center group  transition-all duration-300 ease-in-out`}
        onClick={() => dispatch(setCategory("RDA"))}
      >
        <img src={rda} alt="" className="w-[25px]" />
        <RegularText
          style={`flex cursor-pointer group  transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat hover:bg-[length:100%_2px] ${
            category === "RDA"
              ? "bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat  bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "bg-[length:0%_2px]"
          }`}
          text={"RDA"}
        />
      </div>
    </div>
  );
};
export default Category;
