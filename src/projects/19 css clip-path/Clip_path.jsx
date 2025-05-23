import React from "react";

function Clip_path() {
  return (
    <>
      <div className="min-h-screen h-auto w-full py-10 bg-gray-500">
        {/*  Container*/}
        <div className="max-w-[400px]  w-[90%] mx-auto ">
          {shapes.map((shpae, idx) => {
            const randomNumber1 = Math.floor(Math.random() * 225);
            const randomNumber2 = Math.floor(Math.random() * 225);
            const randomNumber3 = Math.floor(Math.random() * 225);
            return (
              <>
                <div className="h-[400px] w-[400px] relative">
                  <div
                    style={{
                      clipPath: `${
                        shpae.css
                      }`,
                      backgroundColor : `rgb(${randomNumber2},${randomNumber1}, ${randomNumber2})`
                    }}
                    className="h-[70px] w-[70px] bg-black z-30 top-1 absolute -left-[90px] text-white flex justify-center items-center text-2xl"
                  >
                    {shpae.id}
                  </div>

                  <div
                    style={{
                      clipPath: `${shpae.css}`,
                      backgroundColor: `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`,
                      color: `rgb(${randomNumber3},${randomNumber1},${randomNumber2})`,
                    }}
                    className="md:h-[400px] md:w-[400px] w-[250px] mt-3 h-[250px] flex justify-center items-center text-4xl "
                    key={idx}
                  >
                    {shpae.name}

                    {/*  */}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

const shapes = [
  { id: 1, name: "Triangle", css: "polygon(50% 0%, 0% 100%, 100% 100%)" },
  {
    id: 2,
    name: "Trapezoid",
    css: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
  },
  {
    id: 3,
    name: "Rectangle",
    css: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  {
    id: 4,
    name: "Slanted Bottom Left",
    css: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
  },
  {
    id: 5,
    name: "Slanted Top Left",
    css: "polygon(0 20%, 100% 0, 100% 100%, 0 100%)",
  },
  {
    id: 6,
    name: "Hexagon",
    css: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
  },
  {
    id: 7,
    name: "Hexagon 2",
    css: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)",
  },
  {
    id: 8,
    name: "Pentagon Down",
    css: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
  },
  {
    id: 9,
    name: "Pentagon Up",
    css: "polygon(50% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%)",
  },
  { id: 10, name: "Left Triangle", css: "polygon(0 0, 100% 50%, 0 100%)" },
  { id: 11, name: "Right Triangle", css: "polygon(100% 0, 0% 50%, 100% 100%)" },
  { id: 12, name: "Inverted Triangle", css: "polygon(0 0, 100% 0, 50% 100%)" },
  {
    id: 13,
    name: "Diamond",
    css: "polygon(30% 0, 70% 0, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
  },
  {
    id: 14,
    name: "Trapezoid Wide",
    css: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
  },
  {
    id: 15,
    name: "Tilted Rectangle",
    css: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)",
  },
  {
    id: 16,
    name: "Square Inset",
    css: "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)",
  },
  { id: 17, name: "Chevron", css: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)" },
  {
    id: 18,
    name: "Tag",
    css: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
  },
  {
    id: 19,
    name: "Fancy Bottom Cut",
    css: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%, 10% 60%)",
  },
  {
    id: 20,
    name: "Sloped Top & Bottom",
    css: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
  },
  {
    id: 21,
    name: "Slight Trapezoid",
    css: "polygon(10% 0%, 90% 0%, 100% 100%, 0 100%)",
  },
  {
    id: 22,
    name: "Tilted Top Right",
    css: "polygon(0 0, 100% 10%, 90% 100%, 10% 100%)",
  },
  {
    id: 23,
    name: "Complex Hexagon",
    css: "polygon(20% 20%, 80% 20%, 100% 50%, 80% 80%, 20% 80%, 0 50%)",
  },
  {
    id: 24,
    name: "Angular Corner",
    css: "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
  },
  {
    id: 25,
    name: "Parallelogram",
    css: "polygon(0 0, 100% 30%, 100% 70%, 0% 100%)",
  },
  {
    id: 26,
    name: "Stylized Banner",
    css: "polygon(0 20%, 100% 0%, 80% 100%, 20% 100%)",
  },
  {
    id: 27,
    name: "Diagonal Banner",
    css: "polygon(10% 10%, 90% 0%, 100% 90%, 0 100%)",
  },
  {
    id: 28,
    name: "Inverse Diagonal",
    css: "polygon(0 10%, 90% 0%, 100% 90%, 10% 100%)",
  },
  {
    id: 29,
    name: "Curved Illusion",
    css: "polygon(0 0, 80% 10%, 100% 100%, 20% 90%)",
  },
  {
    id: 30,
    name: "Star",
    css: "polygon(50% 0, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  },

  // 10 new unique shapes
  {
    id: 31,
    name: "Cut Bottom",
    css: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
  },
  {
    id: 32,
    name: "Arrow Right",
    css: "polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%, 20% 50%)",
  },
  {
    id: 33,
    name: "Arrow Left",
    css: "polygon(20% 0, 100% 0, 80% 50%, 100% 100%, 20% 100%, 0% 50%)",
  },
  {
    id: 34,
    name: "Peak Top",
    css: "polygon(50% 0, 100% 30%, 100% 100%, 0 100%, 0 30%)",
  },
  {
    id: 35,
    name: "Peak Bottom",
    css: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
  },
  {
    id: 36,
    name: "Rhombus",
    css: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  },
  {
    id: 37,
    name: "Notch Top",
    css: "polygon(0 0, 40% 0, 50% 10%, 60% 0, 100% 0, 100% 100%, 0 100%)",
  },
  {
    id: 38,
    name: "Notch Bottom",
    css: "polygon(0 0, 100% 0, 100% 100%, 60% 100%, 50% 90%, 40% 100%, 0 100%)",
  },
  {
    id: 39,
    name: "Wave Bottom",
    css: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
  },
  {
    id: 40,
    name: "Scalloped",
    css: "polygon(0 0, 100% 0, 100% 80%, 75% 100%, 25% 100%, 0 80%)",
  },
];

export default Clip_path;
