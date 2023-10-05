"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getElementsOptions;

function getElementsOptions(locale) {
  return {
    locale: locale,
    fonts: [{
      cssSrc: 'https://fonts.googleapis.com/css?family=Lato&display=swap'
    }]
  };
}