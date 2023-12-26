import { Routes, Route } from "react-router-dom";
import {
  Account,
  Order,
  Orders,
  Setting,
  Cart,
  Checkout,
  Login,
  Product,
  Products,
  Home,
  Register,
  Dashboard,
  ProductAdmin,
  ProductAdd,
  ProductEdit,
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
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="product" element={<ProductAdmin />} />
          <Route path="product/add" element={<ProductAdd />} />
          <Route path="product/edit/:id" element={<ProductEdit />} />
          <Route path="setting" element={<Setting />} />
          <Route path="order" element={<Orders />} />
          <Route path="order/:id" element={<Order />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
