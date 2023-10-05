"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _Pagination = _interopRequireDefault(require("../../Pagination"));

var _Table = _interopRequireDefault(require("../../Table"));

var _options = _interopRequireDefault(require("../options"));

var _getPageItems = _interopRequireDefault(require("../helpers/getPageItems"));

jest.mock('./../helpers/getPageItems', function () {
  return jest.fn(function () {
    return [{
      name: 'Leandro Torres'
    }, {
      name: 'Tahimi'
    }, {
      name: 'Reinier'
    }, {
      name: 'Sara'
    }];
  });
});
var data = [{
  name: 'Leandro Torres'
}, {
  name: 'JL Torres'
}, {
  name: 'Reinier'
}, {
  name: 'Sara'
}, {
  name: 'Tahimi L'
}, {
  name: 'Saray'
}, {
  name: 'J Leandro Torres'
}, {
  name: 'Tahimi'
}, {
  name: 'Sara P'
}, {
  name: 'Leo Torres'
}, {
  name: 'Pepito'
}, {
  name: 'Juanito'
}, {
  name: 'Lola'
}, {
  name: 'Marta'
}];
var nextData = [{
  name: 'Leandro Torres'
}, {
  name: 'JL Torres'
}, {
  name: 'Reinier'
}, {
  name: 'Sara'
}, {
  name: 'Tahimi L'
}, {
  name: 'Saray'
}, {
  name: 'J Leandro Torres'
}, {
  name: 'Tahimi'
}, {
  name: 'Sara P'
}, {
  name: 'Leo Torres'
}];
describe('<TableWithBrowserPagination />', function () {
  it('should show the Pagination when pageSize is less than data length', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      keyField: "name",
      data: data,
      pageSize: 5
    }));
    expect(component.find(_Pagination["default"]).exists()).toBe(true);
  });
  it('should not show the Pagination when pageSize is equal or more than data length', function () {
    var pageSizes = [14, 15];
    pageSizes.forEach(function (pageSize) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        keyField: "name",
        data: data,
        pageSize: pageSize
      }));
      expect(component.find(_Pagination["default"]).exists()).toBe(false);
    });
  });
  it('should show the Select when the pages amount is greater than 6', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      keyField: "name",
      data: data,
      pageSize: 1
    }));
    expect(component.find('select').exists()).toBe(true);
  });
  it('should not show the Select when the pages amount is equal or less than 6', function () {
    var pageSizes = [3, 4];
    pageSizes.forEach(function (pageSize) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        keyField: "name",
        data: data,
        pageSize: pageSize
      }));
      expect(component.find('select').exists()).toBe(false);
    });
  });
  it('should pass the right data to Table', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      keyField: "name"
    }));
    expect(component.find(_Table["default"]).prop('data')).toEqual([{
      name: 'Leandro Torres'
    }, {
      name: 'Tahimi'
    }, {
      name: 'Reinier'
    }, {
      name: 'Sara'
    }]);
  });
  it('should pass the right activePage to Pagination', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 2,
      keyField: "name"
    }));
    expect(component.find(_Pagination["default"]).prop('activePage')).toBe(1);
  });
  it('should pass the right pages to Pagination', function () {
    var pageSizes = [2, 3];
    var expectedPages = [7, 5];
    pageSizes.forEach(function (pageSize, index) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        keyField: "name",
        data: data,
        pageSize: pageSize
      }));
      expect(component.find(_Pagination["default"]).prop('pages')).toBe(expectedPages[index]);
    });
  });
  it('should pass the right value to Select', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    expect(component.find('select').prop('value')).toBe(1);
  });
  it('should pass the right pages to Options', function () {
    var pageSizes = [1, 2];
    var expectedPages = [14, 7];
    pageSizes.forEach(function (pageSize, index) {
      var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        keyField: "name",
        data: data,
        pageSize: pageSize
      }));
      expect(component.find(_options["default"]).prop('pages')).toBe(expectedPages[index]);
    });
  });
  it('should call updateData when pageSize change dynamically', function () {
    _getPageItems["default"].mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.instance().updateData = jest.fn();
    component.setProps({
      pageSize: 22
    });
    component.update();
    expect(component.instance().updateData).toHaveBeenCalledTimes(1);
  });
  it('should set the current activePage when data change dynamically and activePage is less than pages amount', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.setState({
      activePage: 3
    });
    component.setProps({
      data: nextData
    });
    component.update();
    expect(component.find('select').prop('value')).toBe(3);
    expect(component.find(_Pagination["default"]).prop('activePage')).toBe(3);
  });
  it('should set the current activePage when data change dynamically and activePage is equal to pages amount', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.setState({
      activePage: 10
    });
    component.setProps({
      data: nextData
    });
    component.update();
    expect(component.find('select').prop('value')).toBe(10);
    expect(component.find(_Pagination["default"]).prop('activePage')).toBe(10);
  });
  it('should set activePage to 1 when data change dynamically and activePage is greater than pages amount', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.setState({
      activePage: 11
    });
    component.setProps({
      data: nextData
    });
    component.update();
    expect(component.find('select').prop('value')).toBe(1);
    expect(component.find(_Pagination["default"]).prop('activePage')).toBe(1);
  });
  it('should call getPageItems with the right data for second time when data change dynamically and activePage is less than pages amount', function () {
    _getPageItems["default"].mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.setState({
      activePage: 3
    });
    component.setProps({
      data: nextData
    });
    component.update();
    expect(_getPageItems["default"]).toHaveBeenCalledTimes(2);
    expect(_getPageItems["default"].mock.calls[1][0]).toEqual({
      activePage: 3,
      data: nextData,
      pageSize: 1
    });
  });
  it('should call getPageItems with the right data for second time when data change dynamically and activePage is equal to pages amount', function () {
    _getPageItems["default"].mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.setState({
      activePage: 10
    });
    component.setProps({
      data: nextData
    });
    component.update();
    expect(_getPageItems["default"]).toHaveBeenCalledTimes(2);
    expect(_getPageItems["default"].mock.calls[1][0]).toEqual({
      activePage: 10,
      data: nextData,
      pageSize: 1
    });
  });
  it('should call getPageItems with the right data for second time when data change dynamically and activePage is greater than pages amount', function () {
    _getPageItems["default"].mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.setState({
      activePage: 11
    });
    component.setProps({
      data: nextData
    });
    component.update();
    expect(_getPageItems["default"]).toHaveBeenCalledTimes(2);
    expect(_getPageItems["default"].mock.calls[1][0]).toEqual({
      activePage: 1,
      data: nextData,
      pageSize: 1
    });
  });
  it('should set the right activePage when select a page option in select element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.find('select').simulate('change', {
      target: {
        value: 3
      }
    });
    expect(component.find('select').prop('value')).toBe(3);
    expect(component.find(_Pagination["default"]).prop('activePage')).toBe(3);
  });
  it('should call getPageItems with the right data when select a page option in select element', function () {
    _getPageItems["default"].mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.find('select').simulate('change', {
      target: {
        value: 3
      }
    });
    expect(_getPageItems["default"].mock.calls[1][0]).toEqual({
      activePage: 3,
      data: data,
      pageSize: 1
    });
  });
  it('should call scrollTop when select a page option in select element', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.instance().table.current.scrollTop = jest.fn();
    component.find('select').simulate('change', {
      target: {
        value: 3
      }
    });
    expect(component.instance().table.current.scrollTop).toHaveBeenCalled();
  });
  it('should set the right activePage when select a page in Pagination', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    var nextPageButtonComponent = component.find('NavigationButton').at(1);
    nextPageButtonComponent.find('button').simulate('click');
    expect(component.find('select').prop('value')).toBe(2);
    expect(component.find(_Pagination["default"]).prop('activePage')).toBe(2);
  });
  it('should call getPageItems with the right data when select a page in Pagination', function () {
    _getPageItems["default"].mockReset();

    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    var nextPageButtonComponent = component.find('NavigationButton').at(1);
    nextPageButtonComponent.find('button').simulate('click');
    expect(_getPageItems["default"]).toHaveBeenCalledTimes(2);
    expect(_getPageItems["default"].mock.calls[1][0]).toEqual({
      activePage: 2,
      data: data,
      pageSize: 1
    });
  });
  it('should call scrollTop when select a page in Pagination', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      data: data,
      pageSize: 1,
      keyField: "name"
    }));
    component.instance().table.current.scrollTop = jest.fn();
    var nextPageButtonComponent = component.find('NavigationButton').at(1);
    nextPageButtonComponent.find('button').simulate('click');
    expect(component.instance().table.current.scrollTop).toHaveBeenCalled();
  });
});