import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-6df35a2d.js";
import { Head } from "@inertiajs/react";
import "react";
import "./Dropdown-c4cea7d8.js";
import "@headlessui/react";
import "react-toastify";
function Post({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "Post" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Post" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: "1  fff" }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: "2  fff" }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg", children: "3 fff" })
        ] }) })
      ]
    }
  );
}
export {
  Post as default
};
