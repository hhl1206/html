module.exports = app => {
    const { router, controller } = app
    router.get('/admin/index', controller.admin.main.index)
    router.post('/admin/checkLogin', controller.admin.main.checkLogin) //记得跟方法对应起来

}

// 配置路由，然后要引入到app/router.js中，这里的app才有用