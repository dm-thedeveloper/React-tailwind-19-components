import React, { useState, useEffect } from "react";
import Body from "../../components/Body";

const Drink_Water2 = () => {
  const [fullCups, setFullCups] = useState(0);
  const totalCups = 8;
  const cupVolume = 250;

  const handleClick = (index) => {
    if (index === 7 && fullCups === 8) {
      setFullCups(7);
    } else if (fullCups === index + 1 && fullCups !== totalCups) {
      setFullCups(index);
    } else {
      setFullCups(index + 1);
    }
  };

  const percentageHeight = `${(fullCups / totalCups) * 100}%`;
  const remainedLiters = 2 - (cupVolume * fullCups) / 1000;

  return (
    <div className="min-h-screen bg-blue-500 text-white font-sans flex flex-col items-center mb-10">
      <h1 className="mt-4 text-3xl font-semibold">Drink Water</h1>
      <h2 className="text-lg font-normal mt-2">Goal: 2 Liters</h2>

      <div className="relative mt-6 w-[150px] h-[330px] border-4 border-blue-900 rounded-b-[40px] overflow-hidden bg-white text-blue-900 flex flex-col">
        {/* Percentage filled */}
        {fullCups > 0 && (
          <div
            className="bg-blue-300 absolute bottom-0 left-0 w-full text-white text-2xl font-bold flex items-center justify-center transition-all duration-300"
            style={{ height: percentageHeight }}
          >
            {(fullCups / totalCups) * 100}%
          </div>
        )}

        {/* Remained */}
        {fullCups < totalCups && (
          <div className="flex-1 flex flex-col items-center justify-center text-center transition-all duration-300">
            <span className="text-lg font-bold">{remainedLiters}L</span>
            <small className="text-sm">Remained</small>
          </div>
        )}
      </div>

      <p className="text-center mt-4 mb-2 px-4">
        Select how many glasses of water that you have drank
      </p>

      <div className="flex flex-wrap justify-center w-[280px] gap-2">
        {Array.from({ length: totalCups }).map((_, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`w-[50px] h-[95px] rounded-b-[15px] flex items-center justify-center text-center text-sm cursor-pointer transition-all duration-300 ${
              i < fullCups
                ? "bg-blue-300 text-white"
                : "bg-white/90 text-blue-900"
            }`}
          >
            250 ml
          </div>
        ))}
      </div>
    </div>
  );
};

function Drink_Water({}) {
  const [progress, setProgress] = useState(0);

  return (
    <Body>
      <div className="min-h-screen h-auto w-full bg-[#3494e4] py-6">
        {/* Heading ... */}
        <div className="text-center  text-white">
          <h1 className="text-4xl font-bold">Drink Water</h1>
          <h3 className="text-2xl">
            <b>Goal: </b> 2 liters
          </h3>
        </div>

        {/* Percnetae Fill */}
        <div className=" py-2">
          {/* Container */}
          <div className="h-[50vh] relative w-[180px] mx-auto bg-[white] border-[5px] border-[#144fc6] rounded-b-[40px]">
            {/* Remaining */}
            <div
              style={{ height: `${progress == 0 ? 100 : 100 - progress}%` }}
              className="w-full absolute top-0 duration-300 rounded-b-[36px] flex justify-center items-center flex-col text-[#144fc6]"
            >
              {progress < 100 && (
                <>
                  <h2 className={` font-bold text-2xl`}>
                    {2 - (progress / 100) * 2}L
                  </h2>
                  <small className="text-lg font-normal">Remained</small>
                </>
              )}
            </div>
            {/* Filled */}
            <div
              style={{ height: `${progress}%` }}
              className="bg-[#6ab3f8] mt-1 absolute bottom-0  duration-300  w-full rounded-b-[36px] flex justify-center items-center font-bold text-4xl text-[#144fc6]"
            >
              {progress > 0 && <span>{progress}%</span>}
            </div>
          </div>
        </div>

        <p className="text-center py-2 text-white text-lg  ">
          Select how many glasses of water that you have drank
        </p>

        {/* Glases */}
        <div className="max-w-[300px] w-[95%] mx-auto flex gap-2 flex-wrap ">
          {Array.from(
            [12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100],
            (glass, idx) => (
              <div
                key={idx}
                onClick={() => setProgress(glass)}
                className={`h-[90px] w-[60px] border-[4px] border-[#144fc6] rounded-b-3xl cursor-pointer text-sm  duration-300 flex justify-center items-center flex-col ${
                  glass <= progress
                    ? "bg-[#6ab3f8] text-white"
                    : "bg-white text-[#144fc6]"
                }`}
              >
                <span>250</span>
                <span>ml</span>
              </div>
            )
          )}
        </div>
      </div>
    </Body>
  );
}

export default Drink_Water;

// --border-color: #144fc6;
// background-color: #3494e4;
// --fill-color: #6ab3f8;
