import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.3_f613915d5ed5e84e6c5c607bef304fc7/node_modules/@vuepress/helper/lib/client/index.js";

import FontIcon from "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-components@_93a0522d9bd939e8895bf74b5079d616/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import PDF from "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-components@_93a0522d9bd939e8895bf74b5079d616/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import Share from "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-components@_93a0522d9bd939e8895bf74b5079d616/node_modules/vuepress-plugin-components/lib/client/components/Share.js";
import BiliBili from "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-components@_93a0522d9bd939e8895bf74b5079d616/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";

import "D:/Coding/markdown/stuPETER12138.github.io/node_modules/.pnpm/vuepress-plugin-components@_93a0522d9bd939e8895bf74b5079d616/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
