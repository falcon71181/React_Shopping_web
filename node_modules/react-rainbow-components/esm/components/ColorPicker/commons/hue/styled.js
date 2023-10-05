import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import styled from 'styled-components';
import Slider from '../slider';
var StyledHueSlider = styled(Slider)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    input::-webkit-slider-runnable-track {\n        background: linear-gradient(\n            to right,\n            rgb(255, 0, 0) 0%,\n            rgb(255, 255, 0) 17%,\n            rgb(0, 255, 0) 33%,\n            rgb(0, 255, 255) 50%,\n            rgb(0, 0, 255) 67%,\n            rgb(255, 0, 255) 83%,\n            rgb(255, 0, 0) 100%\n        ) !important;\n    }\n\n    input::-moz-range-track {\n        background: linear-gradient(\n            to right,\n            rgb(255, 0, 0) 0%,\n            rgb(255, 255, 0) 17%,\n            rgb(0, 255, 0) 33%,\n            rgb(0, 255, 255) 50%,\n            rgb(0, 0, 255) 67%,\n            rgb(255, 0, 255) 83%,\n            rgb(255, 0, 0) 100%\n        ) !important;\n    }\n"])));
export default StyledHueSlider;