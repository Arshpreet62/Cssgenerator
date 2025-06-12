import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";

export default function DisplayButton() {
  const {
    fontWeight,
    fontSize,
    paddingX,
    paddingY,
    color,
    backgroundColor,
    boxShadow,
    borderRadius,
    borderWidth,
    borderColor,
    borderStyle,
  } = useContext(Context);
  const [button, setButton] = React.useState<Button>({
    fontWeight: 500,
    fontSize: "16px",
  });
  type Button = {
    fontWeight: number;
    fontSize: string;
  };

  useEffect(() => {
    console.log(fontWeight, fontSize);
    setButton((prev) => ({
      ...prev,
      fontWeight: fontWeight,
      fontSize: fontSize + "px",
    }));
  }, [fontWeight, fontSize]);
  return (
    <div
      style={{
        padding: `${paddingY}px ${paddingX}px`,
        fontWeight: button.fontWeight,
        fontSize: button.fontSize,
        color: color,
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
        borderRadius: borderRadius,
        borderWidth: borderWidth + "px",
        borderColor: borderColor,
      }}
      className={`bg-[#3b82f6] text-white p-2 flex justify-center items-center rounded-md  `}
    >
      Style Me!
    </div>
  );
}
