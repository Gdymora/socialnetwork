import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const generateStyle = (size) => {
  return {
    height: "36px",
    padding: "5px 26px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f8f8f8",
    cursor: "pointer",
    fontSize: size === "small" ? "12px" : size === "large" ? "20px" : "16px"
  };
};
const SelectButton = ({
  size = "medium",
  style,
  options,
  onChange,
  selectedSet
}) => {
  const baseStyle = generateStyle(size);
  const combinedStyle = { ...baseStyle, ...style };
  const [selected, setSelected] = useState(
    selectedSet || (options.length > 0 ? options[0].value : "")
  );
  useEffect(() => {
    if (options.length > 0) {
      onChange(options[0].value);
    }
  }, []);
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelected(selectedValue);
    onChange(selectedValue);
  };
  return /* @__PURE__ */ jsx(
    "select",
    {
      style: combinedStyle,
      value: selected,
      onChange: handleSelectChange,
      children: options.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
    }
  );
};
const SelectButton$1 = SelectButton;
export {
  SelectButton$1 as S
};
