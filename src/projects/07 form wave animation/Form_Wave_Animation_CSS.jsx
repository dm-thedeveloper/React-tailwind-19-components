import React from "react";

function Form_Wave_Animation_CSS() {
  const waveLabel = (text) =>
    text.split("").map((letter, idx) => <span key={idx} 
    style={{transitionDelay: `${idx * 50}ms`}}
    >
      {letter}
    </span>);

  return (
    <>
      <div className="Form-wave-body-css">
        <div className="waver-css-contaover">
          <h1>Please Login </h1>

          <div className="form-control-css">
            <input required type="email" placeholder=" " />
            <label htmlFor="">
              {waveLabel("Email")}
            </label>
          </div>


             <div className="form-control-css">
            <input required type="password" placeholder=" " />
            <label htmlFor="">
              {waveLabel("Password")}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form_Wave_Animation_CSS;
