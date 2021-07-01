import React from "react";

const Checkbox = ({ checked, onChange }) => {
  const onChangeHandler = e => onChange(e);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChangeHandler}
    />
  );
};

export default Checkbox;
