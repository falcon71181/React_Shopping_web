import React from 'react';
import PropTypes from 'prop-types';
export default function HitText(_ref) {
  var parts = _ref.parts,
      HitComponent = _ref.hitComponent,
      TextComponent = _ref.textComponent;
  return parts.map(function (part, index) {
    var key = "part-".concat(index);

    if (part.type === 'hit') {
      return React.createElement(HitComponent, {
        key: key
      }, part.value);
    }

    return React.createElement(TextComponent, {
      key: key
    }, part.value);
  });
}
HitText.propTypes = {
  parts: PropTypes.arrayOf(PropTypes.exact({
    value: PropTypes.string,
    type: PropTypes.string
  })),
  hitComponent: PropTypes.elementType,
  textComponent: PropTypes.elementType
};
HitText.defaultProps = {
  parts: undefined,
  hitComponent: undefined,
  textComponent: undefined
};