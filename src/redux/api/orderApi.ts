import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { IOrderResponse } from "./types";
import { CheckoutState } from "../../pages/types";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: customFetchBase,
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    createOrder: builder.mutation<IOrderResponse, CheckoutState>({
      query(values) {
        return {
          url: "/order/",
          method: "POST",
          body: values,
        };
      },
    }),
    getOrders: builder.query<IOrderResponse[], string | undefined>({
      query(id) {
        return {
          url: `/order/${id}`,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Order" as const,
                _id,
              })),
              { type: "Order", _id: "LIST" },
            ]
          : [{ type: "Order", _id: "LIST" }],
      transformResponse: (results: IOrderResponse[]) => results,
    }),
    getOrder: builder.query<IOrderResponse[], void>({
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
              { type: "Order", _id: "LIST" },
            ]
          : [{ type: "Order", _id: "LIST" }],
      transformResponse: (results: IOrderResponse[]) => results,
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery, useGetOrderQuery } =
  orderApi;
