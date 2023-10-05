"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _isNotSameColumns = _interopRequireDefault(require("../isNotSameColumns"));

describe('isNotSameColumns', function () {
  it('should return true when prevColumns and currentColumns does not have the same length ', function () {
    var prevColumns = [{}, {}];
    var currentColumns = [{}, {}, {}];
    expect((0, _isNotSameColumns["default"])(prevColumns, currentColumns)).toBe(true);
  });
  it('should return false when prevColumns and currentColumns are the same', function () {
    var prevColumns = [{
      field: 'name',
      header: 'Name'
    }, {
      field: 'email',
      header: 'Email'
    }];
    var currentColumns = [{
      field: 'name',
      header: 'Name'
    }, {
      field: 'email',
      header: 'Email'
    }];
    expect((0, _isNotSameColumns["default"])(prevColumns, currentColumns)).toBe(false);
  });
  it('should return true when column field property changed', function () {
    var prevColumns = [{
      field: 'name',
      header: 'Name'
    }, {
      field: 'email',
      header: 'Email'
    }];
    var currentColumns = [{
      field: 'phone',
      header: 'Name'
    }, {
      field: 'email',
      header: 'Email'
    }];
    expect((0, _isNotSameColumns["default"])(prevColumns, currentColumns)).toBe(true);
  });
  it('should return true when column sortable property changed', function () {
    var prevColumns = [{
      field: 'name',
      header: 'Name',
      sortable: true
    }, {
      field: 'email',
      header: 'Email',
      sortable: true
    }];
    var currentColumns = [{
      field: 'name',
      header: 'Name',
      sortable: false
    }, {
      field: 'email',
      header: 'Email',
      sortable: true
    }];
    expect((0, _isNotSameColumns["default"])(prevColumns, currentColumns)).toBe(true);
  });
  it('should return true when column header property changed', function () {
    var prevColumns = [{
      field: 'name',
      header: 'Name'
    }, {
      field: 'email',
      header: 'Email'
    }];
    var currentColumns = [{
      field: 'name',
      header: 'Fullname'
    }, {
      field: 'email',
      header: 'Email'
    }];
    expect((0, _isNotSameColumns["default"])(prevColumns, currentColumns)).toBe(true);
  });
  it('should return true when column component property changed', function () {
    var prevColumns = [{
      field: 'name',
      header: 'Name',
      component: {}
    }, {
      field: 'email',
      header: 'Email',
      component: {}
    }];
    var currentColumns = [{
      field: 'name',
      header: 'Name',
      component: {
        data: 'ok'
      }
    }, {
      field: 'email',
      header: 'Email',
      component: {}
    }];
    expect((0, _isNotSameColumns["default"])(prevColumns, currentColumns)).toBe(true);
  });
  it('should return true when column defaultWith property changed', function () {
    var prevColumns = [{
      field: 'name',
      header: 'Name',
      defaultWidth: 100
    }, {
      field: 'email',
      header: 'Email',
      defaultWidth: 100
    }];
    var currentColumns = [{
      field: 'name',
      header: 'Name',
      defaultWidth: 80
    }, {
      field: 'email',
      header: 'Email',
      defaultWidth: 100
    }];
    expect((0, _isNotSameColumns["default"])(prevColumns, currentColumns)).toBe(true);
  });
  it('should return true when column width property changed', function () {
    var prevColumns = [{
      field: 'name',
      header: 'Name',
      width: 100
    }, {
      field: 'email',
      header: 'Email',
      width: 100
    }];
    var currentColumns = [{
      field: 'name',
      header: 'Name',
      width: 80
    }, {
      field: 'email',
      header: 'Email',
      width: 100
    }];
    expect((0, _isNotSameColumns["default"])(prevColumns, currentColumns)).toBe(true);
  });
  it('should return true when column type property changed', function () {
    var prevColumns = [{
      field: 'name',
      header: 'Name',
      type: 'text'
    }, {
      field: 'email',
      header: 'Email',
      type: 'text'
    }];
    var currentColumns = [{
      field: 'name',
      header: 'Name',
      type: 'action'
    }, {
      field: 'email',
      header: 'Email',
      type: 'text'
    }];
    expect((0, _isNotSameColumns["default"])(prevColumns, currentColumns)).toBe(true);
  });
  it('should return true when column children property changed', function () {
    var prevColumns = [{
      header: 'Action',
      type: 'action',
      children: [{
        onClick: function onClick() {
          return 20 + 5;
        }
      }]
    }];
    var currentColumns = [{
      header: 'Action',
      type: 'action',
      children: [{
        onClick: function onClick() {
          return 20 + 4;
        }
      }]
    }];
    expect((0, _isNotSameColumns["default"])(prevColumns, currentColumns)).toBe(true);
  });
});