import React from "react";
import { Link, useLocation } from "wouter";
import { Context } from "../../../Context/Context";

export default function Header() {
  const [location] = useLocation();
  const path = location.split("/")[2];
  const { resetState } = React.useContext(Context);
  const handleLinkClick = (component: string) => {
    resetState(component);
  };

  return (
    <div className="flex justify-start items-center w-full h-15 border-b border-b-[#65676d54] px-5 gap-20">
      <img
        src="/logo.b6da3de5ffed02bf99ca58f065b8230b.svg"
        alt="Logo"
        className="h-7 "
      />
      <div className="flex justify-start items-center gap-5">
        <Link to="/home/button">
          <h1
            onClick={() => handleLinkClick("Button")}
            className={`text-[16px] font-[500] ${
              path === "button" && "border-b-1 border-[#3b82f6] text-[#3b82f6]"
            }`}
          >
            Button
          </h1>
        </Link>

        <Link to="/home/paragraph">
          <h1
            onClick={() => handleLinkClick("Paragraph")}
            className={`text-[16px] font-[500] ${
              path === "paragraph" &&
              "border-b-1 border-[#3b82f6] text-[#3b82f6]"
            }`}
          >
            Paragraph
          </h1>
        </Link>
        <Link to="/home/input">
          <h1
            onClick={() => handleLinkClick("Input")}
            className={`text-[16px] font-[500] ${
              path === "input" && "border-b-1 border-[#3b82f6] text-[#3b82f6]"
            }`}
          >
            Input
          </h1>
        </Link>
      </div>
    </div>
  );
}
