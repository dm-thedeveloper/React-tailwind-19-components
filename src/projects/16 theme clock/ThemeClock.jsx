import React, { useEffect, useState } from "react";
import "./index.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const ThemeClock = () => {
  const [isDark, setIsDark] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const hoursForClock = hours % 12 || 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  const hourDeg = scale(hoursForClock, 0, 12, 0, 360);
  const minuteDeg = scale(minutes, 0, 60, 0, 360);
  const secondDeg = scale(seconds, 0, 60, 0, 360);

  const day = days[time.getDay()];
  const month = months[time.getMonth()];
  const date = time.getDate();

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } transition-all duration-500 w-screen h-screen flex items-center justify-center`}
    >
      <button
        onClick={() => setIsDark(!isDark)}
        className={`absolute top-4 right-4 px-4 py-2 rounded bg-${
          isDark ? "white" : "black"
        } text-${isDark ? "black" : "white"}`}
      >
        {isDark ? "Light mode" : "Dark mode"}
      </button>

      <div className="flex flex-col items-center space-y-4">
        <div className="clock-container relative w-[230px] rounded-full h-[230px]">
          {/* Hour Hand */}

          <div
            className="absolute w-[3px] h-[65px] bg-current top-1/2 left-1/2 origin-bottom transition-transform duration-500"
            style={{
              transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`,
            }}
          ></div>

          {/* Minute Hand */}
          <div
            className="absolute w-[3px] h-[100px] bg-current top-1/2 left-1/2 origin-bottom transition-transform duration-500"
            style={{
              transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`,
            }}
          ></div>

          {/* Second Hand */}
          <div
            className="absolute w-[3px] h-[100px] bg-red-500 top-1/2 left-1/2 origin-bottom transition-transform duration-500"
            style={{
              transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`,
            }}
          ></div>

          {/* Center Circle */}
          <div className="absolute w-2.5 h-2.5 bg-red-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[5px] h-[5px] bg-current rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Digits */}
          {[...Array(12)].map((_, i) => {
            const angle = ((i + 1) / 12) * 2 * Math.PI;
            const radius = 100;
            const center = 115;
            const x = center + radius * Math.sin(angle);
            const y = center - radius * Math.cos(angle);

            return (
              <div
                key={i}
                className="absolute text-sm font-semibold"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {i + 1}
              </div>
            );
          })}
        </div>

        <div className="text-5xl font-bold">
          {`${hoursForClock}: ${
            minutes < 10 ? "0" + minutes : minutes
          } ${ampm}`}
        </div>
        <div className="uppercase text-sm text-gray-500 dark:text-gray-300">
          {`${day}, ${month}`}{" "}
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 dark:bg-white dark:text-black text-black text-xs font-semibold">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThemeClock;
