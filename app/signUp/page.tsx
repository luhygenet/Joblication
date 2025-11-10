import React from "react";
import GoogleSignUp from "../components/googleSignUp";
import SignUpForm from "../components/signUpForm";

const SignUpPage = () => {
  return (
    <div className="flex justify-center h-screen px-30 py-2 ">
      <div className="m-5 ">
        <h1
          style={{ fontFamily: "Poppins-Bold", fontSize: 32, fontWeight: 900 }}
          className="text-[#25324B] text-center"
        >
          Sign Up Today!
        </h1>
        <GoogleSignUp />
        <div className="flex items-center justify-center space-x-4">
          <div className="w-20 h-px bg-gray-300"></div>
          <span
            style={{ fontFamily: "Epilogue", fontSize: 16, fontWeight: 400 }}
            className="text-gray-400 whitespace-nowrap"
          >
            Or Sign Up With Email
          </span>
          <div className="w-20 h-px bg-gray-300"></div>
        </div>
        <SignUpForm />
        <div className="flex flex-col m-2">
          <div className="flex mb-4">
            <p style= {{fontFamily: "Epilogue", fontSize:16, fontWeight:400}} className="pr-3 text-[#202430]">Already have an account?</p>
            <a href="" className="text-[#4640DE] font-bold ">
              Login
            </a>
          </div>
          <p>
            By clicking 'Continue', you acknowledge that you have read and
          </p>
          <p>
            accepted our <span className="text-[#4640DE]"> Terms of Service </span> and <span className="text">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
