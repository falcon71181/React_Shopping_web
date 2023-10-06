import React from "react";

function SideCart(props) {
  const {
    totalItems,
    items,
    total,
    packaging,
    onPopup,
    onThankPopup,
    closeDrawer,
  } = props;

  return (
    <div className="sidecart">
      {totalItems !== 0 ? (
        <div className="popup">
          <div className="cart">
            <h2>Your Cart</h2>
            {items.map((item1, id1) =>
              item1.qty !== 0 ? (
                <div key={id1} className="cart_item">
                  <span>
                    <h3>
                      {item1.name} ({item1.qty})
                    </h3>
                    <h3>${(item1.cost * item1.qty).toFixed(2)}</h3>
                  </span>
                </div>
              ) : null
            )}
          </div>
          <div>
            <div className="final_price">
              <div className="cart_item">
                <h3>Items Price:</h3>
                <h3>${total.toFixed(2)}</h3>
              </div>
              <div className="cart_item">
                <h3>Delivery Charges:</h3>
                <h3>$3</h3>
              </div>
              <div className="cart_item">
                <h3>Packaging:</h3>
                <h3>${packaging.toFixed(2)}</h3>
              </div>
            </div>
            <div className="final_price">
              <h3>Total Price:</h3>
              <h3>${(total + packaging + 3).toFixed(2)}</h3>
            </div>
            <button className="order_btn" onClick={() => { onPopup(); closeDrawer(); }}>
              Order Now
            </button>
          </div>
        </div>
      ) : (
        <div className="popup">
          <b>Your cart looks empty...</b>
        </div>
      )}
    </div>
  );
}

export default SideCart;
