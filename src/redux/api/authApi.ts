import { createApi } from "@reduxjs/toolkit/query/react";
import { ILoginProps } from "./types";
import customFetchBase from "./customFetchBase";
import { GenericResponse, IRegisterProps } from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    registerUser: builder.mutation<GenericResponse, IRegisterProps>({
      query(data) {
        return {
          url: "auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<GenericResponse, ILoginProps>({
      query(values) {
        return {
          url: "auth/login",
          method: "POST",
          body: values,
        };
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "auth/logout",
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
