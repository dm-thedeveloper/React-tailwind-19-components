import React, { useState } from "react";
import defaultImg from "./shoes.jpg";

function CSS_Filter_Property() {
  const [imgUrl, setImgUrl] = useState(null);
  const [prop, setProp] = useState({
    propText: "",
    propUnit: "",
    index: 0,
    defaultValue: 0,
    minValue: 0,
    maxValue: 0,
  });

  return (
    <>
      <div className="min-h-screen h-screen w-full flex justify-center items-center">
        {/* Container */}
        <div className="h-[500px] w-[80%] mx-auto border-2 shadow-sm rounded-lg">
          <Header imgUrl={imgUrl} prop={prop} setProp={setProp} />

          <div className="w-full h-[90%] relative flex justify-center items-center">
            <Image setImgUrl={setImgUrl} imgUrl={imgUrl} prop={prop} />
          </div>
        </div>
      </div>
    </>
  );
}

function Header({ imgUrl, prop, setProp }) {
  return (
    <>
      <header className="w-full h-[80px] bg-gray-400 rounded-t-lg flex justify-between items-center px-4">
        <div className="flex gap-2">
          {/* Show And Drop Down */}
          <div className="w-[350px]">
            {/* Black Sreen */}
            <div className="bg-[#211e1e] text-xl w-full text-white px-4 py-1 rounded-md">
              <span className="text-[#2568d3]">filter</span>{" "}
              <span className="text-[#979747]"> :</span>{" "}
              {prop.propText !== "" ? (
                <>
                  <span className="text-[#979747]">{prop.propText}</span>{" "}
                  <span className="text-[#d228d2]">(</span>
                  <span className="text-[#d9f1c0]">
                    {prop.defaultValue}
                    {prop.propUnit}
                  </span>
                  <span className="text-[#d228d2]">)</span>;
                </>
              ) : (
                "default"
              )}
            </div>
            {/* Drop Down */}
            <select
              onChange={(e) => {
                let accessedValue = JSON.parse(e.target.value);
                setProp((prev) => ({
                  ...prev,
                  propUnit: accessedValue.unit,
                  propText: accessedValue.value,
                  defaultValue: accessedValue.defaultValue,
                  minValue: accessedValue.minValue,
                  maxValue: accessedValue.maxValue,
                }));
              }}
              className="mt-2 w-full px-4 py-1 rounded-md border-none outline-none bg-[#211e1e] text-white"
            >
              {filterValues.map((prop, idx) => {
                return (
                  <>
                    <option
                      value={JSON.stringify({
                        value: prop.value,
                        unit: prop.unit,
                        defaultValue: prop.defaultValue,
                      })}
                      key={idx * Math.random()}
                    >
                      {prop.text}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          {/* Value Input */}
          <div className="flex justify-center items-center px-5 gap-1 text-xl">
            <input
              onChange={(e) =>
                setProp((prev) => ({ ...prop, defaultValue: e.target.value }))
              }
              min={prop.minValue}
              max={prop.maxValue}
              value={prop.defaultValue}
              className="w-full"
              type="range"
            />
            <label htmlFor="">
              {prop.defaultValue}
              {prop.propUnit}
            </label>
          </div>
        </div>

        <div className="">
          <img
            className="h-[75px] w-[75px] rounded-full"
            src={imgUrl ? imgUrl : defaultImg}
            alt="main image"
          />
        </div>
      </header>
    </>
  );
}

function Image({ setImgUrl, imgUrl, prop }) {
  let [Height, setHeight] = useState(300);
  console.log(
    "Filter  : ",
    `${prop.propText}(${prop.defaultValue})${prop.propUnit}`
  );

  return (
    <>
      <img
        style={{
          height: `${Height}px`,
          filter: `${prop.propText}(${prop.defaultValue}${prop.propUnit})`,
        }}
        className="duration-300"
        src={imgUrl ? imgUrl : defaultImg}
        alt=""
      />
      {/* Height */}
      <div className="absolute  w-[200px] right-2 top-2 z-30  flex justify-center items-center gap-2">
        <input
          min={0}
          max={400}
          onChange={(e) => setHeight(e.target.value)}
          value={Height}
          className=""
          type="range"
        />
        <label htmlFor="">{Height}px</label>
      </div>
      {/* Width */}
      {/* <div className="absolute top-1  z-30  right-1 flex justify-center items-center gap-2">
        <input className="" type="range" />
        <label htmlFor="">300px</label>
      </div> */}

      {/* Input for URL */}
      <div className="absolute bottom-9 w-[300px] flex h-7 ">
        <label
          htmlFor=""
          className="h-7 w-9 bg-gray-300 flex justify-center items-center rounded-l-lg"
        >
          url
        </label>

        <input
          onChange={(e) => setImgUrl(e.target.value)}
          className="border rounded-r-lg focus:border-gray-500 border-l-0 outline-none px-1 w-[260px]"
          type="url"
        />
      </div>
    </>
  );
}

export default CSS_Filter_Property;

const filterValues = [
  {
    text: "Select Value",
    value: "",
    minValue: 0,
    mxValue: 0,
    unit: "",
    defaultValue: "",
  },
  {
    text: "blur",
    value: "blur",
    minValue: 0,
    mxValue: 100,
    unit: "px",
    defaultValue: 5,
  },
  {
    text: "grayscale",
    value: "grayscale",
    minValue: 0,
    mxValue: 100,
    unit: "%",
    defaultValue: 10,
  },
  {
    text: "opacity",
    value: "opacity",
    minValue: 0,
    mxValue: 100,
    unit: "%",
    defaultValue: 50,
  },
  {
    text: "invert",
    value: "invert",
    minValue: 0,
    mxValue: 100,
    unit: "%",
    defaultValue: 5,
  },
  {
    text: "sepia",
    value: "sepia",
    minValue: 0,
    mxValue: 100,
    unit: "%",
    defaultValue: 5,
  },
  {
    text: "brightness",
    value: "brightness",
    minValue: 0,
    mxValue: 1000,
    unit: "%",
    defaultValue: 50,
  },
  {
    text: "contrast",
    value: "contrast",
    minValue: 0,
    mxValue: 1000,
    unit: "%",
    defaultValue: 50,
  },
  {
    text: "hue-rotate",
    value: "hue-rotate",
    minValue: 0,
    mxValue: 1000,
    unit: "deg",
    defaultValue: 50,
  },
  {
    text: "saturate",
    value: "saturate",
    minValue: 0,
    mxValue: 1000,
    unit: "%",
    defaultValue: 50,
  },
];
