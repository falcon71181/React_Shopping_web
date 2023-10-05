import React, { useState } from 'react';
import { Button, Drawer } from 'react-rainbow-components';

const Drawer_orders = () => {
  const [state, setState] = useState({
    isOpenRight: false,
    isOpenLeft: true,
  });

  return (
    <div className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap">
      <div className="rainbow-flex rainbow-flex_row">
        <div className="rainbow-align-content_center rainbow-p-medium rainbow-m_auto">
          <Button
            className="rainbow-m-around_medium"
            label="Slide from left"
            onClick={() => setState({ isOpenLeft: true })}
          />
        </div>
        <div className="rainbow-align-content_center rainbow-p-medium rainbow-m_auto">
          <Button
            className="rainbow-m-around_medium"
            label="Slide from right"
            onClick={() => setState({ isOpenRight: true })}
          />
        </div>
      </div>
      <Drawer
        header="This is a drawer"
        slideFrom="right"
        isOpen={state.isOpenRight}
        onRequestClose={() => setState({ isOpenRight: false })}
      />
      <Drawer
        header="This is a drawer"
        isOpen={state.isOpenLeft}
        onRequestClose={() => setState({ isOpenLeft: false })}
      />
    </div>
  );
};

export default Drawer_orders;
