import { jsxs, jsx } from "react/jsx-runtime";
import moment from "moment";
import { D as Dropdown } from "./Dropdown-c4cea7d8.js";
import { u as useExpandableContent } from "./useExpandableContent-d234d7eb.js";
import axios from "axios";
import "react";
import "@inertiajs/react";
import "@headlessui/react";
function FileViewHeader({
  title,
  createdAt,
  visibility,
  type,
  url
}) {
  const dateString = createdAt;
  moment(dateString).format("DD.MM.YYYY HH:mm:ss");
  const filePostHeader = {
    display: "grid",
    gridTemplateColumns: "8fr 1fr",
    margin: "10px",
    alignContent: "center"
  };
  const maxLength = 10;
  const text = title ? title : "";
  const { isExpanded, toggleExpanded, renderContent } = useExpandableContent(
    text,
    maxLength
  );
  const handleSetAsProfilePicture = (event) => {
    event.preventDefault();
    axios.patch("/user-about-me", { profile_image_url: url }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error("Error:", error);
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "", style: filePostHeader, children: [
    /* @__PURE__ */ jsx("span", { className: "bold", style: { fontSize: "0.7rem" }, children: /* @__PURE__ */ jsxs("p", { children: [
      renderContent(),
      text.length > maxLength && /* @__PURE__ */ jsx("button", { onClick: toggleExpanded, children: isExpanded ? "<-" : "..." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-content-right", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
      /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "nav-link dropdown-toggle button-icon",
          id: "navbarDropdown",
          role: "button",
          "data-bs-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          children: /* @__PURE__ */ jsx("i", { className: "bi bi-three-dots-vertical" })
        }
      ) }),
      /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
        /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Profile" }),
        " ",
        visibility === "private" && type === "image" && /* @__PURE__ */ jsxs(
          Dropdown.Link,
          {
            onClick: handleSetAsProfilePicture,
            method: "post",
            as: "button",
            href: "#",
            children: [
              " ",
              "Set as profile picture"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  FileViewHeader as default
};
