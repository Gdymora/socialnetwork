import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
const UploaderLot = ({ onChange, style, className, page }) => {
  const [files, setFiles] = useState(null);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFiles(droppedFiles);
      const urls = Array.from(droppedFiles).map(
        (file) => URL.createObjectURL(file)
      );
      setPreviewUrls(urls);
      onChange(droppedFiles);
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files) {
      const selectedFiles = e.target.files;
      setFiles(selectedFiles);
      const urls = Array.from(selectedFiles).map(
        (file) => URL.createObjectURL(file)
      );
      setPreviewUrls(urls);
      onChange(selectedFiles);
    }
  };
  function createFileList(files2) {
    const dataTransfer = new DataTransfer();
    files2.forEach((file) => dataTransfer.items.add(file));
    return dataTransfer.files;
  }
  const handleDeleteFile = (index, event) => {
    event.stopPropagation();
    if (files && previewUrls) {
      const updatedFiles = Array.from(files);
      updatedFiles.splice(index, 1);
      const updatedUrls = Array.from(previewUrls);
      updatedUrls.splice(index, 1);
      const removedPreviewUrls = previewUrls.slice(index, index + 1);
      removedPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
      setFiles(createFileList(updatedFiles));
      setPreviewUrls(updatedUrls);
      onChange(createFileList(updatedFiles));
    }
  };
  const uploaderStyle = {
    border: "2px dashed #ccc",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    minHeight: "230px",
    justifyContent: "center",
    alignItems: "center",
    ...style
  };
  const previewStyle = {
    border: "2px dashed #ccc",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  const uploaderHoverStyle = {
    border: "2px dashed #05194fe8"
    // змінюємо колір при наведенні
  };
  const colorHoverStyle = {
    color: "#1137e3"
    // змінюємо колір при наведенні
  };
  const imageVideoStyle = {
    height: "100%",
    objectFit: "contain"
  };
  const audioStyle = {
    objectFit: "contain"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        ...uploaderStyle,
        ...isHovered ? uploaderHoverStyle : {}
      },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      className,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
      onClick: () => {
        var _a;
        return (_a = document.getElementById("fileInput")) == null ? void 0 : _a.click();
      },
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            id: "fileInput",
            style: { display: "none" },
            onChange: handleFileChange,
            multiple: true
          }
        ),
        (!files || files.length <= 0) && /* @__PURE__ */ jsx("p", { style: isHovered ? colorHoverStyle : {}, children: "Click or drag files here" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4", children: previewUrls.map((url, index) => /* @__PURE__ */ jsx("div", { className: "relative", children: files && files[index] && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              ...previewStyle,
              ...isHovered ? uploaderHoverStyle : {}
            },
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: (e) => handleDeleteFile(index, e),
                  className: "absolute top-3 right-3 bg-none rounded-md mx-2",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "assets/images/svg/trash-can-red.svg",
                      alt: "trash-can",
                      style: {
                        width: "1.5rem",
                        height: "1.5rem"
                      }
                    }
                  )
                }
              ),
              files[index].type.startsWith("image/") && /* @__PURE__ */ jsx(
                "img",
                {
                  src: url,
                  alt: "Preview",
                  style: imageVideoStyle
                }
              ),
              files[index].type.startsWith("video/") && /* @__PURE__ */ jsx(
                "video",
                {
                  src: url,
                  controls: true,
                  style: imageVideoStyle
                }
              ),
              page !== "dashboard" && files[index].type.startsWith("audio/") && /* @__PURE__ */ jsx(
                "audio",
                {
                  src: url,
                  controls: true,
                  style: audioStyle
                }
              )
            ]
          }
        ) }, index)) })
      ]
    }
  );
};
const UploaderLot$1 = UploaderLot;
export {
  UploaderLot$1 as U
};
