import { jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const divStyle = {
  cursor: "text",
  padding: "5px",
  border: "1px solid transparent",
  minWidth: "100px",
  minHeight: "20px"
};
const textArea = {
  cursor: "text",
  padding: "10px",
  border: "1px solid transparent",
  borderRadius: "5px",
  fontSize: "16px",
  boxSizing: "border-box",
  width: "100%",
  whiteSpace: "pre-wrap",
  // Зберігає пробіли і переноси
  overflowWrap: "break-word"
  // Перенос слів, щоб уникнути виходу за межі
};
const stylesInput = {
  cursor: "text",
  borderRadius: "5px",
  backgroundColor: "#e4e6eb",
  borderColor: "#e4e6eb",
  padding: "10px",
  width: "100%",
  height: "40px",
  margin: "-8px"
};
const textAreaNone = {
  border: "none",
  overflow: "auto",
  resize: "none",
  outline: "none"
};
const combinedStyles = {
  ...textArea,
  ...textAreaNone
};
const combinedStylesInput = {
  ...stylesInput
};
const EditableText = ({
  onChange,
  textFromUploader,
  isTypeInput = false,
  isEdit = false
}) => {
  const [isEditing, setIsEditing] = useState(isEdit);
  const [isTextEntered, setIsTextEntered] = useState(false);
  const [text, setText] = useState(textFromUploader || "");
  useEffect(() => {
    setIsEditing(true);
  }, [textFromUploader]);
  const handleTextClick = (event) => {
    setIsEditing(true);
  };
  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(e.target.value);
    setIsTextEntered(true);
    onChange(newText);
  };
  const handleInputBlur = (event) => {
    setIsEditing(false);
    if (text === "") {
      setIsTextEntered(false);
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-label": "Enter the text",
      onClick: handleTextClick,
      style: divStyle,
      children: isEditing ? /* @__PURE__ */ jsx(Fragment, { children: isTypeInput ? /* @__PURE__ */ jsx(
        "input",
        {
          placeholder: "Enter your text here...",
          style: combinedStylesInput,
          value: text,
          onChange: handleInputChange,
          onBlur: handleInputBlur
        }
      ) : /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Enter your text here...",
          wrap: "soft",
          rows: 4,
          style: combinedStyles,
          value: text,
          onChange: handleInputChange,
          onBlur: () => handleInputBlur
        }
      ) }) : /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("span", { "data-item-text": true, children: isTextEntered ? text : "Enter the text" }) })
    }
  );
};
const EditableText$1 = EditableText;
export {
  EditableText$1 as E
};
