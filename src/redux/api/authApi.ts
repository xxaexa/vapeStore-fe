import { createApi } from "@reduxjs/toolkit/query/react";
import { ILoginProps } from "./types";
// import { RegisterInput } from "../../pages/register.page";
import customFetchBase from "./customFetchBase";
import { GenericResponse, IRegisterProps } from "./types";
// import { userApi } from "./userApi";

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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "auth/logout",
          credentials: "include",
        };
      },
    }),
    // verifyEmail: builder.mutation<GenericResponse, string>({
    //   query(verificationCode) {
    //     return {
    //       url: `auth/verifyemail/${verificationCode}`,
    //       credentials: "include",
    //     };
    //   },
    // }),
    // forgotPassword: builder.mutation<GenericResponse, { email: string }>({
    //   query(body) {
    //     return {
    //       url: `auth/forgotpassword`,
    //       method: "POST",
    //       credentials: "include",
    //       body,
    //     };
    //   },
    // }),
    // resetPassword: builder.mutation<GenericResponse, IResetPasswordRequest>({
    //   query({ resetToken, password, passwordConfirm }) {
    //     return {
    //       url: `auth/resetpassword/${resetToken}`,
    //       method: "PATCH",
    //       body: { password, passwordConfirm },
    //       credentials: "include",
    //     };
    //   },
    // }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  // useVerifyEmailMutation,
  // useForgotPasswordMutation,
  // useResetPasswordMutation,
} = authApi;
