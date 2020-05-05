'use strict'

//把egg的controller引过来
const Controller = require('egg').Controller

// 用class的方法
class MainController extends Controller {
    async index() {
        this.ctx.body="hi api" //测试一下
    }
    // 登录的接口
    // 登录要验证用户名，密码，从ctx中来
    async checkLogin(){
        let userName = this.ctx.request.body.userName //上下文的body中要传一个username
        let password = this.ctx.request.body.password 
        const sql = "SELECT userName FROM admin_user WHERE userName = '" +userName+"' AND password = '"+password+"'"
        // 这里的sql语句最好放到sercice里，后期比较好维护？？ 这样写很危险 sql注入
        const res = await this.app.mysql.query(sql)
        // console.log(res);
        if(res.length > 0) {
            let openId = new Date().getTime()
            this.ctx.session.openId = {'openId':openId} //记录时间戳，存起来，有这个openId说明登录正常
            this.ctx.body = {'data': '登录成功','openId':openId}
            // 把时间戳也返回，用于前后台二次验证,前台有了时间戳，后台有了，就不用查询数据库了，这样会节省很多资源
        } else {
            this.ctx.body = {'data': '登录失败'}
        }
    }
}

// 暴露出去
module.exports = MainController
// 然后去配置路由，不然访问不了