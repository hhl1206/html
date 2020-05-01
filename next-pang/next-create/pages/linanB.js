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