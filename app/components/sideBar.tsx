import React from "react";
import SideBarComp from "./sideBarComp";

const SideBar = () => {
  return (
    <div>
      <h1
        style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
        className="pt-2 pb-2"
      >
        {" "}
        About
        <SideBarComp imageUrl="/"/>
      </h1>
      <h1
        style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
        className="pt-2 pb-2"
      >
        {" "}
        Categories
      </h1>
      <h1
        style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
        className="pt-2 pb-2"
      >
        {" "}
        Required Skills
      </h1>
    </div>
  );
};

export default SideBar;
