import { jsxs, jsx } from "react/jsx-runtime";
import moment from "moment";
import { D as Dropdown } from "./Dropdown-c4cea7d8.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { M as ModalYesOrNot } from "./ModalYesOrNot-65fc07f4.js";
import { u as useAxios } from "./useAxios-a6ad7719.js";
import { toast } from "react-toastify";
import "@inertiajs/react";
import "@headlessui/react";
function FileViewHeader({ file }) {
  const dateString = file.created_at;
  moment(dateString).format("DD.MM.YYYY HH:mm:ss");
  const filePostHeader = {
    margin: "5px"
  };
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [fileIdDelete, setFileIdDelete] = useState(null);
  const {
    sendRequest: sendRequestDelete,
    data: dataDelete,
    error: errorDelete
  } = useAxios();
  useEffect(() => {
    if (dataDelete) {
      toast.success("Successfully deleted");
    }
  }, [dataDelete]);
  useEffect(() => {
    const errorNow = errorDelete;
    if (errorNow) {
      toast.error("Error:", errorNow.message);
    }
  }, [errorDelete]);
  const handleSetAsProfilePicture = () => {
    axios.patch("/user-about-me", { profile_image_url: file.url }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error("Error:", error);
    });
  };
  const openDeleteModal = (Id) => {
    setIsOpenDelete(true);
    setFileIdDelete(Id);
  };
  const closeDeleteModal = () => {
    setIsOpenDelete(false);
  };
  const handleDeleteFile = () => {
    if (fileIdDelete) {
      deleteFile(fileIdDelete);
    }
    setIsOpenDelete(false);
  };
  const deleteFile = (id) => sendRequestDelete("delete", {}, { url: `/user-file/${id}` });
  return /* @__PURE__ */ jsxs("div", { className: "flex-grow", style: filePostHeader, children: [
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
      /* @__PURE__ */ jsxs(Dropdown.Content, { align: "right", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "m-2",
            onClick: () => openDeleteModal(file.id),
            children: "Delete"
          }
        ),
        /* @__PURE__ */ jsx(
          Dropdown.Link,
          {
            href: route("profile.edit"),
            children: "Profile"
          }
        ),
        " ",
        file.type === "image" && /* @__PURE__ */ jsxs(
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
    ] }) }),
    isOpenDelete && /* @__PURE__ */ jsx(
      ModalYesOrNot,
      {
        closeModal: closeDeleteModal,
        handleButtonClick: handleDeleteFile,
        text: {
          head: "Delete a file",
          title: "Do you want to delete a file?"
        }
      }
    )
  ] });
}
export {
  FileViewHeader as default
};
