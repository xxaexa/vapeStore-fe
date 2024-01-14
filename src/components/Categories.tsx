import RegularText from "./text/RegularText";

const Categories = () => {
  return (
    <div className="flex flex-col gap-4">
      <RegularText text={"CATEGORY"} />
      <select className="outline-none rounded-lg px-2 py-0.5 bg-white border-[1px] border-purple-500   focus:border-purple-900 text-xs md:text-sm">
        <option value="" selected disabled hidden>
          Choose Category
        </option>
        <option value="">Pod</option>
        <option value="">Mod</option>
        <option value="">Liquid</option>
        <option value="">Catridge</option>
        <option value="">RDA</option>
      </select>
    </div>
  );
};
export default Categories;
