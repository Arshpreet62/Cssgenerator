import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useLocation } from "wouter";

export default function StyleProvider() {
  const {
    setGetCSS,
    fontSize,
    fontWeight,
    paddingX,
    paddingY,
    color,
    backgroundColor,
    boxShadow,
    borderRadius,
    borderWidth,
    borderColor,
    borderStyle,
    FontFamily,
    lineHeight,
    WordSpacing,
    letterSpacing,
  } = useContext(Context);

  const [location, setLocation] = useLocation();
  const path = location.split("/")[2];
  const component =
    path === "button"
      ? "Button"
      : path === "paragraph"
      ? "Paragraph"
      : path === "input"
      ? "Input"
      : null;
  if (!component) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        Component not found
      </div>
    );
  }
  useEffect(() => {
    stringSetter(component);
  }, [location]);

  const stringSetter = (component: string) => {
    if (component === "Button") {
      return `.button {
  background-color: ${backgroundColor};
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
  padding: ${paddingY}px ${paddingX}px;
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  border-width: ${borderWidth}px;
  border-color: ${borderColor};
  border-style: ${borderStyle};
  color: ${color};
}`;
    } else if (component === "Input") {
      return `.input {
  background-color: ${backgroundColor};
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
  padding: ${paddingY}px ${paddingX}px;
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius}px;
  border-width: ${borderWidth}px;
  border-color: ${borderColor};
  border-style: ${borderStyle};
  color: ${color};
}`;
    } else if (component === "Paragraph") {
      return `.paragraph {
  background-color: ${backgroundColor};
  font-weight: ${fontWeight};
  font-size: ${fontSize}px;
font-family: ${FontFamily};
  line-height: ${lineHeight};
  word-spacing: ${WordSpacing};
  letter-spacing: ${letterSpacing};
  color: ${color};
}`;
    } else {
      return `not found`;
    }
  };
  const htmlString = (FontFamily: string) => {
    if (FontFamily === "Roboto") {
      return `
<!-- Include these in the head of your HTML to get access to your selected font -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />

`;
    } else if (FontFamily === "Bungee") {
      return `
<!-- Include these in the head of your HTML to get access to your selected font -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
      href="https://fonts.googleapis.com/css2?family=Bungee:wght@300;400;700&display=swap "
      rel="stylesheet"
    />

`;
    } else if (FontFamily === "Lato") {
      return `
<!-- Include these in the head of your HTML to get access to your selected font -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap "
      rel="stylesheet"
    />

`;
    }
  };

  const codeString = stringSetter(component);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(codeString)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      onClick={() => setGetCSS(false)}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex bg-black/60 z-10 items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex  w-fit h-fit bg-white z-20 p-10 gap-5"
      >
        {component === "Paragraph" && (
          <div className="flex items-center justify-center w-[400px] h-[480px] bg-[#011627] ">
            <SyntaxHighlighter
              language="html"
              style={oneDark}
              customStyle={{ background: "none" }}
              className="w-full h-full text-break-words overflow-x-auto"
            >
              {htmlString(FontFamily)}
            </SyntaxHighlighter>
          </div>
        )}
        <div className="flex flex-col gap-5 w-[400px] h-[480px]">
          <div className="flex items-center justify-center w-full h-[480px] bg-[#011627] ">
            <SyntaxHighlighter
              language="css"
              style={oneDark}
              customStyle={{ background: "none" }}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
          <button
            onClick={copyToClipboard}
            className="bg-[#3b82f6] text-white w-full h-12 rounded-md z-10 font-semibold"
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
}
