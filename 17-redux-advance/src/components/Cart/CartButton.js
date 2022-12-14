import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const { cartNum } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const toggleShowCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleShowCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartNum}</span>
    </button>
  );
};

export default CartButton;
