import React, { useState } from "react";
import styles from "./index.module.scss";
export default function Toggle({ value,prop, onChange = () => {}, onKeyDown }) {
  let [checked, setChecked] = useState(value);
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          onChange()
          setChecked(!checked)
        }}
        onKeyDown={onKeyDown}
        {...prop}
      />
      <span className={styles.slider + " " + styles.round}></span>
    </label>
  );
}
