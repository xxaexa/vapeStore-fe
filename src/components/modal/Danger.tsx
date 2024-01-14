import { useAppSelector } from "../../redux/store";
import RegularText from "../text/RegularText";
import { toggleModal } from "../../redux/features/toggleSlice";
import { useDispatch } from "react-redux";

const Danger = () => {
  const modal = useAppSelector((state) => state.toggleState.modal);

  const dispatch = useDispatch();
  return (
    <div
      className={`fixed  h-screen w-screen z-50 bg-opacity-60 flex justify-center items-center duration-500 ease-in-out ${
        modal ? "top-0 " : "top-[1000px]"
      }`}
    >
      <div className="bg-black bg-opacity-20 p-12 rounded-lg relative">
        <button
          className="bg-red-400 absolute top-[-10px] rounded-full right-[-10px] px-2"
          onClick={() => {
            dispatch(toggleModal());
          }}
        >
          X
        </button>
        <RegularText text={"Demo Account not allowed"} />
      </div>
    </div>
  );
};

export default Danger;
