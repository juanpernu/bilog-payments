const Textfield = ({ type, id, name, fieldKey, onChange }) => {
  const onChangeHandler = (e) => onChange(fieldKey, e.target.value);
  return <input type={type} id={id} name={name} onChange={onChangeHandler} />;
};

export default Textfield;
