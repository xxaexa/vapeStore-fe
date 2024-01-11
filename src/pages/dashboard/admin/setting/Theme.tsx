import RegularText from "../../../../components/text/RegularText";

const Theme = () => {
  return (
    <div className="grid md:grid-cols-2 mt-4 md:gap-8">
      <div>
        <RegularText text={"Main Color"} />
      </div>

      <div>
        <RegularText text={"Text Color"} />
      </div>
    </div>
  );
};

export default Theme;
