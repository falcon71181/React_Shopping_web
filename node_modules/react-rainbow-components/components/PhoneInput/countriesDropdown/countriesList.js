"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../../RenderIf"));

var _icon = _interopRequireDefault(require("../../Option/icon"));

var _styled = require("./styled");

var _hooks = require("./hooks");

var _styled2 = require("../styled");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CountriesList = (0, _react.memo)(function (props) {
  var countries = props.countries,
      country = props.country,
      itemsRef = props.itemsRef,
      handleCountryChange = props.handleCountryChange,
      handleActiveChange = props.handleActiveChange;
  var list = (0, _hooks.useSimulatedLoading)(countries, 15);
  return list.map(function (value, index) {
    var isoCode = value.isoCode,
        name = value.country,
        countryCode = value.countryCode,
        flagIcon = value.flagIcon;
    var isSelected = value === country;
    var formattedCountryCode = "(".concat(countryCode, ")");
    return _react["default"].createElement(_styled.StyledItem, {
      key: isoCode,
      ref: function ref(elem) {
        itemsRef.current[index] = elem;
        return itemsRef.current[index];
      },
      onClick: function onClick() {
        return handleCountryChange(value);
      },
      onMouseEnter: function onMouseEnter() {
        return handleActiveChange(index);
      },
      role: "option",
      "aria-selected": false,
      isSelected: isSelected
    }, _react["default"].createElement("div", null, _react["default"].createElement(_icon["default"], {
      icon: _react["default"].createElement(_styled2.StyledFlagIcon, {
        as: flagIcon
      }),
      isVisible: true,
      position: "left"
    }), name), _react["default"].createElement("div", null, _react["default"].createElement(_styled.StyledCountryCodeItem, null, formattedCountryCode), _react["default"].createElement(_RenderIf["default"], {
      isTrue: isSelected
    }, _react["default"].createElement(_styled.StyledCheckmarkIcon, null))));
  });
});
CountriesList.propTypes = {
  countries: _propTypes["default"].array,
  country: _propTypes["default"].object,
  itemsRef: _propTypes["default"].object,
  handleCountryChange: _propTypes["default"].func,
  handleActiveChange: _propTypes["default"].func
};
CountriesList.defaultProps = {
  countries: [],
  country: undefined,
  itemsRef: [],
  handleCountryChange: function handleCountryChange() {},
  handleActiveChange: function handleActiveChange() {}
};
var _default = CountriesList;
exports["default"] = _default;