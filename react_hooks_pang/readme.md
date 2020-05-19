react hooks其实就是用函数的形式代替原来写的继承component类的形式并且使用域函数的形式管理state
也就是有状态的组件都可以使用函数的形式来定义。
# 搭建开发环境
打开命令行 ctrl+R 在某个盘下mkdir ReackHooksDemo
然后进入这个目录 然后能用create-react-app这个脚手架工具是官方的脚手架，要先安装。创建一个demo01项目
create-react-app demo01
那直接在vs code建好了

## demo01
把src下的App.css App.js App.test.js index.css都删掉，只留一个index.js
index.js中也最下面的也删掉，代码精简化,只留这点：
```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(  
    <App />,
  document.getElementById('root')
);
```
1. 原来的开发方式和hooks对比
做一个对点击按钮，然后次数加一的操作
新建文件Example.js
```js
import React, { Component } from 'react';
class Example extends Component {
    constructor(props) {
        super(props);
        // 状态，因为我们需要他每次点击加一，所以需要一个计数器count,初始值设为0
        this.state = { count:0 };
    }
    // render函数就是渲染JSX的地方
    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>Click me</button>
                {/* 按钮里面有一个单击的响应事件onclick,加一个addCount方法 */}
            </div>
        );
    }
    // onClick方法 直接写的时候，要使用的时候this指向是不对的，所以button那里要绑定this用bind
    addCount() {
        // setState就是改变我们的状态的，里面的是我们改变的对象
        // 先得到计时器现在是几:this.state.count
        this.setState({count: this.state.count+1})
    }
}

//把组件暴露出去，然后在index.js中使用
export default Example;
```
原来的写法，然后是hooks的写法，
因为不在继承component，换掉Component，换成引入一个useState-》用来改变状态的
- 什么时候不用使用hooks?
hooks是react的新特性，这个版本必须是16.8以上的版本才有的
## _useState
详细讲一下useState 
- 如何声明？
是个数组，所以用数组解构的方式
const [ count, setCount ] = useState(0) //初始值为0
Example.js
- 如何读取状态值？
- 如何使用？
Example2.js 记得写了之后去index.js中重新引入
使用useState的时候，useState不能存在在条件语句中，他必须有完全一样的渲染顺序
## _useEffect
用useEffect代替我们常用的生命周期函数
这个也是一个常用的一个方法
useEffect() 
在做类组件的时候经常使用生命周期函数，也叫副作用（在生命周期中做的），就是和函数业务主逻辑关联不大
就像count+1这是业务主逻辑，然后要跟这个关联不大，而且在特定的时间或事件中执行，比如我们去async请求数据，或者登录监听 取消登录这些事件，不是最主要的函数中的功能，而是起到一个，一般是监听，或者取得数据，或者手动修改DOM是什么的就在生命周期中执行。
hooks中useEffect()就和这个类似
- 先用以前的方法写一个生命周期函数：
Example3.js
记得在index.js中改组件
