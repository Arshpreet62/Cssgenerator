import React from "react";
import { Link } from "wouter";

export default function Landing() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full h-fit flex  justify-between items-center ">
        <div className="flex flex-col items-center justify-center h-full flex-1 gap-5">
          <h1 className="text-[20px] font-Semibold text-center ">
            Design your HTML elements without writing any CSS!
          </h1>
          <Link to="/home/button">
            <button className="bg-[#3b82f6] text-white w-42 h-12 rounded-md z-10 font-semibold">
              Get Started
            </button>
          </Link>
        </div>
        <img
          className="w-1/2 "
          src="/bg.7f0bcdd75c8af2a7fa7c.jpg"
          alt="ChatGPT Image Apr 22, 2025, 10_00_25 PM"
        />
      </div>
    </div>
  );
}
