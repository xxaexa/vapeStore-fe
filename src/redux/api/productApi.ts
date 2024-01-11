import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { IProductResponse } from "../../types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: customFetchBase,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    createProduct: builder.mutation<IProductResponse, FormData>({
      query(formData) {
        return {
          url: "/product/",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Product"],
      transformResponse: (results: IProductResponse) => results,
    }),

    updateProduct: builder.mutation<
      IProductResponse,
      { id: string; post: FormData }
    >({
      query({ id, post }) {
        return {
          url: `/product/${id}`,
          method: "PATCH",
          body: post,
        };
      },
      invalidatesTags: ["Product"],
      transformResponse: (response: { data: { post: IProductResponse } }) =>
        response.data.post,
    }),
    getProduct: builder.query<IProductResponse[], string | undefined>({
      query(id) {
        return {
          url: `/product/${id}`,
          // url: `/product/find/${id}`,
        };
      },
      providesTags: ["Product"],
      transformResponse: (results: IProductResponse[]) => results,
    }),
    getProducts: builder.query<IProductResponse[], void>({
      query() {
        return {
          url: `/product`,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Product" as const,
                _id,
              })),
              { type: "Product", _id: "LIST" },
            ]
          : [{ type: "Product", _id: "LIST" }],
      transformResponse: (results: IProductResponse[]) => results,
    }),
    filterProducts: builder.query<
      IProductResponse[] | undefined,
      string | undefined
    >({
      query(category) {
        return {
          url: `/product/?category=${category}`,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: "Product" as const,
                _id,
              })),
              { type: "Product", _id: "LIST" },
            ]
          : [{ type: "Product", _id: "LIST" }],
      transformResponse: (results: IProductResponse[]) => results,
    }),

    deleteProduct: builder.mutation<IProductResponse, string>({
      query(id) {
        return {
          url: `/product/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useFilterProductsQuery,
} = productApi;
