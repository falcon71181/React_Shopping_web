import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { mount } from 'enzyme';
import { SPACE_KEY, TAB_KEY, ESCAPE_KEY, UP_KEY, RIGHT_KEY, DOWN_KEY, LEFT_KEY } from '../../../libs/constants';
import { Component as Picklist } from '..';
import PicklistOption from '../../PicklistOption';
import InternalOverlay from '../../InternalOverlay';
jest.mock('../../InternalOverlay', function () {
  return jest.fn(function () {
    for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
      props[_key] = arguments[_key];
    }

    return React.createElement("div", _extends({}, props, {
      "data-id": "internal-dropdown"
    }));
  });
});
var mockStartListening = jest.fn();
var mockStopListening = jest.fn();
jest.mock('../../../libs/WindowResize', function () {
  return jest.fn().mockImplementation(function () {
    return {
      startListening: mockStartListening,
      stopListening: mockStopListening
    };
  });
});
jest.useFakeTimers();
describe('<Picklist />', function () {
  beforeEach(function () {
    mockStartListening.mockClear();
    mockStopListening.mockClear();
  });
  it('should set the value label as value in the input element', function () {
    var component = mount(React.createElement(Picklist, {
      label: "Picklist",
      value: {
        label: 'Option 1'
      }
    }, React.createElement(PicklistOption, {
      label: "Option 1",
      name: "option1"
    })));
    expect(component.find('input').prop('value')).toBe('Option 1');
  });
  it('should open menu when click the picklist input', function () {
    var component = mount(React.createElement(Picklist, {
      label: "Picklist"
    }, React.createElement(PicklistOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(PicklistOption, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(PicklistOption, {
      label: "Option 3",
      name: "option3"
    })));
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
    component.find('input').simulate('click');
    expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
  });
  it('should open menu when picklist is focused and press a navigation key', function () {
    var keyCodes = [UP_KEY, LEFT_KEY, RIGHT_KEY, DOWN_KEY];
    keyCodes.forEach(function (keyCode) {
      var component = mount(React.createElement(Picklist, {
        label: "Picklist"
      }, React.createElement(PicklistOption, {
        label: "Option 1",
        name: "option1"
      }), React.createElement(PicklistOption, {
        label: "Option 2",
        name: "option2"
      }), React.createElement(PicklistOption, {
        label: "Option 3",
        name: "option3"
      })));
      var input = component.find('input');
      input.simulate('focus');
      expect(component.find('[aria-expanded=true]').exists()).toBe(false);
      expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
      input.simulate('keyDown', {
        keyCode: keyCode
      });
      expect(component.find('[aria-expanded=true]').exists()).toBe(true);
      expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
    });
  });
  it('should open menu when picklist is focused and press SPACE key', function () {
    var component = mount(React.createElement(Picklist, {
      label: "Picklist"
    }, React.createElement(PicklistOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(PicklistOption, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(PicklistOption, {
      label: "Option 3",
      name: "option3"
    })));
    var input = component.find('input');
    input.simulate('focus');
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
    input.simulate('keyDown', {
      keyCode: SPACE_KEY
    });
    expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
  });
  it('should close menu when is opened and click the picklist input', function () {
    var component = mount(React.createElement(Picklist, {
      label: "Picklist"
    }, React.createElement(PicklistOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(PicklistOption, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(PicklistOption, {
      label: "Option 3",
      name: "option3"
    })));
    component.instance().openMenu();
    component.update();
    expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
    component.find('input').simulate('click');
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
  });
  it('should close menu when is opened and press ESCAPE key', function () {
    var component = mount(React.createElement(Picklist, {
      label: "Picklist"
    }, React.createElement(PicklistOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(PicklistOption, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(PicklistOption, {
      label: "Option 3",
      name: "option3"
    })));
    component.instance().openMenu();
    component.update();
    expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
    component.find('input').simulate('keyDown', {
      keyCode: ESCAPE_KEY
    });
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
  });
  it('should close menu when is opened and press TAB key', function () {
    var component = mount(React.createElement(Picklist, {
      label: "Picklist"
    }, React.createElement(PicklistOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(PicklistOption, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(PicklistOption, {
      label: "Option 3",
      name: "option3"
    })));
    component.instance().openMenu();
    component.update();
    expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
    component.find('input').simulate('keyDown', {
      keyCode: TAB_KEY
    });
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
  });
  it('should not open menu when is readOnly and click the picklist label', function () {
    var component = mount(React.createElement(Picklist, {
      label: "Picklist",
      readOnly: true
    }, React.createElement(PicklistOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(PicklistOption, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(PicklistOption, {
      label: "Option 3",
      name: "option3"
    })));
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
    component.find('label').simulate('click');
    expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
  });
  it('should listen for window resize when opened', function () {
    var component = mount(React.createElement(Picklist, {
      label: "Picklist"
    }, React.createElement(PicklistOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(PicklistOption, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(PicklistOption, {
      label: "Option 3",
      name: "option3"
    })));
    component.find('input').simulate('click');
    expect(mockStartListening).toHaveBeenCalled();
  });
  it('should cancel the resize listener when closed', function () {
    var component = mount(React.createElement(Picklist, {
      label: "Picklist"
    }, React.createElement(PicklistOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(PicklistOption, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(PicklistOption, {
      label: "Option 3",
      name: "option3"
    })));
    component.instance().openMenu();
    component.update();
    component.find('input').simulate('click');
    expect(mockStopListening).toHaveBeenCalled();
  });
  it('should cancel the resize listener when unmounted', function () {
    var component = mount(React.createElement(Picklist, {
      label: "Picklist"
    }, React.createElement(PicklistOption, {
      label: "Option 1",
      name: "option1"
    }), React.createElement(PicklistOption, {
      label: "Option 2",
      name: "option2"
    }), React.createElement(PicklistOption, {
      label: "Option 3",
      name: "option3"
    })));
    component.unmount();
    expect(mockStopListening).toHaveBeenCalled();
  });
});