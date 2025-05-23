import React, { useState } from "react";
import Body from "../../components/Body";
import "./Split.css";

function Slit_Landing_CSS() {
  const [expandleft, setExpandLeft] = useState(false);
  const [expandRight, setExpandRight] = useState(false);

  return (
    <>
      <Body>
        {/* Body */}

        <div className="h-screen w-full flex bg-slate-400 overflow-hidden">
          {/* Split Left  - Strawberyy*/}
          <div
            onMouseEnter={() => setExpandLeft(true)}
            onMouseLeave={() => setExpandLeft(false)}
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`h-full duration-[1s] bg-black relative split-left ${
              expandleft
                ? "w-[75%] z-20"
                : expandRight
                ? "w-[25%]  z-10 "
                : "w-1/2  z-10 "
            }`}
          >
            <h1 className="text-white text-[4rem] absolute left-1/2 whitespace-nowrap top-[20%] -translate-x-[50%]">
              Play Station 5
            </h1>

            <a
              className="text-white absolute flex justify-center items-center left-1/2 top-[40%] -translate-x-[50%] uppercase no-underline text-[1rem] font-bold border-white border-[0.2rem] p-[1.5rem]  w-[15rem]"
              href="#"
            >
              Buy Now
            </a>
          </div>

          {/* Split Left  - Orange*/}
          <div
            onMouseEnter={() => setExpandRight(true)}
            onMouseLeave={() => setExpandRight(false)}
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1675237625753-c01705e314bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={`h-full  z-10 bg-black relative split-right duration-[1s] ${
              expandRight ? "w-[75%] z-20" : expandleft ? "w-[25%]" : "w-1/2"
            }`}
          >
            <h1 className="text-white text-[4rem] absolute left-1/2 whitespace-nowrap top-[20%] -translate-x-[50%]">
              X Box Serires X{" "}
            </h1>

            <a
              className="text-white absolute flex justify-center items-center left-1/2 top-[40%] -translate-x-[50%] uppercase no-underline text-[1rem] font-bold border-white border-[0.2rem] p-[1.5rem]  w-[15rem]"
              href=""
            >
              Buy Now
            </a>
          </div>
        </div>
      </Body>
    </>
  );
}

export { Slit_Landing_CSS };
