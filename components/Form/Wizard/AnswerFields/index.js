import Textfield from "./Textfield";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";

const AnswerField = {
  text: <Textfield type="text" />,
  numeric: <Textfield type="number" />,
  dropdown: <Dropdown />,
  checkbox: <Checkbox />
};

export default AnswerField;
