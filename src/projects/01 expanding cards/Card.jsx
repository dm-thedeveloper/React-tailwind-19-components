import React from "react";;

function Card({ id, image, index, setIndex, heading }) {
  return (
    <div
      onClick={() => setIndex(id)}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderImageRepeat: "no-repeat",
      }}
      className={`  w-[90vw] ${
        id == index
          ? "flex-[5] border-2"
          : `flex-[.5] cursor-pointer hover:scale-95 ${
              id % 2 == 0 ? "hover:rotate-2" : "hover:-rotate-2"
            }`
      }  md:rounded-[50px] rounded-[20px]  border border-black duration-500 ease-in-out transition-all relative`}
      key={id}
    >
      <h1
        className={`${
          id == index
            ? "absolute bottom-4 left-3 text-white text-3xl"
            : "hidden"
        }`}
      >
        {heading}
      </h1>
    </div>
  );
}

export default Card;
