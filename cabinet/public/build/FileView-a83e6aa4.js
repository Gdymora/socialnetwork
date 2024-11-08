import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import FileViewHeader from "./FileViewHeader-989eeec3.js";
import FileViewContent from "./FileViewContent-3c344970.js";
import FileViewFooter from "./FileViewFooter-2a2dbeae.js";
import "moment";
import "./Dropdown-c4cea7d8.js";
import "@inertiajs/react";
import "@headlessui/react";
import "axios";
import "./ModalYesOrNot-65fc07f4.js";
import "./useAxios-a6ad7719.js";
import "react-toastify";
import "./CustomAudioPlayer-b9199818.js";
import "@heroicons/react/16/solid";
import "./useExpandableContent-d234d7eb.js";
const postFile = {
  maxWidth: "100%",
  backgroundColor: "var(--content-bg-color)",
  border: "1px solid #ddd",
  padding: "7px",
  margin: "4px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};
function FileView({
  file,
  onFileClick,
  handleChange,
  selectedItems
}) {
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  return /* @__PURE__ */ jsxs("div", { style: postFile, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            className: "mr-2",
            checked: selectedItems.some((i) => i.id === file.id),
            onChange: (e) => handleChange(e, file)
          }
        ),
        /* @__PURE__ */ jsx(FileViewHeader, { file })
      ] }),
      /* @__PURE__ */ jsx("div", { onClick: onFileClick, children: /* @__PURE__ */ jsx(FileViewContent, { media: file }) })
    ] }),
    /* @__PURE__ */ jsx(
      FileViewFooter,
      {
        onToggleComments: toggleComments,
        description: file.description,
        title: file.title
      }
    )
  ] });
}
export {
  FileView as default
};
