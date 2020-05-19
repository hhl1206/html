// 这里要接收参数，需要用到withRoute（技能方法，如果做了一个组件，本身没有这个方法，加了这个就有了这个方法）
// 就能接收参数了，不使用这个就没有接收参数的能力了 
import { withRouter } from 'next/Router'
import Link from 'next/link'

// 写一个方法,用hook的形式写组件，就是一个函数
// 箭头函数里面传一个router的值(如果没有用withRouter,这里是不能传值的)
const Xiaojiejie = ({router}) => {
    return (
        <>
        <div>{router.query.name}被选择了</div>
        <Link href='/'><a>返回首页</a></Link>
        </>
    )
}

// 暴露出去
// withRouter是next.js的高级组件，用来处理路由用的（这个名字是自己起的？）
// 相当于有了这个，我们就能取到我们的路由了
export default withRouter(Xiaojiejie);