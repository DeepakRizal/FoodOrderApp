import React, { useContext } from "react";
import cartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
function MealItem(props) {
  const cartCtx = useContext(cartContext);
  const price = `$${props.meal.price.toFixed(2)}`;

  function addToCartHandler(amount) {
    return cartCtx.addItems({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddtoCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
