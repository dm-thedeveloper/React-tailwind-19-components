import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

function Dad_jokes() {
  const [joke, setJoke] = useState("");

  const generateQuore = async () => {
    try {
      console.log("Generatin");
      const response = await axios.get(`https://icanhazdadjoke.com/`, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log("rEspones", response.data.joke);

      setJoke(response?.data?.joke);
    } catch (error) {
      console.log("Not Generating ...,", error);
    }
  };

  useEffect(() => {
    generateQuore();
  }, []);
  return (
    <>
      {/* Body */}
      <div className="h-screen w-full bg-[tomato] text-white flex justify-center items-center">
        {/* Container */}
        <div
          onClick={generateQuore}
          title="Click for new joke"
          className="dad-jokes-container  relative max-w-[90%] w-[400px] active:scale-[.97] h-[200px] bg-red-500 rounded-lg hover:scale-[.99] duration-200 p-5 flex justify-center items-center"
        >
          <p className="text-center z-20  select-none text-xl ">{joke}</p>
        </div>
      </div>
    </>
  );
}

export default Dad_jokes;
