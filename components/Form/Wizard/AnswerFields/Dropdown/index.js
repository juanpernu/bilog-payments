const Dropdown = ({ onChange, fieldKey }) => {
  const onChangeHandler = (e) => onChange(fieldKey, e.target.value);
  return (
    <select id="profession" name="profession" onChange={onChangeHandler}>
      <option value="" selected disabled>
        Seleciona una
      </option>
      <option value="Odontólogo/a">Odontólogo/a</option>
      <option value="Secretario/a">Secretario/a</option>
      <option value="Administrador/a">Administrador/a</option>
    </select>
  );
};

export default Dropdown;
