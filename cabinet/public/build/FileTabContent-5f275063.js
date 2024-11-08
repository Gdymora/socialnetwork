import { jsx } from "react/jsx-runtime";
import { U as UploaderLot } from "./UploaderLot-cdead3c3.js";
import "react";
const FileTabContent = ({
  className,
  onChange,
  page
}) => {
  return /* @__PURE__ */ jsx("div", { className, children: /* @__PURE__ */ jsx(
    UploaderLot,
    {
      onChange,
      page,
      style: {},
      className: "custom-uploader-class"
    }
  ) });
};
const FileTabContent$1 = FileTabContent;
export {
  FileTabContent$1 as default
};
