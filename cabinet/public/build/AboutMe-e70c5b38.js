import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { E as EditableText } from "./EditableText-cbf634f4.js";
import { u as useAxios } from "./useAxios-a6ad7719.js";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "axios";
function AboutMe({ profileData }) {
  const [textData, setTextData] = useState(profileData.about_me);
  const { sendRequest, data, loading, error } = useAxios("");
  const [editableText, setEditableText] = useState({
    hobbies: false,
    occupations: false,
    education: false,
    birthplace: false
  });
  const label = {
    hobbies: "Hobby",
    occupations: "Occupations",
    education: "Education",
    birthplace: "Birthplace"
  };
  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((obj) => obj === value);
  };
  const handleTextChange = (data2, key) => {
    setTextData((prevTextData) => ({
      ...prevTextData,
      [key]: data2
      // Зберігає textData для цього ключа
    }));
  };
  const handleEditableText = (key, isText) => {
    setEditableText((prevState) => ({
      ...prevState,
      [key]: isText
    }));
  };
  const editableStyle = {
    margin: "-8px"
  };
  const handleInputBlur = (valueToFind) => {
    const keyValue = getKeyByValue(label, valueToFind);
    if (keyValue) {
      if (profileData.about_me[keyValue] !== textData[keyValue]) {
        sendRequest(
          "patch",
          { [keyValue]: textData[keyValue] },
          { url: `/user-about-me` }
        );
      }
      handleEditableText(valueToFind, false);
    }
  };
  useEffect(() => {
    if (!loading && !error && data) {
      if (data.message) {
        toast.success(data.message);
      } else {
        toast.success("Successful!");
      }
    } else if (!loading && error) {
      toast.error("Сталася помилка при оновленні даних");
    }
  }, [data, loading, error]);
  return /* @__PURE__ */ jsxs("div", { className: "about", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-content-center", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "circle",
        style: { width: "200px", height: "200px" },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: profileData.profile_image_url ? `/user-file/${profileData.profile_image_url}` : "/assets/images/noimg.png",
            loading: "lazy",
            alt: `${profileData == null ? void 0 : profileData.name} ${profileData == null ? void 0 : profileData.last_name}`
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-content-center", children: /* @__PURE__ */ jsx("h2", { children: "About me" }) }),
    Object.entries(label).map(([key, value]) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "section", children: [
        value,
        ": "
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          onClick: () => handleEditableText(key, true),
          className: "section",
          onBlur: () => handleInputBlur(key),
          children: editableText[key] ? /* @__PURE__ */ jsx("div", { style: editableStyle, children: /* @__PURE__ */ jsx(
            EditableText,
            {
              onChange: (data2) => handleTextChange(data2, key),
              textFromUploader: textData[key],
              isEdit: editableText[key],
              isTypeInput: false
            }
          ) }) : /* @__PURE__ */ jsx(Fragment, { children: textData[key] ? /* @__PURE__ */ jsx("p", { className: "text-light", children: textData[key] }) : /* @__PURE__ */ jsxs("p", { children: [
            "Add a ",
            value
          ] }) })
        },
        key
      )
    ] }, key))
  ] });
}
export {
  AboutMe as default
};
