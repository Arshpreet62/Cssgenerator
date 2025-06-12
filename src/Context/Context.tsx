import { createContext, Dispatch, SetStateAction } from "react";

interface ContextType {
  fontWeight: number;
  setFontWeight: Dispatch<SetStateAction<number>>;
  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;
  paddingX: number;
  setPaddingX: Dispatch<SetStateAction<number>>;
  paddingY: number;
  setPaddingY: Dispatch<SetStateAction<number>>;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  backgroundColor: string;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
  borderRadius: string;
  setBorderRadius: Dispatch<SetStateAction<string>>;
  borderWidth: number;
  setBorderWidth: Dispatch<SetStateAction<number>>;
  borderColor: string;
  setBorderColor: Dispatch<SetStateAction<string>>;
  boxShadow: string;
  setBoxShadow: Dispatch<SetStateAction<string>>;
  borderStyle: string;
  setBorderStyle: Dispatch<SetStateAction<string>>;
  getCSS: boolean;
  setGetCSS: Dispatch<SetStateAction<boolean>>;
  resetState: (component: string) => void;
  FontFamily: string;
  setFontFamily: Dispatch<SetStateAction<string>>;
  lineHeight: string;
  setLineHeight: Dispatch<SetStateAction<string>>;
  WordSpacing: string;
  setWordSpacing: Dispatch<SetStateAction<string>>;
  letterSpacing: string;
  setLetterSpacing: Dispatch<SetStateAction<string>>;
}

const initialState = {
  fontWeight: 300,
  setFontWeight: (fontWeight: number) => {},
  fontSize: 16,
  setFontSize: (fontSize: number) => {},
  paddingX: 20,
  setPaddingX: (paddingX: number) => {},
  paddingY: 10,
  setPaddingY: (paddingY: number) => {},
  color: "#ffffff",
  setColor: (color: string) => {},
  backgroundColor: "#3b83f6",
  setBackgroundColor: (backgroundColor: string) => {},
  borderRadius: "5%",
  setBorderRadius: (borderRadius: string) => {},
  borderWidth: 0,
  setBorderWidth: (borderWidth: number) => {},
  borderColor: "#ffffff",
  setBorderColor: (borderColor: string) => {},
  boxShadow: "none",
  setBoxShadow: (boxShadow: string) => {},
  borderStyle: "solid",
  setBorderStyle: (borderStyle: string) => {},
  getCSS: false,
  setGetCSS: (getCSS: boolean) => {},
  resetState: () => {},
  FontFamily: "Roboto",
  setFontFamily: (fontFamily: string) => {},
  lineHeight: "32px",
  setLineHeight: (lineHeight: string) => {},
  WordSpacing: "2px",
  setWordSpacing: (wordSpacing: string) => {},
  letterSpacing: "2px",
  setLetterSpacing: (letterSpacing: string) => {},
} as ContextType;

export const Context = createContext(initialState);
