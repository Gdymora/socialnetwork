import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-6df35a2d.js";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import "./Dropdown-c4cea7d8.js";
import "@headlessui/react";
import "react-toastify";
const dark_mode = "_dark_mode_1lfip_55";
const blue = "_blue_1lfip_77";
const purple = "_purple_1lfip_81";
const green = "_green_1lfip_85";
const orange = "_orange_1lfip_89";
const app = "_app_1lfip_93";
const header = "_header_1lfip_103";
const wrapper = "_wrapper_1lfip_112";
const conversation_area = "_conversation_area_1lfip_119";
const detail_area = "_detail_area_1lfip_120";
const chat_area = "_chat_area_1lfip_134";
const search_bar = "_search_bar_1lfip_138";
const logo = "_logo_1lfip_166";
const user_settings = "_user_settings_1lfip_175";
const dark_light = "_dark_light_1lfip_187";
const user_profile = "_user_profile_1lfip_199";
const settings = "_settings_1lfip_205";
const msg_profile = "_msg_profile_1lfip_221";
const group = "_group_1lfip_229";
const msg = "_msg_1lfip_221";
const active = "_active_1lfip_253";
const online = "_online_1lfip_258";
const msg_username = "_msg_username_1lfip_270";
const msg_detail = "_msg_detail_1lfip_276";
const msg_message = "_msg_message_1lfip_286";
const msg_date = "_msg_date_1lfip_293";
const add = "_add_1lfip_302";
const overlay = "_overlay_1lfip_321";
const chat_area_header = "_chat_area_header_1lfip_337";
const chat_area_profile = "_chat_area_profile_1lfip_349";
const chat_area_title = "_chat_area_title_1lfip_354";
const chat_area_main = "_chat_area_main_1lfip_358";
const chat_msg_img = "_chat_msg_img_1lfip_362";
const chat_msg_profile = "_chat_msg_profile_1lfip_369";
const chat_msg_date = "_chat_msg_date_1lfip_376";
const chat_msg = "_chat_msg_1lfip_362";
const chat_msg_content = "_chat_msg_content_1lfip_390";
const chat_msg_text = "_chat_msg_text_1lfip_397";
const owner = "_owner_1lfip_412";
const chat_area_footer = "_chat_area_footer_1lfip_438";
const detail_area_header = "_detail_area_header_1lfip_477";
const detail_title = "_detail_title_1lfip_489";
const detail_subtitle = "_detail_subtitle_1lfip_495";
const detail_button = "_detail_button_1lfip_501";
const detail_buttons = "_detail_buttons_1lfip_523";
const detail_changes = "_detail_changes_1lfip_549";
const detail_change = "_detail_change_1lfip_549";
const colors = "_colors_1lfip_567";
const color = "_color_1lfip_567";
const selected = "_selected_1lfip_577";
const detail_photo_title = "_detail_photo_title_1lfip_588";
const detail_photos = "_detail_photos_1lfip_597";
const detail_hoto_title = "_detail_hoto_title_1lfip_602";
const detail_photo_grid = "_detail_photo_grid_1lfip_612";
const view_more = "_view_more_1lfip_627";
const follow_me = "_follow_me_1lfip_634";
const follow_text = "_follow_text_1lfip_655";
const developer = "_developer_1lfip_664";
const chat_area_group = "_chat_area_group_1lfip_700";
const style = {
  dark_mode,
  blue,
  purple,
  green,
  orange,
  app,
  header,
  wrapper,
  conversation_area,
  detail_area,
  chat_area,
  search_bar,
  logo,
  user_settings,
  dark_light,
  user_profile,
  settings,
  msg_profile,
  group,
  msg,
  active,
  online,
  msg_username,
  msg_detail,
  "msg-content": "_msg-content_1lfip_280",
  msg_message,
  msg_date,
  add,
  overlay,
  chat_area_header,
  chat_area_profile,
  chat_area_title,
  chat_area_main,
  chat_msg_img,
  chat_msg_profile,
  chat_msg_date,
  chat_msg,
  chat_msg_content,
  chat_msg_text,
  owner,
  chat_area_footer,
  detail_area_header,
  detail_title,
  detail_subtitle,
  detail_button,
  detail_buttons,
  detail_changes,
  detail_change,
  colors,
  color,
  selected,
  detail_photo_title,
  detail_photos,
  detail_hoto_title,
  detail_photo_grid,
  view_more,
  follow_me,
  follow_text,
  "follow-text": "_follow-text_1lfip_661",
  developer,
  chat_area_group,
  "search-bar": "_search-bar_1lfip_741"
};
function ChatArea() {
  const messages = [
    {
      author: "Madison Jones",
      content: "Hello, how are you?",
      time: "1:22pm",
      owner: false
    },
    {
      author: "You",
      content: "I'm good, thanks! And you?",
      time: "1:25pm",
      owner: true
    }
    // Додайте інші повідомлення тут
  ];
  return /* @__PURE__ */ jsxs("div", { className: style.chat_area, children: [
    /* @__PURE__ */ jsxs("div", { className: style.chat_area_header, children: [
      /* @__PURE__ */ jsx("div", { className: style.chat_area_title, children: "CodePen Group" }),
      /* @__PURE__ */ jsxs("div", { className: style.chat_area_group, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: style.chat_area_profile,
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: style.chat_area_profile,
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: style.chat_area_profile,
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png",
            alt: ""
          }
        ),
        /* @__PURE__ */ jsx("span", { children: "+4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: style.chat_area_main, children: [
      /* @__PURE__ */ jsxs("div", { className: style.chat_msg, children: [
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_profile, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: style.chat_msg_img,
              src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_date, children: "Message seen 1.22pm" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_content, children: [
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Luctus et ultrices posuere cubilia curae." }),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: /* @__PURE__ */ jsx("img", { src: "https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif" }) }),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Pretium lectus quam id leo." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `${style.chat_msg} ${style.owner}`, children: [
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_profile, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: style.chat_msg_img,
              src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_date, children: "Message seen 1.22pm" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_content, children: [
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Sit amet risus nullam eget felis eget. Dolor sed viverra ipsum😂😂😂" }),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Cras mollis nec arcu malesuada tincidunt." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: style.chat_msg, children: [
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_profile, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: style.chat_msg_img,
              src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_date, children: "Message seen 2.45pm" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_content, children: [
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Aenean tristique maximus tortor non tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae😊" }),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Ut faucibus pulvinar elementum integer enim neque volutpat." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `${style.chat_msg} ${style.owner}`, children: [
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_profile, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: style.chat_msg_img,
              src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_date, children: "Message seen 2.50pm" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_content, children: [
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "posuere eget augue sodales, aliquet posuere eros." }),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Cras mollis nec arcu malesuada tincidunt." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: style.chat_msg, children: [
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_profile, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: style.chat_msg_img,
              src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_date, children: "Message seen 3.16pm" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: style.chat_msg_content, children: /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Egestas tellus rutrum tellus pellentesque" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `${style.chat_msg} ${style.owner}`, children: [
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_profile, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: style.chat_msg_img,
              src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_date, children: "Message seen 2.50pm" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: style.chat_msg_content, children: /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Tincidunt arcu non sodales😂" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: style.chat_msg, children: [
        /* @__PURE__ */ jsxs("div", { className: style.chat_msg_profile, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: style.chat_msg_img,
              src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_date, children: "Message seen 3.16pm" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: style.chat_msg_content, children: /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et🥰" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "chat_area_main", children: messages.map((message, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `chat_msg ${message.owner ? "owner" : ""}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: style.chat_msg_profile, children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: style.chat_msg_img,
                src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png",
                alt: ""
              }
            ),
            /* @__PURE__ */ jsx("div", { className: style.chat_msg_date, children: "Message seen 3.16pm" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: style.chat_msg_content, children: /* @__PURE__ */ jsx("div", { className: style.chat_msg_text, children: "Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et🥰" }) })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxs("div", { className: style.chat_area_footer, children: [
      /* @__PURE__ */ jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "feather feather-video",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M23 7l-7 5 7 5V7z" }),
            /* @__PURE__ */ jsx(
              "rect",
              {
                x: "1",
                y: "5",
                width: "15",
                height: "14",
                rx: "2",
                ry: "2"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "feather feather-image",
          children: [
            /* @__PURE__ */ jsx(
              "rect",
              {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
              }
            ),
            /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
            /* @__PURE__ */ jsx("path", { d: "M21 15l-5-5L5 21" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "feather feather-plus-circle",
          children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx("path", { d: "M12 8v8M8 12h8" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "feather feather-paperclip",
          children: /* @__PURE__ */ jsx("path", { d: "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" })
        }
      ),
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Type something here..." }),
      " ",
      /* @__PURE__ */ jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "feather feather-smile",
          children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx("path", { d: "M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "feather feather-thumbs-up",
          children: /* @__PURE__ */ jsx("path", { d: "M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" })
        }
      )
    ] })
  ] });
}
function ConversationArea() {
  const conversations = [
    {
      name: "Lea Debere",
      message: "Shoreditch iPhone jianbing",
      time: "45m",
      profileUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png",
      online: false,
      active: true
    },
    {
      name: "Jordan Smith",
      message: "Snackwave craft beer raclette, beard kombucha",
      time: "45m",
      profileUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29+%281%29.png",
      online: false,
      active: false
    },
    {
      name: "Jared Jackson",
      message: "Tattooed brooklyn typewriter gastropub",
      time: "18m",
      profileUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%284%29+%281%29.png",
      online: false,
      active: false
    },
    {
      name: "Henry Clark",
      message: "Shoreditch iPhone jianbing",
      time: "45m",
      profileUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png",
      online: false,
      active: false
    },
    {
      name: "Chiwa Lauren",
      message: "Pabst af 3 wolf moon",
      time: "28m",
      profileUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%288%29.png",
      online: true,
      active: false
    },
    {
      name: "Caroline Orange",
      message: "Shoreditch iPhone jianbing",
      time: "45m",
      profileUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%289%29.png",
      online: false,
      active: false
    },
    {
      name: "Lina Ashma",
      message: "Migas food truck crucifix vexi",
      time: "42m",
      profileUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%286%29.png",
      online: true,
      active: false
    }
    // Додайте інші розмови тут
  ];
  return /* @__PURE__ */ jsxs("div", { className: style.conversation_area, children: [
    conversations.map((conversation, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `${style.msg} ${conversation.online ? style.online : ""} ${conversation.active ? style.active : ""}`,
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: style.msg_profile,
              src: conversation.profileUrl,
              alt: ""
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: style.msg_detail, children: [
            /* @__PURE__ */ jsx("div", { className: style.msg_username, children: conversation.name }),
            /* @__PURE__ */ jsxs("div", { className: style.msg_content, children: [
              /* @__PURE__ */ jsx("span", { className: style.msg_message, children: conversation.message }),
              /* @__PURE__ */ jsx("span", { className: style.msg_date, children: conversation.time })
            ] })
          ] })
        ]
      },
      index
    )),
    /* @__PURE__ */ jsx("button", { className: style.add }),
    /* @__PURE__ */ jsx("div", { className: style.overlay })
  ] });
}
function DetailArea() {
  return /* @__PURE__ */ jsxs("div", { className: style.detail_area, children: [
    /* @__PURE__ */ jsxs("div", { className: style.detail_area_header, children: [
      /* @__PURE__ */ jsx("div", { className: "msg-profile group", children: /* @__PURE__ */ jsxs(
        "svg",
        {
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "2",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "css-i6dzq1",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" }),
            /* @__PURE__ */ jsx("path", { d: "M22 8.5l-10 7-10-7" }),
            /* @__PURE__ */ jsx("path", { d: "M2 15.5l10-7 10 7M12 2v6.5" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: style.detail_title, children: "CodePen Group" }),
      /* @__PURE__ */ jsx("div", { className: style.detail_subtitle, children: "Created by Aysenur, 1 May 2020" }),
      /* @__PURE__ */ jsxs("div", { className: style.detail_buttons, children: [
        /* @__PURE__ */ jsxs("button", { className: style.detail_button, children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: "0",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "feather feather-phone",
              children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" })
            }
          ),
          "Call Group"
        ] }),
        /* @__PURE__ */ jsxs("button", { className: style.detail_button, children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: "0",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "feather feather-video",
              children: [
                /* @__PURE__ */ jsx("path", { d: "M23 7l-7 5 7 5V7z" }),
                /* @__PURE__ */ jsx(
                  "rect",
                  {
                    x: "1",
                    y: "5",
                    width: "15",
                    height: "14",
                    rx: "2",
                    ry: "2"
                  }
                )
              ]
            }
          ),
          "Video Chat"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: style.detail_changes, children: [
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search in Conversation" }),
      /* @__PURE__ */ jsxs("div", { className: style.detail_change, children: [
        "Change Color",
        /* @__PURE__ */ jsxs("div", { className: style.colors, children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `${style.color} ${style.blue} ${style.selected}`,
              "data-color": "blue"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `${style.color} ${style.purple}`,
              "data-color": "purple"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `${style.color} ${style.green}`,
              "data-color": "green"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `${style.color} ${style.orange}`,
              "data-color": "orange"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: style.detail_change, children: [
        "Change Emoji",
        /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-thumbs-up",
            children: /* @__PURE__ */ jsx("path", { d: "M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: style.detail_photos, children: [
      /* @__PURE__ */ jsxs("div", { className: style.detail_photo_title, children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-image",
            children: [
              /* @__PURE__ */ jsx(
                "rect",
                {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  ry: "2"
                }
              ),
              /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
              /* @__PURE__ */ jsx("path", { d: "M21 15l-5-5L5 21" })
            ]
          }
        ),
        "Shared photos"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: style.detail_photo_grid, children: [
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1516085216930-c93a002a8b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2287&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2309&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1473170611423-22489201d919?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1579613832111-ac7dfcc7723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" }),
        /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2189&q=80" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "view-more", children: "View More" })
    ] }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://twitter.com/AysnrTrkk",
        className: style.follow_me,
        target: "_blank",
        children: [
          /* @__PURE__ */ jsxs("span", { className: style.follow_text, children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "css-i6dzq1",
                children: /* @__PURE__ */ jsx("path", { d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" })
              }
            ),
            "Follow me on Twitter"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: style.developer, children: [
            /* @__PURE__ */ jsx("img", { src: "https://pbs.twimg.com/profile_images/1253782473953157124/x56UURmt_400x400.jpg" }),
            "Aysenur Turk — @AysnrTrkk"
          ] })
        ]
      }
    )
  ] });
}
function Messaging() {
  const [theme, setTheme] = useState("blue");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme, darkMode]);
  return /* @__PURE__ */ jsxs("div", { className: style.app, children: [
    /* @__PURE__ */ jsxs("div", { className: style.header, children: [
      /* @__PURE__ */ jsx("div", { className: style.logo, children: /* @__PURE__ */ jsxs(
        "svg",
        {
          viewBox: "0 0 513 513",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M256.025.05C117.67-2.678 3.184 107.038.025 245.383a240.703 240.703 0 0085.333 182.613v73.387c0 5.891 4.776 10.667 10.667 10.667a10.67 10.67 0 005.653-1.621l59.456-37.141a264.142 264.142 0 0094.891 17.429c138.355 2.728 252.841-106.988 256-245.333C508.866 107.038 394.38-2.678 256.025.05z" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M330.518 131.099l-213.825 130.08c-7.387 4.494-5.74 15.711 2.656 17.97l72.009 19.374a9.88 9.88 0 007.703-1.094l32.882-20.003-10.113 37.136a9.88 9.88 0 001.083 7.704l38.561 63.826c4.488 7.427 15.726 5.936 18.003-2.425l65.764-241.49c2.337-8.582-7.092-15.72-14.723-11.078zM266.44 356.177l-24.415-40.411 15.544-57.074c2.336-8.581-7.093-15.719-14.723-11.078l-50.536 30.744-45.592-12.266L319.616 160.91 266.44 356.177z",
                fill: "#fff"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: style.search_bar, children: /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search..." }) }),
      /* @__PURE__ */ jsxs("div", { className: style.user_settings, children: [
        /* @__PURE__ */ jsxs("div", { className: style.dark_light, children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "stroke-width": "1.5",
              fill: "none",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: style.colors, children: ["blue", "purple", "green", "orange"].map(
            (color2) => /* @__PURE__ */ jsx(
              "div",
              {
                className: `color ${theme === color2 ? "selected" : ""}`,
                "data-color": color2,
                onClick: () => setTheme(color2),
                style: { backgroundColor: color2 }
              },
              color2
            )
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: style.settings, children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" }),
              /* @__PURE__ */ jsx("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: style.user_profile,
            src: "user-profile-url.png",
            alt: "User Profile"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: style.wrapper, children: [
      /* @__PURE__ */ jsx(ConversationArea, {}),
      /* @__PURE__ */ jsx(ChatArea, {}),
      /* @__PURE__ */ jsx(DetailArea, {})
    ] })
  ] });
}
function MessagePage({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight", children: "New Page Title" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "New Page" }),
        /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Messaging, {}) })
      ]
    }
  );
}
export {
  MessagePage as default
};
