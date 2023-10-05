"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getStepComponent;

var _stepOne = _interopRequireDefault(require("../stepOne"));

var _stepTwo = _interopRequireDefault(require("../stepTwo"));

var _stepThree = _interopRequireDefault(require("../stepThree"));

var _stepFour = _interopRequireDefault(require("../stepFour"));

var defaultStepsMap = {
  'step-1': _stepOne["default"],
  'step-2': _stepTwo["default"],
  'step-3': _stepThree["default"],
  'step-4': _stepFour["default"]
};

function EmptyComponent() {
  return null;
}

function getStepComponent(_ref) {
  var currentStep = _ref.currentStep;
  return defaultStepsMap[currentStep] || EmptyComponent;
}