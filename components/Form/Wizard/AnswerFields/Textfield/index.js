const Textfield = ({ type, id, name, fieldKey, placeholder, onChange }) => {
  const onChangeHandler = (e) => onChange(fieldKey, e.target.value);
  return (
    <input
      className="textfield-input"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default Textfield;
