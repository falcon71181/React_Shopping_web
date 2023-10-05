import React, { useState } from "react";
import { Button, Drawer } from 'react-rainbow-components';
import './ItemList.css';

function ItemList(props) {
  const { items, onAdd, onRemove } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };


  return (
    <div className="list-container">
      {items.map((item, id) => (
        <div className="item-container" key={id}>
          <img src={item.src} alt={item.name} className="img" />
          <h3>{item.name}</h3>
          <b>${item.cost.toFixed(2)}</b>
          <br></br>
          <button type="button" className="buyButton" onClick={openDrawer}>
            <span>Add To Cart</span>
          </button>
          <Drawer
            header="Item Details"
            slideFrom="right"
            isOpen={isDrawerOpen}
            onRequestClose={closeDrawer}
            position="right"
          ></Drawer>
          <button type="button" className="buyButton" onClick={() => onRemove(item.name, item.cost)}>
           <span> Buy Now</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
