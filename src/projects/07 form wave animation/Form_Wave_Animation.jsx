import React from "react";
import Body from "../../components/Body";
import "./index.css";

function Form_Wave_Animation() {


  const waveLabel = (text) =>    
    text.split("").map((letter, idx) => (
      <span
        key={idx}
        style={{ transitionDelay: `${idx * 50}ms` }}
        className="inline-block min-w-[5px] text-lg transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
      >
        {letter}
      </span>
    ));

  return (
    <Body>
      {/* Body */}
      <div className="h-screen w-full bg-[steelblue] flex justify-center items-center">
        {/* Container */}
        <div className="bg-[#00000066] rounded-lg py-5 px-10">
          {/* form-control */}
          <h1 className="text-center text-4xl text-white mb-8">Please Login</h1>
          <div className="form-control my-5 relative">
            <input
              id="email"
              type="text"
              className="bg-transparent w-full block outline-none text-xl focus:border-b-[steelblue] duration-200 text-white border-b-2 border-b-white"
            />
            <label
              htmlFor="email"
              className="absolute  pointer-events-none duration-300 block left-0 bottom-1 text-white"
            >
              {waveLabel("Email")}
            </label>
          </div>

          <div className="form-control my-10 relative">
            <input
              id="password"
              type="password"
              className="bg-transparent w-full block outline-none text-xl focus:border-b-[steelblue] duration-200 text-white border-b-2 border-b-white"
            />
            <label
              htmlFor="password"
              className="absolute pointer-events-none duration-300 block left-0 bottom-1 text-white"
            >
              {waveLabel("Password")}
            </label>
          </div>
        </div>
      </div>
    </Body>
  );
}

export { Form_Wave_Animation };
//  body background-color: steelblue;
// Container background-color: rgba(0, 0, 0, 0.4);

//   color: lightblue;
//
