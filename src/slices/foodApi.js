import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
  endpoints: (builder) => ({
    getFoods: builder.query({
      query: () => `foods`,
    }),
  }),
});

export const { useGetFoodsQuery } = foodApi;
