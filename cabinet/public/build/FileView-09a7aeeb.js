import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import FileViewHeader from "./FileViewHeader-da0cf291.js";
import FileViewContent from "./FileViewContent-605a882f.js";
import FileViewFooter from "./FileViewFooter-58e55ffa.js";
import "moment";
import "./Dropdown-c4cea7d8.js";
import "@inertiajs/react";
import "@headlessui/react";
import "./useExpandableContent-d234d7eb.js";
import "axios";
import "./CustomAudioPlayer-b9199818.js";
import "@heroicons/react/16/solid";
function FileView({ file }) {
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  const postFile = {
    maxWidth: "100%",
    backgroundColor: "var(--content-bg-color)",
    border: "1px solid #ddd",
    padding: "7px",
    margin: "4px"
  };
  return /* @__PURE__ */ jsxs("div", { style: postFile, children: [
    /* @__PURE__ */ jsx(
      FileViewHeader,
      {
        title: file.title,
        createdAt: file.created_at,
        visibility: file.visible,
        type: file.type,
        url: file.url
      }
    ),
    /* @__PURE__ */ jsx(FileViewContent, { media: file }),
    /* @__PURE__ */ jsx(
      FileViewFooter,
      {
        onToggleComments: toggleComments,
        description: file.description
      }
    )
  ] });
}
export {
  FileView as default
};
