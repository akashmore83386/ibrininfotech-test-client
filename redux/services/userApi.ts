import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: string;
  name: string;
  photo?: string;
  country: string;
  interests?: [];
  dob: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    // New endpoint for user creation
    userCreate: builder.mutation({
      query: (newUser) => ({
        url: "/create",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useUserCreateMutation } = userApi;