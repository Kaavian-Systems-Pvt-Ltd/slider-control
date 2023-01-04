/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SliderControl = (props) => {
  const [Value, setValue] = useState();
  let value ;
  useEffect(() => {
    console.log(Value);
    const slideValue = document.querySelector("span");
    const inputSlider = document.querySelector("input");
    inputSlider.oninput = (()=>{
      value = inputSlider.value;
      slideValue.textContent = value;
      if(props.max === 50) {
        slideValue.style.left = (value*2) + "%";
      } else if(props.max === 200) {
        slideValue.style.left = (value/2) + "%";
      } else if(props.max === 10) {
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
          {props.min}</div>
        <input type="range" min={props.min} max={props.max} defaultValue={props.defaultValue} steps={props.step} onChange={handleChange}/>
        <div className="value right">
          {max}</div>
      </div>
    </div>
  </div>
   )
}

export default SliderControl;

SliderControl.propTypes = {
  'min': PropTypes.number,
  'max': PropTypes.number,
  'step': PropTypes.number,
  'defaultValue': PropTypes.number,
  'handleChange' : PropTypes.func,
}

SliderControl.defaultProps = {
  'min' : 0,
  'max' : 100,
  'step' : 1,
  'defaultValue' : 50,
  'handleChange': handleChange,
}