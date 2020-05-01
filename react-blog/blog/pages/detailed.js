import Head from 'next/head'
import React from 'react';
import Header from '../components/Header'
import { Row, Col, Menu} from 'antd'


const Detailed = () => {
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
          左侧
        </Col>
        {/* 手机上就不显示右侧栏,设为0 */}
        {/* 数值尽量与Header中的一样,比较好对齐 */}
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  )
}

export default Detailed
