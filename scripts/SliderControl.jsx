"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react-hooks/exhaustive-deps */

var SliderControl = function SliderControl(props) {
  var value;
  (0, _react.useEffect)(function () {
    var slideValue = document.querySelector("span");
    var inputSlider = document.querySelector("input");
    inputSlider.oninput = function () {
      value = inputSlider.value;
      slideValue.textContent = value;
      if (props.max === 50) {
        slideValue.style.left = value * 2 + "%";
      } else if (props.max === 200) {
        slideValue.style.left = value / 2 + "%";
      } else if (props.max === 10) {
        slideValue.style.left = value * 10 + "%";
      } else {
        slideValue.style.left = value + "%";
      }
      slideValue.classList.add("show");
    };
    inputSlider.onblur = function () {
      slideValue.classList.remove("show");
    };
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "range"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sliderValue"
  }, /*#__PURE__*/_react["default"].createElement("span", null, value)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "value left"
  }, props.min), /*#__PURE__*/_react["default"].createElement("input", {
    type: "range",
    min: props.min,
    max: props.max,
    defaultValue: props.defaultValue,
    steps: props.step,
    onChange: function onChange(e) {
      props.onChange(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "value right"
  }, props.max))));
};
exports.SliderControl = SliderControl;
SliderControl.propTypes = {
  'min': _propTypes["default"].number,
  'max': _propTypes["default"].number,
  'step': _propTypes["default"].number,
  'defaultValue': _propTypes["default"].number,
  'onChange': _propTypes["default"].func
};
SliderControl.defaultProps = {
  'min': 0,
  'max': 100,
  'step': 1,
  'defaultValue': 50,
  'onChange': setValue()
};
