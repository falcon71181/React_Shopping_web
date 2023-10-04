import React from "react";

function OrderPage(props) {
  const {
    popup,
    thankPopup,
    totalItems,
    items,
    total,
    packaging,
    onReload,
  } = props;

  return (
    <div className="orderpage">
      {popup && totalItems !== 0 ? (
        <div className="order">
          <div className="cart">
            <h1>Your Cart</h1>
            <div className="cart_left">
              {items.map((item1, id1) =>
                item1.qty !== 0 ? (
                  <div key={id1} className="cart_item">
                    <img src={item1.src} alt={item1.name} />
                    <span className="cart_info">
                      <h3>
                        {item1.name} x {item1.qty}
                      </h3>
                      <h3>Cost : ${item1.cost}</h3>
                      <h3>Total Cost : ${(item1.cost * item1.qty).toFixed(2)}</h3>
                    </span>
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div className="cart_right">
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
            <button className="order_btn" onClick={() => onReload()}>
              order now
            </button>
          </div>
        </div>
      ) : null}

      {thankPopup ? (
        <div className="thank_you">
          <h1>Thank you</h1>
          <p>We will deliver your package at your doorstep shortly.</p>
          <button className="order_btn" onClick={() => onReload()}>
            Go Back to Shopping
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default OrderPage;
