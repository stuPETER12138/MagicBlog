export const categoriesMap = {"category":{"/":{"path":"/category/","map":{}}},"tag":{"/":{"path":"/tag/","map":{"AI":{"path":"/tag/ai/","indexes":[0,1,2,3,4]},"IL":{"path":"/tag/il/","indexes":[5]},"survey":{"path":"/tag/survey/","indexes":[5]},"latex":{"path":"/tag/latex/","indexes":[6]},"markdown":{"path":"/tag/markdown/","indexes":[7]},"vim":{"path":"/tag/vim/","indexes":[8]},"Role-Playing":{"path":"/tag/role-playing/","indexes":[3]},"MoE":{"path":"/tag/moe/","indexes":[4]},"o1":{"path":"/tag/o1/","indexes":[2]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

