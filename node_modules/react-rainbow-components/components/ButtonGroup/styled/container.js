"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _attachThemeAttrs = _interopRequireDefault(require("../../../styles/helpers/attachThemeAttrs"));

var _borderRadius = require("../../../styles/borderRadius");

var _templateObject;

var StyledContainer = (0, _attachThemeAttrs["default"])(_styledComponents["default"].div)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    display: inline-flex;\n\n    button {\n        border-radius: 0;\n        border-width: 1px;\n        margin-left: -1px;\n\n        &:focus {\n            z-index: 1;\n        }\n\n        &:hover {\n            z-index: 1;\n        }\n    }\n\n    > button:first-child,\n    > div:first-child > button {\n        border-radius: 100px 0 0 100px;\n    }\n\n    > button:last-child,\n    > div:last-child > button {\n        border-radius: 0 100px 100px 0;\n    }\n\n    > button:only-child,\n    > div:only-child > button {\n        border-radius: 100px;\n    }\n\n    ", "\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n"])), function (props) {
  return props.variant === 'shaded' && "\n        box-shadow: ".concat(props.shadows.shadow_10, ";\n        background-color: ").concat(props.palette.background.main, ";\n        border-radius: 100px;\n        > label:last-child > div {\n            display: none;\n        }\n        button {\n            border: none;\n            &::after {\n                content: '';\n                position: absolute;\n                right: 1px;\n                height: 20px;\n                width: 1px;\n                background-color: ").concat(props.palette.border.divider, ";\n                box-sizing: border-box;\n            }\n        }\n        button:last-of-type {\n            &::after {\n                content: none;\n            }\n        }\n    ");
}, function (props) {
  return props.borderRadius === 'square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n            > button:first-child {\n                border-radius: ").concat(_borderRadius.BORDER_RADIUS_SQUARE, " 0 0 ").concat(_borderRadius.BORDER_RADIUS_SQUARE, ";\n            };\n            > button:last-child {\n                border-radius: 0 ").concat(_borderRadius.BORDER_RADIUS_SQUARE, " ").concat(_borderRadius.BORDER_RADIUS_SQUARE, " 0;\n            };\n        ");
}, function (props) {
  return props.borderRadius === 'semi-square' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n            > button:first-child {\n                border-radius: ").concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, " 0 0 ").concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, ";\n            };\n            > button:last-child {\n                border-radius: 0 ").concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, " ").concat(_borderRadius.BORDER_RADIUS_SEMI_SQUARE, " 0;\n            };\n        ");
}, function (props) {
  return props.borderRadius === 'semi-rounded' && "\n            border-radius: ".concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n            > button:first-child {\n                border-radius: ").concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, " 0 0 ").concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, ";\n            };\n            > button:last-child {\n                border-radius: 0 ").concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, " ").concat(_borderRadius.BORDER_RADIUS_SEMI_ROUNDED, " 0;\n            };\n        ");
});
var _default = StyledContainer;
exports["default"] = _default;