import { stat } from "fs";
import React from "react";

type sideBarProps = {
  imageUrl: string;
  date: Date | string;
  stats: string
};

const SideBarComp = ({ imageUrl, date, stats }: sideBarProps) => {
  return (
    <div className="flex items-start p-2">
      <img src={imageUrl} alt="green_tick" className="pr-2" />

      <div>
        <div  className = "pb-1"style={{ fontFamily: "Epilogue", fontWeight: 400, fontSize: 16 }}>
          {stats}
        </div>
        <div style={{ fontFamily: "Epilogue", fontWeight: 600, fontSize: 16 }}>
          {typeof date === "string"
            ? date
            : date.toLocaleDateString("en-US", {
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
