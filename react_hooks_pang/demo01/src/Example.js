// 快速生成imrc
//ccc
// import React, { Component } from 'react';
import React, { useState } from 'react';
// class Example extends Component {
//     constructor(props) {
//         super(props);
//         // 状态，因为我们需要他每次点击加一，所以需要一个计数器count,初始值设为0
//         this.state = { count:0 };
//     }
//     // render函数就是渲染JSX的地方
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>Click me</button>
//                 {/* 按钮里面有一个单击的响应事件onclick,加一个addCount方法 */}
//             </div>
//         );
//     }
//     // onClick方法 直接写的时候，要使用的时候this指向是不对的，所以button那里要绑定this用bind
//     addCount() {
//         // setState就是改变我们的状态的，里面的是我们改变的对象
//         // 先得到计时器现在是几:this.state.count
//         this.setState({count: this.state.count+1})
//     }
// }

// //把组件暴露出去，然后在index.js中使用

// 因为hooks使用函数的形式替代原来的继承Component的形式
// 定义成一个函数，就相当于这个就是一个组件了
function Example() {
    // 声明计数器count，还有用来改变值的setCount函数
    // 如何能变成一个状态？用引入的useState,hooks这个特性可以为我们设置状态，并且改变状态
    // useState是一个方法，里面放的是初始值，左边为什么是一个数组？
    // 是es6的数组解构的一个方法，如果不用这种,可以用第二种
    const [ count, setCount ] = useState(0) //初始值为0 //第一种
    // 这时候count已经被解构了，然后现在是一个变量，直接使用

    //第二种,
    // 先声明一个局部变量,声明出来是一个数组，然后还是用useState这个新特性函数
    // let _useState = useState(0)
    // let count = _useState[0] //count的值就是我们定义的这个数组的第一位
    // let setState = _useState[1]
    // 可以看到，不使用数组解构的时候，就要把它拆分成这样，不够简单明了

    // 然后返回JSX语法
    return (
        <div>
            {/* 直接放count,不用再加this.state */}
            {/* 直接使用解构出来了的count变量 */}
            <p>You clicked { count } times!</p>
            {/* onClick直接用箭头函数的方式 */}
            {/* setCount也是hooks为我们设置的 */}
            {/* setCount这个函数，将要接受的值是我们将要改变成的状态，count要改变成什么，就放什么 */}
            {/* 但是这个count我们有没有做什么记录，那react是怎么记住count的每次加一这个变化的？又没有使用什么key-value对 */}
            {/* 是通过useState的顺序来记录的 */}
            {/* 做一个多状态声明的例子 */}
            <button onClick={()=>{setCount(count + 1)}}>Click me</button>
        </div>
    )
}
export default Example;