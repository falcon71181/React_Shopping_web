"use strict";

var _utils = require("../utils");

describe('<Tabset/> utils', function () {
  describe('insertChildOrderly', function () {
    it('should insert the child in the right order if the item in the nodes is at middle', function () {
      var childrenRefs = [{
        ref: 'item1'
      }, {
        ref: 'item2'
      }, {
        ref: 'item4'
      }, {
        ref: 'item5'
      }];
      var nodes = ['item1', 'item2', 'item3', 'item4', 'item5'];
      var expectedNodes = [{
        ref: 'item1'
      }, {
        ref: 'item2'
      }, {
        ref: 'item3'
      }, {
        ref: 'item4'
      }, {
        ref: 'item5'
      }];
      expect((0, _utils.insertChildOrderly)(childrenRefs, {
        ref: 'item3'
      }, nodes)).toEqual(expectedNodes);
    });
    it('should insert the child in the right order if the item in the nodes is at end', function () {
      var childrenRefs = [{
        ref: 'item1'
      }, {
        ref: 'item2'
      }, {
        ref: 'item3'
      }];
      var nodes = ['item1', 'item2', 'item3', 'item4'];
      var expectedNodes = [{
        ref: 'item1'
      }, {
        ref: 'item2'
      }, {
        ref: 'item3'
      }, {
        ref: 'item4'
      }];
      expect((0, _utils.insertChildOrderly)(childrenRefs, {
        ref: 'item4'
      }, nodes)).toEqual(expectedNodes);
    });
  });
  describe('getChildTabNodes', function () {
    var elements = [{
      element: 'a',
      innerText: 'Julio'
    }, {
      element: 'a',
      innerText: 'Pepe'
    }];
    var ref = {
      querySelectorAll: jest.fn(function () {
        return elements;
      })
    };
    it('should call querySelectorAll with [role="tab"]', function () {
      (0, _utils.getChildTabNodes)(ref);
      expect(ref.querySelectorAll).toHaveBeenCalledWith('[role="tab"]');
    });
    it('should return the elements resolved by querySelectorAll', function () {
      expect((0, _utils.getChildTabNodes)(ref)).toEqual(elements);
    });
    it('should return an empty array if anything is passed', function () {
      expect((0, _utils.getChildTabNodes)()).toEqual([]);
    });
  });
  describe('getTabIndexFromName', function () {
    it('should return the right index', function () {
      var tabChildren = [{
        name: 'tab-1'
      }, {
        name: 'tab-2'
      }, {
        name: 'tab-3'
      }, {
        name: 'tab-4'
      }, {
        name: 'tab-5'
      }];
      var tabNames = ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5'];
      tabNames.forEach(function (activeTabName, index) {
        expect((0, _utils.getTabIndexFromName)(tabChildren, activeTabName)).toBe(index);
      });
    });
  });
  describe('getChildrenTotalWidth', function () {
    it('should return 0 when any children in tabset has width', function () {
      var tabsetChildren = [{
        name: 'pizza',
        ref: {
          offsetWidth: 0
        }
      }, {
        name: 'onion',
        ref: {
          offsetWidth: 0
        }
      }, {
        name: 'tomato',
        ref: {
          offsetWidth: 0
        }
      }];
      expect((0, _utils.getChildrenTotalWidth)(tabsetChildren)).toBe(0);
    });
    it('should return 0 when tasbset has any children', function () {
      var tabsetChildren = [];
      expect((0, _utils.getChildrenTotalWidth)(tabsetChildren)).toBe(0);
    });
    it('should return the right total children width in tabset', function () {
      var tabsetChildren = [{
        name: 'pizza',
        ref: {
          offsetWidth: 1
        }
      }, {
        name: 'onion',
        ref: {
          offsetWidth: 2
        }
      }, {
        name: 'tomato',
        ref: {
          offsetWidth: 3
        }
      }];
      expect((0, _utils.getChildrenTotalWidth)(tabsetChildren)).toBe(6);
    });
  });
  describe('getChildrenTotalWidthUpToClickedTab', function () {
    it('should return the right total children width in tabset when click the second tab', function () {
      var tabIndex = 1;
      var tabsetChildren = [{
        name: 'pizza',
        ref: {
          offsetWidth: 1
        }
      }, {
        name: 'onion',
        ref: {
          offsetWidth: 2
        }
      }, {
        name: 'tomato',
        ref: {
          offsetWidth: 3
        }
      }];
      expect((0, _utils.getChildrenTotalWidthUpToClickedTab)(tabsetChildren, tabIndex)).toBe(1);
    });
    it('should return 0 when click the first tab', function () {
      var tabIndex = 0;
      var tabsetChildren = [{
        name: 'pizza',
        ref: {
          offsetWidth: 1
        }
      }, {
        name: 'onion',
        ref: {
          offsetWidth: 2
        }
      }, {
        name: 'tomato',
        ref: {
          offsetWidth: 3
        }
      }];
      expect((0, _utils.getChildrenTotalWidthUpToClickedTab)(tabsetChildren, tabIndex)).toBe(0);
    });
  });
  describe('isNotSameChildren', function () {
    it('should return true when a children in the tabset was changed in the same position', function () {
      var tabsetChildren = [{
        props: {
          name: 'pizza'
        }
      }, {
        props: {
          name: 'onion'
        }
      }, {
        props: {
          name: 'tomato'
        }
      }];
      var prevTabsetChildren = [{
        props: {
          name: 'pizza'
        }
      }, {
        props: {
          name: 'onion'
        }
      }, {
        props: {
          name: 'mushroom'
        }
      }];
      expect((0, _utils.isNotSameChildren)(tabsetChildren, prevTabsetChildren)).toBe(true);
    });
    it('should return false when any children in tabset was changed in the same position', function () {
      var tabsetChildren = [{
        props: {
          name: 'tomato'
        }
      }, {
        props: {
          name: 'pizza'
        }
      }, {
        props: {
          name: 'apple'
        }
      }];
      var prevTabsetChildren = [{
        props: {
          name: 'tomato'
        }
      }, {
        props: {
          name: 'pizza'
        }
      }, {
        props: {
          name: 'apple'
        }
      }];
      expect((0, _utils.isNotSameChildren)(tabsetChildren, prevTabsetChildren)).toBe(false);
    });
  });
  describe('getUpdatedTabsetChildren', function () {
    it('should return an updated tabset with the changed tab when a name to update exist in the tabset children', function () {
      var tab = {
        name: 'mushroom',
        ref: {}
      };
      var nameToUpdate = 'tomato';
      var tabsetChildren = [{
        name: 'pizza',
        ref: {}
      }, {
        name: 'onion',
        ref: {}
      }, {
        name: 'tomato',
        ref: {}
      }];
      var newTabsetChildren = [{
        name: 'pizza',
        ref: {}
      }, {
        name: 'onion',
        ref: {}
      }, {
        name: 'mushroom',
        ref: {}
      }];
      expect((0, _utils.getUpdatedTabsetChildren)(tabsetChildren, tab, nameToUpdate)).toEqual(newTabsetChildren);
    });
    it('should return the same tabset when a name to update do not exist in the tabset children', function () {
      var tab = {
        name: 'mushroom',
        ref: {}
      };
      var nameToUpdate = 'mushroom';
      var tabsetChildren = [{
        name: 'pizza',
        ref: {}
      }, {
        name: 'onion',
        ref: {}
      }, {
        name: 'tomato',
        ref: {}
      }];
      expect((0, _utils.getUpdatedTabsetChildren)(tabsetChildren, tab, nameToUpdate)).toEqual(tabsetChildren);
    });
  });
  describe('getLeftButtonDisabledState', function () {
    it('should return true when screen width is less than 600px and first tab is active', function () {
      var activeTabName = 'pizza';
      var tabsetChildren = [{
        name: 'pizza',
        ref: {}
      }, {
        name: 'onion',
        ref: {}
      }, {
        name: 'tomato',
        ref: {}
      }];
      var screenWidth = 599;
      var scrollLeft = 0;
      expect((0, _utils.getLeftButtonDisabledState)({
        activeTabName: activeTabName,
        tabsetChildren: tabsetChildren,
        screenWidth: screenWidth,
        scrollLeft: scrollLeft
      })).toBe(true);
    });
    it('should return true when screen width is more than 600px and first tab is visible', function () {
      var activeTabName = 'onion';
      var tabsetChildren = [{
        name: 'pizza',
        ref: {}
      }, {
        name: 'onion',
        ref: {}
      }, {
        name: 'tomato',
        ref: {}
      }];
      var screenWidth = 601;
      var scrollLeft = 0;
      expect((0, _utils.getLeftButtonDisabledState)({
        activeTabName: activeTabName,
        tabsetChildren: tabsetChildren,
        screenWidth: screenWidth,
        scrollLeft: scrollLeft
      })).toBe(true);
    });
    it('should return false when screen width is more than 600px and first tab is not visible', function () {
      var activeTabName = 'onion';
      var tabsetChildren = [{
        name: 'pizza',
        ref: {}
      }, {
        name: 'onion',
        ref: {}
      }, {
        name: 'tomato',
        ref: {}
      }];
      var screenWidth = 601;
      var scrollLeft = 1;
      expect((0, _utils.getLeftButtonDisabledState)({
        activeTabName: activeTabName,
        tabsetChildren: tabsetChildren,
        screenWidth: screenWidth,
        scrollLeft: scrollLeft
      })).toBe(false);
    });
  });
  describe('getRightButtonDisabledState', function () {
    it('should return true when screen width is less than 600px and last tab is active', function () {
      var activeTabName = 'tomato';
      var tabsetChildren = [{
        name: 'pizza',
        ref: {}
      }, {
        name: 'onion',
        ref: {}
      }, {
        name: 'tomato',
        ref: {}
      }];
      var screenWidth = 599;
      var scrollLeft = 0;
      var maxScroll = 0;
      expect((0, _utils.getRightButtonDisabledState)({
        activeTabName: activeTabName,
        tabsetChildren: tabsetChildren,
        screenWidth: screenWidth,
        scrollLeft: scrollLeft,
        maxScroll: maxScroll
      })).toBe(true);
    });
    it('should return true when screen width is more than 600px and last tab is visible', function () {
      var activeTabName = 'pizza';
      var tabsetChildren = [{
        name: 'pizza',
        ref: {}
      }, {
        name: 'onion',
        ref: {}
      }, {
        name: 'tomato',
        ref: {}
      }];
      var screenWidth = 601;
      var scrollLeft = 200;
      var maxScroll = 200;
      expect((0, _utils.getRightButtonDisabledState)({
        activeTabName: activeTabName,
        tabsetChildren: tabsetChildren,
        screenWidth: screenWidth,
        scrollLeft: scrollLeft,
        maxScroll: maxScroll
      })).toBe(true);
    });
    it('should return false when screen width is more than 600px and last tab is not visible', function () {
      var activeTabName = 'pizza';
      var tabsetChildren = [{
        name: 'pizza',
        ref: {}
      }, {
        name: 'onion',
        ref: {}
      }, {
        name: 'tomato',
        ref: {}
      }];
      var screenWidth = 601;
      var scrollLeft = 0;
      var maxScroll = 200;
      expect((0, _utils.getRightButtonDisabledState)({
        activeTabName: activeTabName,
        tabsetChildren: tabsetChildren,
        screenWidth: screenWidth,
        scrollLeft: scrollLeft,
        maxScroll: maxScroll
      })).toBe(false);
    });
  });
});