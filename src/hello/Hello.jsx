import React from 'react'

// 创建组件方式一
export default function Hello(props) {
    return (<div className="container-style-1">
        {"创建组件方式一"}
        <br/>
        {"获取props值（只读）：{name=" + props.name 
        + ",age=" + props.age + ",sex=" + props.sex + "}"}
       </div>)
}