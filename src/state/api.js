import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL,
  }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "GetUserList",
    "GetCDAList",
    "GetCDA",
    "AddCDA",
    "UpdateCDA",
    "DeleteCDA",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `api/general/user/${id}`,
      providesTags: ["User"],
    }),
    getUserList: build.query({
      query: () => `api/management/`,
      providesTags: ["GetUserList"],
    }),
    getCDAList: build.query({
      query: () => `api/management/show-cda-list`,
      providesTags: ["GetCDAList"],
    }),
    getCDA: build.query({
      query: (id) => `api/management/show-cda/${id}`,
      providesTags: ["GetCDA"],
    }),
    storeCDA: build.query({
      query: (id) => `api/management/store-cda`,
      providesTags: ["AddCDA"],
    }),
    updateCDA: build.query({
      query: (id) => `api/management/update-cda`,
      providesTags: ["UpdateCDA"],
    }),
    deleteCDA: build.query({
      query: (id) => `api/management/delete-cda`,
      providesTags: ["DeleteCDA"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetUserListQuery,
  useGetCDAQuery,
  useGetCDAListQuery,
  useStoreCDAQuery,
  useUpdateCDAQuery,
  useDeleteCDAQuery,
} = api;
