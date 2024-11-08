import { jsx, jsxs } from "react/jsx-runtime";
import FileView from "./FileView-a83e6aa4.js";
import { Fragment, useState, useEffect } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { toast } from "react-toastify";
import { u as useAxios } from "./useAxios-a6ad7719.js";
import "./FileViewHeader-989eeec3.js";
import "moment";
import "./Dropdown-c4cea7d8.js";
import "@inertiajs/react";
import "axios";
import "./ModalYesOrNot-65fc07f4.js";
import "./FileViewContent-3c344970.js";
import "./CustomAudioPlayer-b9199818.js";
import "@heroicons/react/16/solid";
import "./FileViewFooter-2a2dbeae.js";
import "./useExpandableContent-d234d7eb.js";
const ModalCustom = ({ closeModal, text, children }) => {
  return /* @__PURE__ */ jsx(Transition, { appear: true, show: true, as: Fragment, children: /* @__PURE__ */ jsx(
    Dialog,
    {
      as: "div",
      className: "fixed inset-0 z-10 overflow-y-auto",
      onClose: closeModal,
      children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen px-4 text-center", children: [
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/25" })
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "inline-block h-screen align-middle",
            "aria-hidden": "true",
            children: "​"
          }
        ),
        /* @__PURE__ */ jsx(
          Transition.Child,
          {
            as: Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ jsxs("div", { className: "inline-block w-full min-w-3xl max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4", children: [
                /* @__PURE__ */ jsx(
                  Dialog.Title,
                  {
                    as: "h3",
                    className: "text-lg font-medium leading-6 text-gray-900",
                    children: text.title
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: closeModal,
                    className: "text-gray-400 hover:text-gray-700 focus:outline-none",
                    children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M6 18L18 6M6 6l12 12"
                          }
                        )
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center", children }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "inline-flex justify-right px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                  onClick: closeModal,
                  children: "Cancel"
                }
              ) })
            ] })
          }
        )
      ] })
    }
  ) });
};
function FileCategoryView({
  title,
  files,
  onFileClick
}) {
  const contentGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))",
    margin: "10px",
    justifyItems: "center"
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpenList, setIsOpenList] = useState(false);
  const {
    sendRequest: sendRequestDelete,
    data: dataDelete,
    loading: loadingDelete,
    error: errorDelete
  } = useAxios();
  useEffect(() => {
    if (dataDelete) {
      toast.success("Successfully deleted");
      setSelectedItems([]);
    }
  }, [dataDelete]);
  useEffect(() => {
    const errorNow = errorDelete;
    if (errorNow) {
      toast.error("Error:", errorNow.message);
    }
  }, [errorDelete]);
  const handleChange = (e, item) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) => prev.filter((i) => i.id !== item));
    }
  };
  const openModalCreateList = () => {
  };
  const openModalAddList = () => {
  };
  const openModalList = () => setIsOpenList(true);
  const closeModalList = () => setIsOpenList(false);
  const openDeleteModalArray = () => {
    const arrayID = selectedItems.map((item) => item.id);
    deleteFile(arrayID);
    closeModalList();
  };
  const deleteFile = (ids) => {
    if (ids) {
      const url = `/delete-user-files`;
      sendRequestDelete("post", { ids }, {}, url);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "post", children: [
    title && /* @__PURE__ */ jsx("h3", { children: title }),
    /* @__PURE__ */ jsxs("div", { style: contentGrid, children: [
      files.map((file, index) => /* @__PURE__ */ jsx(
        FileView,
        {
          file,
          onFileClick: () => onFileClick(file, index),
          handleChange,
          selectedItems
        },
        file.id
      )),
      /* @__PURE__ */ jsx("button", { onClick: openModalList, children: "TEST" }),
      isOpenList && /* @__PURE__ */ jsx(
        ModalCustom,
        {
          isOpen: isOpenList,
          closeModal: closeModalList,
          text: "Your Modal Title",
          zIndex: 10,
          children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { children: "List items:" }),
            /* @__PURE__ */ jsx("ul", { children: selectedItems.map((item, index) => /* @__PURE__ */ jsxs("li", { children: [
              index + 1,
              " ",
              item.title,
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  onChange: (e) => handleChange(e, item),
                  checked: selectedItems.some(
                    (i) => i.id === item.id
                  )
                }
              )
            ] }, index)) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "m-2",
                onClick: openModalCreateList,
                children: "Create New List"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "m-2",
                onClick: openModalAddList,
                children: "Add list"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "m-2",
                onClick: openDeleteModalArray,
                children: "Delete"
              }
            )
          ] })
        }
      )
    ] })
  ] });
}
export {
  FileCategoryView as default
};
