import {
  HeaderDashboard,
  ProductBox,
  DashCont,
  BottomDash,
} from "../../../../components";

const index = () => {
  return (
    <div>
      <DashCont>
        <HeaderDashboard product={true} text="PRODUCT" />
        <ProductBox />
      </DashCont>
      <BottomDash text={"ADD PRODUCT"} link={"dashboard/product/add"} />
    </div>
  );
};

export default index;
