/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const SliderControl = (props) => {
  let value ;
  useEffect(() => {
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
  const setStyle ={
    'width': props.width,
  }
   return (
    <div>
    <div className="range" style={setStyle}>
      <div className="sliderValue">
        <span className='slide-values'>{value}</span>
      </div>
      <div className="field">
        <div className="value left">
          {props.min}</div>
        <input type="range" min={props.min} max={props.max} defaultValue={props.defaultValue} onChange={(e)=>{props.onChange(e.target.value)}}/>
        <div className="value right">
          {props.max}</div>
      </div>
    </div>
  </div>
   )
}

SliderControl.propTypes = {
  'min': PropTypes.number,
  'max': PropTypes.number,
  'defaultValue': PropTypes.number,
  'onChange' : PropTypes.func,
  'width': PropTypes.string
}

SliderControl.defaultProps = {
  'min' : 0,
  'max' : 100,
  'width': '100%',
  'defaultValue' : 50,
}
