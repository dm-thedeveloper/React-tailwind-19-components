import React from "react";

function Form_Wave_Animation2() {
  const waveLabel = (text) =>

    text.split("").map((letter, idx) =>
     <span style={{transitionDelay: `${idx *500}ms`}}   key={idx}>
      {letter}
    </span>);

  return (
    <>
      <div className="h-screen w-full bg-[steelblue] flex justify-center items-center">
        {/* Container */}
        <div className="h-[400px] p-9 w-[350px] bg-[rgba(0,0,0,.4)] rounded-lg">
          <h1 className="text-white text-3xl  mb-3 text-center">
            Regiteration Form{" "}
          </h1>

          <form action="">
            <div className="Form-control2  relative mt-3 ">
              <input required
                className="w-full p-1 text-xl bg-transparent  focus:border-b-[steelblue] border-b-2 outline-none  text-white"
                type="text"
                name=""
                id=""
              />
              <label
                className="text-white text-lg absolute  bottom-[0px] left-0 "
                htmlFor=""
              >
                {waveLabel("Email")}
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form_Wave_Animation2;

//  body background-color: steelblue;
// Container background-color: rgba(0, 0, 0, 0.4);

//   color: lightblue;
//

