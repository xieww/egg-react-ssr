const resolvePath = (path) => require('path').resolve(__dirname, path)

module.exports = {
  type: 'ssr', // 指定运行类型可设置为csr切换为客户端渲染
  static: {
    prefix: '/',
    dir: resolvePath('../dist')
  },
  pageRoutes: [
    {
      path: '/',
      exact: true,
      Component: () => (require('@/page/index').default),
      controller: 'page',
      handler: 'index'
    }
  ],
  newsRoutes: [
    {
      path: '/news/:id',
      exact: true,
      Component: () => (require('@/page/news').default),
      controller: 'page',
      handler: 'index'
    }
  ],
  baseDir: resolvePath('../'),
  injectPageCss: [
    `/static/css/Page.chunk.css`
  ], // page页面需要加载的静态样式表
  injectPageScript: [
    `<script src='/static/js/runtime~Page.js'></script>`,
    `<script src='/static/js/vendor.chunk.js'></script>`,
    `<script src='/static/js/Page.chunk.js'></script>`
  ], // page页面需要加载的静态资源文件表
  injectNewsCss: [
    `/static/css/News.chunk.css`
  ], // news页面需要加载的静态样式表
  injectNewsScript: [
    `<script src='/static/js/runtime~News.js'></script>`,
    `<script src='/static/js/vendor.chunk.js'></script>`,
    `<script src='/static/js/News.chunk.js'></script>`
  ], // news页面需要加载的静态资源文件表
  serverJs: resolvePath(`../dist/Page.server.js`)
}
