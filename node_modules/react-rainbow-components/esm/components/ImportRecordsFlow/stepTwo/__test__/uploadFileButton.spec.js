import React from 'react';
import { mount } from 'enzyme';
import UploadFileButton from '../uploadFileButton';
import { uniqueId } from '../../../../libs/utils';
import StyledUploadFileLabel from '../styled/uploadFileLabel';
import HiddenElement from '../../../Structural/hiddenElement';
jest.mock('../../../../libs/utils/uniqueId', function () {
  return jest.fn(function () {
    return 'uniqueId-value';
  });
});
describe('<UploadFileButton />', function () {
  it('should call uniqueId with the right value', function () {
    mount(React.createElement(UploadFileButton, {
      onChange: function onChange() {}
    }));
    expect(uniqueId).toHaveBeenCalledWith('upload-file-input');
  });
  it('should associate the input and label with the same id', function () {
    var component = mount(React.createElement(UploadFileButton, {
      onChange: function onChange() {}
    }));
    var uploadWrapper = component.find(StyledUploadFileLabel);
    var input = component.find(HiddenElement);
    expect(uploadWrapper.prop('htmlFor')).toBe('uniqueId-value');
    expect(input.prop('id')).toBe('uniqueId-value');
  });
  it('should run change event when a file is added to the input', function () {
    var onChangeFn = jest.fn(function () {});
    var component = mount(React.createElement(UploadFileButton, {
      onChange: onChangeFn
    }));
    var input = component.find('input');
    input.simulate('change', {
      target: {
        files: ['dummy-value']
      }
    });
    expect(onChangeFn).toHaveBeenCalled();
  });
  it('should have the right props for the upload input', function () {
    var component = mount(React.createElement(UploadFileButton, {
      onChange: function onChange() {}
    }));
    var input = component.find(HiddenElement);
    expect(input.prop('type')).toBe('file');
    expect(input.prop('accept')).toBe('text/csv');
    expect(input.prop('multiple')).toBe(false);
  });
});