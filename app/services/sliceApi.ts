import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const oppourtiunityApi = createApi({
  reducerPath: "opportunitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    getAllOppourtunities: builder.query<string, void>({
      query: () => "oppourtunities/search",
    }),
  }),
});
