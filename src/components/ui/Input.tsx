import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import Dropdown from "./Dropdown";
import StyleProvider from "./StyleProvider";
import DisplayInput from "./DisplayInput";

export default function Input() {
  const {
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
    setBoxShadow,
    borderStyle,
    setBorderStyle,
    getCSS,
    setGetCSS,
  } = useContext(Context);

  return (
    <div>
      <main
        style={{ height: "calc(100vh - 60px)" }}
        className="flex pt-5 w-full  "
      >
        <div className="h-full w-1/2 border-r-2 border-[#e5e7eb] flex flex-col overflow-y-auto pt-10 px-7 gap-15">
          <div className="w-full flex flex-col">
            <h2 className="text-[20px] w-full font-[500] ">
              Use the controls below to style the component on your right.
            </h2>
            <h3>Click on "Get CSS" when you're done.</h3>
          </div>
          <div className="w-full flex flex-col gap-5">
            <Dropdown Title="Text">
              <div className="flex justify-between items-center h-fit py-6 w-full gap-10">
                <div className="flex flex-col w-1/2 h-full gap-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#1b1b1ba1] font-semibold">
                      Font Weight
                    </div>
                    <div className="text-md font-semibold text-blue-400">
                      {fontWeight}
                    </div>
                  </div>
                  <select
                    onChange={(e) => setFontWeight(Number(e.target.value))}
                    defaultValue={fontWeight}
                    name="fontWeight"
                    className="border border-[#3b37373d] h-10 px-2"
                  >
                    <option value={300}>light</option>
                    <option value={500}>medium</option>
                    <option value={700}>semibold</option>
                  </select>
                </div>

                <div className="flex flex-col w-1/2 h-full gap-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#1b1b1ba1] font-semibold">
                      Font Size
                    </div>
                    <div className="text-md font-semibold text-blue-400">
                      {fontSize}
                    </div>
                  </div>
                  <select
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    defaultValue="16"
                    name="fontSize"
                    className="border border-[#3b37373d] h-10 px-2"
                  >
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                    <option value="24">24</option>
                    <option value="32">32</option>
                    <option value="40">40</option>
                    <option value="48">48</option>
                  </select>
                </div>
              </div>
            </Dropdown>

            <Dropdown Title="Padding">
              <div className="flex justify-between items-center h-fit py-6 w-full gap-10">
                <div className="flex flex-col w-1/2 h-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#1b1b1ba1] font-semibold">
                      Padding X
                    </div>
                    <div className="text-md font-semibold text-blue-400">
                      {paddingX}
                    </div>
                  </div>

                  <input
                    type="range"
                    name="paddingX"
                    min="0"
                    max="48"
                    onChange={(e) => setPaddingX(Number(e.target.value))}
                    defaultValue={paddingX}
                    className="w-full h-10 bg-[#3b37373d] rounded-md"
                  />
                </div>

                <div className="flex flex-col w-1/2  h-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#1b1b1ba1] font-semibold">
                      Padding Y
                    </div>
                    <div className="text-md font-semibold text-blue-400">
                      {paddingY}
                    </div>
                  </div>

                  <input
                    type="range"
                    name="paddingX"
                    min="0"
                    max="48"
                    onChange={(e) => setPaddingY(Number(e.target.value))}
                    defaultValue={paddingY}
                    className="w-full h-10 bg-[#3b37373d] rounded-md"
                  />
                </div>
              </div>
            </Dropdown>
            <Dropdown Title="Color">
              <div className="flex justify-between items-center h-fit py-6 w-full gap-10">
                <div className="flex flex-col w-1/2 h-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#1b1b1ba1] font-semibold">Color</div>
                    <div className="text-md font-semibold text-blue-400">
                      {color}
                    </div>
                  </div>
                  <div className="flex p-[3px] border border-black/15">
                    <input
                      type="color"
                      name="Color"
                      onChange={(e) => setColor(String(e.target.value))}
                      defaultValue={color}
                      className="w-full h-8 bg-[#3b37373d] "
                    />
                  </div>
                </div>

                <div className="flex flex-col w-1/2  h-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#1b1b1ba1] font-semibold">
                      Background Color
                    </div>
                    <div className="text-md font-semibold text-blue-400">
                      {backgroundColor}
                    </div>
                  </div>
                  <div className="flex p-[3px] border border-black/15">
                    <input
                      type="color"
                      name="BackgroundColor"
                      onChange={(e) =>
                        setBackgroundColor(String(e.target.value))
                      }
                      defaultValue={backgroundColor}
                      className="w-full h-8  bg-[#3b37373d] "
                    />
                  </div>
                </div>
              </div>
            </Dropdown>
            <Dropdown Title="Border">
              <div className="flex flex-col justify-between items-center h-fit py-8 w-full gap-10">
                <div className="flex w-full justify-between items-center gap-10">
                  <div className="flex flex-col w-1/2 h-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-[#1b1b1ba1] font-semibold">
                        Border Color
                      </div>
                      <div className="text-md font-semibold text-blue-400">
                        {borderColor}
                      </div>
                    </div>
                    <div className="flex p-[3px] border border-black/15">
                      <input
                        type="color"
                        name="BorderColor"
                        onChange={(e) => setBorderColor(String(e.target.value))}
                        defaultValue={borderColor}
                        className="w-full h-8 bg-[#3b37373d] "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2  h-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-[#1b1b1ba1] font-semibold">
                        Border Width
                      </div>
                      <div className="text-md font-semibold text-blue-400">
                        {borderWidth}
                      </div>
                    </div>

                    <input
                      type="range"
                      name="borderWidth"
                      min="0"
                      max="10"
                      onChange={(e) => setBorderWidth(Number(e.target.value))}
                      defaultValue={borderWidth}
                      className="w-full h-10 bg-[#3b37373d] rounded-md"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-between items-center gap-10">
                  <div className="flex flex-col w-1/2 h-full gap-2">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-[#1b1b1ba1] font-semibold">
                        Border Type
                      </div>
                      <div className="text-md font-semibold text-blue-400">
                        {borderStyle}
                      </div>
                    </div>
                    <select
                      onChange={(e) => setBorderStyle(String(e.target.value))}
                      name="borderStyle"
                      defaultValue="solid"
                      className="border border-[#3b37373d] h-10 px-2"
                    >
                      <option value="solid">Solid</option>
                      <option value="dotted">Dotted</option>
                      <option value="dashed">Dashed</option>
                      <option value="double">Double</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-1/2  h-full ">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-[#1b1b1ba1] font-semibold">
                        Border Radius
                      </div>
                      <div className="text-md font-semibold text-blue-400">
                        {borderRadius}
                      </div>
                    </div>

                    <input
                      type="range"
                      name="borderRadius"
                      min="0"
                      max="90"
                      onChange={(e) =>
                        setBorderRadius(String(e.target.value + "px"))
                      }
                      defaultValue={borderRadius}
                      className="w-full h-10 bg-[#3b37373d] rounded-md"
                    />
                  </div>
                </div>
              </div>
            </Dropdown>
            <Dropdown Title="Shadow">
              <div className="flex flex-col w-1/2 h-full gap-2">
                <div className="flex justify-between items-center w-full">
                  <div className="text-[#1b1b1ba1] font-semibold">
                    Box Shadow
                  </div>
                </div>
                <select
                  onChange={(e) => setBoxShadow(String(e.target.value))}
                  name="boxShadow"
                  className="border border-[#3b37373d] h-10 px-2"
                >
                  <option value="0 1px 3px rgba(0, 0, 0, 0.2)">Small</option>
                  <option selected value=" 0 4px 6px rgba(0, 0, 0, 0.3)">
                    Medium
                  </option>
                  <option value="0 10px 15px rgba(0, 0, 0, 0.4)">Large</option>
                  <option value="0 15px 20px rgba(0, 0, 0, 0.5)">
                    Extra Large
                  </option>
                </select>
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="h-full w-1/2  flex flex-col px-10 gap-50 ">
          <div className="flex justify-between items-center w-full  pt-5">
            <h3 className="text-[16px] font-semibold">Button Editor</h3>
            <button
              onClick={() => setGetCSS(true)}
              className="bg-[#3b82f6] text-white px-10 py-3 rounded-md font-semibold"
            >
              Get CSS
            </button>
          </div>
          <div className="bg-[#f3f4f6] min-w-full w-fit h-75 flex justify-center overflow-hidden items-center p-5">
            <DisplayInput />
          </div>
        </div>
      </main>
      {getCSS && <StyleProvider />}
    </div>
  );
}
