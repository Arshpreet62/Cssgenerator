import React from "react";
import { Context } from "../../Context/Context";

export default function DisplayInput() {
  const {
    fontWeight,
    fontSize,
    paddingX,
    paddingY,
    color,
    backgroundColor,
    borderRadius,
    borderWidth,
    borderColor,
    boxShadow,
    borderStyle,
  } = React.useContext(Context);

  return (
    <input
      type="text"
      placeholder="Style me!"
      className="bg-white"
      style={{
        fontWeight,
        fontSize,
        padding: `${paddingY}px ${paddingX}px`,
        backgroundColor,
        borderRadius,
        borderWidth,
        borderColor,
        boxShadow,
        borderStyle,
        color,
      }}
    />
  );
}
