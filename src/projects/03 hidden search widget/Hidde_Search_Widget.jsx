import React, { useEffect, useRef, useState } from "react";
import Body from "../../components/Body";

function Hidde_Search_Widget() {
    const [open , setOpen] = useState(false)
    const btnRef = useRef();

    const handleOutSideClikc= (e)=>{

        if(btnRef.current && !btnRef.current.contains(e.target)){

            setOpen(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("mousedown", handleOutSideClikc)
        window.addEventListener("touchstart", handleOutSideClikc)
    },[]);

  return (

    <Body>

      {/* Body */}
      <div className="flex justify-center items-center h-screen bg-blue-700">

        {/* Search */}
        <div ref={btnRef} className="h-10  relative">

          <input placeholder="Search.." type="text" className={`h-10 px-2 outline-none border-none ${open ? "w-52":"w-10"} duration-300`} />

          <button  onClick={()=>setOpen(prev=> !prev)} className={`bg-white ${open? "translate-x-[200px] border-r-2 border":""} text-2xl duration-300 absolute top-0 left-0 flex justify-center items-center w-10 h-10`}>

            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </Body>
  );
}





function Hidde_Search_Widget2() {
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("touchstart", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-blue-600 flex justify-center items-center">
      {/* Search */}
      <div ref={inputRef} className="flex items-center relative">
        <input
          type="text"
          placeholder="Search here..."
          className={`h-10 duration-300 outline-none pl-2 pr-[30px] text-xl bg-white rounded ${
            show ? "max-w-[90%] w-[300px]" : "w-10"
          }`}
        />
        {/* Icon */}
        <button
          onClick={() => setShow((prev) => !prev)}
          className={`h-10 w-10 bg-white flex justify-center items-center text-2xl text-blue-800 absolute top-0 left-0 cursor-pointer ${
            show ? "translate-x-[250px]" : ""
          } duration-300`}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}



export {Hidde_Search_Widget2 , Hidde_Search_Widget}