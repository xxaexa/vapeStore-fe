import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";
import { setCategory, resetCategory } from "../redux/features/categorySlice";
import RegularText from "./text/RegularText";

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
      <p
        className={`cursor-pointer group  transition-all duration-300 ease-in-out`}
        onClick={() => dispatch(setCategory("Mod"))}
      >
        <RegularText
          style={`flex cursor-pointer group  transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat hover:bg-[length:100%_2px] ${
            category === "Mod"
              ? "bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat  bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "bg-[length:0%_2px]"
          }`}
          text={"MOD"}
        />
      </p>
      {/* pod categories */}
      <p
        className={`cursor-pointer group  transition-all duration-300 ease-in-out`}
        onClick={() => dispatch(setCategory("Pod"))}
      >
        <RegularText
          style={`flex cursor-pointer group  transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat hover:bg-[length:100%_2px] ${
            category === "Pod"
              ? "bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat  bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "bg-[length:0%_2px]"
          }`}
          text={"POD"}
        />
      </p>

      {/* liquid categories */}
      <p
        className={`cursor-pointer group  transition-all duration-300 ease-in-out`}
        onClick={() => dispatch(setCategory("Liquid"))}
      >
        <RegularText
          style={`flex cursor-pointer group  transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat hover:bg-[length:100%_2px] ${
            category === "Liquid"
              ? "bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat  bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "bg-[length:0%_2px]"
          }`}
          text={"LIQUID"}
        />
      </p>

      {/* RDA*/}
      <p
        className={`cursor-pointer group  transition-all duration-300 ease-in-out`}
        onClick={() => dispatch(setCategory("Catridge"))}
      >
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
      <p
        className={`cursor-pointer group  transition-all duration-300 ease-in-out`}
        onClick={() => dispatch(setCategory("RDA"))}
      >
        <RegularText
          style={`flex cursor-pointer group  transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat hover:bg-[length:100%_2px] ${
            category === "RDA"
              ? "bg-left-bottom bg-gradient-to-r from-indigo-500 to-pink-500  bg-no-repeat  bg-[length:100%_2px] transition-all duration-500 ease-out"
              : "bg-[length:0%_2px]"
          }`}
          text={"RDA"}
        />
      </p>
    </div>
  );
};
export default Category;
