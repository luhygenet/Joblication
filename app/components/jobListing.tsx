import React from "react";
import Job from "@/app/types/job";
type job = {
  job: Job;
};

const JobListingCard = ({ job }: job) => {
  return (
    <div className="card flex items-start mb-5 gap-2">
      <img src={`/img${job.image}`} alt="person_jb" className="w-20 h-12 pr-3" />

      <div style={{ fontFamily: "Epilogue", fontWeight: 300 }}>
        <h1 className=" font-semibold">{job.title}</h1>
        <p className="text-gray-400">
          Young Men christians asocciation . Addis Ababa, Ethiopia
        </p>
        <div>{job.description}</div>
        <ul className="flex justify-start gap-2">
          <li className="border-r-2 border-gray-200">
            <a href="" className="btn-job bg-green-100 text-green-400 mr-2">
              In Person
            </a>
          </li>
          <li>
            <a
              href=""
              className="btn-job border-1 border-[#FFB836] text-[#FFB836]"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href=""
              className="btn-job border-1 border-[#4640DE] text-[#4640DE]"
            >
              IT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobListingCard;
