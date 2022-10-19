import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {props.cart?.map((el) => (
          <CartItem
            key={el.id}
            item={{
              title: el.title,
              quantity: el.amount,
              total: el.amount * el.price,
              price: el.price,
              id: el.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
