import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import next from 'next'; //没有用到，暂时不写

const Home = () => {
  function gotoXiaojiejie() {
    // Router.push('/xiaojiejie?name=临安')
    // push的内容不再是字符串，而是对象
    Router.push({
      pathname:'/xiaojiejie',
      query: {name: 'linan'} //接受的是一个对象，里面可以有多个属性
    })
    // 编程式导航能这样写，那标签是导航也可以
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        {/* <Link href="/xiaojiejie?name=结衣"><a>选择结衣</a></Link> */}
        {/* 也使用面向对象形式 */}
        {/* 第一个{}代表这里面是一个JSX语法，在里面一个{}代表里面是一个对象，对象里面写属性 */}
        <Link href={{pathname:'xiaojiejie', query: {name: 'jieyi'}}}><a>选择结衣</a></Link>
        <br></br>
        <Link href="/xiaojiejie?name=临安"><a>选择临安</a></Link>
      </div>
      {/* 编程式跳转 */}
      <div>
        <button onClick={gotoXiaojiejie}>选临安</button>
      </div>
      {/* 能不能面向对象编程？改一下push */}
    </>
  )
}

// 然后需要把Home暴露出去
export default Home;