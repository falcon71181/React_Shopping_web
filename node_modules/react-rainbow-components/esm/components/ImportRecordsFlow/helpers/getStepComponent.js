import StepOne from '../stepOne';
import StepTwo from '../stepTwo';
import StepThree from '../stepThree';
import StepFour from '../stepFour';
var defaultStepsMap = {
  'step-1': StepOne,
  'step-2': StepTwo,
  'step-3': StepThree,
  'step-4': StepFour
};

function EmptyComponent() {
  return null;
}

export default function getStepComponent(_ref) {
  var currentStep = _ref.currentStep;
  return defaultStepsMap[currentStep] || EmptyComponent;
}