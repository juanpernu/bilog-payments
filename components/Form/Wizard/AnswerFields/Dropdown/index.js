const Dropdown = () => {
  return (
    <select id="profession" name="profession">
      <option value="" disabled>Seleciona una</option>
      <option value="dentist">Odontólogo/a</option>
      <option value="secret">Secretario/a</option>
      <option value="admin">Administrador/a</option>
    </select>
  );
};

export default Dropdown;
