import React from "react";
import "./cart.css";

function CartList(props) {
  return (
    <div id="cartList">
      {props.children}
      <button
        className="checkoutBtn"
        id={props.id}
        onClick={props.userCheckout}
      >
        Check Out
      </button>
    </div>
  );
}

export default CartList;
