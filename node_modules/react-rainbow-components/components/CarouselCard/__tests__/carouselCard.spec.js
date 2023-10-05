"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _index = _interopRequireDefault(require("../index"));

var _CarouselImage = _interopRequireDefault(require("../../CarouselImage"));

describe('<CarouselCard />', function () {
  it('should render the children passed', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var _render, getAllByRole;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)(_react["default"].createElement(_index["default"], {
              disableAutoScroll: true
            }, _react["default"].createElement(_CarouselImage["default"], {
              src: "images/illustrations/rainbows-background.svg",
              header: "First Card",
              description: "First card description.",
              alternativeText: "First card accessible description.",
              href: "/"
            }), _react["default"].createElement(_CarouselImage["default"], {
              src: "images/illustrations/rainbow-background-2.svg",
              header: "Second Card",
              description: "Second card description.",
              alternativeText: "Second card accessible description.",
              href: "/"
            }), _react["default"].createElement(_CarouselImage["default"], {
              src: "images/illustrations/Illustration-rainbow-1.svg",
              header: "Third Card",
              description: "Third card description.",
              alternativeText: "Third card accessible description.",
              href: "/"
            }))), getAllByRole = _render.getAllByRole;
            expect(getAllByRole('tab').length).toBe(3);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should set the right state when disableAutoScroll is passed', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_index["default"], {
      disableAutoScroll: true
    })),
        getByTitle = _render2.getByTitle;

    expect(getByTitle('play')).toBeDefined();
  });
});