import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  author: {
    name: "魔法窝瓜",
    url: "https://stupeter12138.github.io",
  },
  darkmode: "toggle",
  logo: "/images/magicsquash.jpg",
  repo: "stuPETER12138/stuPETER12138.github.io",
  repoLabel: "GitHub",
  repoDisplay: true,
  displayFooter: true,
  copyright: "MIT 协议 | 版权所有 © 2024 魔法窝瓜",
  // 导航栏
  navbar,
  // 侧边栏
  sidebar,
  // 博客相关
  blog: {
    avatar: "/images/magicsquash.jpg",
    name: "👋你好，我是魔法窝瓜",
    description: "一只淡淡的窝瓜",
    sidebarDisplay: "none",
    articlePerPage: 6,
    timeline: "昨天也要好好学习",
    medias: {
      GitHub: "https://github.com/stuPETER12138",
    },
  },
  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  // 在这里配置主题提供的插件
  plugins: {
    blog: {
      excerptLength: 0,
    },
    components: {
      components: [
        "PDF",
        "Share",

      ],
    },
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      include: true,
      footnote: true,
      tabs: true,
      align: true,
      mathjax: true,
      sup: true,
      sub: true,
      tasklist: true,
      figure: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      alert: true,
      spoiler: true,
      attrs: true,
      mark: true,
    },
  },
});
