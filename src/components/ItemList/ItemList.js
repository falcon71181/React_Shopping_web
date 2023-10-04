import React from "react";
import './ItemList.css';


function ItemList(props) {
  const { items, onAdd, onRemove } = props;

  return (
    <div className="list-container">
      {items.map((item, id) => (
        <div className="item-container" key={id}>
          <img src={item.src} alt={item.name} className="img" />
          <h3>{item.name}</h3>
          <b>${item.cost.toFixed(2)}</b>
          <br></br>
          <button type="button" className="buyButton" onClick={() => onAdd(item.name, item.cost)}>
            <span>Add To Cart</span>
          </button>
          <button type="button" className="buyButton" onClick={() => onRemove(item.name, item.cost)}>
           <span> Buy Now</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
