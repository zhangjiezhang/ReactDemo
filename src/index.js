import React from 'react'
import ReactDOM from 'react-dom'

// 创建组件方式一二
import Hello from '@/hello/Hello'
import Hi from '@/hello/Hi'

// 1.创建虚拟DOM元素
// parm1：字符串，元素名称
// parm2：对象或null，元素属性
// parm3：子节点（虚拟DOM或文本节点）
// ...
// parmn：子节点
// <div>欢迎</div>
const div = React.createElement('div', null, '欢迎')
// <h1 id="header">首页</h1>
const h1 = React.createElement('h1', {id: 'header'}, '首页，哈哈', div)

const a = "欢迎来到JSX"
const b = ['sad', 'da', 'daszc', 'dafc']
const c = {
    name: 'pascall',
    age: 20,
    sex: 'man'
}

// 2.渲染虚拟DOM
// parm1：虚拟DOM
// parm2：挂在节点
ReactDOM.render(
    <div className="continer">
        <Hello {...c} />
        <hr />
        <Hi  {...c} />
    </div>, 
    document.getElementById('app'))