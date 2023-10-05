"use strict";

var _utils = require("../utils");

describe('<ButtonMenu/> utils', function () {
  describe('insertChildOrderly', function () {
    it('should insert the child in the right order if the item in the nodes is at middle', function () {
      var childrenRefs = ['item1', 'item2', 'item4', 'item5'];
      var nodes = ['item1', 'item2', 'item3', 'item4', 'item5'];
      expect((0, _utils.insertChildOrderly)(childrenRefs, 'item3', nodes)).toEqual(nodes);
    });
    it('should insert the child in the right order if the item in the nodes is at end', function () {
      var childrenRefs = ['item1', 'item2', 'item3'];
      var nodes = ['item1', 'item2', 'item3', 'item4'];
      expect((0, _utils.insertChildOrderly)(childrenRefs, 'item4', nodes)).toEqual(nodes);
    });
  });
  describe('findItemByKey', function () {
    it('should find the item matched with the key passed', function () {
      var childrenRefs = [{
        innerText: 'Julio'
      }, {
        innerText: 'Luis'
      }, {
        innerText: 'Pepe'
      }];
      expect((0, _utils.findItemByKey)('L', childrenRefs)).toEqual({
        innerText: 'Luis'
      });
    });
    it('should find the item matched with the key passed altought the key is in lower case and the item innerText is in upper case', function () {
      var childrenRefs = [{
        innerText: 'Julio'
      }, {
        innerText: 'Luis'
      }, {
        innerText: 'Pepe'
      }];
      expect((0, _utils.findItemByKey)('l', childrenRefs)).toEqual({
        innerText: 'Luis'
      });
    });
    it('should return undefined if nothing match', function () {
      var childrenRefs = [{
        innerText: 'Julio'
      }, {
        innerText: 'Luis'
      }, {
        innerText: 'Pepe'
      }];
      expect((0, _utils.findItemByKey)('d', childrenRefs)).toBeUndefined();
    });
  });
  describe('findItemIndex', function () {
    it('should find the right index', function () {
      var childrenRefs = ['item1', 'item2', 'item3'];
      expect((0, _utils.findItemIndex)(childrenRefs, 'item2')).toBe(1);
    });
    it('should return -1 if the item passed does not match', function () {
      var childrenRefs = ['item1', 'item2', 'item3'];
      expect((0, _utils.findItemIndex)(childrenRefs, 'item5')).toBe(-1);
    });
  });
  describe('getChildMenuItemNodes', function () {
    var elements = [{
      element: '[role="menuitem"]',
      innerText: 'Julio'
    }, {
      element: '[role="menuitem"]',
      innerText: 'Pepe'
    }];
    var ref = {
      querySelectorAll: jest.fn(function () {
        return elements;
      })
    };
    it('should call querySelectorAll with [role="menuitem"]', function () {
      (0, _utils.getChildMenuItemNodes)(ref);
      expect(ref.querySelectorAll).toHaveBeenCalledWith('[role="menuitem"]');
    });
    it('should return the elements resolved by querySelectorAll', function () {
      expect((0, _utils.getChildMenuItemNodes)(ref)).toEqual(elements);
    });
    it('should return an empty array if anything is passed', function () {
      expect((0, _utils.getChildMenuItemNodes)()).toEqual([]);
    });
  });
});