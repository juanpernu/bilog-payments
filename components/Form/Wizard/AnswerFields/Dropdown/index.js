const Dropdown = ({ onChange, fieldKey }) => {
  const onChangeHandler = (e) => onChange(fieldKey, e.target.value);
  return (
    <select id="profession" name="profession" onChange={onChangeHandler}>
      <option value="" disabled>
        Seleciona una
      </option>
      <option value="dentist">Odontólogo/a</option>
      <option value="secret">Secretario/a</option>
      <option value="admin">Administrador/a</option>
    </select>
  );
};

export default Dropdown;
