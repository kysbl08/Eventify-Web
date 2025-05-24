import React, { useState } from "react";
import SignInForm from "./LoginModal";
import SignUpForm from "./SIgnUp";

export default function AuthPanel() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="relative w-[900px] h-[550px] bg-white rounded-xl overflow-hidden shadow-xl">
        {/* Sliding Forms Container */}
        <div
          className={`absolute w-[200%] h-full flex transition-transform duration-700 ease-in-out ${
            isSignUp ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >
          {/* Sign In */}
          <div className="w-1/2 h-full bg-white p-10 flex flex-col justify-center">
            <SignInForm />
          </div>

          {/* Sign Up */}
          <div className="w-1/2 h-full bg-white p-10 flex flex-col justify-center">
            <SignUpForm />
          </div>
        </div>

        {/* Overlay Panel */}
        <div
          className={`absolute top-0 h-full w-1/2 bg-gradient-to-br from-green-500 to-teal-500 text-white p-10 flex flex-col justify-center items-center transition-all duration-700 z-20 rounded-xl ${
            isSignUp ? "translate-x-full left-1/2" : "left-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-2">
            {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
          </h2>
          <p className="mb-6 text-center max-w-[220px]">
            {isSignUp
              ? "To keep connected with us please login with your personal info"
              : "Enter your personal details and start journey with us"}
          </p>
          <button
            className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-600 transition"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "SIGN IN" : "SIGN UP"}
          </button>
        </div>
      </div>
    </div>
  );
}
