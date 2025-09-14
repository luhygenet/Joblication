import React from "react";
import SideBarComp from "./sideBarComp";

const SideBar = () => {
  return (
    <div className="ml-3">
      <h1
        style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
        className="pt-2 pb-4"
      >
        {" "}
        About
        <SideBarComp
          imageUrl="/svg/plus.svg"
          date={new Date("2023-07-1")}
          stats="Posted On"
        />
        <SideBarComp
          imageUrl="/svg/fire.svg"
          date={new Date("2023-07-31")}
          stats="Deadline"
        />
        <SideBarComp
          imageUrl="/svg/location.svg"
          date="Addis Ababa"
          stats="Location"
        />
        <SideBarComp
          imageUrl="/svg/cal2.svg"
          date={new Date("2023-08-02")}
          stats="Start Date"
        />
        <SideBarComp
          imageUrl="/svg/cal.svg"
          date={new Date("2023-09-02")}
          stats="End Date"
        />
      </h1>
      <h1
        style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
        className="pt-5 pb-4"
      >
        {" "}
        Categories
      </h1>
      <div>
        <div className="flex">
          <a
            href=""
            className="btn-job bg-[#fff5ee] text-[#FFB836] mr-2 text-sm"
          >
            Marketing
          </a>
          <a
            href=""
            className="btn-job bg-green-100 text-green-400 mr-2 text-sm"
          >
            Design
          </a>
        </div>
      </div>
      <h1
        style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
        className="pt-5 pb-4"
      >
        {" "}
        Required Skills
      </h1>
      <div>
        <div className="flex justify-between items-center gap-2">
          <div className="bg-gray-100 text-center h-10 m-0 p-2 w-auto inline-block">
            Social Media Marketing
          </div>
          <div className="bg-gray-100 text-center h-10 m-0 p-2 w-auto inline-block">
            English
          </div>
        </div>
        <div className="mt-3 bg-gray-100 text-center h-10 m-0 p-2 w-auto inline-block">
          Copywriting
        </div>
      </div>
    </div>
  );
};

export default SideBar;
