import { jsx, jsxs } from "react/jsx-runtime";
import { M as Modal } from "./Modal-84e6b027.js";
import FileView from "./FileView-a83e6aa4.js";
import { s as stylesModal } from "./Modal.module-5acca05a.js";
import "react";
import "@headlessui/react";
import "./FileViewHeader-989eeec3.js";
import "moment";
import "./Dropdown-c4cea7d8.js";
import "@inertiajs/react";
import "axios";
import "./ModalYesOrNot-65fc07f4.js";
import "./useAxios-a6ad7719.js";
import "react-toastify";
import "./FileViewContent-3c344970.js";
import "./CustomAudioPlayer-b9199818.js";
import "@heroicons/react/16/solid";
import "./FileViewFooter-2a2dbeae.js";
import "./useExpandableContent-d234d7eb.js";
function FileModal({
  isModalOpen,
  modalContent,
  onClose,
  onNextClick,
  onPrevClick
}) {
  return /* @__PURE__ */ jsx(
    Modal,
    {
      show: isModalOpen,
      overlayColor: "black",
      maxWidth: "4xl",
      onClose,
      children: /* @__PURE__ */ jsxs("div", { className: "relative bg-white rounded-lg shadow-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: stylesModal.modalHeader, children: [
          /* @__PURE__ */ jsx("span", { children: "Modal Header" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: stylesModal.modalCloseButton,
              onClick: () => onClose(false),
              children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", width: "24", height: "24", children: [
                /* @__PURE__ */ jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
                /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-y-auto max-h-[90vh]", children: /* @__PURE__ */ jsx("div", { className: stylesModal.modalContent, children: modalContent && /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(
          FileView,
          {
            file: modalContent,
            contentModal: isModalOpen,
            onNextClick: () => onNextClick(),
            onPrevClick: () => onPrevClick()
          },
          modalContent.id
        ) }) }) }),
        /* @__PURE__ */ jsx("div", { className: stylesModal.modalFooter, children: /* @__PURE__ */ jsx("div", { className: "flex align-items-center post_message" }) }),
        /* @__PURE__ */ jsx("div", { className: stylesModal.modalFooter })
      ] })
    }
  );
}
export {
  FileModal as default
};
