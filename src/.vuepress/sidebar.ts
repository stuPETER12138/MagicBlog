import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "带我回家",
      link: "/"
    },
    {
      text: "我学",
      prefix: "studying/",
      children: "structure",
    },
    {
      text: "我思",
      prefix: "thinking/",
      children: "structure",
    },
    {
      text: "我做",
      prefix: "doing/",
      children: "structure",
    },
  ],
});
