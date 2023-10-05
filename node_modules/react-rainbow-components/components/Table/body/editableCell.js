"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EditableCell;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../../libs/constants");

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _editableCell = require("./styled/editableCell");

var _cancel = _interopRequireDefault(require("./icons/cancel"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function EditableCell(props) {
  var value = props.value,
      onChange = props.onChange,
      row = props.row,
      field = props.field;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isEditMode = _useState2[0],
      setIsEditMode = _useState2[1];

  var _useState3 = (0, _react.useState)(value),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      internalValue = _useState4[0],
      setInternalValue = _useState4[1];

  var inputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (isEditMode) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  var clear = function clear(event) {
    event.preventDefault();
    inputRef.current.focus();
    setInternalValue('');
  };

  var handleOnChange = function handleOnChange(event) {
    setInternalValue(event.target.value);
  };

  var fireOnChange = function fireOnChange() {
    if (value !== internalValue) {
      onChange({
        value: internalValue,
        row: row
      });
    }

    setIsEditMode(false);
  };

  var handleOnClick = function handleOnClick() {
    setIsEditMode(true);
  };

  var handleOnKeyDown = function handleOnKeyDown(event) {
    if (event.keyCode === _constants.ESCAPE_KEY) {
      setInternalValue(value);
      setIsEditMode(false);
    }

    if (event.keyCode === _constants.ENTER_KEY) {
      fireOnChange();
    }
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: !isEditMode
  }, _react["default"].createElement(_editableCell.SpanContainer, {
    onClick: handleOnClick
  }, _react["default"].createElement(_editableCell.StyledSpan, {
    title: value
  }, value), _react["default"].createElement(_editableCell.StyledEditIcon, null))), _react["default"].createElement(_RenderIf["default"], {
    isTrue: isEditMode
  }, _react["default"].createElement(_editableCell.RelativeInputContainer, null, _react["default"].createElement(_editableCell.StyledInput, {
    value: internalValue,
    onChange: handleOnChange,
    ref: inputRef,
    "aria-label": field,
    onBlur: fireOnChange,
    onKeyDown: handleOnKeyDown
  }), _react["default"].createElement(_editableCell.StyledButtonIcon, {
    variant: "base",
    icon: _react["default"].createElement(_cancel["default"], null),
    size: "medium",
    onMouseDown: clear,
    assistiveText: "Clear"
  }))));
}

EditableCell.propTypes = {
  value: _propTypes["default"].any,
  row: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  field: _propTypes["default"].string
};
EditableCell.defaultProps = {
  value: undefined,
  row: {},
  onChange: function onChange() {},
  field: undefined
};