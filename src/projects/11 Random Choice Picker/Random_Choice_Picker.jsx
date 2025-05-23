import React, { useState, useEffect, useRef } from "react";

const Random_Choice_Picker2 = () => {
  const [tags, setTags] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const createTags = (input) => {
    const newTags = input
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
    setTags(newTags);
    setHighlightIndex(null); // Reset highlight on new input
  };

  const randomSelect = () => {
    const times = 30;
    let intervalCount = 0;

    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * tags.length);

      setHighlightIndex(randomIdx);

      intervalCount++;

      if (intervalCount >= times) {
        clearInterval(interval);

        setTimeout(() => {
          const finalIdx = Math.floor(Math.random() * tags.length);

          setHighlightIndex(finalIdx);
        }, 9000);
      }
    }, 100);
  };

  const handleKeyUp = (e) => {
    createTags(e.target.value);

    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.value = "";
      }, 10);

      setTimeout(() => {
        randomSelect();
      }, 20);
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl text-center">
        <h3 className="text-white text-lg font-semibold mb-4">
          Enter all of the choices divided by a comma (',').
          <br />
          Press Enter when you're done
        </h3>
        <textarea
          ref={textareaRef}
          className="w-full p-3 rounded text-base resize-none shadow-md"
          placeholder="Enter choices here..."
          onKeyUp={handleKeyUp}
          rows="4"
        />
        <div className="flex flex-wrap mt-4 justify-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`tag text-white rounded-full px-4 py-2 m-1 text-sm transition-all duration-200 ${
                highlightIndex === index ? "bg-blue-900" : "bg-orange-500"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

function Random_Choice_Picker() {
  const textareaRef = useRef(null);
  const [tags, setTags] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(null);
  console.log(highlightIndex);

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const createTags = (input) => {
    // console.log(input.split(","));
    const newTags = input
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
    // console.log(newTags);
    setTags(newTags);
    setHighlightIndex(null);
  };

  const randomSelect = () => {
    const times = 30;
    let intervalCount = 0;

    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * tags.length);
      setHighlightIndex(randomIdx);
      intervalCount++;

      if (intervalCount >= times) {
        clearInterval(interval);
        setTimeout(() => {
          const finalIdx = Math.floor(Math.random() * tags.length);
          setHighlightIndex(finalIdx);
        }, 9000);
      }
    }, 100);
  };

  const handleKeyUp = (e) => {
    // console.log(e);
    // console.log(e.target.value);
    createTags(e.target.value);

    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.value = "";
      }, 10);

      setTimeout(() => {
        // Random Choice Picker or Select
        randomSelect();
      }, 20);
    }
  };

  return (
    <>
      <div className="min-h-screen h-auto w-full bg-blue-500 pt-[100px]">
        <div className="max-w-[600px] bg-whit w-[90%] mx-auto ">
          <h1 className="text-center text-white text-3xl">
            {" "}
            <b className="italic"> Ramdom Choice Picker </b>, Separer Every
            Choice with the ( , ) ~COMMA
          </h1>

          <div className="">
            <textarea
              onKeyUp={handleKeyUp}
              ref={textareaRef}
              name=""
              className="w-full mt-7 resize-none p-2 rounded-md text-xl focus:border-blue-900 outline-none focus:border-2"
              rows={4}
              id=""
            ></textarea>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={` text-white py-1 px-3 rounded-full text-2xl ${
                    highlightIndex == idx ? "bg-blue-600" : "bg-orange-500"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Random_Choice_Picker;
