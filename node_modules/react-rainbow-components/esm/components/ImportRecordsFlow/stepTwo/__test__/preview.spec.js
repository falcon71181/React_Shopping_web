import React from 'react';
import { mount } from 'enzyme';
import Preview from '../preview';
import StyledFileCardTitle from '../styled/fileCardTitle';
import StyledFileCardDescription from '../styled/fileCardDescription';
import StyledButtonIcon from '../styled/buttonIcon';
describe('<Preview />', function () {
  it('should show default labels', function () {
    var component = mount(React.createElement(Preview, null));
    var title = component.find(StyledFileCardTitle);
    var type = component.find(StyledFileCardDescription);
    expect(title.text()).toBe('Unknow File Name');
    expect(type.text()).toBe('Unknow File Type');
  });
  it('should set the right labels according to params', function () {
    var component = mount(React.createElement(Preview, {
      fileName: "preview-title",
      fileType: "text/csv"
    }));
    var title = component.find(StyledFileCardTitle);
    var type = component.find(StyledFileCardDescription);
    expect(title.text()).toBe('preview-title');
    expect(type.text()).toBe('text/csv');
  });
  it('should run remove handler function after click the remove button', function () {
    var onRemoveFileFn = jest.fn();
    var component = mount(React.createElement(Preview, {
      onRemoveFile: onRemoveFileFn
    }));
    component.find(StyledButtonIcon).simulate('click');
    expect(onRemoveFileFn).toHaveBeenCalled();
  });
  it('should have data passed properly to preview table', function () {
    var props = {
      data: [{
        First_Name: 'John',
        Last_Name: 'Doe'
      }, {
        First_Name: 'Marie',
        Last_Name: 'Sun'
      }, {
        First_Name: 'Jane',
        Last_Name: 'Doe'
      }],
      columns: ['First_Name', 'Last_Name'],
      isLoading: true
    };
    var component = mount(React.createElement(Preview, props));
    expect(component.find('PreviewTable').props()).toEqual(props);
  });
});