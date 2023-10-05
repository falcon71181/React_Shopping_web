"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

var _ = require("..");

var getBrowserLocale = _interopRequireWildcard(require("../getBrowserLocale"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('getLocale', function () {
  beforeAll(function () {
    getBrowserLocale["default"] = jest.fn(function () {
      return 'es-ES';
    });
  });
  it('should return the browser local', function () {
    var contexts = [{}, null, undefined, {
      value: 1
    }];
    contexts.forEach(function (context) {
      expect((0, _.getLocale)(context, undefined)).toBe('es-ES');
    });
  });
  it('should return the locale value', function () {
    expect((0, _.getLocale)({
      locale: 'en-US'
    }, undefined)).toBe('en-US');
  });
  it('should return the localeProp value', function () {
    expect((0, _.getLocale)({
      locale: 'en-US'
    }, 'fr-FR')).toBe('fr-FR');
  });
});