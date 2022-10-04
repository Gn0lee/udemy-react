import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const timeout = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [cartCtx.items]);

  return (
    <button
      className={`${classes.button} ${btnHighlight ? classes.bump : ""}`}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
