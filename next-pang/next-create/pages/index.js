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