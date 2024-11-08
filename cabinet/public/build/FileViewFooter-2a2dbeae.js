import { jsx, jsxs } from "react/jsx-runtime";
import { u as useExpandableContent } from "./useExpandableContent-d234d7eb.js";
import "react";
function FileViewFooter({
  onToggleComments,
  description,
  title
}) {
  if (typeof onToggleComments !== "function") {
    console.error(
      "onToggleComments should be a function",
      onToggleComments
    );
  }
  const maxLength = 10;
  const text = title ? title : "";
  const { isExpanded, toggleExpanded, renderContent } = useExpandableContent(
    text,
    maxLength
  );
  return /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("span", { className: "bold  justify-end", style: { fontSize: "0.7rem" }, children: /* @__PURE__ */ jsxs("p", { children: [
    renderContent(),
    text.length > maxLength && /* @__PURE__ */ jsx("button", { onClick: toggleExpanded, children: isExpanded ? "<-" : "..." })
  ] }) }) });
}
export {
  FileViewFooter as default
};
