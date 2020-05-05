module.exports = app => {
    const { router, controller } = app
    // 路由守卫
    // 这里的adminauth不用引入，这是我们的框架自带的，直接用app可以使用我们的中间件app.middleware
    var adminauth = app.middleware.adminauth() //会帮我们生成这个方法
    // 用的时候，加在第二个参数上就行了
    router.get('/admin/index',adminauth, controller.admin.main.index)
    router.post('/admin/checkLogin',adminauth, controller.admin.main.checkLogin) //记得跟方法对应起来

}

// 配置路由，然后要引入到app/router.js中，这里的app才有用