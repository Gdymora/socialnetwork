import { jsx, jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
const ModalYesOrNot = ({ closeModal, handleButtonClick, text }) => {
  const handleButtonClickWithInfo = (buttonName) => {
    handleButtonClick(buttonName);
    closeModal();
  };
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
            children: /* @__PURE__ */ jsxs("div", { className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl", children: [
              /* @__PURE__ */ jsx(
                Dialog.Title,
                {
                  as: "h3",
                  className: "text-lg font-medium leading-6 text-gray-900",
                  children: text.head
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: text.title }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 flex justify-center", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "mr-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                    onClick: closeModal,
                    children: "No"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleButtonClickWithInfo("New Project"),
                    className: "inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                    children: "Yes"
                  }
                )
              ] })
            ] })
          }
        )
      ] })
    }
  ) });
};
const ModalYesOrNot$1 = ModalYesOrNot;
export {
  ModalYesOrNot$1 as M
};
