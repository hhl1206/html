博客系统有三大块：前台 + 接口中台 + 后台管理 是完全独立的，然后配合使用
https://jspang.com/detailed?id=52
1. 安装 
npm install -g create-next-app
2. 创建目录
npx create-next-app 项目名
3. 启动服务
yarn dev 或者 npm run dev

快捷键：
alt + shift + 向下箭头就能直接复制粘贴
# 前台 blog
做UI
## 2. 前台开发环境的搭建
使用next.js + ant-design + ui库
用户展示模块
上面三步还只是next和react安装好了，还要装别的
index.js
1.  @zeit/next-css
因为要使用ant-design，支持css包，不使用style.js
建立这个包，打开终端：
yarn add @zeit/next-css 或者 npm install --save @zeit/next-css

这样就能支持使用css了
- 关于ant-design 
https://segmentfault.com/a/1190000016233511
UI框架，
安装ant-design，那么这两个东西肯定是不能少的，一个是antd另一个就是antd官方的按需加载babel插件babel-plugin-import。

@zeit/next-css文档
https://www.npmjs.com/package/@zeit/next-css

- 安装了@zeit/next-css后要配置next.config.js,新建文件，这个是next的整体的配置文件

- ant-design
yarn add antd
因为我们要按需加载，还要加一个
yarn add babel-plugin-import
然后配置.babelrc
因为现在antd按需引入有问题，所以配置按需引入还不够，还要配置整体的css引入
建文件pages/_app.js 所有的页面的整体文件

index.js
开始按需加入antd
放一个Button
```js
import Head from 'next/head'
import React from 'react';
import Link from 'next/link';
import { Button } from 'antd'

const Home = () => {
  return (
    <div>
      <head>
        <title>Home</title>
      </head>
      <div>
        {/* 这个Button不再是一个标签了，是一个组手写字母要大写 */}
        <Button>按钮</Button>
      </div>
    </div>
  )
}

export default Home
```
重新运行一下yarn dev

## 3.博客公用头部组件制作
单独做成一个组件，因为头部是每个页面都要有的
先做灰色背景，然后每个页面都是这个背景，需要写一个css进行全局的引入
public中新建一个文件夹
public/style/pages --页面要用的样式
public/style/components --组件要用的样式
- 共用的背景放在pages下
public/style/pages/comm.css
然后要全局引入就要放在blog/pages/_app.js,引入
- 公共头部
建一个blog/components/Header.js
因为还要写组件的样式，所以再建一个style/components/header.css

Header.js
栅格化系统，把网页平均分成了24栏，然后进行分栏布局
为了能使配个各种终端，所以还要加相应的属性

如果是大括号,里面是一个方法,用return返回,不用大括号用(),这里面是默认返回的 这是es6箭头函数的语法

用的是
import {
    HomeOutlined,
    YoutubeOutlined,
    SmileOutlined
  } from '@ant-design/icons';
  要安装npm install --save @ant-design/icons

## 4.制作首页主题两栏布局
index.js 先在这里写,方便看做成了什么样子
style/pages/comm.css
列表页 pages/list.js 把index.js中写的差不多的,复制在里面微调,然后在里面微调就是我们的list列表

同样再建一个detail,就是文章的详细页,同样把index.js中的复制到里面
然后我们就有了首页,列表页,详情页
(因为都是左右栏的大体结构)
## 5.列表
首页有很多文章,是一个列表形式
列表使用ant-design中列表组件
index.js中先写(list之后直接用就可以)
<col> 左侧
先引入List
还有图标
要有因为我们的数据用hooks的时候需要useState,所以在react中引入
然后可以先伪造一下数据
把组件的箭头函数的大括号改成笑小括号,这样能直接返回了,但是我们要用useState,不直接返回,所以使用大括号{},然后记得加一个return()
然后可以在我们的hooks中写useState了
使用es6的数组解构

