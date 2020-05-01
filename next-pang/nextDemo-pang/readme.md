next.js是react的服务端的渲染框架
# Next.js
1. 什么是服务端渲染，什么是客户端渲染
以前做的程序叫SPA，比如说我们vue react做的应用大部分的都是SPA：single page web application
实际上无论是vue 还是react开发的都是单页应用 会有很不好的问题：
- 一个页面要把所有的资源都加入到这一个页面中就会出先首屏加载过慢
- 还有一个问题，就是没办法SEO（就是搜索引擎优化） 因为所有的页面都在一个页面
next.js解决的就是服务端进行渲染：解决首屏加载变得更迅速 + 可以SEO

服务端渲染简称ssr 

next.js的优点：
 1. 他是完善的架构 搭建起来轻松 不用再配置webpack什么的
 2. 自带数据同步 SSR 最大的难度在于我们在服务端把页面渲染好了之后拿到拿到客户端要重新渲染，随时根据服务端的变化而变化，这个在没有框架的时候是十分困难的，
 Next.js为我们解决这个问题前后端数据同步功能
 3. 他有丰富的插件，同时也可以自己形成生态
 4. 灵活的配置 他提供了很多的配置项，根据项目的不同进行配置项的修改就能快速生成我们想要的项目

2. 搭建Next.js项目
有两种方式：
- 手动 完全自己配置
- 利用create-next-app 相当于脚手架app 它自动给我们创建目录和搭建项目结构

## 手动配置
项目初始化一下：npm init -y
yarn add react react-dom next(next基础包) 
然后要增加一些配置项，命令行操作的命令还没有，所以要加
- dev就是我们在开发模式下进行调试的时候用的，相对应的next.js为我们提供的命令叫做next
- 还需要项目完成之后的打包的命令build next中是叫做next build
- 打完包之后还需要一个开启服务的命令start next中叫ntxt start

"dev": "next",
"build": "next build",
"start": "next start"

## hello world
新建pages文件夹
这个文件夹是只要写在pages中的文件next.js会自动进行路由的设置，
首页：
新建一个index.js
我们用react hooks写法
react hooks是16.8的新特性 函数式组件
这里面就不用引入 import什么的 next.js都会做好
直接function就好

# 2. 用create-next-app快速创建项目
create-next-app是一个脚手架，有了它只要一条命令就能直接把项目需要的依赖包和基本目录生成
要使用这个脚手架就要先全局安装，npm install -g create-next-app
然后创建，创建有3中形式的创建方法
1. npx 
是node新提供的一种工具
2. yarn
3. create-next-app
这三种创建出来的是一样的，只是命令不一样，我们用第一种
npx create-next-app next-create

## 看一下它的目录结构
- components
有专门用处的组件放这里 （新版的没有这个）
- node_modules
项目所有的依赖包，用package.json来控制
- pages
项目的页面，能直接访问的 next会自动生成路由并在服务端渲染好，并能同步数据
- static
静态资源文件 图片什么的放这里 （新版的是public）
- gitignore
git使用的，什么东西上传，什么不上传 也就是忽略提交的一些文件
（关于新版的，很多初始的都没有了）
- yarn.lock
版本的锁定 yarn自动生成的

# 3.page和component使用
如何创建页面，创建组件
pages/linan.js
怎么能访问到呢？yarn dev先启动服务
我们是新建了一个页面叫linan.js，直接在后面加文件名就可以http://localhost:3000/linan
没有配置路由，next.js自动给我们生成了路由
如果想有一个http://localhost:3000/blog/nextBlog
这样的路经，怎么做？
使用文件夹，直接建blog/nextBlog.js
深层次的路由是通过文件夹的形式实现的

如何新建一个components组件