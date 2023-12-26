import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "./api/authApi";
// import { userApi } from "./api/userApi";
import { productApi } from "./api/productApi";
import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlice";
import { orderApi } from "./api/orderApi";
import amountReducer from "./features/amountSlice";
import toggleReducer from "./features/toggleSlice";
import categoryReducer from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    userState: userReducer,
    cartState: cartReducer,
    amountState: amountReducer,
    toggleState: toggleReducer,
    categoryState: categoryReducer,
  },
  // devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      productApi.middleware,
      orderApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
