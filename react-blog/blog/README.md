博客系统有三大块：前台 + 接口中台 + 后台管理 是完全独立的，然后配合使用
https://jspang.com/detailed?id=52
1. 安装 
npm install -g create-next-app
2. 创建目录
npx create-next-app 项目名
3. 启动服务
yarn dev 或者 npm run dev

# 前台 blog
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

# 4.制作首页主题两栏布局
index.js 先在这里写,方便看做成了什么样子
style/pages/comm.css
列表页 pages/list.js 把index.js中写的差不多的,复制在里面微调,然后在里面微调就是我们的list列表

同样再建一个detail,就是文章的详细页,同样把index.js中的复制到里面
然后我们就有了首页,列表页,详情页
(因为都是左右栏的大体结构)
# 5.列表
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