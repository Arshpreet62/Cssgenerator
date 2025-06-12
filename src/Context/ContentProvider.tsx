import React from "react";
import { Context } from "./Context.js";

interface ContextProviderProps {
  children: React.ReactNode;
}
const initialState = {
  fontWeight: 300,

  fontSize: 16,

  paddingX: 20,

  paddingY: 10,

  color: "#ffffff",

  backgroundColor: "#3b83f6",

  borderRadius: "5px",

  borderWidth: 0,

  borderColor: "#ffffff",

  boxShadow: "none",

  borderStyle: "solid",

  getCSS: false,

  FontFamily: "Roboto",
  lineHeight: "32px",
  WordSpacing: "2px",
  letterSpacing: "2px",
};

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [fontWeight, setFontWeight] = React.useState<number>(
    initialState.fontWeight
  );
  const [fontSize, setFontSize] = React.useState<number>(initialState.fontSize);
  const [paddingX, setPaddingX] = React.useState<number>(initialState.paddingX);
  const [paddingY, setPaddingY] = React.useState<number>(initialState.paddingY);
  const [color, setColor] = React.useState<string>(initialState.color);
  const [backgroundColor, setBackgroundColor] = React.useState<string>(
    initialState.backgroundColor
  );
  const [borderRadius, setBorderRadius] = React.useState<string>(
    initialState.borderRadius
  );
  const [borderWidth, setBorderWidth] = React.useState<number>(
    initialState.borderWidth
  );
  const [borderColor, setBorderColor] = React.useState<string>(
    initialState.borderColor
  );
  const [boxShadow, setBoxShadow] = React.useState<string>(
    initialState.boxShadow
  );
  const [borderStyle, setBorderStyle] = React.useState<string>(
    initialState.borderStyle
  );
  const [getCSS, setGetCSS] = React.useState<boolean>(false);

  const [FontFamily, setFontFamily] = React.useState<string>(
    initialState.FontFamily
  );
  const [lineHeight, setLineHeight] = React.useState<string>(
    initialState.lineHeight
  );
  const [WordSpacing, setWordSpacing] = React.useState<string>(
    initialState.WordSpacing
  );
  const [letterSpacing, setLetterSpacing] = React.useState<string>(
    initialState.letterSpacing
  );

  const resetState = (component: string) => {
    setFontWeight(initialState.fontWeight);
    setFontSize(initialState.fontSize);
    setPaddingX(initialState.paddingX);
    setPaddingY(initialState.paddingY);
    setColor(component === "Button" ? initialState.color : "#000000");
    setBackgroundColor(
      component === "Button" ? initialState.backgroundColor : "#ffffff"
    );
    setBorderRadius(initialState.borderRadius);
    setBorderWidth(initialState.borderWidth);
    setBorderColor(initialState.borderColor);
    setBoxShadow(initialState.boxShadow);
    setBorderStyle(initialState.borderStyle);
    setGetCSS(false);
    setFontFamily(initialState.FontFamily);
    setLineHeight(initialState.lineHeight);
    setWordSpacing(initialState.WordSpacing);
    setLetterSpacing(initialState.letterSpacing);
  };

  return (
    <Context.Provider
      value={{
        fontWeight,
        setFontWeight,
        fontSize,
        setFontSize,
        paddingX,
        setPaddingX,
        paddingY,
        setPaddingY,
        color,
        setColor,
        backgroundColor,
        setBackgroundColor,
        borderRadius,
        setBorderRadius,
        borderWidth,
        setBorderWidth,
        borderColor,
        setBorderColor,
        boxShadow,
        setBoxShadow,
        borderStyle,
        setBorderStyle,
        getCSS,
        setGetCSS,
        resetState,
        FontFamily,
        setFontFamily,
        lineHeight,
        setLineHeight,
        WordSpacing,
        setWordSpacing,
        letterSpacing,
        setLetterSpacing,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
