import { Outlet } from "react-router-dom";
import { NavSetting, DashCont, BottomAE } from "../../../../components";

const index = () => {
  return (
    <div>
      <DashCont>
        <NavSetting />
        <Outlet />
      </DashCont>
      <BottomAE />
    </div>
  );
};

export default index;
