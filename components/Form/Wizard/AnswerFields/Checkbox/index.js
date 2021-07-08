import React, { useState } from "react";

const Checkbox = ({ checked, fieldKey, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const onChangeHandler = (e) => {
    onChange(fieldKey, e.target.checked);
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <label className="switch">
        <input type="checkbox" value={isChecked} onChange={onChangeHandler} />
        <div className="slider"></div>
      </label>
    </div>
  );
};

export default Checkbox;
