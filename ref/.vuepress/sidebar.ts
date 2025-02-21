import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "带我回家",
      link: "/"
    },
    {
      text: "来一起学习把",
      prefix: "studying/",
      children: "structure",
    },
    {
      text: "感受头脑风暴吗",
      prefix: "thinking/",
      children: "structure",
    },
    {
      text: "看看好玩儿的",
      prefix: "doing/",
      children: "structure",
    },
  ],
});
