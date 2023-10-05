import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top: -3000;\n    left: -3000;\n"])));

var ContentMetaResolver = function ContentMetaResolver(props) {
  var Content = props.component,
      onResolved = props.onResolved,
      children = props.children;
  var ref = useRef(null);
  useEffect(function () {
    var _ref$current$getClien = ref.current.getClientRects()[0],
        height = _ref$current$getClien.height,
        width = _ref$current$getClien.width;
    onResolved({
      height: height,
      width: width
    });
  }, []);
  var content = children || React.createElement(Content, null);
  return createPortal(React.createElement(Container, {
    ref: ref
  }, content), document.body);
};

export default ContentMetaResolver;