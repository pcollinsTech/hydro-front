import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./QuantitySelector.module.css";

export default function Quantity() {
  const [quantity, setQuantity] = useState(0);
  const changeQuantity = (change) => {
    if (change === "plus") {
      return setQuantity(quantity + 1);
    } else if (change === "minus") {
      if (quantity === 0) {
        return quantity;
      } else {
        return setQuantity(quantity - 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-around">
      <div className={styles.counter} onClick={() => changeQuantity("minus")}>
        <FaMinus />
      </div>
      <div className={styles.quantity}>
        <p>{quantity}</p>
      </div>
      <div className={styles.counter} onClick={() => changeQuantity("plus")}>
        <FaPlus />
      </div>
    </div>
  );
}
