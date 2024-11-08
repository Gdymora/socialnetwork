import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import SayPost from "./SayPost-75bdbc0b.js";
import { M as Modal } from "./Modal-84e6b027.js";
import JobTabContent from "./JobTabContent-27d67371.js";
import { B as Button } from "./Button-9cb580cd.js";
import { S as SelectButton } from "./SelectButton-79e61b6d.js";
import FileTabContent from "./FileTabContent-5f275063.js";
import LinkTabContent from "./LinkTabContent-1fe1e586.js";
import { toast } from "react-toastify";
import { E as EditableText } from "./EditableText-cbf634f4.js";
import { u as useAxios } from "./useAxios-a6ad7719.js";
import "./TextInput-3550b10b.js";
import "@headlessui/react";
import "./UploaderLot-cdead3c3.js";
import "axios";
import "./LinkPreviewModal-232e28eb.js";
const styles = {
  "text-tab-content": "_text-tab-content_qlha0_2",
  "job-tab-content": "_job-tab-content_qlha0_2",
  "text-tab-content-active": "_text-tab-content-active_qlha0_7",
  "job-tab-content-active": "_job-tab-content-active_qlha0_7"
};
const modalHeader = "_modalHeader_16evi_2";
const modalCloseButton = "_modalCloseButton_16evi_11";
const modalContent = "_modalContent_16evi_26";
const modalFooter = "_modalFooter_16evi_30";
const inputField = "_inputField_16evi_37";
const gridBlock = "_gridBlock_16evi_44";
const sizeCircle = "_sizeCircle_16evi_50";
const textFlexCenter = "_textFlexCenter_16evi_55";
const stylesModal = {
  modalHeader,
  modalCloseButton,
  modalContent,
  modalFooter,
  inputField,
  gridBlock,
  sizeCircle,
  textFlexCenter
};
function ParentSayPost({
  profileData,
  postData,
  onCreatePost,
  onUpdatePost
}) {
  const {
    data: postCreate,
    error: errorCreate,
    sendRequest: sendRequestCreate
  } = useAxios();
  const {
    data: postUpdate,
    error: errorUpdate,
    sendRequest: sendRequestUpdate
  } = useAxios();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent2, setModalContent] = useState("text");
  const [selectedOption, setSelectedOption] = useState("");
  const [fileData, setFileData] = useState(null);
  const [textData, setTextData] = useState("");
  const [linkData, setLinkData] = useState("");
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (postData) {
      setIsModalOpen(true);
      setSelectedOption(postData.visibility === "public" ? "1" : "2");
      handleTextChange(postData.content);
      if (postData.links.length > 0) {
        handleOpenModal("link");
        handleLinkChange(postData.links[0]);
      }
      if (postData.media.length > 0) {
        handleOpenModal("file");
      }
    }
    return () => {
      setIsModalOpen(false);
      setSelectedOption("");
    };
  }, [postData]);
  const fileClick = () => handleOpenModal("file");
  const jobClick = () => handleOpenModal("job");
  const linkClick = () => handleOpenModal("link");
  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };
  const handleFileChange = (data) => {
    if (data) {
      setDisabled(false);
      console.log(data);
      setFileData(data);
    } else {
      setTextData("");
    }
  };
  const handleLinkChange = (data) => {
    setDisabled(false);
    setLinkData(data);
    setTextData(data.title);
  };
  const handleTextChange = (data) => {
    setDisabled(false);
    setTextData(data);
  };
  const formData = new FormData();
  formData.append("textData", textData);
  formData.append("linkData", JSON.stringify(linkData));
  formData.append("selectedOption", selectedOption);
  if (fileData) {
    Array.from(fileData).forEach((file, index) => {
      formData.append(`fileData${index}`, file);
    });
  }
  useEffect(() => {
    if (postUpdate && onUpdatePost) {
      const postObj = postUpdate["post"];
      onUpdatePost(postObj);
      toast.success(`Success update Post`);
    }
    if (postCreate && onCreatePost) {
      const postObj = postCreate["post"];
      onCreatePost(postObj);
      toast.success(`Success create Post`);
    }
    setIsModalOpen(false);
  }, [postUpdate, postCreate]);
  useEffect(() => {
    const errorNow = errorCreate || errorUpdate;
    if (errorNow) {
      toast.error("Error:", errorNow.message);
    }
  }, [errorCreate, errorUpdate]);
  const handleSubmitUpdate = () => {
    formData.append("_method", "put");
    sendRequestUpdate("post", formData, {
      url: `/posts/${postData == null ? void 0 : postData.id}`,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };
  const handleSubmitCreate = () => {
    sendRequestCreate("post", formData, {
      url: `/posts`,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    profileData && /* @__PURE__ */ jsx(
      SayPost,
      {
        profileData,
        onTextClick: () => handleOpenModal("text"),
        onFileClick: () => handleOpenModal("file"),
        onLinkClick: () => handleOpenModal("link"),
        onJobClick: () => handleOpenModal("job")
      }
    ),
    isModalOpen && /* @__PURE__ */ jsx(Modal, { show: isModalOpen, onClose: () => setIsModalOpen(false), children: /* @__PURE__ */ jsxs("div", { className: "relative bg-white rounded-lg shadow-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: stylesModal.modalHeader, children: [
        /* @__PURE__ */ jsx("span", { children: "Create post" }),
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
          /* @__PURE__ */ jsx("div", { children: " " }),
          /* @__PURE__ */ jsx("div", { className: stylesModal.textFlexCenter, children: /* @__PURE__ */ jsx("p", { className: "bold" }) }),
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
              onChange: handleSelectChange,
              selectedSet: selectedOption
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(
          EditableText,
          {
            onChange: handleTextChange,
            textFromUploader: textData
          }
        ),
        modalContent2 === "file" && /* @__PURE__ */ jsx(
          FileTabContent,
          {
            className: modalContent2 === "file" ? styles.imageTabContentActive : styles.imageTabContent,
            onChange: handleFileChange,
            page: "dashboard"
          }
        ),
        modalContent2 === "link" && /* @__PURE__ */ jsx(
          LinkTabContent,
          {
            className: modalContent2 === "link" ? styles.linkTabContentActive : styles.linkTabContent,
            onChange: handleLinkChange,
            dataLink: postData == null ? void 0 : postData.links[0]
          }
        ),
        modalContent2 === "job" && /* @__PURE__ */ jsx(
          JobTabContent,
          {
            className: modalContent2 === "job" ? styles.jobTabContentActive : styles.jobTabContent
          }
        )
      ] }) }),
      profileData && /* @__PURE__ */ jsx("div", { className: stylesModal.modalFooter, children: /* @__PURE__ */ jsxs("div", { className: "flex align-items-center post_message space-between", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            className: "btn btn-secondary",
            onClick: linkClick,
            children: "Link"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            className: "but btn btn-secondary",
            onClick: fileClick,
            children: "Image/Video"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            className: "btn btn-secondary",
            onClick: jobClick,
            children: "Job"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: stylesModal.modalFooter, children: [
        !postData && /* @__PURE__ */ jsx(
          Button,
          {
            className: "btn btn-primary-send",
            onClick: handleSubmitCreate,
            disabled,
            children: "Send"
          }
        ),
        postData && /* @__PURE__ */ jsx(
          Button,
          {
            className: "btn btn-primary-send",
            onClick: handleSubmitUpdate,
            disabled,
            children: "Update"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  ParentSayPost as default
};
