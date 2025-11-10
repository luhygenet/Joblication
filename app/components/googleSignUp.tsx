import React from "react";

const GoogleSignUp = () => {
  return (
    <button
      style={{ fontFamily: "Epilogue", fontSize: 16, fontWeight: 700 }}
      className="px-30 py-2 mb-5 mt-5 border-1 border-[#CCCCF5] rounded text-[#4640DE] shadow-sm"
    >
      <div className="flex">
        <img src="/svg/googleicon.svg" alt="green_tick" className="pr-2" />
        <p className="m-1">Sign Up With Google</p>
      </div>
    </button>
  );
};

export default GoogleSignUp;
