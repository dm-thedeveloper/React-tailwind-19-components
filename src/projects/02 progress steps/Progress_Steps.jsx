import React, { act, useState } from "react";
import Body from "../../components/Body";

function Progress_Steps() {
  const [currentActive, setCurrentActive] = useState(1);
  const totalSteps = 4;

  const next = () => {
    setCurrentActive((prev) => (prev < totalSteps ? prev + 1 : prev));
  };

  const prev = () => {
    setCurrentActive((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const progressPercentage = ((currentActive - 1) / (totalSteps - 1)) * 100;

  return (
    <Body>
      {/* body */}
      <div className="h-screen  flex justify-center items-center">
        {/* Container */}
        <div className="">
          
          {/* ProgressContainer */}
          <div className="flex relative justify-between max-w-full w-[350px]">
            {/* ::before equivalent */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-progressGray -z-20 transform -translate-y-1/2" />

            {/* Dynamic Progresss */}
            <div
              className={`absolute top-1/2 left-0 duration-300  h-1 bg-progressBlue -z-10 transform -translate-y-1/2`}
              style={{ width: `${progressPercentage}%` }}
            />
            {/* Circles */}
            {Array.from({ length: 4 },((_, index) => (
              <div
                className={`h-8 w-8 border-[2px]   duration-300 rounded-full flex  justify-center items-center   ${
                  index + 1 <= currentActive
                    ? "bg-progressBlue text-white"
                    : "text-progressGray bg-white text-[#999] border-progressGray"
                }  `}
              >
                {index + 1}
              </div>
            )) ) }
          </div>

          {/* Next and Prev Buttons  */}
          <div className="mt-4 flex justify-center items-center gap-5">
            {[
              {
                text: "Prev",
                action: prev,
                isDiabled: currentActive == 1,
              },
              {
                text: "Next",
                action: next,
                isDiabled: currentActive == 4 ,
              },
            ].map((btn) => (
              <ProgressBtn
                text={btn.text}
                action={btn.action}
                currentActive={currentActive}
                isDiabled={btn.isDiabled}
              />
            ))}
          </div>
        </div>
      </div>
    </Body>
  );
}

export default Progress_Steps;

function ProgressBtn({ text, action, isDiabled }) {
  return (
    <button
      key={text}
      onClick={action}
      disabled={isDiabled}
      className="bg-progressBlue disabled:bg-progressGray disabled:pointer-events-none  text-white rounded-md cursor-pointer py-2 px-8 text-[14px] duration-300 active:scale-90"
    >
      {text}
    </button>
  );
}
