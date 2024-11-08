import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import SidebarItem from "./SidebarItem-65cb1f8e.js";
import SidebarSection1 from "./SidebarSection1-4bd6eb3e.js";
import SidebarSection3 from "./SidebarSection3-a2cb8a88.js";
import SidebarSection2 from "./SidebarSection2-dccfb3d4.js";
import "./RightSidebarHeader-d4cd8cb5.js";
function RightSidebar({
  postMostViewed: postMostViewed2
}) {
  const renderContent = (content, maxLength = 50) => {
    return content.substring(0, maxLength) + "...";
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SidebarSection1, { title: "Top Jobs" }),
    /* @__PURE__ */ jsxs(SidebarSection2, { title: "Top Jobs", children: [
      /* @__PURE__ */ jsx(
        SidebarItem,
        {
          number: 1,
          name: "Alex Petroff",
          description: "Web Developer"
        }
      ),
      /* @__PURE__ */ jsx(
        SidebarItem,
        {
          number: 2,
          name: "John Doe",
          description: "Graphic Designer"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(SidebarSection3, { title: "Most Viewed This Week", children: postMostViewed2 && postMostViewed2.map((post) => /* @__PURE__ */ jsx(
      SidebarItem,
      {
        number: post.viewed,
        name: post.title,
        description: renderContent(post.content, 50)
      },
      post.id
    )) })
  ] });
}
export {
  RightSidebar as default
};
