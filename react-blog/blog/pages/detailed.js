import Head from 'next/head'
import React from 'react';
import Header from '../components/Header'
import Author from '../components/Author' //加右侧列表
import Advert from '../components/Advert' //广告列表
import Footer from '../components/Footer' //底部栏
import '../public/style/pages/detailed.css'//引入页面的样式
import { Row, Col, Breadcrumb, Affix } from 'antd'
import axios from 'axios'
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
// 里面是自带css的，所以要引入css
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'


const Detailed = () => {

  let markdown = 
    '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '\`console.log(111)\` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```'
  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header></Header>
      {/* 两栏布局 */}
      {/* 以为这个也可能会写道公共样式中,所以class名字这样取 */}
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            {/* 面包屑导航的 样式中会自带下划线*/}
            <div className="bread-div">
              <Breadcrumb>
                {/* href是在当前页打开 */}
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                <Breadcrumb.Item>文章1</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                React实战视频教程-临安开发(学习中)
              </div>
              {/* 父简介，有多少人看,需要使用ant的图标 */}
              <div className="list-icon center">
                <span><CalendarOutlined />2020-05-02</span>
                {/* 类别 */}
                <span><FolderOpenOutlined />视频教程</span>
                <span><FireOutlined />5498人</span>
              </div>
              {/* 文章主体内容 */}
              <div className="detailed-content">
                {/* 这里面解析的是mackdowm里面的内容 */}
                {/* 有几个属性
                source:要把什么进行渲染，
                escapeHtml 如果里面有html标签，不进行转换写成false，就是原样输出html,进行转换就是就会输出htlm标签(好像两个没什么变化) */}
                <ReactMarkdown
                  source={markdown} 
                  escapeHtml={false}></ReactMarkdown>
              </div>
            </div>
          </div>
        </Col>
        {/* 手机上就不显示右侧栏,设为0 */}
        {/* 数值尽量与Header中的一样,比较好对齐 */}
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          {/* 右侧 */}
          <Author></Author>
          <Advert></Advert>
          {/* 固钉 offsetTop={5} 相对的位置，相对上面空出5个像素*/}
          <Affix offsetTop={5}>
          {/* 用一下markdown-navbar */}
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {/* 有四个属性
                className:允许自定义css
                source:要解析哪个markdown作为navbar
                headingTopOffset={0}:锚点距离顶部的距离，默认为0）等我们真正有一个文章再写
                ordered:是否是有编号，默认带编号，true */}
              <MarkNav 
              className="article-menu"
              source={markdown}
              // headingTopOffset={0}
              ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  )
}

// 根据id查询
// 直接用它里面的方法，也是i、异步的，里面传递上下文，因为我们要接收前台传过来的id
Detailed.getInotialProps = async(context) => {
  // 接收前台传过来的id
  console.log(context.query.id)
  // 把通过链接传过来的id接受到
  let id = context.query.id
  // 然后请求我们的接口，需要一个promise对象
  const promise = new Promise((resolve)=> {
    axios('http://127.0.0.1:7001/default/getArticleById').then(
      (res) => {
        console.log(res)
        resolve(res.data.data[0]) //??
      }
    )
  })
  return await promise
}

export default Detailed
