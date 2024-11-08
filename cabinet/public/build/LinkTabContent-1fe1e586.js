import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
import LinkPreviewModal from "./LinkPreviewModal-232e28eb.js";
const LinkTabContent = ({
  onChange,
  className,
  dataLink
}) => {
  const [link, setLink] = useState((dataLink == null ? void 0 : dataLink.url) || "");
  const [linkData, setLinkData] = useState(dataLink || null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const fetchLinkData = async (url) => {
    try {
      const response = await axios.get(
        `/link-preview/${encodeURIComponent(url)}`
      );
      setLinkData(response.data);
      setError("");
    } catch (err) {
      setError("Неможливо отримати дані за посиланням");
    }
  };
  useEffect(() => {
    if (linkData) {
      onChange(linkData);
    }
  }, [linkData]);
  useEffect(() => {
    if (link) {
      handleLinkSubmit();
    }
  }, [link]);
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };
  const onDeleteLink = () => {
    setLinkData(null);
    setLink("");
  };
  const handleLinkSubmit = () => {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      fetchLinkData(link);
      setIsEditing(false);
    } else {
      setError("Введено некоректне посилання");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className, children: [
    isEditing ? /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: link,
        onChange: handleLinkChange,
        autoFocus: true
      }
    ) : /* @__PURE__ */ jsx("div", { onClick: () => setIsEditing(true), children: link || "Введіть посилання" }),
    linkData && /* @__PURE__ */ jsx(LinkPreviewModal, { linkData, onDelete: onDeleteLink }),
    error && /* @__PURE__ */ jsx("p", { className: "error", children: error })
  ] });
};
const LinkTabContent$1 = LinkTabContent;
export {
  LinkTabContent$1 as default
};
