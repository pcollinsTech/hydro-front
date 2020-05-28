import React, { useState } from "react";
import styles from "./QuantitySelector.module.css";
import Quantity from "./Quantity";
export default function QuantitySelector() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className={styles.quantity_selector_box} onClick={() => setToggle(!toggle)}>
        <label>1 Adult - 1 Junior</label>
      </div>
      {toggle && (
        <div className={styles.quantity_selection_form}>
          <div className="d-flex justify-content-between mb-2">
            <div className="text-bottom">Adults</div> <Quantity />
          </div>
          <div className="d-flex justify-content-between mb-2">
            <div className="text-bottom">
              Children <br /> <span>Ages 2-12</span>
            </div>{" "}
            <Quantity />
          </div>
          <div className="d-flex justify-content-between mb-2">
            <div className="text-bottom">
              Infants <br /> <span>Under 2</span>
            </div>{" "}
            <Quantity />
          </div>
        </div>
      )}
    </div>
  );
}
