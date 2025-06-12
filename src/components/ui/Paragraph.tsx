import React from "react";
import StyleProvider from "./StyleProvider";
import Dropdown from "./Dropdown";
import { Context } from "../../Context/Context";
import DisplayParagraph from "./DisplayParagraph";

export default function Paragraph() {
  const {
    fontWeight,
    setFontWeight,
    fontSize,
    setFontSize,
    color,
    setColor,
    getCSS,
    setGetCSS,
    FontFamily,
    setFontFamily,
    letterSpacing,
    setLetterSpacing,
    WordSpacing,
    setWordSpacing,
    lineHeight,
    setLineHeight,
  } = React.useContext(Context);

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
              <div className="flex justify-between items-center h-fit py-6 w-full gap-10">
                <div className="flex flex-col w-1/2 h-full gap-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#1b1b1ba1] font-semibold">
                      Font Family
                    </div>
                    <div className="text-md font-semibold text-blue-400">
                      {FontFamily}
                    </div>
                  </div>
                  <select
                    onChange={(e) => setFontFamily(String(e.target.value))}
                    defaultValue={FontFamily}
                    name="fontFamily"
                    className="border border-[#3b37373d] h-10 px-2"
                  >
                    <option value="Roboto">Roboto</option>
                    <option value="Bungee">Bungee</option>
                    <option value="Lato">Lato</option>
                  </select>
                </div>

                <div className="flex flex-col w-1/2 h-full gap-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#1b1b1ba1] font-semibold">
                      Line Height
                    </div>
                    <div className="text-md font-semibold text-blue-400">
                      {lineHeight}
                    </div>
                  </div>
                  <input
                    type="range"
                    name="Line Height"
                    min="0"
                    max="100"
                    onChange={(e) =>
                      setLineHeight(String(e.target.value + "px"))
                    }
                    defaultValue={lineHeight}
                    className="w-full h-10 bg-[#3b37373d] rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center h-fit py-6 w-full gap-10">
                <div className="flex flex-col w-1/2 h-full gap-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#1b1b1ba1] font-semibold">
                      Word Spacing
                    </div>
                    <div className="text-md font-semibold text-blue-400">
                      {WordSpacing}
                    </div>
                  </div>
                  <input
                    type="range"
                    name="Word Spacing"
                    min="0"
                    max="100"
                    onChange={(e) =>
                      setWordSpacing(String(e.target.value + "px"))
                    }
                    defaultValue={WordSpacing}
                    className="w-full h-10 bg-[#3b37373d] rounded-md"
                  />
                </div>

                <div className="flex flex-col w-1/2 h-full gap-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[#1b1b1ba1] font-semibold">
                      Letter Spacing
                    </div>
                    <div className="text-md font-semibold text-blue-400">
                      {letterSpacing}
                    </div>
                  </div>
                  <div className="flex p-[3px] ">
                    <input
                      type="range"
                      name="Letter Spacing"
                      min="0"
                      max="8"
                      onChange={(e) =>
                        setLetterSpacing(String(e.target.value + "px"))
                      }
                      defaultValue={letterSpacing}
                      className="w-full h-10 bg-[#3b37373d] rounded-md"
                    />
                  </div>
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
            <DisplayParagraph />
          </div>
        </div>
      </main>
      {getCSS && <StyleProvider />}
    </div>
  );
}
