import React, { useEffect, useState } from "react";
import "./index.css"

function Button_Ripple_Effect() {

  // const [] = useEffect({9-op;})
 
  const handleOnclick = (e)=>{
    // console.log(e);
    console.log("clientX :" , e.clientX);
    console.log("clientY :" , e.clientY);
    console.log("offsetLeft :",e.target.offsetLeft);
    console.log("offsetTop :",e.target.offsetTop);
    
    
    
  }
  return (
    <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center font-roboto">

      <table className="bg-gray-500 p-4 w-64" >
        <tr>
          <th  >
            client
          </th>
          <th>offset</th>
        </tr>

      <tr className="flex" >
        <td>X</td>
        <td>Y</td>
      </tr>
      <tr  className="flex">
        <td>left</td>
        <td>Top</td>
      </tr>


      </table>


      <button  onClick={handleOnclick} className="py-4 px-8 bg-purple-800 uppercase text-2xl" >click me</button>
   
    </div>
  );
}

export default Button_Ripple_Effect;
// offsetheight: 64offsetLeft: 342offsetParent: bodyoffsetTop: 265offsetWidth: 172