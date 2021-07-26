import Textfield from "./Textfield";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";

const AnswerField = ({ field, fieldKey, placeholder, onChange }) => {
  const fields = {
    text: (
      <Textfield
        type="text"
        fieldKey={fieldKey}
        onChange={onChange}
        placeholder={placeholder}
      />
    ),
    numeric: (
      <Textfield
        type="number"
        fieldKey={fieldKey}
        onChange={onChange}
        placeholder={placeholder}
      />
    ),
    dropdown: <Dropdown fieldKey={fieldKey} onChange={onChange} />,
    checkbox: <Checkbox fieldKey={fieldKey} onChange={onChange} />,
  };

  return fields[field];
};

export default AnswerField;
