import React from 'react';
import '../public/style/components/header.css'
// 行栅格，列栅格，菜单，图标
import { Row, Col, Menu} from 'antd'
import {
    HomeOutlined,
    YoutubeOutlined,
    SmileOutlined
  } from '@ant-design/icons';


// 要使用ant-design的24扇格布局，需要用到里面的东西
// 如果是大括号,里面是一个方法,用return返回,不用大括号用(),这里面是默认返回的
const Header = () => {
    return (
        <div className="header">
            {/* 横向布局 使用flex就能用justify，实现居中布局 */}
            <Row type="flex" justify="center">
                {/* 适配各种屏幕 xs小于576像素的屏幕,希望他的占用是一行(24栅格)  sm >=576 md >=768 lg 992 xl 1200 xxl>1600(2k屏)*/}
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">临安</span>
                    <span className="header-txt">去时风雨锁寒江,归来落樱染轻裳</span>
                </Col>
                {/* 导航部分 */}
                {/* xs,sm手机,就不显示;md平板,后面是更大的 */}
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    {/* 横向导航,horizontal */}
                    <Menu mode="horizontal">
                        <Menu.Item key="home" icon={<HomeOutlined />}>
                            {/* <Icon type="home" /> */}
                            首页
                        </Menu.Item>
                        <Menu.Item key="video" icon={<YoutubeOutlined />}>
                            {/* <Icon type="youtube" /> */}
                            视频
                        </Menu.Item>
                        <Menu.Item key="life" icon={<SmileOutlined />}>
                            {/* <Icon type="smile" /> */}
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

//导出 让他能引入到首页中
export default Header;
// 先看一下现在的样式