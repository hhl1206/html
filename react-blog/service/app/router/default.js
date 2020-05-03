
//暴露出去，暴露一个app方法
module.exports = app=>{
    // 解构对象,来自app
    const { router, controller } = app
    // get方法，第一个参数是路经,第二个，访问的是哪个模块控制层的index方法
    router.get('/default/index', controller.default.home.index)
    // 还没引入，还要修改一下入口路由app/router.js
    // 首页
    router.get('/default/getArticleList', controller.default.home.getArticleList)
}