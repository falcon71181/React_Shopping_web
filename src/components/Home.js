import React, { Component } from "react";
import list from "./lists";
import Header from "./Header/Header";
import ItemList from "./ItemList/ItemList";
import SideCart from "./SideCart/SideCart";
import OrderPage from "./OrderPage/OrderPage";
import Drawer_orders from "./OrderPage/Drawer";

class Home extends Component {
  state = {
    items: list,
    total_items: 0,
    total: 0,
    packaging: 1.99,
    popup: false,
    thank_popup: false
  };
    add = (name, cost) => {
      this.state.items.map((item, id) => {
        if (item.name === name) {
          item.qty += 1;
        }
      });
      this.setState({
        total_items: this.state.total_items + 1,
        total: this.state.total + cost
      });
    };
    remove = (name, cost) => {
      this.state.items.map((item, id) => {
        if (item.name === name) {
          if (item.qty !== 0) {
            item.qty -= 1;
            this.setState({
              total_items: this.state.total_items - 1,
              total: this.state.total - cost
            });
          }
        }
      });
    };
    popup = () => {
      this.setState({
        popup: !this.state.popup
      });
    };
    thank_popup = () => {
      this.setState({
        thank_popup: !this.state.thank_popup
      });
    };
    reload = () => {
      window.location.href = window.location.href;
    };
    render() {
      return (
        <div>
          <Header totalItems={this.state.total_items} />
          <ItemList
            items={this.state.items}
            onAdd={this.add}
            onRemove={this.remove}
          />
          <SideCart
            totalItems={this.state.total_items}
            items={this.state.items}
            total={this.state.total}
            packaging={this.state.packaging}
            onPopup={this.popup}
            onThankPopup={this.thank_popup}
          />
          <OrderPage
            popup={this.state.popup}
            thankPopup={this.state.thank_popup}
            totalItems={this.state.total_items}
            items={this.state.items}
            total={this.state.total}
            packaging={this.state.packaging}
            onReload={this.reload}
          />
        </div>
      );
    }
  }

  export default Home;
