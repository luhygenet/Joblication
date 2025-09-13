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
        <SideBarComp imageUrl="/svg/plus.svg"/>
      </h1>
      <h1
        style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
        className="pt-2 pb-2"
      >
        {" "}
        Categories
        <SideBarComp imageUrl="/svg/plus.svg"/>
      </h1>
      <h1
        style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
        className="pt-2 pb-2"
      >
        {" "}
        Required Skills
        <SideBarComp imageUrl="/svg/plus.svg"/>
      </h1>
    </div>
  );
};

export default SideBar;
