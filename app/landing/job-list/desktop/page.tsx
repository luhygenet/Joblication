"use client";
import React from "react";

import { BellIcon } from "@heroicons/react/24/solid";
import JobListingCard from "@/app/components/jobListing";
import jobs from "@/app/data/jobs.json";
import { useGetAllOppourtunitiesQuery } from "@/app/services/sliceApi";
import { Divide } from "lucide-react";
// const { job_postings } = jobs;

const Page = () => {
  const {
    data: apiResponse,
    isError,
    isLoading,
  } = useGetAllOppourtunitiesQuery();
  console.log(apiResponse);
  console.log("ende");
  console.log(apiResponse?.data);

  const opportunities = apiResponse?.data ?? [];
  // if (isError) {
  //   return <p>Error in loading all</p>;
  // }
  // if (isLoading) {
  //   return <p>Loading all...</p>;
  // }

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <div className="px-10 ">
          <div className="flex justify-between mb-5 items-center">
            <div>
              <h1 style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}>
                Oppourtunites
              </h1>
              <p
                className="text-gray-400"
                style={{
                  fontFamily: "Epilogue",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Showing 73 results
              </p>
            </div>
            <div className="flex justify-evenly">
              <p
                className="mr-4 text-gray-400"
                style={{
                  fontFamily: "Epilogue",
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                {" "}
                Sorted by:
              </p>
              <p
                style={{
                  fontFamily: "Epilogue",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                Most Relevant
              </p>
              <div className="ml-2 pr-4  pt-1 border-gray-300 border-r-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="second">
            {isLoading ? (
              <div className="flex justify-center items-center h-96">
                <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
              </div>
            ) : (
              opportunities?.map((job, index) => (
                <JobListingCard key={index} id={job.id} />
              ))
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Page;
