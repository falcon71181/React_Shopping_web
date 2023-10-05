import React from 'react';
import { render } from '@testing-library/react';
import AccordionSection from '..';
describe('<AccordionSection/>', function () {
  it('should have type button on section summary', function () {
    var _render = render(React.createElement(AccordionSection, {
      label: "Test section"
    })),
        getByRole = _render.getByRole;

    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });
});