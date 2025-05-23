import React, { useEffect, useRef, useState } from "react";

function Scroll_Animation() {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  const checkBoxes = () => {
    const triggerBottom = window.innerHeight * 0.8; // 80%;
    const updatedVisibleCards = cardRefs.current.map((card) => {
      if (!card) return false;
      const boxTop = card.getBoundingClientRect().top;
      // card.innerHTML  = `${Math.floor(boxTop)}`
      return boxTop < triggerBottom;
    });

    setVisibleCards(updatedVisibleCards);
  };

  useEffect(() => {

    window.addEventListener("scroll", checkBoxes);
    window.addEventListener("load", checkBoxes);
    checkBoxes();

    return () => {
      window.removeEventListener("scroll", checkBoxes);
      window.removeEventListener("load", checkBoxes);
    };
  }, []);

  return (
    <div className="min-h-screen h-auto bg-gray-100">
      <h1 className="text-center p-4 text-3xl text-green-700 font-bold">
        Custom animation on scroll
      </h1>

      <div className="flex justify-center items-center flex-col">
        {Array.from({ length: 30 }, (_, index) => (
          <Card
            key={index}
            index={index}
            cardRef={(el) => (cardRefs.current[index] = el)}
            isVisible={visibleCards[index]}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ index, cardRef, isVisible }) {
  return (
    <div
      ref={cardRef}
      className={`
        h-[250px] w-[400px] bg-white m-2 rounded-md border shadow-lg
        group animation-on-scroll-card duration-700 flex justify-center items-center text-5xl text-white z-20
        transform transition-all ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}
      `}
      style={{
        backgroundImage: `url(https://picsum.photos/200/300?random=${index})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="group-hover:block hidden">{index + 1}</h1>
    </div>
  );
}

export default Scroll_Animation;
