"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _VisualPickerOption = _interopRequireDefault(require("../../VisualPickerOption"));

describe('<VisualPicker/>', function () {
  it('should call onChanged with string value', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: onChangeFn
    }, _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option1"
    }), _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option2"
    }), _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option3"
    })));
    component.find('VisualPickerOption[name="option2"]').find('input').simulate('change');
    expect(onChangeFn).toHaveBeenCalledWith('option2');
  });
  it('should call onChanged with array of names', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: onChangeFn,
      multiple: true,
      value: ['option1']
    }, _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option1"
    }), _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option2"
    }), _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option3"
    })));
    component.find('VisualPickerOption[name="option3"]').find('input[type="checkbox"]').simulate('change', {
      target: {
        checked: true
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['option1', 'option3']);
  });
  it('should call onChanged with the new option selected when have it has one selected initially', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: onChangeFn,
      value: "option1"
    }, _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option1"
    }), _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option2"
    }), _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option3"
    })));
    component.find('VisualPickerOption[name="option3"]').find('input[type="radio"]').simulate('change');
    expect(onChangeFn).toHaveBeenCalledWith('option3');
  });
  it('should call onChanged with the right options when is multiple and the initial value is not an array', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: onChangeFn,
      multiple: true,
      value: undefined
    }, _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option1"
    }), _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option2"
    }), _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option3"
    })));
    component.find('VisualPickerOption[name="option3"]').find('input[type="checkbox"]').simulate('change', {
      target: {
        checked: true
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['option3']);
  });
  it('should call onChanged with the right options when is multiple, have values selected initially and deselect one', function () {
    var onChangeFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onChange: onChangeFn,
      multiple: true,
      value: ['option1', 'option3']
    }, _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option1"
    }), _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option2"
    }), _react["default"].createElement(_VisualPickerOption["default"], {
      name: "option3"
    })));
    component.find('VisualPickerOption[name="option3"]').find('input[type="checkbox"]').simulate('change', {
      target: {
        checked: false
      }
    });
    expect(onChangeFn).toHaveBeenCalledWith(['option1']);
  });
  it('should pass the right props to the Label component', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      label: "custom label",
      required: true
    }));
    expect(component.find('Label').props()).toEqual({
      label: 'custom label',
      required: true,
      readOnly: false,
      labelAlignment: 'center',
      hideLabel: false,
      as: 'legend',
      variant: 'default',
      size: 'medium'
    });
  });
});