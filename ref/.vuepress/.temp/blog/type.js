      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,1,5,2,3,8,4,6,7]}},"star":{"/":{"path":"/star/","indexes":[4,7]}},"timeline":{"/":{"path":"/timeline/","indexes":[0,1,5,2,3,8,4,6,7]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      