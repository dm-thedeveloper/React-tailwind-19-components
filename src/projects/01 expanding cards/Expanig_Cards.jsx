import React, { useState } from "react";
import Body from "../../components/Body";
import cards from "./cards.json";
import Card from "./Card";

function Expanig_Cards() {
  const [index , setIndex] = useState(1);

  return (
    <>
      <Body>
        {/* body */}
        <div className="h-screen w-screen flex justify-center items-center">
          {/* container */}
          <div className="md:w-[90%] h-[80vh] flex md:flex-row flex-col gap-2 md:gap-4">
            {cards.map((card) => (
              <Card image={card.imageUrl} index={index} setIndex={setIndex} id={card.id} heading ={card.heading} />
            ))}
          </div>
        </div>
      </Body>
    </>
  );
}

export default Expanig_Cards;
