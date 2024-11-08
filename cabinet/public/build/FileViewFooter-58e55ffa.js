import { jsx } from "react/jsx-runtime";
function FileViewFooter({
  onToggleComments,
  description
}) {
  if (typeof onToggleComments !== "function") {
    console.error(
      "onToggleComments should be a function",
      onToggleComments
    );
  }
  return /* @__PURE__ */ jsx("div", { className: "post-footer" });
}
export {
  FileViewFooter as default
};
