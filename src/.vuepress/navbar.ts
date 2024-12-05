import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "/icons/svg-spinners--blocks-scale.svg",
    link: "/",
  },
  {
    text: "我学",
    icon: "/icons/line-md--coffee-loop.svg",
    prefix: "/studying/",
    children: [
      {
        text: "文档撰写指北",
        prefix: "markdown/",
        children: [
          {text: "latex 语法指北", link: "latex"},
          {text: "markdown 语法指北", link: "learningmd"},
          {text: "Manim 语法指北", link: "manim_tutor"},
        ],
      },
      {
        text: "一点点 VIM",
        prefix: "vim/",
        children: [
          {text: "VIM 基础教程", link: "Tutor"},
        ],
      },
    ],
  },
  {
    text: "我思",
    icon: "/icons/line-md--speedometer-loop.svg",
    prefix: "/thinking/",
    children: [
      {
        text: "论文精读",
        prefix: "papereading/",
        children: [
          {text: "DeepSpeed-MoE 阅读笔记", link: "DS-MoE"},
          {text: "The Oscars Of AI Theater 阅读笔记", link: "AI_Oscars"},
          {text: "Marco-o1 阅读笔记", link: "Marco1"},
        ],
      },
      {
        text: "我的大学",
        prefix: "college/",
        children: [],
      },
    ],
  },
  {
    text: "我做",
    icon: "/icons/line-md--cog-loop.svg",
    prefix: "/doing/",
    children: [
      {
        text: "晋馔雅韵",
        prefix: "jin/",
        children: [],
      },
    ],
  },
]);
