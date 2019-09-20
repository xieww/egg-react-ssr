'use strict'

const config = require('../config/config.ssr')

module.exports = app => {
  const { router, controller } = app
  const routes = config.pageRoutes.concat(config.newsRoutes)
  routes.map(route => {
    router.get(`${route.path}`, controller[route.controller][route.handler])
  })
}
