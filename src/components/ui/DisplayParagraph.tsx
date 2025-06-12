import React from "react";
import { Context } from "../../Context/Context";

export default function DisplayParagraph() {
  const {
    fontWeight,
    fontSize,
    color,
    letterSpacing,
    lineHeight,
    WordSpacing,
    FontFamily,
  } = React.useContext(Context);
  return (
    <p
      style={{
        fontWeight: fontWeight,
        fontSize: fontSize + "px",
        color: color,
        letterSpacing: letterSpacing,
        lineHeight: lineHeight,
        wordSpacing: WordSpacing,
        fontFamily: FontFamily,
      }}
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
      quasi, beatae maxime ex sunt cum veritatis nesciunt, possimus repellendus
      quaerat veniam error repellat ipsam. Provident dignissimos excepturi
      blanditiis similique et!
    </p>
  );
}
