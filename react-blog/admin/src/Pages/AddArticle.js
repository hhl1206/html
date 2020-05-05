import React, { useState } from 'react';
import marked from 'marked' //要安装一下 //处理markdown的
// 还要使用一个css样式
import '../static/css/AddArticle.css'
// 使用antd中想要的组件
//因为是表单，所以肯定有input,还有对类别进行选择的组件Select,提交按钮,日期选择
import { Row, Col, Input, Select, Button, DatePicker} from 'antd'
const {Option} = Select // 下拉列表中的每一项，这个需要解析出来
const {TextArea} = Input // 多行文本框，这个是在Input里面的，所以注意引入的方式

function AddArticle() {
    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate,setShowDate] = useState()   //发布日期
    const [updateDate,setUpdateDate] = useState() //修改日志的日期
    const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息//这里会从后台读出所有文章分类
    const [selectedType,setSelectType] = useState(1) //选择的文章类别

    // 设置marked
    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer:renderer, //后面的是我们的new的实例
        gfm:true,
        pedantic:false,
        sanitize:false,//原始输出，忽略html
        breaks:false,//不使用github的换行符
        smartLists:true,
        smartypants:false//使用更为时髦的标点，比如在引用语法中加入破折号。
    })
    // 变化的时候，右边的预览也要跟着变，一个change方法
    // 传一个e,因为要接受多行文本框中的e
    const changeContent = (e) => {
        // 怎么获得值呢？然后赋给左边的setArticleContent
        setArticleContent(e.target.value);
        // 然后把获得的值用marked转换一下 //？？我们后台保存的值是articleContent,不是转换的值
        let html = marked(e.target.value);//转换成html
        setMarkdownContent(html); //把转换后的赋值给右边预览
    }
    // 文章简介的预览实现
    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value);
        let html = marked(e.target.value);
        setIntroducehtml(html);
    }
    return (
        // 页面分为两个部分文章内容和预览内容
        <div>
            {/* 间距gutter5个像素 */}
            <Row gutter={5}>
                {/* Col是24格布局 */}
                {/* 左边 */}
                <Col span={18}>
                    <Row gutter={10}>
                        {/* 最上面那一行 */}
                        <Col span={20}>
                            <Input 
                                placeholder="博客标题"
                                size="large"
                            ></Input>
                        </Col>
                        {/* 类别选择*/}
                        {/* defaultValue默认选哪个 */}
                        {/* Option中的value要跟select对应 */}
                        <Col span={4}>
                            <Select defaultValue="1" size="large">
                                <Option value="1">视频教程</Option>
                            </Select>
                        </Col>
                    </Row>
                    {/* 行里面列的间距 */}
                    <Row gutter={10}>
                        {/* 左右都是12，对半分 */}
                        <Col span={12}>
                            {/* 多行文本框，antd的组件 */}
                            {/* rows:默认行数是35行，其实也就相当于默认的高 */}
                            <TextArea
                                className="markdown-content"
                                rows={35}
                                placeholder="文章内容"
                                onChange={changeContent}></TextArea>
                        </Col>
                        <Col span={12}>
                            <div className="show-html"
                            dangerouslySetInnerHTML={{__html:markdownContent}}>
                                {/* 记住这里不能直接写markdownContent，也就是html, 要用那个属性的方法*/}
                            </div>
                        </Col>
                    </Row>
                </Col>
                {/* 右边 */}
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            {/* 用样式分开一点 */}
                            <Button size="large">暂存文章</Button>
                            {/* 主按钮：用于主行动点，一个操作区域只能有一个主按钮 */}
                            <Button type="primary" size="large">发布文章</Button>
                        </Col>
                        <Col span={24}>
                            {/* 简介以后也是要用markdown转化为html */}
                            <TextArea 
                                className="markdown-introduce"
                                rows={4}
                                placeholder="文章简介"
                                onChange={changeIntroduce}
                            ></TextArea>
                            {/* 预览 */}
                            <div className="introduce-html"
                            dangerouslySetInnerHTML={{__html: introducehtml}}>
                                {/* introducehtml这个值是已经用marked转换了的 */}
                            </div>
                        </Col>
                        {/* 发布日期 */}
                        <Col span={12}>
                            <div className="data-select">
                                <DatePicker
                                    placeholder="发布日期"
                                    size="large"></DatePicker>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AddArticle;
