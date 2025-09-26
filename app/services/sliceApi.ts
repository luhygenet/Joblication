import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpportunityResponse, opportunityType, SpecificOpportunityResponse } from "../types/job";

export const oppourtiunityApi = createApi({
  reducerPath: "opportunitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    getAllOppourtunities: builder.query<OpportunityResponse, void>({
      query: () => "opportunities/search",
    }),
    getOppourtunity: builder.query<SpecificOpportunityResponse, string>({
      query: (id) => `opportunities/${id}`,
    }),
  }),
});

export const { useGetAllOppourtunitiesQuery, useGetOppourtunityQuery } =
  oppourtiunityApi;
