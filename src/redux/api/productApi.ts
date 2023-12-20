import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { IProductResponse, IApiResponse } from "./types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: customFetchBase,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    // createPost: builder.mutation<IProductResponse, FormData>({
    //   query(post) {
    //     return {
    //       url: "/posts",
    //       method: "POST",
    //       body: post,
    //     };
    //   },
    //   invalidatesTags: [{ type: "Posts", id: "LIST" }],
    //   transformResponse: (result: { data: { post: IProductResponse } }) =>
    //     result.data.post,
    // }),
    // updatePost: builder.mutation<
    //   IProductResponse,
    //   { id: string; post: FormData }
    // >({
    //   query({ id, post }) {
    //     return {
    //       url: `/posts/${id}`,
    //       method: "PATCH",
    //       body: post,
    //     };
    //   },
    //   invalidatesTags: (result, error, { id }) =>
    //     result
    //       ? [
    //           { type: "Posts", id },
    //           { type: "Posts", id: "LIST" },
    //         ]
    //       : [{ type: "Posts", id: "LIST" }],
    //   transformResponse: (response: { data: { post: IProductResponse } }) =>
    //     response.data.post,
    // }),
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
              ...result.map(({ id }) => ({
                type: "Product" as const,
                id,
              })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
      transformResponse: (results: IProductResponse[]) => results,
    }),
    // deletePost: builder.mutation<IProductResponse, string>({
    //   query(id) {
    //     return {
    //       url: `/posts/${id}`,
    //       method: "Delete",
    //     };
    //   },
    //   invalidatesTags: [{ type: "Posts", id: "LIST" }],
    // }),
  }),
});

export const {
  // useCreatePostMutation,
  // useDeletePostMutation,
  // useUpdatePostMutation,
  useGetProductsQuery,
  useGetProductQuery,
} = productApi;
