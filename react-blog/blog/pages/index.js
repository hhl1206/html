import Head from 'next/head'
import React,{ useState } from 'react';
// import { Button } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { Row, Col, List} from 'antd'
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from '@ant-design/icons';
import '../public/style/pages/index.css'
import axios from 'axios'
import Link from 'next/link'
import servicePath from '../config/apiUrl' //接口


const Home = (list) => {

  // 文章列表有很多文章,用数组 我们的list.data本身就是数组
  const [mylist, setMylist] = useState(list.data)

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header></Header>
      {/* 两栏布局 */}
      {/* 以为这个也可能会写道公共样式中,所以class名字这样取 */}
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          {/* 注意List组件是一个半闭合标签的,它里面是通过属性prop进行设置 */}
          {/* header为列表设置头部,可以写成JSX语法 
              itemLayout="verical"都是一行一行横着的列,让我们的列是竖向的
              dataSource数据源
              renderItem怎么渲染数据每一项,里面是要一个函数的,我们直接返回JSX*/}
          <List 
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              // item有几项取决于数据源的数据有几项
              <List.Item>
                <div className="list-title">
                  {/* next的路由传参 */}
                  <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                    <a>
                      {item.title}
                    </a>
                  </Link>
                </div>
                {/* 还要加小图标 */}
                <div className="list-icon">
                  <span><CalendarOutlined /> {item.addTime}</span>
                  <span><FolderOpenOutlined />{item.typeName}</span>
                  <span><FireOutlined /> {item.view_count}人</span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        {/* 手机上就不显示右侧栏,设为0 */}
        {/* 数值尽量与Header中的一样,比较好对齐 */}
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          {/* 右侧 */}
          <Author></Author>
          <Advert></Advert>
        </Col>
      </Row>
      {/* 底部 */}
      <Footer></Footer>
    </div>
  )
}

//组件自带的方法
//从远端读取是要有一个时间的，所以用异步
Home.getInitialProps = async () => {
  // 传一个resolve,里面的方法就是用axios读取远端的方法，用之前要引入import axios
  const promise = new Promise((resolve)=>{
    // axios默认的方法就是get，所以直接加括号
    // 括号里的参数：远端获取数据的参数，是接口地址
    // 读取完数据后就then,其中的res就是我们获得的结果
    // axios('http://127.0.0.1:7001/default/getArticleList').then(
    axios(servicePath.getArticleList).then(

      (res)=>{
        console.log('---->',res.data)
        resolve(res.data)
      }
    )
  })
  // axios是必须要有一个返回值的,而且必须是await，所以一定要记得加
  return await promise
  // 怎么把promise赋给页面呢（JSX语法）组件后面的函数是接受一个参数的
}
export default Home
