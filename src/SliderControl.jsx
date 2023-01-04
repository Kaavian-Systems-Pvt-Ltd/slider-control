/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import './style.css'

const SliderControl = ({ defaultValue, min, max, step }) => {
  const [Value, setValue] = useState();
  let value ;
  useEffect(() => {
    console.log(Value);
    const slideValue = document.querySelector("span");
    const inputSlider = document.querySelector("input");
    inputSlider.oninput = (()=>{
      
      value = inputSlider.value;
      slideValue.textContent = value;
      if(max === 50) {
        slideValue.style.left = (value*2) + "%";
      } else if(max === 200) {
        slideValue.style.left = (value/2) + "%";
      } else if(max === 10) {
        slideValue.style.left = (value*10) + "%";
      } else {
        slideValue.style.left = (value) + "%";
      }
      slideValue.classList.add("show");
    });
    inputSlider.onblur = (()=>{
      slideValue.classList.remove("show");
    });
  })

  const handleChange = (event) => {
    setValue(event.target.value);
  };

   return (
    <div>
    <div className="range">
      <div className="sliderValue">
        <span>{Value}</span>
      </div>
      <div className="field">
        <div className="value left">
          {min}</div>
        <input type="range" min={min} max={max} defaultValue={defaultValue} steps={step} onChange={handleChange}/>
        <div className="value right">
          {max}</div>
      </div>
    </div>
  </div>
   )
}

export default SliderControl;
