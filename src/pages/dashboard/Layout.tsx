import { createTitlePage } from "../../utils/";
import { Sidebar } from "../../components";
import { Outlet } from "react-router-dom";

import { Navbar } from "../../components";

const Account = () => {
  createTitlePage("Account");

  return (
    <div>
      <div className="bg-purple-100 text-black fixed w-full z-50 text-2xl ">
        <Navbar isSidebar={true} />
      </div>
      <section className="max-w-7xl mx-auto md:pt-[56px]">
        <Sidebar />
        <Outlet />
      </section>
    </div>
  );
};
export default Account;
