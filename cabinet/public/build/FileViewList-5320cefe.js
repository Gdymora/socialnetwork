import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import FileView from "./FileView-09a7aeeb.js";
import "react";
import "./FileViewHeader-da0cf291.js";
import "moment";
import "./Dropdown-c4cea7d8.js";
import "@inertiajs/react";
import "@headlessui/react";
import "./useExpandableContent-d234d7eb.js";
import "axios";
import "./FileViewContent-605a882f.js";
import "./CustomAudioPlayer-b9199818.js";
import "@heroicons/react/16/solid";
import "./FileViewFooter-58e55ffa.js";
function FileViewList({ files }) {
  const contentGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))",
    margin: "10px",
    justifyItems: "center"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "post", children: [
      /* @__PURE__ */ jsx("h3", { children: "Private" }),
      /* @__PURE__ */ jsx("div", { style: contentGrid, children: files.private.map((file) => /* @__PURE__ */ jsx(FileView, { file }, file.id)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "post", children: [
      /* @__PURE__ */ jsx("h3", { children: "Friends" }),
      /* @__PURE__ */ jsx("div", { style: contentGrid, children: files.friends.map((file) => /* @__PURE__ */ jsx(FileView, { file }, file.id)) }),
      " "
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "post", children: [
      /* @__PURE__ */ jsx("h3", { children: "Public" }),
      /* @__PURE__ */ jsx("div", { style: contentGrid, children: files.public.map((file) => /* @__PURE__ */ jsx(FileView, { file }, file.id)) }),
      " "
    ] })
  ] });
}
export {
  FileViewList as default
};
