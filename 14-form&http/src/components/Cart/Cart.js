import classes from "./Cart.module.css";
import Modal from "../ui/Modal";
import CartItem from "./CartItem";
import React, { useContext, useState } from "react";
import CartContext from "../../context/cart-context";

import useHttp from "../../hooks/use-http";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const { isLoading, sendRequest } = useHttp();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderClickHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    sendRequest({
      url: "https://udemy-react-3aaa3-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      body: { user: userData, orderedItems: cartCtx.items },
      headers: { "Content-type": "application/json" },
    });
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const modalContent = (
    <React.Fragment>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout ? (
        <Checkout onCancel={props.onClose} onSubmit={submitOrderHandler} />
      ) : (
        <div className={classes.actions}>
          <button className={classes["button-alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderClickHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isLoading && !didSubmit && modalContent}
      {!isLoading && didSubmit && didSubmitModalContent}
      {isLoading && !didSubmit && isSubmittingModalContent}
    </Modal>
  );
};

export default Cart;
