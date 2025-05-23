import React, { useState } from "react";
import Body from "../../components/Body";
import "./index.css";

function FAQ() {
  const [index, setIndex] = useState(null);

  return (
    <Body>
      <div className="">
        <h1 className="text-center my-6 text-3xl font-bold opacity-70">
          Frequently Asked Questions
        </h1>
        {/* Container */}

        <div className="mt-5">
          {Array.from(webDevFAQs, (faq, idx) => (
            <FAQItem index={index} question={faq.question} image={faq.image} answer={faq.answer} setIndex={setIndex} idx={idx} />
          ))}
        </div>
      </div>
    </Body>
  );
}

function FAQItem({ idx, index, setIndex,question , answer , image}) {
  const open = index == idx ? true : false;

  return (
    <>
      <div
        key={idx}
        className={`mx-auto max-w-[600px] overflow-hidden z-10 border-2   mt-2 rounded-lg relative   ${
          open ? "shadow-lg faq-item-active border-gray-600 " : " border-gray-300"
        }`}
      >
        {
          open && 
          <div style={{
            backgroundImage:`url(${image})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"contain", 
            backgroundPositionX:"20px"


          }} className="absolute duration-300 opacity-20 left-0 h-[90%] top-2 min-w-[30%]"></div>
        }

        <div className="relative inset-0 p-3 bg-gray-]]400">

        <div
          title={open ? "Close" : "Open"}
          onClick={() => setIndex(index == idx ? null : idx)}
          className="flex items-center justify-between"
        >
          <h1 className="text-xl cursor-pointer  flex-1 font-semibold">
            {question}
          </h1>
          <button
            className={`cursor-pointer duration-300 h-6 flex justify-center items-center w-6 rounded-full ${
              open ? "bg-gray-700 text-white" : ""
            } `}
          >
            {open ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i class="fa-solid fa-chevron-down"></i>
            )}
          </button>
        </div>
        <div
  className={`transition-all overflow-hidden ${
    open ? "max-h-[500px] opacity-100 mt-2 duration-300" : "max-h-0 duration-100 opacity-0"
  }`}
>
  <p
    className="ml-3 z-20"
  >
    {answer}
  </p>
</div>

        </div>
      
      </div>
    </>
  );
}

export default FAQ;
const webDevFAQs = [
  {
    id: 1,
    question: "What is HTML and why is it important?",
    answer:
      "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It forms the backbone of web pages by defining elements like headings, paragraphs, links, and images.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png", // HTML icon
  },
  {
    id: 2,
    question: "What is the difference between CSS and JavaScript?",
    answer:
      "CSS (Cascading Style Sheets) is used for styling and layout of web pages, while JavaScript is a programming language that enables dynamic interactions, animations, and logic on the web page.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png", // CSS icon
  },
  {
    id: 3,
    question: "What is the role of a frontend developer?",
    answer:
      "A frontend developer is responsible for implementing visual and interactive elements that users engage with in a web application. They use HTML, CSS, JavaScript, and frameworks like React or Vue.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", // frontend icon
  },
  {
    id: 4,
    question: "What is a responsive website?",
    answer:
      "A responsive website automatically adjusts its layout and content to fit various screen sizes and devices, providing an optimal user experience on desktops, tablets, and smartphones.",
    image: "https://cdn-icons-png.flaticon.com/512/1139/1139997.png", // responsive icon
  },
  {
    id: 5,
    question: "What is the DOM in web development?",
    answer:
      "The DOM (Document Object Model) is a programming interface that allows JavaScript to interact with HTML and CSS, enabling dynamic content changes and user interaction without reloading the page.",
    image: "https://cdn-icons-png.flaticon.com/512/841/841364.png", // DOM icon
  },
];
