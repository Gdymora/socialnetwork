import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const Uploader = ({
  onChange,
  style,
  className,
  page,
  prewiewForUpdate
}) => {
  const [file, setFile] = useState(null);
  const [isFile, setIsFile] = useState(prewiewForUpdate);
  const [previewUrl, setPreviewUrl] = useState("");
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file2 = files[0];
      setFile(file2);
      setPreviewUrl(URL.createObjectURL(file2));
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files) {
      const file2 = e.target.files[0];
      setFile(file2);
      setPreviewUrl(URL.createObjectURL(file2));
      onChange(file2);
    }
  };
  useEffect(() => {
    if (file) {
      console.log(file.type);
      onChange(file);
    }
  }, [file]);
  const uploaderStyle = {
    border: "2px dashed #ccc",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    ...style
  };
  const uploaderWindowStyle = {
    //maxWidth: '500px', // Максимальна ширина контейнера
    //maxHeight: '500px', // Максимальна висота контейнера
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
      style: uploaderStyle,
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
            onChange: handleFileChange
          }
        ),
        "Click or drag the file here",
        file && /* @__PURE__ */ jsxs("div", { style: uploaderWindowStyle, children: [
          file.type.startsWith("image/") && /* @__PURE__ */ jsx(
            "img",
            {
              src: previewUrl,
              alt: "Preview",
              style: imageVideoStyle
            }
          ),
          file.type.startsWith("video/") && /* @__PURE__ */ jsx(
            "video",
            {
              src: previewUrl,
              controls: true,
              style: imageVideoStyle
            }
          ),
          page !== "dashboard" && file.type.startsWith("audio/") && /* @__PURE__ */ jsx("audio", { src: previewUrl, controls: true, style: audioStyle })
        ] }),
        isFile && /* @__PURE__ */ jsxs("div", { style: uploaderWindowStyle, children: [
          isFile.type === "image" && /* @__PURE__ */ jsx(
            "img",
            {
              src: `/media/${isFile.url}`,
              alt: "Preview",
              style: imageVideoStyle
            }
          ),
          isFile.type === "video" && /* @__PURE__ */ jsx(
            "video",
            {
              src: `/media/${isFile.url}`,
              controls: true,
              style: imageVideoStyle
            }
          ),
          page !== "dashboard" && isFile.type === "audio" && /* @__PURE__ */ jsx("audio", { src: `/media/${isFile.url}`, controls: true, style: audioStyle })
        ] })
      ]
    }
  );
};
const FileTabContent = ({
  className,
  onChange
}) => {
  return /* @__PURE__ */ jsx("div", { className, children: /* @__PURE__ */ jsx(
    Uploader,
    {
      onChange,
      style: {},
      className: "custom-uploader-class"
    }
  ) });
};
export {
  FileTabContent as default
};
