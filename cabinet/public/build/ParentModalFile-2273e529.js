import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { M as Modal } from "./Modal-84e6b027.js";
import { B as Button } from "./Button-9cb580cd.js";
import { s as stylesModal } from "./Modal.module-5acca05a.js";
import { S as SelectButton } from "./SelectButton-79e61b6d.js";
import { useForm } from "@inertiajs/react";
import Videos from "./Videos-03cc7185.js";
import { T as TextInput } from "./TextInput-3550b10b.js";
import Music from "./Music-6f38130d.js";
import Posts from "./Posts-58f50fe4.js";
import Images from "./Images-dc28d36f.js";
import { toast } from "react-toastify";
import { U as UploaderLot } from "./UploaderLot-cdead3c3.js";
import { u as useAxios } from "./useAxios-a6ad7719.js";
import "@headlessui/react";
import "axios";
function ParentModalFile({
  profileData,
  onToggleFiles
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    descriptionData: "",
    selectedOption: "",
    fileData: null
  });
  const {
    data: dataCreate,
    error: errorCreate,
    sendRequest: sendRequestCreate
  } = useAxios();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [fileData, setFileData] = useState(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (dataCreate) {
      toast.success(dataCreate.message);
      setDisabled(true);
    }
  }, [dataCreate]);
  useEffect(() => {
    const errorNow = errorCreate;
    if (errorNow) {
      toast.error("Error:", errorNow.message);
    }
  }, [errorCreate]);
  const handleOpenModal = (content) => {
    setIsModalOpen(true);
  };
  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };
  const handleFileChange = (data2) => {
    setFileData(data2);
    if ((data2 == null ? void 0 : data2.length) == 1 && data2[0].name) {
      setData("title", data2[0].name);
    }
    setDisabled(false);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("selectedOption", selectedOption);
    formData.append("titleData", data.title);
    formData.append("descriptionData", data.descriptionData);
    if (fileData) {
      Array.from(fileData).forEach((file, index) => {
        formData.append(`fileData${index}`, file);
      });
    }
    if (fileData) {
      Array.from(fileData).forEach((file, index) => {
        formData.append(`fileData${index}`, file);
      });
    }
    sendRequestCreate("post", formData, {
      url: `/user-file`,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Images,
      {
        onAddImages: () => handleOpenModal(),
        handleShowImages: () => onToggleFiles(true, "image")
      }
    ),
    /* @__PURE__ */ jsx(
      Music,
      {
        onAddMusics: () => handleOpenModal(),
        handleShowMusics: () => onToggleFiles(true, "music")
      }
    ),
    /* @__PURE__ */ jsx(
      Videos,
      {
        onAddVideos: () => handleOpenModal(),
        handleShowVideos: () => onToggleFiles(true, "video")
      }
    ),
    /* @__PURE__ */ jsx(Posts, { handleShowPosts: () => onToggleFiles(false, "post") }),
    isModalOpen && /* @__PURE__ */ jsx(Modal, { show: isModalOpen, onClose: () => setIsModalOpen(false), children: /* @__PURE__ */ jsxs("div", { className: "relative bg-white rounded-lg shadow-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: stylesModal.modalHeader, children: [
        /* @__PURE__ */ jsx("span", { children: "Modal Header" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: stylesModal.modalCloseButton,
            onClick: () => setIsModalOpen(false),
            children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", children: [
              /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-y-auto max-h-[80vh]", children: /* @__PURE__ */ jsxs("div", { className: stylesModal.modalContent, children: [
        /* @__PURE__ */ jsxs("div", { className: stylesModal.gridBlock, children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `circle ${stylesModal.sizeCircle}`,
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: profileData.profile_image_url ? `/user-file/${profileData.profile_image_url}` : "/assets/images/noimg.png",
                  alt: profileData.name || "noimage"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: stylesModal.textFlexCenter, children: /* @__PURE__ */ jsxs("p", { className: "bold", children: [
            profileData.name,
            " ",
            profileData.last_name
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: stylesModal.textFlexCenter, children: /* @__PURE__ */ jsx(
            SelectButton,
            {
              size: "small",
              style: {
                backgroundColor: "lightblue"
              },
              options: [
                { label: "Public", value: "1" },
                {
                  label: "Private",
                  value: "2"
                }
              ],
              onChange: handleSelectChange
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "title", children: "Title:" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "title",
              type: "text",
              name: "title",
              value: data.title,
              className: "mt-1 block w-full",
              isFocused: true,
              onChange: (e) => setData("title", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "description", children: "Description:" }),
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "description",
              type: "description",
              name: "description",
              value: data.descriptionData,
              className: "mt-1 block w-full",
              isFocused: true,
              onChange: (e) => setData(
                "descriptionData",
                e.target.value
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-y-auto max-h-[80vh]", children: /* @__PURE__ */ jsxs("div", { className: stylesModal.modalContent, children: [
          /* @__PURE__ */ jsxs("div", { className: stylesModal.gridBlock, children: [
            /* @__PURE__ */ jsx("div", { children: " " }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: stylesModal.textFlexCenter,
                children: /* @__PURE__ */ jsx("p", { className: "bold" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            UploaderLot,
            {
              onChange: handleFileChange,
              style: {},
              className: "custom-uploader-class"
            }
          )
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: stylesModal.modalFooter, children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            className: "btn btn-primary-send",
            onClick: handleSubmit,
            disabled,
            children: "Send"
          }
        ),
        " "
      ] })
    ] }) })
  ] });
}
export {
  ParentModalFile as default
};
