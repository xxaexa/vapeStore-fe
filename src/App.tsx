import { Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  Login,
  Register,
  Product,
  Cart,
  Checkout,
  Layout,
  Dashboard,
  ProductAdmin,
  AddProductAdmin,
  EditProductAdmin,
  SettingLayout,
  OrderAdmin,
  OrderDetailAdmin,
  SettingThemeAdmin,
  SettingAccountAdmin,
  OrderMember,
  OrderMemberDetail,
} from "./pages";
import { ProtectedRoute, ProtectedRole } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout />
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
                <AddProductAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="product/edit/:id"
            element={
              <ProtectedRoute>
                <EditProductAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="setting"
            element={
              <ProtectedRoute>
                <SettingLayout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <SettingAccountAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="theme"
              element={
                <ProtectedRoute>
                  <SettingThemeAdmin />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="order"
            element={
              <ProtectedRoute>
                <ProtectedRole
                  admin={<OrderAdmin />}
                  member={<OrderMember />}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="order/:id"
            element={
              <ProtectedRoute>
                <ProtectedRole
                  admin={<OrderDetailAdmin />}
                  member={<OrderMemberDetail />}
                />
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
