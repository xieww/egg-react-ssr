
const Controller = require('egg').Controller
const { renderToStream } = require('ykfe-utils')
const ssrConfig = require('../../config/config.ssr')
const resolvePath = (path) => require('path').resolve(__dirname, path)

class PageController extends Controller {
  async index () {
    const { ctx } = this
    try {
      // Page为webpack打包的chunkName，项目默认的entry为Page
      ctx.type = 'text/html'
      ctx.status = 200
      Object.assign(ctx.app.config, ssrConfig)
      if (/news/.test(ctx.req.url)) {
        ctx.app.config.serverJs = resolvePath(`../../dist/News.server.js`)
      }
      const stream = await renderToStream(ctx, ctx.app.config)
      ctx.body = stream
    } catch (error) {
      ctx.logger.error(`Page Controller renderToStream Error ${error}`)
    }
  }
}

module.exports = PageController
