import React from "react";

const Checkbox = ({ fieldKey, onChange }) => {
  const onChangeHandler = (e) => onChange(fieldKey, e.target.checked);
  return <input type="checkbox" onChange={onChangeHandler} />;
};

export default Checkbox;
