import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { sendCartData, fetchCartData } from "./store/cartAction";

let isInitial = true;

function App() {
  const { cart } = useSelector((state) => state.cart);
  const { cartIsVisible, notification } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart cart={cart} />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
