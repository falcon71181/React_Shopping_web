"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _index = _interopRequireDefault(require("../index"));

var _AccordionSection = _interopRequireDefault(require("../../AccordionSection"));

describe('<Accordion />', function () {
  it('should be visible the dialog when the button of the section is clicked', (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
    var _render, getByRole;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _render = (0, _react2.render)(_react["default"].createElement(_index["default"], {
              onToggleSection: "string"
            }, _react["default"].createElement(_AccordionSection["default"], {
              name: "accordion-test-1",
              label: "Rainbow Accordion"
            }, _react["default"].createElement("div", {
              role: "dialog"
            }, "AccordionSection-1")))), getByRole = _render.getByRole;

            _react2.fireEvent.click(getByRole('button'));

            expect(getByRole('dialog')).toBeVisible();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should be visible the dialogues when multiple is passed and he button of the section is clicked', function () {
    var activeNames = ['accordion-test-1'];

    var _render2 = (0, _react2.render)(_react["default"].createElement(_index["default"], {
      multiple: true,
      activeSectionNames: activeNames
    }, _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-1",
      label: "Rainbow Accordion"
    }, _react["default"].createElement("div", {
      role: "dialog"
    }, "AccordionSection-1")), _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-2",
      label: "Rainbow Accordion"
    }, _react["default"].createElement("div", {
      role: "dialog"
    }, "AccordionSection-2")))),
        getAllByRole = _render2.getAllByRole;

    _react2.fireEvent.click(getAllByRole('button')[1]);

    var sections = getAllByRole('dialog');
    sections.forEach(function (section) {
      expect(section).toBeVisible();
    });
  });
  it('should not fire an event when click in the AccordionSection and disabled is passed', function () {
    var handleToggleSectionMockFn = jest.fn();

    var _render3 = (0, _react2.render)(_react["default"].createElement(_index["default"], {
      onToggleSection: handleToggleSectionMockFn
    }, _react["default"].createElement(_AccordionSection["default"], {
      disabled: true,
      name: "accordion-test-1",
      label: "Rainbow Accordion"
    }, "AccordionSection-1"))),
        getByRole = _render3.getByRole;

    _react2.fireEvent.click(getByRole('button'));

    expect(handleToggleSectionMockFn).toHaveBeenCalledTimes(0);
  });
  it('should fire an event with the right arguments when click in the AccordionSection and multiple is not passed', function () {
    var handleToggleSectionMockFn = jest.fn();

    var _render4 = (0, _react2.render)(_react["default"].createElement(_index["default"], {
      onToggleSection: handleToggleSectionMockFn
    }, _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-1",
      label: "Rainbow Accordion"
    }, "AccordionSection-1"))),
        getByRole = _render4.getByRole;

    _react2.fireEvent.click(getByRole('button'));

    expect(handleToggleSectionMockFn).toHaveBeenCalledWith(expect.any(Object), 'accordion-test-1');
  });
  it('should fire an event with the right arguments when click in the second AccordionSection and multiple is passed', function () {
    var handleToggleSectionMockFn = jest.fn();
    var activeNames = ['accordion-test-1'];

    var _render5 = (0, _react2.render)(_react["default"].createElement(_index["default"], {
      multiple: true,
      activeSectionNames: activeNames,
      onToggleSection: handleToggleSectionMockFn
    }, _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-1",
      label: "Rainbow Accordion"
    }, "AccordionSection-1"), _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-2",
      label: "Rainbow Accordion"
    }, "AccordionSection-2"))),
        getAllByRole = _render5.getAllByRole;

    _react2.fireEvent.click(getAllByRole('button')[1]);

    expect(handleToggleSectionMockFn).toHaveBeenCalledWith(expect.any(Object), ['accordion-test-1', 'accordion-test-2']);
  });
  it('should fire an event with the right arguments when click in the expanded first AccordionSection', function () {
    var handleToggleSectionMockFn = jest.fn();
    var activeNames = 'accordion-test-1';

    var _render6 = (0, _react2.render)(_react["default"].createElement(_index["default"], {
      activeSectionNames: activeNames,
      onToggleSection: handleToggleSectionMockFn
    }, _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-1",
      label: "Rainbow Accordion"
    }, "AccordionSection-1"), _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-2",
      label: "Rainbow Accordion"
    }, "AccordionSection-2"))),
        getAllByRole = _render6.getAllByRole;

    _react2.fireEvent.click(getAllByRole('button')[0]);

    expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual('');
  });
  it('should fire an event with the right arguments when click in the second AccordionSection, multiple is passed and both AccordionSection are expanded', function () {
    var handleToggleSectionMockFn = jest.fn();
    var activeNames = ['accordion-test-1', 'accordion-test-2'];

    var _render7 = (0, _react2.render)(_react["default"].createElement(_index["default"], {
      multiple: true,
      activeSectionNames: activeNames,
      onToggleSection: handleToggleSectionMockFn
    }, _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-1",
      label: "Rainbow Accordion"
    }, "AccordionSection-1"), _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-2",
      label: "Rainbow Accordion"
    }, "AccordionSection-2"))),
        getAllByRole = _render7.getAllByRole;

    _react2.fireEvent.click(getAllByRole('button')[1]);

    expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual(['accordion-test-1']);
  });
  it('should fire an event with the right arguments when click in the second AccordionSection, it is collapsed for the first time and multiple is passed', function () {
    var handleToggleSectionMockFn = jest.fn();

    var _render8 = (0, _react2.render)(_react["default"].createElement(_index["default"], {
      multiple: true,
      onToggleSection: handleToggleSectionMockFn
    }, _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-1",
      label: "Rainbow Accordion"
    }, "AccordionSection-1"), _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-2",
      label: "Rainbow Accordion"
    }, "AccordionSection-2"))),
        getAllByRole = _render8.getAllByRole;

    _react2.fireEvent.click(getAllByRole('button')[1]);

    expect(handleToggleSectionMockFn.mock.calls[0][1]).toEqual(['accordion-test-2']);
  });
  it('should set ariaExpanded to true in button when the AccordionSection is expanded', function () {
    var activeNames = 'accordion-test-1';

    var _render9 = (0, _react2.render)(_react["default"].createElement(_index["default"], {
      activeSectionNames: activeNames
    }, _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-1",
      label: "Rainbow Accordion"
    }, "AccordionSection-1"))),
        getByRole = _render9.getByRole;

    expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });
  it('should set ariaExpanded to false in button when the AccordionSection is collapsed', function () {
    var _render10 = (0, _react2.render)(_react["default"].createElement(_index["default"], null, _react["default"].createElement(_AccordionSection["default"], {
      label: "Rainbow Accordion"
    }, "AccordionSection-1"))),
        getByRole = _render10.getByRole;

    expect(getByRole('button')).toHaveAttribute('aria-expanded', 'false');
  });
  it('should set aria-hidden to false in container of the content when the content is expanded', function () {
    var activeNames = 'accordion-test-1';

    var _render11 = (0, _react2.render)(_react["default"].createElement(_index["default"], {
      activeSectionNames: activeNames
    }, _react["default"].createElement(_AccordionSection["default"], {
      name: "accordion-test-1",
      label: "Rainbow Accordion"
    }, "AccordionSection-1"))),
        getByText = _render11.getByText;

    expect(getByText('AccordionSection-1')).toHaveAttribute('aria-hidden', 'false');
  });
});