注意List组件是一个半闭合标签的,它里面是通过属性prop进行设置
然后因为每一个列表项可能是不一样的,所以新建一个关于页面的css index.css
在index.js页面引入样式
## 6.编写博主的介绍组件-Avatar学习
右侧栏
是每个页面都有的，所以做成一个单独的页面，这样更好复用，
新建文件components/Author.js
头像什么的antd有专门的组件，引入使用
import { Avatar, Divider } from 'antd'
Avatar头像，Divider分隔线
https://ant.design/components/avatar-cn/#header
然后建一个Author的css样式文件
还要改一下comm.css中的样式
因为之前做的时候就已经设了右侧的样式，当时的类名叫.comm-right，现在Author中是
<div className="author-div comm-box">
所以把类名改成comm-box就行
然后再在Author.js中引入样式author.css,用这个样式
然后把Author.js引入到index.js中
关于图标：
从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons。
https://ant.design/components/icon-cn/
{/* 注意这里的size要用{}包，不能写"" */}
<div><Avatar size={100} src="http://img1.imgtn.bdimg.com/it/u=1540753912,651765651&fm=11&gp=0.jpg"></Avatar></div>

## 7.编写通用广告组件
这个页面也是每个页面都有的，所以也做成通用组件，单独放在conmponents中
components/Advert.js
用全静态的形式编写，因为这里面的都是广告，变动的几率很小，如果写到数据库里，每次查询都要用到数据库，这样对数据库的压力很大
然后还要加一个组件的css文件advert.css
写了css记得引入到Advert.js中
然后把这个组件放到index.js里面去

## 8.博客列表页面快速制作
- 底部
底部内容，比如：系统是什么做的，我们是react,然后有一个版权信息，
底部信息也是每个页面都有的，所以也做一个专门的组件。
新建组件，pages/Footer.js
用react hooks声明组件，后面接一个箭头函数，因为我们底部组件没有什么业务逻辑编码，直接用小括号就行，他会直接返回
()=>()就相当于()=>{return()}
然后写样式，导入Footer.js
新建文件public/style/components/footer.css
然后把写完了的Footer组件引入到index.js中
- 列表页
因为我们的相关内容都做成组件了，所以直接复制就可以index.js就可以，因为大部分都是一样的
微调就行
1. index.css去掉
2. List因为引入antd的时候使用了List所以有冲突。改一下名字MyList
3. 然后因为这个页面是从index.js复制的，关于这个页面的css是放在pages/index.css里面的，因为是这两个都共用的，所以直接剪切到pages/comm.css里面r
4. index.js列表页和list页要是不一样的内容，所以改一下
希望列表页多一个面包屑导航，ant-design提供了直接使用就行
引入Breadcrumb这个组件
```js
{/* 面包屑导航 */}
<div className="bread-div">
  <Breadcrumb>
    {/* 里面的子导航， */}
    <Breadcrumb.item><a href="/">首页</a></Breadcrumb.item>
    {/*你在哪里*/}
    <Breadcrumb.item>视频教程</Breadcrumb.item>
  </Breadcrumb>
</div>
```
看一下效果先
有点问题：
Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
组件标签写错了
Item因为是自动生成的，就是用编译器自动生成的，所以I要大写，
关于面包屑导航：
显示当前页面在系统层级结构中的位置，并能向上返回。

列表页内容跟index.js基本上是一样的，只是多了一个面包屑
然后还有一个详细页，我们的UI部分就差不多了，之后就能做中台了

- 动态的内容，比如文章 列表之类的数据都是从中台拿数据，从数据接口；然后后台会用前后端分离的形式从中台中获取数据给后台进行管理。

难点：中台和前台的结合，后台管理系统，三者打通。

## 9.博客详情页面制作 
### 9 9.1-基本页面结构
详细页面难点，要用markdown写，要解析markdown
- 关于markdown
Markdown 能被使用来撰写电子书，如：Gitbook。
当前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。例如：GitHub、简书、reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge等。
- pages/detailed.js
之前写过一点点，加一个css文件public/style/pages/detailed.css (页面的样式)
然后给detailed.js里面加东西
然后把Author，Advert，Footer组件放上去
### 10 9.2-MarkDown文档的解析
编写文档我们一般用markdown方式，然后我们要在我们的文档中解析我们的文档，如何解析？
要用到一个解析插件叫react-markdown,
github网址：https://github.com/rexxars/react-markdown
安装一下：
yarn add react-markdown

实例markdown：https://rexxars.github.io/react-markdown/

要使用markdown就要有一个markdown文件，我们这里还没有后台文件，先手写一个markdown，复制github的代码，
然后把detailed中的箭头函数的小括号变成花括号
把复制了的markdown放进detailed.js文件，如果能用react中的markdown解析成功，就可以。

导入markdown
import ReactMarkdown from 'react-markdown'
如何用markdown进行解析
然后把详细内容渲染到这里
{/* 文章主体内容 */}
<div className="detailed-content">
  这里面解析的是mackdowm里面的内容
