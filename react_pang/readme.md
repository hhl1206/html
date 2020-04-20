# React
## 1. 定义HelloComonent组件
react运行环境：
搭建开发环境：两个文件：
https://facebook.github.io/react
react.js文件：实现react的核心的逻辑并且具有具体的渲染
react-dom.js
https://github.com/facebook/react/releases
但是好像没用：
http://www.imooc.com/qadetail/304704?t=486327

1. 新建文件夹common 把react.js和react-dom.js放进去
2. 建一个首页文件reat_demo01.html
3. 新建一个环境文件 (那两个js文件) 一个是核心js一个是渲染dom的
4. react_deml01.html
## 2. jsx
其实就是javascript+xml,是用来创建虚拟DOM和生成组件的
js和模板标签混写在一起缺乏模板的支持，也就是说所有的东西都要用js写，这种不友好，而使用JSX很好的解决这个问题，但是需要babel转化 es6中有讲，我们这里用bowser.js(babel核心js库)引入静态文件方法直接在客户端转换（这个转换十分慢，实际开发中不用）
bowser.js静态库 国内的 打babel->babel.core
https://www.bootcdn.cn/ 
使用5.*的太新的可能不支持转换 没有压缩版的可能好调错，所以我们用bowser.js
复制js标签
改写react_demo01.html-》react_demo02.html
1. live-server
安装，打开控制台，不是vs-code就用cmd进
vs-code：ctrl+~
npm install -g live-server 
运行：live-server
2. jsx中，是可以使用表达式的
- 插值，用一个{}里面写属性的名字
  {this.props.name} 这个name属性是需要组件提供过来的
- 也支持三元运算符：{this.props.name ？ this.props.name: 'world'}
- 不支持if-else
- 支持二元表达式：|| &&
{this.props.name || 'linan'} //前面有就显示前面的，没有就显示后面的
## 3. 进阶jsx
react_demo03.html
怎么通过jsx用html标签循环数组，不直接插值
react_demo04.html
用数组，数组里面直接可以用jsx语法
两种数组循环方式：
- 先声明一个数组，然后用变量的形式，在组件中进行循环
- 直接生成jsx语法的数组，然后直接用变量形式进行循环
## 4. 组件的State成员
学习react的组件：
可以看成是带有props属性集合State状态集合并且构造出一个虚拟dom结构的对象
react最主要的一个就是把组件看成一个状态积，用户见面是根据状态进行渲染的，状态又跟数据保持一致，相当于也跟vue一样，跟数据保持一致，数据驱动界面
react_demo05.html



