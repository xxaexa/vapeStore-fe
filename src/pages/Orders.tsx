import { getUserFromLocalStorage } from "../utils/localStorage";
import Admin from "./order/Admin";
import Member from "./order/Member";

const Orders = () => {
  const user = getUserFromLocalStorage();

  return <div>{user.user.isAdmin ? <Admin /> : <Member />}</div>;
};

export default Orders;
