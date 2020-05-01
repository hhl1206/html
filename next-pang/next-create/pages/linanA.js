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