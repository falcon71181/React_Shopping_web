import React from 'react';
import { mount } from 'enzyme';
import { Picture } from '@rainbow-modules/icons';
import Icon from '../icon';
import { ErrorIcon, FileIcon, FilesIcon, UploadIcon } from '../icons';
describe('<Icon />', function () {
  it('should render a Picture when value is null', function () {
    var value = null;
    var isDragOver = false;
    var component = mount(React.createElement(Icon, {
      isDragOver: isDragOver,
      value: value,
      uploadIcon: React.createElement(Picture, null)
    }));
    var icon = component.find(Picture);
    expect(icon.exists()).toBe(true);
  });
  it('should render a Picture', function () {
    var isDragOver = false;
    var component = mount(React.createElement(Icon, {
      isDragOver: isDragOver,
      uploadIcon: React.createElement(Picture, null)
    }));
    var icon = component.find(Picture);
    expect(icon.exists()).toBe(true);
  });
  it('should render an UploadIcon when value is null', function () {
    var value = null;
    var isDragOver = false;
    var component = mount(React.createElement(Icon, {
      isDragOver: isDragOver,
      value: value
    }));
    var icon = component.find(UploadIcon);
    expect(icon.exists()).toBe(true);
  });
  it('should render an UploadIcon when isDragOver is true', function () {
    var isDragOver = true;
    var component = mount(React.createElement(Icon, {
      isDragOver: isDragOver
    }));
    var icon = component.find(UploadIcon);
    expect(icon.exists()).toBe(true);
  });
  it('should render an ErrorIcon', function () {
    var error = 'Error';
    var isDragOver = false;
    var component = mount(React.createElement(Icon, {
      error: error,
      isDragOver: isDragOver
    }));
    var icon = component.find(ErrorIcon);
    expect(icon.exists()).toBe(true);
  });
  it('should render a FileIcon', function () {
    var files = [{
      name: 'filename.jpg'
    }];
    var isDragOver = false;
    var component = mount(React.createElement(Icon, {
      files: files,
      isDragOver: isDragOver
    }));
    var icon = component.find(FileIcon);
    expect(icon.exists()).toBe(true);
  });
  it('should render a FilesIcon', function () {
    var files = [{
      name: 'filename1.jpg'
    }, {
      name: 'filename2.jpg'
    }];
    var isDragOver = false;
    var component = mount(React.createElement(Icon, {
      files: files,
      isDragOver: isDragOver
    }));
    var icon = component.find(FilesIcon);
    expect(icon.exists()).toBe(true);
  });
});