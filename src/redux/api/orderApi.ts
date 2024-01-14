import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { CheckoutState, IOrderResponse } from "../../types";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: customFetchBase,
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    createOrder: builder.mutation<{}, CheckoutState>({
      query(values) {
        return {
          url: "/order/",
          method: "POST",
          body: values,
        };
      },
    }),
    getOrderUser: builder.query<IOrderResponse[], string | undefined>({
      query(id) {
        return {
          url: `/order/user/${id}`,
        };
      },
      providesTags: (result, id) => {
        return result
          ? [
              ...result.map(({ _id }) => ({
                type: "Order" as const,
                _id,
              })),
              { type: "Order", _id: id || "LIST_USER" },
            ]
          : [{ type: "Order", _id: id || "LIST_USER" }];
      },
      transformResponse: (results: IOrderResponse[]) => results,
    }),
    getOrders: builder.query<IOrderResponse[], void>({
      query() {
        return {
          url: `/order/`,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Order" as const,
                _id,
              })),
              { type: "Order", _id: "LIST ALL" },
            ]
          : [{ type: "Order", _id: "LIST ALL" }],
      transformResponse: (results: IOrderResponse[]) => results,
    }),
    getOrder: builder.query<IOrderResponse[], string | undefined>({
      query(id) {
        return {
          url: `/order/detail/${id}`,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Order" as const,
                _id,
              })),
              { type: "Order", _id: "LIST ALL" },
            ]
          : [{ type: "Order", _id: "LIST ALL" }],
      transformResponse: (results: IOrderResponse[]) => results,
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useGetOrderUserQuery,
  useGetOrderQuery,
} = orderApi;
