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
          <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="product"
            element={
              <ProtectedRoute>
                <ProductAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="product/add"
            element={
              <ProtectedRoute>
                <ProductAdd />
              </ProtectedRoute>
            }
          />
          <Route
            path="product/edit/:id"
            element={
              <ProtectedRoute>
                <ProductEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="setting"
            element={
              <ProtectedRoute>
                <Setting />
              </ProtectedRoute>
            }
          />
          <Route
            path="order"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="order/:id"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