</div>
直接使用这个组件就可以
？？？ escapeHtml 如果里面有html标签，不进行转换写成false，就是原样输出html,进行转换就是就会输出htlm标签(好像两个没什么变化)

### 11 9.3-Markdown导航栏制作
markdown怎么形成目录？
有一个组件的 markdown-navbar 要安装一下
yarn add markdown-navbar
使用：
引入，// 里面是自带css的，所以要引入css
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
用一下
{/* 有四个属性
  className:允许自定义css
  source:要解析哪个markdown作为navbar
  headingTopOffset:锚点距离顶部的距离，默认为0）
  ordered:是否是有编号 */}
<MarkNav 
className="article-menu"
source={markdown}
headingTopOffset={0}
/>
锚点；就是比如点击一个目录，回跳到那端文章位置，然后文章标题距离顶部的距离是多少，默认是0
bug:
有问题，跟markdown的内容配不上

滚动页面内容的时候右侧的markdown-navbar一直在右侧
这个叫做图钉效果，也叫固钉效果，固定到右边，在ant-design里面也有，引入然后使用就是 Affix
要固定谁，就在外层放一个这个组件
{/* 固钉 offsetTop={5} 相对的位置，相对上面空出5个像素*/}
还有outside-buttom

# 中台搭建 连接前台
搭中台，服务接口
## 12.安装egg.js开发环境
使用egg.js上层框架
- 为什么叫服务接口？
无论是前台还是后台，都是从中台获取数据跟数据库进行关联，数据接口和业务逻辑都是些在中台，然后以接口的形式进行页面的操作。
- egg.js
github:https://github.com/eggjs/egg
博客系统的服务端（或者叫做中台），采用Koa的上层框架egg.js，所谓上层框架就是在Koa的基础上，封装的框架。他主要针对于企业级开发，所以性能和稳定性上都非常不错，而且在国内有很高的声望，由阿里技术团队支持。
关于koa: https://jspang.com/detailed?id=34
安装egg.js
全局安装脚手架工具，
npm i egg-init -g

- 中台要单独用一个文件夹，新建一下react-blog/service
创建
egg-init --type=simple
--type是以什么形式使用脚手架
项目名字什么的都回车
然后service文件夹里面就有东西了，这里面还没有安装依赖包，
npm install 注意yarn add 不是用这个 是用yarn或者yarn install
启动服务 yarn dev

## 13.目录结构和约定规范
简单介绍egg.js的目录结构和约定规范
- app
最主要的文件，写的时候主要是在这里
- config
整个项目还有服务端的配置文件
- logs
日志文件，一般是查看，不修改
- node_modules
项目所需要的依赖包
- run
运行时生成的配置文件，基本上不修改，是系统自动生成的
- test
测试时使用的配合文件，进行服务端测试，接口测试的时候会用
- typing
不动
- .autod.conf.js
是egg.js自动生成的配置文件，不需要修改
- .eslintignore .eslintrc
代码格式化的文件
- .gitignore
上传忽略文件
- package.json
依赖包的版本，命令
- readme.md
使用markdomn写的说明文件
最主要的文件：app + config + package.json + test(要测试的时候用)

1. app
agg的开发约定规范
app/controller
里面所有的都是服务端的控制器，在这里写了之后，要在外面的router.js中进行路由的配置，然后才能访问到页面，
app/public
共用文件，静态文件
app/service
当业务逻辑比较复杂，或者与数据库打交道的时候，会新建立一个service文件夹，主要业务逻辑都放在这个文件夹
app/view
模板文件，支持很多的模板形式，我们这里是纯接口的形式，不需要模板文件夹
app/extend
在模板中启用一些需要扩展的方法的时候就在这里面写，写成扩展方法用就行
app/middleware
中间件，比如做路由守卫判断的时候，权限什么的就在这里面做
2. 做一个简单的小例子
想要一个http://127.0.0.1:7001/list 页面
首先要配置一个控制器，controller
新建controller/home(这个文件已经有了，直接在里面新建方法)
里面一开始有一个方法
async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
我们在新建一个方法（都是异步的）
async list() {
  const { ctx } = this; //这是固定的写法
  ctx.body = '<h1>linan blog list</h1>'
}
// 写了这个方法怎么能配置到能让页面可以访问到这个list?
再配置路由：router.js
router.get('/list', controller.home.list);
可以访问了