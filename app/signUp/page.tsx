import React from "react";
import GoogleSignUp from "../components/googleSignUp";

const SignUpPage = () => {
  return (
    <div className="flex justify-center h-screen">
    <div className="text-center">
      <h1
        style={{ fontFamily: "Poppins-Bold", fontSize: 32, fontWeight: 900 }}
        className="text-[#25324B]"
      >
        Sign Up Today!
      </h1>
      <GoogleSignUp/>
    </div>
    </div>
  );
};

export default SignUpPage;
