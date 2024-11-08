import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { D as Dropdown } from "./Dropdown-c4cea7d8.js";
import { M as ModalYesOrNot } from "./ModalYesOrNot-65fc07f4.js";
import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import "@inertiajs/react";
import "@headlessui/react";
function PostHeader({
  id,
  author,
  createdAt,
  visibility,
  onChangeUpdate,
  onChangeDelete
}) {
  const dateString = createdAt;
  const formattedDate = moment(dateString).format("DD.MM.YYYY HH:mm:ss");
  const currentPath = window.location.pathname === "/user-home";
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [postData, setPostData] = useState({ id, author, visibility });
  const user = useSelector(
    (state) => state.user
  );
  console.log(user);
  const handleClickUpdate = (e) => {
    onChangeUpdate(id);
  };
  const handleClickDelete = (event) => {
    setIsOpenDelete(true);
  };
  const closeDeleteModal = () => {
    setIsOpenDelete(false);
  };
  const handleDeletePost = () => {
    onChangeDelete(postData.id);
    setIsOpenDelete(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "post-header", children: [
    /* @__PURE__ */ jsx("div", { className: "circle", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: author.profile_image_url ? `/user-file/${author.profile_image_url}` : "/assets/images/noimg.png",
        alt: `image ${author.name}`,
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "text", children: [
      /* @__PURE__ */ jsxs("p", { className: "bold", children: [
        author.name,
        " ",
        author.last_name
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-light", children: [
        formattedDate,
        " ",
        visibility
      ] })
    ] }),
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
        currentPath && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            Dropdown.Link,
            {
              method: "get",
              as: "button",
              href: route("posts.show", { id }),
              children: "View"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out ",
              onClick: (e) => {
                handleClickUpdate();
              },
              children: "Edit"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out ",
              onClick: (e) => {
                handleClickDelete();
              },
              children: "Delete"
            }
          )
        ] }),
        !currentPath && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            Dropdown.Link,
            {
              method: "get",
              as: "button",
              href: route("posts.show", { id }),
              children: "View"
            }
          ),
          author.id === user.id && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out ",
                onClick: (e) => {
                  handleClickUpdate();
                },
                children: "Edit"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out ",
                onClick: (e) => {
                  handleClickDelete();
                },
                children: "Delete"
              }
            )
          ] })
        ] })
      ] })
    ] }) }),
    isOpenDelete && /* @__PURE__ */ jsx(
      ModalYesOrNot,
      {
        closeModal: closeDeleteModal,
        handleButtonClick: handleDeletePost,
        text: {
          head: "Delete a post",
          title: "Do you want to delete a post?"
        }
      }
    )
  ] });
}
export {
  PostHeader as default
};
