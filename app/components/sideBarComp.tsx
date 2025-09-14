import React from "react";

type sideBarProps = {
  imageUrl: string;
  date: Date;
};

const SideBarComp = ({ imageUrl, date }: sideBarProps) => {
  return (
    <div className="flex items-start">
      <img src={imageUrl} alt="green_tick" className="pr-2" />

      <div>
        <div style={{ fontFamily: "Epilogue", fontWeight: 400, fontSize: 16 }}>
          Posted on
        </div>
        <div style={{ fontFamily: "Epilogue", fontWeight: 600, fontSize: 16 }}>
          {date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBarComp;
