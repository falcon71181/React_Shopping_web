"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _labelText = _interopRequireDefault(require("../labelText"));

var _hiddenElement = _interopRequireDefault(require("../../../Structural/hiddenElement"));

describe('<CheckboxRadioLabel/>', function () {
  describe('without hideLabel', function () {
    it('should set the inputId passed as the htmlFor prop in the label element', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        label: "Input Label",
        inputId: "input-213"
      }));
      expect(component.find('label').prop('htmlFor')).toBe('input-213');
    });
    it('should set the id passed as the id prop in the label element', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        label: "Input Label",
        id: "label-123"
      }));
      expect(component.find('label').prop('id')).toBe('label-123');
    });
    it('should render the label passed', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        label: "Input Label"
      }));
      expect(component.find('label').text()).toBe('Input Label');
    });
    it('should render the StyledLabelText component', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        label: "Input Label"
      }));
      expect(component.find(_labelText["default"]).exists()).toBe(true);
      expect(component.find(_hiddenElement["default"]).exists()).toBe(false);
    });
  });
  describe('with hideLabel', function () {
    it('should set the inputId passed as the htmlFor prop in the label element', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        hideLabel: true,
        label: "Input Label",
        inputId: "input-213"
      }));
      expect(component.find('label').prop('htmlFor')).toBe('input-213');
    });
    it('should set the id passed as the id prop in the label element', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        hideLabel: true,
        label: "Input Label",
        id: "label-123"
      }));
      expect(component.find('label').prop('id')).toBe('label-123');
    });
    it('should render the label passed', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        label: "Input Label",
        hideLabel: true
      }));
      expect(component.find('label').text()).toBe('Input Label');
    });
    it('should render the HiddenElement component', function () {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        label: "Input Label",
        hideLabel: true
      }));
      expect(component.find(_hiddenElement["default"]).exists()).toBe(true);
      expect(component.find(_labelText["default"]).exists()).toBe(false);
    });
  });
});