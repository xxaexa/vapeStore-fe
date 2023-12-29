const Categories = () => {
  return (
    <div className="flex flex-col gap-4">
      <label className="size-custom">CATEGORY</label>
      <select className="outline-none rounded-lg px-2 py-0.5 bg-white border-[1px] border-purple-500 text-lg md:text-xl focus:border-purple-900">
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
