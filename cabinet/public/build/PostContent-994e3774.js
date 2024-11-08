import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import LinkPreviewPost from "./LinkPreviewPost-c5eba1a2.js";
function PostContent({
  title,
  content,
  media,
  links,
  maxLength
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState(null);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  const renderContent = () => {
    if (isExpanded || content.length <= maxLength) {
      return content;
    }
    return content.substring(0, maxLength) + "...";
  };
  const openLargeImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  const closeLargeImage = () => {
    setSelectedImage(null);
  };
  const handleImageLoad = (event) => {
    const img = event.target;
    setImageDimensions({ width: img.width, height: img.height });
  };
  let gridClass = "grid-cols-3";
  if (media.length === 1) {
    gridClass = "grid-cols-1";
  } else if (media.length === 2) {
    gridClass = "grid-cols-2";
  } else if (media.length > 2) {
    gridClass = "grid-cols-3";
  }
  return /* @__PURE__ */ jsxs("div", { className: "post-content", children: [
    /* @__PURE__ */ jsx("div", { className: `grid ${gridClass} gap-4`, children: media.map((mediaItem) => /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => openLargeImage(`/media/${mediaItem.url}`),
        className: "relative",
        children: [
          mediaItem.type === "image" && /* @__PURE__ */ jsx(
            "img",
            {
              src: `/media/${mediaItem.url}`,
              alt: "Media",
              loading: "lazy",
              onLoad: handleImageLoad
            }
          ),
          mediaItem.type === "video" && /* @__PURE__ */ jsx("video", { src: `/media/${mediaItem.url}`, controls: true })
        ]
      },
      mediaItem.id
    )) }),
    links.map((linksItem, index) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(LinkPreviewPost, { linkData: linksItem }) }, index)),
    /* @__PURE__ */ jsx("p", { children: renderContent() }),
    content.length > maxLength && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "span",
      {
        onClick: toggleExpanded,
        style: { cursor: "pointer", color: "blue" },
        children: isExpanded ? "View less" : "View more"
      }
    ) }),
    selectedImage && imageDimensions && /* @__PURE__ */ jsx(
      "div",
      {
        className: "large-image flex justify-content-center align-items-center",
        onClick: closeLargeImage,
        children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: selectedImage,
            alt: "Large Media",
            width: imageDimensions.width,
            height: imageDimensions.height
          }
        ) })
      }
    )
  ] });
}
export {
  PostContent as default
};
