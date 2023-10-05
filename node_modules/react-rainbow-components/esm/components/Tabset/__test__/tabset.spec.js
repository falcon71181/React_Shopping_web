import React from 'react';
import { mount } from 'enzyme';
import Tabset from '../index';
import Tab from '../../Tab';
import { getLeftButtonDisabledState, getRightButtonDisabledState, isNotSameChildren, getChildrenTotalWidth, getChildrenTotalWidthUpToClickedTab, getTabIndexFromName } from '../utils';
import StyledButton from '../../Tab/styled/button';
jest.mock('./../utils.js', function () {
  return {
    getLeftButtonDisabledState: jest.fn(function () {
      return false;
    }),
    getRightButtonDisabledState: jest.fn(function () {
      return false;
    }),
    getChildTabNodes: jest.fn(function () {
      return [];
    }),
    insertChildOrderly: jest.fn(function () {
      return [];
    }),
    getActiveTabIndex: jest.fn(function () {
      return 0;
    }),
    getChildrenTotalWidth: jest.fn(function () {
      return 0;
    }),
    getChildrenTotalWidthUpToClickedTab: jest.fn(function () {
      return 0;
    }),
    isNotSameChildren: jest.fn(function () {
      return false;
    }),
    getUpdatedTabsetChildren: jest.fn(function () {
      return [];
    }),
    getTabIndexFromName: jest.fn(function () {
      return 0;
    })
  };
});
var registerTabMockFn = jest.fn();
describe('<Tabset />', function () {
  it('should render the children passed', function () {
    var component = mount(React.createElement(Tabset, null, React.createElement("p", null, "testing tabset")));
    expect(component.find('p').text()).toBe('testing tabset');
  });
  it('should render children with only one tab', function () {
    var component = mount(React.createElement(Tabset, {
      activeTabName: "tab-1"
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    })));
    var item1 = component.find('Tab[name="tab-1"]').find(StyledButton);
    expect(item1.prop('isActive')).toBe(true);
  });
  it('should set isActive to true only on the third Tab when activeTabName is tab-3', function () {
    var component = mount(React.createElement(Tabset, {
      activeTabName: "tab-3"
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    var item1 = component.find('Tab[name="tab-1"]').find(StyledButton);
    var item2 = component.find('Tab[name="tab-2"]').find(StyledButton);
    var item3 = component.find('Tab[name="tab-3"]').find(StyledButton);
    expect(item1.prop('isActive')).toBe(false);
    expect(item2.prop('isActive')).toBe(false);
    expect(item3.prop('isActive')).toBe(true);
  });
  it('should call onSelect event with the right data when an item is clicked', function () {
    var onSelectMockFn = jest.fn();
    var component = mount(React.createElement(Tabset, {
      onSelect: onSelectMockFn
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.instance().tabsetRef.current.scrollTo = jest.fn();
    var item2 = component.find('Tab[name="tab-2"]').find('button');
    item2.simulate('click');
    expect(onSelectMockFn).toHaveBeenCalledWith(expect.any(Object), 'tab-2');
  });
  it('should call scrollToSelectedTab function with the right data when an item is clicked', function () {
    var onSelectMockFn = jest.fn();
    var component = mount(React.createElement(Tabset, {
      onSelect: onSelectMockFn
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.instance().scrollToSelectedTab = jest.fn();
    var item1 = component.find('Tab[name="tab-1"]').find('button');
    item1.simulate('click');
    expect(component.instance().scrollToSelectedTab).toHaveBeenCalledWith('tab-1');
  });
  it('should not call updateButtonsVisibility function if any child is changed', function () {
    isNotSameChildren.mockReset();
    isNotSameChildren.mockReturnValue(false);
    var component = mount(React.createElement(Tabset, null, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.instance().updateButtonsVisibility = jest.fn();
    component.setProps();
    expect(component.instance().updateButtonsVisibility).toHaveBeenCalledTimes(0);
  });
  it('should call updateButtonsVisibility function and set isFirstTime to false when all children are registered and is first time', function () {
    isNotSameChildren.mockReset();
    isNotSameChildren.mockReturnValue(false);
    var component = mount(React.createElement(Tabset, {
      activeTabName: "tab-1"
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.instance().updateButtonsVisibility = jest.fn();
    expect(component.instance().isFirstTime).toBe(true);
    component.instance().tabsetChildren = [React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })];
    component.setState({
      key: Date.now()
    });
    expect(component.instance().updateButtonsVisibility).toHaveBeenCalledTimes(1);
    expect(component.instance().isFirstTime).toBe(false);
  });
  it('should set the left button disabled to true', function () {
    getLeftButtonDisabledState.mockReset();
    getLeftButtonDisabledState.mockReturnValue(true);
    var component = mount(React.createElement(Tabset, {
      activeTabName: "tab-1"
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.setState({
      areButtonsVisible: true
    });
    var leftButton = component.find('button[data-id="button-icon-element"]').at(0);
    expect(leftButton.prop('disabled')).toBe(true);
  });
  it('should set the right button disabled to true', function () {
    getRightButtonDisabledState.mockReset();
    getRightButtonDisabledState.mockReturnValue(true);
    var component = mount(React.createElement(Tabset, {
      activeTabName: "tab-1"
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.setState({
      areButtonsVisible: true
    });
    var leftButton = component.find('button[data-id="button-icon-element"]').at(1);
    expect(leftButton.prop('disabled')).toBe(true);
  });
  it('should set the areButtonsVisible to true when children total width is more than tabset width', function () {
    isNotSameChildren.mockReset();
    getChildrenTotalWidth.mockReturnValue(600);
    var component = mount(React.createElement(Tabset, {
      activeTabName: "tab-1"
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.instance().tabsetRef.current = {
      offsetWidth: 500
    };
    component.instance().tabsetChildren = [React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })];
    component.setState({
      key: Date.now()
    });
    expect(component.state().areButtonsVisible).toBe(true);
  });
  it('should set the areButtonsVisible to false when children total width is less than tabset width', function () {
    isNotSameChildren.mockReset();
    getChildrenTotalWidth.mockReturnValue(500);
    var component = mount(React.createElement(Tabset, {
      activeTabName: "tab-1"
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.instance().tabsetRef.current = {
      offsetWidth: 600
    };
    component.setState({
      tabsetChildren: [React.createElement(Tab, {
        label: "Tab-1",
        name: "tab-1",
        registerTab: registerTabMockFn
      }), React.createElement(Tab, {
        label: "Tab-2",
        name: "tab-2",
        registerTab: registerTabMockFn
      }), React.createElement(Tab, {
        label: "Tab-3",
        name: "tab-3",
        registerTab: registerTabMockFn
      })]
    });
    component.setProps();
    expect(component.state().areButtonsVisible).toBe(false);
  });
  it('should set the right scroll motion when click on the first tab', function () {
    getTabIndexFromName.mockReset();
    getTabIndexFromName.mockReturnValue(0);
    var onSelectMockFn = jest.fn();
    var component = mount(React.createElement(Tabset, {
      onSelect: onSelectMockFn,
      activeTabName: "tab-1"
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.instance().tabsetRef.current.scrollTo = jest.fn();
    var item1 = component.find('Tab[name="tab-1"]').find('button');
    item1.simulate('click');
    expect(component.instance().tabsetRef.current.scrollTo).toHaveBeenCalledWith(0, 0);
  });
  it('should set the right scroll motion when click on a tab that is out of view on the left side', function () {
    getChildrenTotalWidthUpToClickedTab.mockReset();
    getChildrenTotalWidthUpToClickedTab.mockReturnValue(400);
    getTabIndexFromName.mockReset();
    getTabIndexFromName.mockReturnValue(2);
    var onSelectMockFn = jest.fn();
    var component = mount(React.createElement(Tabset, {
      onSelect: onSelectMockFn
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.instance().tabsetRef.current = {
      scrollLeft: 600,
      offsetWidth: 600
    };
    component.instance().tabsetRef.current.scrollTo = jest.fn();
    var item2 = component.find('Tab[name="tab-2"]').find('button');
    item2.simulate('click');
    expect(component.instance().tabsetRef.current.scrollTo).toHaveBeenCalledWith(400, 0);
  });
  it('should set the right scroll motion when click on a tab that is out of view on the right side', function () {
    getChildrenTotalWidthUpToClickedTab.mockReset();
    getChildrenTotalWidthUpToClickedTab.mockReturnValue(500);
    getTabIndexFromName.mockReset();
    getTabIndexFromName.mockReturnValue(2);
    var onSelectMockFn = jest.fn();
    var component = mount(React.createElement(Tabset, {
      onSelect: onSelectMockFn
    }, React.createElement(Tab, {
      label: "Tab-1",
      name: "tab-1",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-2",
      name: "tab-2",
      registerTab: registerTabMockFn
    }), React.createElement(Tab, {
      label: "Tab-3",
      name: "tab-3",
      registerTab: registerTabMockFn
    })));
    component.instance().tabsetRef.current = {
      scrollLeft: 200,
      offsetWidth: 300
    };
    component.instance().tabsetRef.current.scrollTo = jest.fn();
    var item3 = component.find('Tab[name="tab-3"]').find('button');
    item3.simulate('click');
    expect(component.instance().tabsetRef.current.scrollTo).toHaveBeenCalledWith(220, 0);
  });
});