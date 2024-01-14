import {
  DashCont,
  HeaderDashboard,
  OrderBoxMember,
} from "../../../../components";

const index = () => {
  return (
    <DashCont>
      <HeaderDashboard text="ORDER MEMBER" />
      <OrderBoxMember />
    </DashCont>
  );
};

export default index;
