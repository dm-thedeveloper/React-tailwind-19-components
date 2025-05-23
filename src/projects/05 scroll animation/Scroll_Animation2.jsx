import React, { useEffect, useRef, useState } from "react";
import Body from "../../components/Body";

const bgImage =
  "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Scroll_Animation2() {
  const cardsRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  const checkBoxes = () => {
    
    const StartFrom = window.innerHeight * 0.8; // 80% of vh

    const updatedVisibleCards = cardsRefs.current.map((card, index) => {
      // if(!card) return false;
      const boxTop = card.getBoundingClientRect().top;
      console.log(
        `${index}) ${boxTop} = ${boxTop < StartFrom}`
      );
      card.innerHTML = `${index}) ${Math.floor(boxTop)} = ${
        boxTop < StartFrom
      }`;
      return boxTop < StartFrom;
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
    <>
      <Body>
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed", // ✅ This makes it fixed
          }}
          className="w-full h-screen bg-gray-500 fixed inset-0"
        ></div>

        {/* Scrollable Content */}
        <div className="h-auto py-8 w-full relative bg-[blue] bg-opacity-20 overflow-auto">
          <h1 className="text-center text-5xl text-white my-14">
            Animation On Scroll
          </h1>

          <div className="flex justify-center items-center flex-col gap-6">
            {Array.from({ length: 15 }).map((_, index) => (
              <Card
                index={index}
                cardRef={(element) => (cardsRefs.current[index] = element)}
                isVisible  ={visibleCards[index]}
              />
            ))}
          </div>
        </div>
      </Body>
    </>
  );
}

function Card({ index, cardRef , isVisible }) {
  return (
    <>
      <div
        key={index}
        ref={cardRef}
        className={`h-[200px] flex justify-center items-center text-white text-5xl font-bold w-[400px] border-[5px] duration-500 bg-blue-600 ${isVisible ? "translate-y-0 opacity-[1]":"translate-y-8 opacity-0"}` }
      >
        {" "}
        {index + 1}{" "}
      </div>
    </>
  );
}
export default Scroll_Animation2;
