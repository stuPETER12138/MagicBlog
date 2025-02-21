import comp from "D:/Coding/markdown/stuPETER12138.github.io/ref/.vuepress/.temp/pages/thinking/index.html.vue"
const data = JSON.parse("{\"path\":\"/thinking/\",\"title\":\"Thinking\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Thinking\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
