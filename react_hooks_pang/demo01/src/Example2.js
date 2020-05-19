// imrc
import React, { useState } from 'react';

// 声明一个变量
let showSex = true

function Example2() {
    // 声明多个状态
    // useState就是根据顺序能知道我们改变的 改个顺序试试
    const [age, setAge] =useState(18)
    // 声明的时候做一个判断
    // if(showSex){
    //     const [sex, setSex] =useState('女')
    //     showSex = false        
    // }
    // 发现报错了，Line 13:30:  React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
    // 不能用if，只要使用useState,那顺序就必须是完全一致的，所以不能有条件判断语句

    const [sex, setSex] =useState('女')
    const [work, setWork] =useState('前端程序员')
    // 显示出来，相当于原来的render(){return}
    return (
        <div>
            <p>linan今年: {age}岁</p>
            <p>性别: {sex}</p>
            <p>职业: {work}</p>
        </div>
    )
}
export default Example2;
