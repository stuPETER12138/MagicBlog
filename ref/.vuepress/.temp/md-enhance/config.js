import { defineClientConfig } from "vuepress/client";
import "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@_7fca430e7d78aa3a3c396358ef2be7f0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@_7fca430e7d78aa3a3c396358ef2be7f0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@_7fca430e7d78aa3a3c396358ef2be7f0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@_7fca430e7d78aa3a3c396358ef2be7f0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@_7fca430e7d78aa3a3c396358ef2be7f0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "./mathjax.css";
import Tabs from "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@_7fca430e7d78aa3a3c396358ef2be7f0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/@mdit+plugin-spoiler@0.12.0_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@_7fca430e7d78aa3a3c396358ef2be7f0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
