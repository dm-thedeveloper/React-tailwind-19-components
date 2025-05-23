import React, { useState } from "react";

function Split_Card() {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen w-full relative overflow-hidden"
      >
        <div
          style={{ backdropFilter: `blur(${expand ? "0px" : "10px"})` }}
          className="absolute inset-0 flex duration-500 justify-center items-center"
        >
          {/* Card */}
          <div
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
            className="h-[450px]  w-[350px]  bg-transparent"
          >
            {/* image 80% */}
            <div
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className={` ${
                expand ? "h-[15%]" : "h-[85%]"
              }  duration-300 rounded-t-md`}
            ></div>

            {/* Heading */}
            <div
              style={{ backdropFilter: "blur(10px)" }}
              className={`p-2 ${
                expand ? " h-[85%]" : "h-[15%] flex justify-center items-center"
              }  duration-300  bg-white rounded-b-md`}
            >
              <h1 className="text-gray-600  text-3xl ">Lorem, ipsum dolor.</h1>

              <div
                className={` duration-200 ${
                  expand
                    ? "opacity-100s text-center text-gray-500 block"
                    : "opacity-0 hidden text-transparent"
                }`}
              >
                <p>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt, minima similique sed provident, iure non reprehenderit
                error explicabo blanditiis suscipit, sunt ipsum? Nostrum magni,
                deleniti iusto optio quae reiciendis excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis facere excepturi dolorum quasi voluptate minima quibusdam nisi voluptates praesentium eligendi labore harum unde,
                </p>
                <button className="bg-gray-600 text-white py-2 px-4 rounded-lg mt-5" >Learn More</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Split_Card;

let bgImage =
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
