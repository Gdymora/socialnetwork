import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
function AboutFriend({ profileData }) {
  var _a, _b, _c, _d;
  useState(profileData);
  const libel = {
    hobbies: "hobby",
    occupations: "occupations",
    education: "education",
    birthplace: "Birthplace"
  };
  if (!profileData || !profileData.about_me) {
    return /* @__PURE__ */ jsx("div", { children: "Loading..." });
  }
  useEffect(() => {
  }, [profileData.about_me]);
  return /* @__PURE__ */ jsxs("div", { className: "about", children: [
    /* @__PURE__ */ jsx("h2", { children: "About me" }),
    /* @__PURE__ */ jsxs("label", { htmlFor: "section", children: [
      " ",
      libel.occupations,
      ": "
    ] }),
    /* @__PURE__ */ jsx("div", { className: "section", children: ((_a = profileData.about_me) == null ? void 0 : _a.occupations) ? /* @__PURE__ */ jsx("p", { className: "text-light", children: profileData.about_me.occupations }) : /* @__PURE__ */ jsxs("p", { children: [
      "Add a ",
      libel.occupations
    ] }) }),
    /* @__PURE__ */ jsxs("label", { htmlFor: "section", children: [
      " ",
      libel.hobbies,
      ": "
    ] }),
    /* @__PURE__ */ jsx("div", { className: "section", children: ((_b = profileData.about_me) == null ? void 0 : _b.hobbies) ? /* @__PURE__ */ jsx("p", { className: "text-light", children: profileData.about_me.hobbies }) : /* @__PURE__ */ jsxs("p", { children: [
      "Add a ",
      libel.hobbies
    ] }) }),
    /* @__PURE__ */ jsxs("label", { htmlFor: "section", children: [
      " ",
      libel.education,
      ": "
    ] }),
    /* @__PURE__ */ jsx("div", { className: "section", children: ((_c = profileData.about_me) == null ? void 0 : _c.education) ? /* @__PURE__ */ jsx("p", { className: "text-light", children: profileData.about_me.education }) : /* @__PURE__ */ jsxs("p", { children: [
      "Edit your ",
      libel.education
    ] }) }),
    /* @__PURE__ */ jsxs("label", { htmlFor: "section", children: [
      " ",
      libel.birthplace,
      ": "
    ] }),
    /* @__PURE__ */ jsx("div", { className: "section", children: ((_d = profileData.about_me) == null ? void 0 : _d.birthplace) ? /* @__PURE__ */ jsx("p", { className: "text-light", children: profileData.about_me.birthplace }) : /* @__PURE__ */ jsxs("p", { children: [
      "Add to ",
      libel.birthplace
    ] }) })
  ] });
}
export {
  AboutFriend as default
};
