import React from "react";
import GoogleSignUp from "../components/googleSignUp";
import SignUpForm from "../components/signUpForm";
import SignInForm from "../components/signInForm";

const SignUpPage = () => {
  return (
    <div className="flex justify-center h-screen px-30 py-10 ">
      <div className="mb-5 flex flex-col min-w-[450px]">
        <h1
          style={{ fontFamily: "Poppins-Bold", fontSize: 32, fontWeight: 900 }}
          className="text-[#25324B] text-center"
        >
          Welcome Back!
        </h1>
        <div className="flex items-center justify-center ">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span
            style={{ fontFamily: "Epilogue", fontSize: 16, fontWeight: 400 }}
            className="text-gray-400 whitespace-nowrap"
          >
            <div className="w-50 h-10"></div>
          </span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <SignInForm />
        <div className="flex flex-col m-2">
          <div className="flex mb-4">
            <p
              style={{ fontFamily: "Epilogue", fontSize: 16, fontWeight: 400 }}
              className="pr-3 text-[#202430]"
            >
              Don't have an account?
            </p>
            <a href="/signUp" className="text-[#4640DE] font-bold ">
              Sign Up
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
