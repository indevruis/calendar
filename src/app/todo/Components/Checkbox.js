import React from "react";
import CheckboxContext from "./CheckboxContext";
import styles from 'public/css/Checkbox.module.css'

const Checkbox = ({ children, value, checked, onChange }) => {
  const context = React.useContext(CheckboxContext);
  const { isChecked, toggleValue } = context;

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={isChecked(value)}
        onChange={({ target: { checked } }) => toggleValue({ checked, value })}
      />
      <span  className={`${styles.selectBox}`}>
      {children}
      </span>
    </label>
  );
}

export default Checkbox;