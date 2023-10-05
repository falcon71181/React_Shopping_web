import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import { mount } from 'enzyme';
import PrimitiveMenu from '..';
import ButtonIcon from '../../ButtonIcon';

var mountWithRef = function mountWithRef(elWithRef, options) {
  var WithRef = function WithRef() {
    return elWithRef;
  };

  return mount(React.createElement(WithRef, null), options);
};

describe('<PrimitiveMenu/>', function () {
  beforeEach(function () {
    Element.prototype.getClientRects = jest.fn(function () {
      return [{
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0
      }];
    });
  });
  it('should focus the button when the focus method is called', function () {
    var menuRef;
    var component = mountWithRef(React.createElement(PrimitiveMenu, {
      ref: function ref(_ref) {
        return menuRef = _ref;
      },
      trigger: ButtonIcon
    }));
    menuRef.focus();
    var focusedElementDataId = document.activeElement.getAttribute('data-id');
    var buttonDataId = component.find('button').prop('data-id');
    expect(focusedElementDataId).toBe(buttonDataId);
  });
  it('should blur the button when the blur method is called', function () {
    var menuRef;
    var component = mountWithRef(React.createElement(PrimitiveMenu, {
      ref: function ref(_ref2) {
        return menuRef = _ref2;
      },
      trigger: ButtonIcon
    }));
    var buttonDataId = component.find('button').prop('data-id');
    menuRef.focus();
    expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
    menuRef.blur();
    expect(document.activeElement.getAttribute('data-id')).toBeNull();
  });
  it('should set the isLoading passed in the MenuContent', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var component;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            component = mount(React.createElement(PrimitiveMenu, {
              trigger: ButtonIcon,
              isLoading: true
            }, React.createElement("span", null)));
            component.find(ButtonIcon).simulate('click');
            expect(component.find('MenuContent').prop('isLoading')).toBe(true);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should render the children passed', function () {
    var component = mount(React.createElement(PrimitiveMenu, {
      trigger: ButtonIcon
    }, React.createElement("span", {
      "data-id": "menu-children"
    }, "menu content")));
    expect(component.find('span[data-id="menu-children"]').exists()).toBe(false);
    component.find(ButtonIcon).simulate('click');
    expect(component.find('span[data-id="menu-children"]').exists()).toBe(true);
    expect(component.find('span[data-id="menu-children"]').text()).toBe('menu content');
  });
  it('should set the role as menu in the ul element', function () {
    var component = mount(React.createElement(PrimitiveMenu, {
      trigger: ButtonIcon
    }, React.createElement("span", null)));
    component.find(ButtonIcon).simulate('click');
    expect(component.find('ul').prop('role')).toBe('menu');
  });
  it('should set the title passed as the aria-label in the ul element', function () {
    var component = mount(React.createElement(PrimitiveMenu, {
      trigger: ButtonIcon,
      title: "button title",
      assistiveText: "assistive description"
    }, React.createElement("span", null)));
    component.find(ButtonIcon).simulate('click');
    expect(component.find('ul').prop('aria-label')).toBe('button title');
  });
  it('should set the assistiveText passed as the aria-label in the ul element when the title is not passed', function () {
    var component = mount(React.createElement(PrimitiveMenu, {
      trigger: ButtonIcon,
      assistiveText: "assistive description"
    }, React.createElement("span", null)));
    component.find(ButtonIcon).simulate('click');
    expect(component.find('ul').prop('aria-label')).toBe('assistive description');
  });
});