"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Button = _interopRequireDefault(require("../../../Button"));

var _Chip = _interopRequireDefault(require("../../../Chip"));

var _assignFieldModal = _interopRequireDefault(require("../assignFieldModal"));

var _selectedFieldsToAssign = _interopRequireDefault(require("../selectedFieldsToAssign"));

var _assignFieldModalFooter = _interopRequireDefault(require("../assignFieldModalFooter"));

var _getFileFieldsOptions = _interopRequireDefault(require("../../helpers/getFileFieldsOptions"));

var _buttonIcon = _interopRequireDefault(require("../../../Chip/styled/buttonIcon"));

var _select = _interopRequireDefault(require("../styled/select"));

var _cancelButton = _interopRequireDefault(require("../styled/cancelButton"));

var attributes = {
  name: {
    required: true
  },
  email: {}
};
jest.mock('../../helpers/getFileFieldsOptions', function () {
  return jest.fn(function () {
    return [{
      label: 'Select database field to assign',
      value: 'default',
      disabled: true
    }, {
      label: 'First_Name',
      value: 'First_Name'
    }, {
      label: 'Last_Name',
      value: 'Last_Name'
    }, {
      label: 'Email',
      value: 'Email'
    }];
  });
});
describe('<AssignFieldModal />', function () {
  it('should open modal when modal open status is set to true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      attributes: attributes
    }));
    expect(component.find('Modal').prop('isOpen')).toBe(true);
  });
  it('should run close method when cancel button is clicked', function () {
    var onRequestCloseFn = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      attributes: attributes,
      onRequestClose: onRequestCloseFn
    }));
    component.find(_assignFieldModalFooter["default"]).find(_cancelButton["default"]).simulate('click');
    expect(onRequestCloseFn).toHaveBeenCalled();
  });
  it('should call getFileFieldsOptions with the columns passed', function () {
    var columns = ['First_Name', 'Last_Name', 'Email'];
    (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      attributes: attributes,
      columns: columns
    }));
    expect(_getFileFieldsOptions["default"]).toHaveBeenCalledWith(columns);
  });
  it('should call getFileFieldsOptions with the columns passed using filtered options', function () {
    var columns = ['First_Name', 'Last_Name', 'Email'];
    var fieldsMap = {
      name: 'First_Name,Last_Name'
    };
    var databaseFieldToAssign = 'name';
    (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      attributes: attributes,
      columns: columns,
      fieldsMap: fieldsMap,
      databaseFieldToAssign: databaseFieldToAssign
    }));
    expect(_getFileFieldsOptions["default"]).toHaveBeenCalledWith(['Email']);
  });
  it('should have Preview component with their params properly passed', function () {
    var data = [{
      name: 'John',
      email: 'john@gmail.com'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      databaseFieldToAssign: "name",
      data: data,
      attributes: attributes
    }));
    expect(component.find('Preview').props()).toEqual({
      field: 'name',
      data: [{
        name: 'John',
        email: 'john@gmail.com'
      }],
      attributes: {
        name: {
          required: true
        },
        email: {}
      },
      fileFields: []
    });
  });
  it('should pass the right options to Select component', function () {
    var columns = ['First_Name', 'Last_Name', 'Email'];
    var fieldsMap = {
      name: 'First_Name'
    };
    var databaseFieldToAssign = 'name';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      attributes: attributes,
      columns: columns,
      fieldsMap: fieldsMap,
      databaseFieldToAssign: databaseFieldToAssign
    }));
    expect(component.find(_select["default"]).prop('options')).toEqual([{
      label: 'Select database field to assign',
      value: 'default',
      disabled: true
    }, {
      label: 'First_Name',
      value: 'First_Name'
    }, {
      label: 'Last_Name',
      value: 'Last_Name'
    }, {
      label: 'Email',
      value: 'Email'
    }]);
  });
  it('should set the right values to SelectedFieldsToAssign when fieldsMap and databaseFieldToAssign params exists', function () {
    var columns = ['First_Name', 'Last_Name', 'Email'];
    var fieldsMap = {
      name: 'First_Name,Last_Name'
    };
    var databaseFieldToAssign = 'name';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      attributes: attributes,
      columns: columns,
      fieldsMap: fieldsMap,
      databaseFieldToAssign: databaseFieldToAssign
    }));
    expect(component.find(_selectedFieldsToAssign["default"]).prop('values')).toEqual(['First_Name', 'Last_Name']);
  });
  it('should set the right values to SelectedFieldsToAssign when fieldsMap and databaseFieldToAssign params does not exists', function () {
    var columns = ['First_Name', 'Last_Name', 'Email'];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      attributes: attributes,
      columns: columns
    }));
    expect(component.find(_selectedFieldsToAssign["default"]).prop('values')).toEqual([]);
  });
  it('should fire onRequestClose when clicking assing button', function () {
    var onRequestCloseFn = jest.fn();
    var columns = ['First_Name', 'Last_Name', 'Email'];
    var fieldsMap = {
      name: 'First_Name,Last_Name'
    };
    var databaseFieldToAssign = 'name';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      attributes: attributes,
      onRequestClose: onRequestCloseFn,
      fieldsMap: fieldsMap,
      databaseFieldToAssign: databaseFieldToAssign,
      columns: columns
    }));
    component.find(_assignFieldModalFooter["default"]).find(_Button["default"]).at(1).simulate('click');
    expect(onRequestCloseFn).toHaveBeenCalled();
  });
  it('should fire onAssignField with the right values when clicking assing button', function () {
    var onAssignFieldFn = jest.fn();
    var columns = ['First_Name', 'Last_Name', 'Email'];
    var fieldsMap = {
      name: 'First_Name,Last_Name'
    };
    var databaseFieldToAssign = 'name';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      attributes: attributes,
      onAssignField: onAssignFieldFn,
      fieldsMap: fieldsMap,
      databaseFieldToAssign: databaseFieldToAssign,
      columns: columns
    }));
    component.find(_assignFieldModalFooter["default"]).find(_Button["default"]).at(1).simulate('click');
    expect(onAssignFieldFn).toHaveBeenCalledWith('name', ['First_Name', 'Last_Name']);
  });
  it('should update Select options, value and SelectedFieldsToAssign when changing Select value', function () {
    var columns = ['First_Name', 'Last_Name', 'Email'];
    var fieldsMap = {};
    var databaseFieldToAssign = 'name';
    var data = [{
      name: 'John',
      email: 'john@gmail.com'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      fieldsMap: fieldsMap,
      databaseFieldToAssign: databaseFieldToAssign,
      attributes: attributes,
      columns: columns,
      data: data
    }));
    component.find('select').simulate('change', {
      target: {
        value: 'Email'
      }
    });
    expect(component.find(_select["default"]).prop('options')).toEqual([{
      label: 'Select database field to assign',
      value: 'default',
      disabled: true
    }, {
      label: 'First_Name',
      value: 'First_Name'
    }, {
      label: 'Last_Name',
      value: 'Last_Name'
    }]);
    expect(component.find(_selectedFieldsToAssign["default"]).prop('values')).toEqual(['Email']);
  });
  it('should update Select options after removing a selectedFileToAssign', function () {
    var columns = ['First_Name', 'Last_Name', 'Email'];
    var fieldsMap = {
      name: 'First_Name,Last_Name'
    };
    var databaseFieldToAssign = 'name';
    var data = [{
      name: 'John',
      email: 'john@gmail.com'
    }];
    var component = (0, _enzyme.mount)(_react["default"].createElement(_assignFieldModal["default"], {
      isAssignFieldModalOpen: true,
      fieldsMap: fieldsMap,
      databaseFieldToAssign: databaseFieldToAssign,
      attributes: attributes,
      columns: columns,
      data: data
    }));
    component.find(_selectedFieldsToAssign["default"]).find(_Chip["default"]).at(1).find(_buttonIcon["default"]).simulate('click');
    expect(component.find(_selectedFieldsToAssign["default"]).prop('values')).toEqual(['First_Name']);
  });
});