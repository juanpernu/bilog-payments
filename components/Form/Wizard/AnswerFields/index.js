import Textfield from "./Textfield";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";

const AnswerField = ({ field, fieldKey, onChange }) => {
  const fields = {
    text: <Textfield type="text" fieldKey={fieldKey} onChange={onChange} />,
    numeric: (
      <Textfield type="number" fieldKey={fieldKey} onChange={onChange} />
    ),
    dropdown: <Dropdown fieldKey={fieldKey} onChange={onChange} />,
    checkbox: <Checkbox fieldKey={fieldKey} onChange={onChange} />,
  };

  return fields[field];
};

export default AnswerField;
