import React, { useEffect, useState } from "react";

function Counter() {
  //   const [start, setStart] = useState(0);
  //   const end = 10;

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setStart((prev) => {

  //         if (prev >= end) {
  //           clearInterval(interval);
  //           return prev; // Just return current value to stop incrementing
  //         }
  //         return prev + 1;
  //       });
  //     }, 1000);

  //     return () => clearInterval(interval); // Cleanup on unmount
  //   }, []);

  return (
    <div className="min-h-screen h-auto w-full bg-cyan-400 text-white flex justify-center items-center">
      <CounterComponent start={0} end={1000} duration={1} />
    </div>
  );
}

function CounterComponent({ start, end, duration }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let current = start;

    const tick = () => {
      if (current >= end) return;

      current++;
      setCount(current);

      const remaining = end - current;
      // console.log("R",remaining);
      

      // Slow down last 5 counts
      const delay = remaining <= 5 ? duration * 2 : duration;

      setTimeout(tick, delay);

    };

    const timeout = setTimeout(tick, duration);
    

    return () => clearTimeout(timeout);
  }, [start, end, duration]);

  return (
    <h1 style={{fontFamily:"'Roboto Mono', sans-serif"}} className="text-9xl font-bold transition-all duration-500 transform scale-105 text-blue-600">
      {count}
    </h1>
  );
}

export default Counter;
