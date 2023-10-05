import React from 'react';
import PropTypes from 'prop-types';
import { ErrorIcon, FileIcon, FilesIcon, UploadIcon } from './icons';
import { FileListType } from './types';
export default function Icon(_ref) {
  var files = _ref.files,
      error = _ref.error,
      isDragOver = _ref.isDragOver,
      value = _ref.value,
      uploadIcon = _ref.uploadIcon;

  if (value !== null) {
    if (!isDragOver) {
      if (error) {
        return React.createElement(ErrorIcon, null);
      }

      if (files && files.length === 1) {
        return React.createElement(FileIcon, null);
      }

      if (files && files.length > 1) {
        return React.createElement(FilesIcon, null);
      }
    }
  }

  return uploadIcon || React.createElement(UploadIcon, null);
}
Icon.propTypes = {
  files: PropTypes.instanceOf(FileListType),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isDragOver: PropTypes.bool,
  value: PropTypes.object,
  uploadIcon: PropTypes.node
};
Icon.defaultProps = {
  files: undefined,
  error: undefined,
  isDragOver: false,
  value: undefined,
  uploadIcon: undefined
};