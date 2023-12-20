import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { IOrderResponse } from "./types";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: customFetchBase,
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    createOrder: builder.mutation<void, IOrderResponse>({
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
              ...result.map(({ id }) => ({
                type: "Order" as const,
                id,
              })),
              { type: "Order", id: "LIST" },
            ]
          : [{ type: "Order", id: "LIST" }],
      transformResponse: (results: IOrderResponse[]) => results,
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = orderApi;
