import { Routes, Route } from "react-router-dom";
import {
  Account,
  AccountOrder,
  AccountSetting,
  Cart,
  Checkout,
  Login,
  Product,
  Products,
  Home,
  Register,
} from "./pages";
import { ProtectedRoute } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        >
          <Route path="/account" element={<AccountSetting />} />
          <Route path="/account/order" element={<AccountOrder />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
