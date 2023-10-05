import React from 'react';
import getSearchForOption from '../getSearchForOption';
import SearchValueIcon from '../../icons/searchValueIcon';
describe('getSearchForOption', function () {
  it('should return the search term formated as option for Lookup', function () {
    var _getSearchForOption = getSearchForOption('110 sw'),
        label = _getSearchForOption.label,
        data = _getSearchForOption.data,
        icon = _getSearchForOption.icon;

    var result = {
      label: label,
      data: data,
      icon: icon
    };
    expect(result).toEqual({
      label: label,
      data: '110 sw',
      icon: React.createElement(SearchValueIcon, null)
    });
  });
});