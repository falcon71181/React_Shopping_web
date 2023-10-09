import React, { useState } from "react";
import { Button, Drawer } from 'react-rainbow-components';
import './ItemList.css';
import SideCart from "../SideCart/SideCart";

function ItemList(props) {
  const {
    onAdd,
    onRemove,
    totalItems,
    items,
    total,
    packaging,
    onPopup,
    onThankPopup,
  } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Define isDrawerOpen state
  const openDrawer = () => { setIsDrawerOpen(true); }; // Define openDrawer function
  const closeDrawer = () => { setIsDrawerOpen(false); }; // Define closeDrawer function

  const closeDrawerAndOrder = () => {
    closeDrawer();
    onPopup();
  };

  return (
    <div className="list-container">
      {items.map((item, id) => (
        <div className="item-container" id="item-container-theme" key={id}>
          <img src={item.src} alt={item.name} className="img" />
          <h3>{item.name}</h3>
          <b>${item.cost.toFixed(2)}</b>
          <br></br>
          <button type="button" className="buyButton" onClick={() => { openDrawer(); onAdd(item.id,item.cost); }}>
            <span>Add To Cart</span>
          </button>
          {isDrawerOpen && (
            <div className="overlay"></div>
          )}
          <Drawer
            header="Item Details"
            slideFrom="right"
            size="small"
            isOpen={isDrawerOpen}
            onRequestClose={closeDrawer}
            position="right"
          >
            <SideCart
              totalItems={totalItems}
              items={items}
              total={total}
              packaging={packaging}
              onPopup={onPopup}
              onThankPopup={onThankPopup}
              closeDrawer={closeDrawerAndOrder}
            />
          </Drawer>
          <button type="button" className="buyButton" onClick={() => { openDrawer() }}>
            <span> Buy Now</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
