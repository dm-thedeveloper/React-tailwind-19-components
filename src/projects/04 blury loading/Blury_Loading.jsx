import React, { useEffect, useState } from "react";

const BlurryLoading = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Directly calculate blur and opacity without using scale()
  const blurValue = 30 - (30 * load) / 100; // blur: 30 → 0
  const opacityValue = 1 - load / 100; // opacity: 1 → 0

  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div
        className="absolute inset-0 backdrop-blur"
        style={{
          backdropFilter: `blur(${blurValue}px)`,
        }}
      ></div>

      <div className="absolute inset-0 flex justify-center items-center">
        <span
          className="text-white text-5xl font-bold"
          style={{ opacity: opacityValue }}
        >
          {load}%
        </span>
      </div>
    </div>
  );
};

function My_Blury_loading() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => {
        if (count >= 100) {
          clearInterval(interval);
          return 100;
        }
        return count + 1;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const blurValue = 30 - (30 * count) / 100;
  const opacityValue = 1 - count / 100;

  return (
    <>
      <div
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1591738802175-709fedef8288?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
        className="h-screen w-full  relative"
      >
        <div
          style={{ backdropFilter: `blur(${blurValue}px)` }}
          className="absolute inset-0"
        ></div>
        <div className="absolute inset-0 flex justify-center items-center ">
          <h1
            style={{ opacity: opacityValue }}
            className="text-white font-bold text-5xl"
          >
            {count}%
          </h1>
        </div>
      </div>
    </>
  );
}

export { BlurryLoading, My_Blury_loading };
