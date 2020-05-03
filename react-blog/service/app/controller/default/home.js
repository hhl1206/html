'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // result就是数据库获取的内容
    // 用异步方式
    // get是mysql提供的获取单条数据的方式,第二个参数是条件，我们不写直接看全部的
    // let result = await this.app.mysql.get("blog_content",{}) 
    // console.log(result);
    this.ctx.body = "api hi"
    // this.ctx.body = result;
    // 配置路由
  }
  // 建文章列表页（首页）的restful接口 
  async getArticleList() {
    // sql语句，要把连个表连接
    // 左连接，标识是type.id
    let sql = 'SELECT article.id as id ,' +
     'article.title as title ,' +
     'article.article_content as ariticle_content ,' +
     'article.introduce as introduce ,' +
     "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime ," +
     'article.view_count as view_count ,' +
     'type.typeName as typeName ' +
     'FROM article LEFT JOIN type ON article.type_id = type.id'
     const results = await this.app.mysql.query(sql)
    //  也可以直接返回results，按js习惯，一般我们会加一个data
     this.ctx.body = { data:results } 
  }
  //文章详细内容
  // 通过id获取文章详细内容
  async getArticleById(){

    //id是从前台传过来的，所以用parmas
    let id = this.ctx.parmas.id
    let sql = 'SELECT article.id as id ,' +
    'article.title as title ,' +
    'article.article_content as ariticle_content ,' +
    'article.introduce as introduce ,' +
    "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime ," +
    'article.view_count as view_count ,' +
    'type.typeName as typeName ' +
    'type.id as typeId ' +
    'FROM article LEFT JOIN type ON article.type_id = type.id ' +
    'WHERE article.id='+id
    const result = await this.app.sql.query(sql)
    // 记住是花括号
    this.ctx.body = { data: result }
  }

}

module.exports = HomeController;
