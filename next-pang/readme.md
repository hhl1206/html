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
```js
function Linan(){
    return (
        <button>临安</button>
    )
}

//抛出去，让外部可以用
export default Linan
//怎么能访问到呢？yarn dev先启动服务
```

怎么能访问到呢？yarn dev先启动服务
我们是新建了一个页面叫linan.js，直接在后面加文件名就可以http://localhost:3000/linan
没有配置路由，next.js自动给我们生成了路由
如果想有一个http://localhost:3000/blog/nextBlog
这样的路经，怎么做？
使用文件夹，直接建blog/nextBlog.js
深层次的路由是通过文件夹的形式实现的
```js
// 直接这样导出 导出方法
// 相当于一个匿名函数 约定式路由
export default ()=><div>NextBlog page</div>;
```

如何新建一个components组件
components/linan
使用的时候import就行
```js
import Linan from '../components/linan'
```

# 4.路由的标签跳转和编程跳转
页面之间的跳转有两种
先把page下的文件清掉
1. <Link>标签的形式 --标签式跳转
2. Router形式 比如Router.push --编程式跳转
区别，Link直接写在html语法中就可以，跟<a>标签很像 Link 标签里面也包<a>
第二种一般用在js中，一般写在方法中，普通的业务逻辑中也可以用，这种叫做编程式跳转，它的好处是：
复用性更强
<Link href='/'><a>返回首页</a></Link>
{/* 原来是直接这样写就可以，但是我们现在用的是最新的next,8.*就开始要求里面放一个a标签 */}
<a>的好处在哪里？

<div><Link href='/linanA'><a>去linanA页面</a></Link></div>
<div><Link href='/linanB'><a>去linanB页面</a></Link></div>

有一个坑，只支持一个父标签，不支持兄弟标签
index.js + linanA + linanB
```js
// index.js
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

// 标签式跳转
//直接用箭头函数返回的，是没有什么业务逻辑的时候这样写，如果里面有业务逻辑就不用()用{}
// const Home = ()=>(
//   <>
//     <div>我是首页</div>
//     <div><Link href='/linanA'><a>去linanA页面</a></Link></div>
//     <div><Link href='/linanB'><a>去linanB页面</a></Link></div>

//     {/* 编程式跳转，要先引入一个router */}
//     {/* push里面就是要去的那个页面 */}
//     {/* 每次写都要箭头函数吗？这不是失去了复用的效果吗？，一般会单独写在方法中 */}
//     <div>
//       <button onClick={()=>{Router.push('/linanA')}}>linanA</button>
//     </div>
//   </>
// )

// 这时候就要用到大括号中了，要返回值，还要有业务逻辑，加一个return
const Home = () => {
  // 然后用一个方法替换掉之前的箭头函数，这样就能复用了
  function gotoA(){
    Router.push('/linanA')
  }
  return (
    <>
      <div>我是首页</div>
      <div><Link href='/linanA'><a>去linanA页面</a></Link></div>
      <div><Link href='/linanB'><a>去linanB页面</a></Link></div>

      {/* 编程式跳转，要先引入一个router */}
      {/* push里面就是要去的那个页面 */}
      {/* 每次写都要箭头函数吗？这不是失去了复用的效果吗？，一般会单独写在方法中 */}
      <div>
        {/* <button onClick={() => { Router.push('/linanA') }}>linanA</button> */}
        <button onClick={gotoA}>fuc linanA</button>
        <button onClick={gotoA}>fuyong linana</button>

      </div>
    </>
  )
}

// 然后需要把Home暴露出去
export default Home;
```
```js
// linanB
// 因为我们还要跳转回index.js所以这里也引入一个Link
import Link from 'next/link';

// 为什么这个箭头函数里面用的是圆括号不是大括号，圆括号里面就相当于我们的返回值，返回的是JSX,用圆括号可以帮我们格式化
export default ()=>(
    // 用href的形式，href就是内部跳转
    // 因为我们写在pages中的都是页面，他会自动生成路由，所以直接写
    <>
        <div>linan B</div>
        <Link href='/'><a>返回首页</a></Link>
        {/* 原来是直接这样写就可以，但是我们现在用的是最新的next,8.*就开始要求里面放一个a标签 */}
        {/* 不支持兄弟标签 */}
        {/* <Link href='/'>
            <span>返回首页</span>
            <span>Icon</span>
        </Link> */}
        {/* 上面会错必须有一个父级标签，要这样的话就加一个a标签 */}
        <Link href='/'>
            <a>
                <span>返回首页</span>
                <span>Icon</span>
            </a>
        </Link>
        {/* 这样就相当于Link下面就只有一个父级标签，没有其他的兄弟标签 */}
    </>
);
```
```js
// linanA
// 因为我们还要跳转回index.js所以这里也引入一个Link
import Link from 'next/link';

// 为什么这个箭头函数里面用的是圆括号不是大括号，圆括号里面就相当于我们的返回值，返回的是JSX,用圆括号可以帮我们格式化
export default ()=>(
    // 用href的形式，href就是内部跳转
    // 因为我们写在pages中的都是页面，他会自动生成路由，所以直接写
    <>
        <div>linan A</div>
        <Link href='/'><a>返回首页</a></Link>
        {/* 原来是直接这样写就可以，但是我们现在用的是最新的next,8.*就开始要求里面放一个a标签 */}
    </>
);
```

# 5.路由跳转使用query传参和接受参数
什么都不传递直接跳转叫静态跳转，带参数的叫动态跳转 根据不同的参数显示不同的内容就叫做动态跳转
比如新闻网站，有很多个新闻，点击不同的，有相应的详细内容，这就是通过不同的参数进不同的页面
1. 用query传递参数
next这个框架只能用query传递参数
index.js
什么的是query传递参数？
query=> ？id=1 用问号
学普通的react-router的时候，他有一种是path传递参数
path=> :id=1  用冒号

只支持query这种方式传参是由next.js这个框架决定的
