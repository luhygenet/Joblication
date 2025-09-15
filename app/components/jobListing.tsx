import React from "react";

const JobListingCard = () => {
  return (
    <div className="card flex items-start  gap-2">
      <img src="/img/job.png" alt="person_jb" className="w-20 h-12" />

      <div style={{ fontFamily: 'Epilogue', fontWeight: 300 }}>
        <h1 className=" font-semibold">Social Media Assistant</h1>
        <p className="text-gray-400">
          Young Men christians asocciation . Addis Ababa, Ethiopia
        </p>
        <div>
          As a Social Media Assistant, you will work closely with the social
          media manager or marketing team to execute social media strategies and
          campaigns. You will be responsible for assisting in the creation and
          scheduling of engaging content, monitoring social media channels, and
          interacting with followers.
        </div>
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
