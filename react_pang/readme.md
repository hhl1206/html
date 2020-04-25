# React
https://jspang.com/detailed?id=30
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
react最主要的一个就是把组件看成一个状态积，用户界面是根据状态进行渲染的，状态又跟数据保持一致，相当于也跟vue一样，跟数据保持一致，数据驱动界面
开发者主要做的就是state
react_demo05.html
## 5. 组件的props和render
react_demo06.html
- 什么是props?
<!-- 最简单的input -->
<input type="text">
<!-- 这个type就是属性,type="text"就是props -->
// 要注意，要想好我们的组件，哪些是props哪些是state，通常，固定的组件，大多是只读的
// 应用父组件传过来的组件适合用props，在组件里不进行改变的，比如我们常用的类名，颜色，字体，回调函数等等
// 而state是组件在进行组件渲染的时候会进行改变的或者在生命周期会进行改变的
- render成员函数
是声明组件必须要的一个函数
主要的责任就是检测this.props和this.state
render函数应该是纯粹的，也就是render里面不应该有改变组件的state的，不读写DOM信息，也不与浏览器交互，只进行组建的JSX书写和props定义，state什么的写在生命周期里，交互的写在生命周期里。

## 6. 组件的生命周期
生命周期，也叫钩子函数，可以看成是三个阶段：
一个组件完整的生命周期包含实例化阶段、活动阶段、销毁阶段三个阶段。每个阶段又由相应的方法管理。
挂载阶段， 更新阶段， 销毁阶段
有三个动作，也叫关键词：（注意这个是组件的声明周期，不是react的生命周期）
mounting:表示正在挂接虚拟DOM到真实DOM。
updating:表示正在被重新渲染。
unmounting:表示正在将虚拟DOM移除真实DOM。
每个动作术语提供两个函数：
componentWillMount()//组件将要挂载
componentDidMount()//组件已经挂载好了
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
componentWillUnmount()
一共有这5个钩子函数。
react_demo07.html
## 7.组件小实例
对组件的基础知识的练习，包括组件的属性，状态，和生命周期，做一个组件的闪动效果
对前几节课组件的复习，首先明确什么时候使用state，就是需要在组件中进行变化的时候用state，不是使用属性，属性是在我们调用组件或者父组件的时候传递，在组件中不进行更改的时候使用的props
还有声明周期
记住render中一定要是纯粹的组件结构，没有任何业务逻辑代码，而把业务逻辑放到生命周期中
## 8.this.props.children
react的组件
子属性
this.props对象的属性与组件的属性一一对应，但有一个例外，就是this.props.children属性。它表示组件的所有子节点。
子节点
比如说写一个有序列表ol li
li就是我们的子节点，在html中叫子标签
this.props.children就是来创建这种形式的组件

# react16 28集
https://jspang.com/detailed?id=46


