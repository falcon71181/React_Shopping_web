"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ImageContainer;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _image = _interopRequireDefault(require("./styled/image"));

var _imageFooter = _interopRequireDefault(require("./styled/imageFooter"));

var _footerTitle = _interopRequireDefault(require("./styled/footerTitle"));

var _footerDescription = _interopRequireDefault(require("./styled/footerDescription"));

function ImageContainer(props) {
  var imageSrc = props.imageSrc,
      assistiveText = props.assistiveText,
      hasContent = props.hasContent,
      header = props.header,
      description = props.description;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_image["default"], {
    style: imageSrc
  }), _react["default"].createElement(_AssistiveText["default"], {
    text: assistiveText
  }), _react["default"].createElement(_RenderIf["default"], {
    isTrue: hasContent
  }, _react["default"].createElement(_imageFooter["default"], null, _react["default"].createElement(_RenderIf["default"], {
    isTrue: header
  }, _react["default"].createElement(_footerTitle["default"], {
    title: "Imagen Header"
  }, header)), _react["default"].createElement(_RenderIf["default"], {
    isTrue: description
  }, _react["default"].createElement(_footerDescription["default"], null, description)))));
}

ImageContainer.propTypes = {
  imageSrc: _propTypes["default"].object,
  assistiveText: _propTypes["default"].string,
  hasContent: _propTypes["default"].bool.isRequired,
  header: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  description: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node])
};
ImageContainer.defaultProps = {
  imageSrc: {},
  assistiveText: undefined,
  header: undefined,
  description: undefined
};