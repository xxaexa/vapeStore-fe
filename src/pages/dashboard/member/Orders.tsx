import { getUserFromLocalStorage } from "../utils/localStorage";
import Admin from "./orders/Admin";
import Member from "./orders/Member";

const Orders = () => {
  const user = getUserFromLocalStorage();

  return <div>{user.user.isAdmin ? <Admin /> : <Member />}</div>;
};

export default Orders;
