import React from 'react'
import hi from '@/css/hi.less'
import 'bootstrap/dist/css/bootstrap.css'

export default class Hi extends React.Component{

    // 构造器
    constructor(props) {
        super(props)
        this.state = {
            name: 'god',
            seg: 0,
            nickName: [
                {id: 1, name: 'sa'},
                {id: 2, name: 'da'}, 
                {id: 3, name: 'adac'},
                {id: 4, name: 'asx'}
            ]
        }
    }

    handleClink() {
        // console.log(this)
        this.setState({
            seg: this.state.seg + 1,
            name: this.state.name.substring(0, 3) + this.state.seg
        })
    }

    handleClinkNickName(item) {
        console.log("state nickName: {id=" + item.id + ",name=" + item.name + "}")
    }

    render() {
        return (<div className={hi.containerStyle2}>
        {"创建组件方式二"}
        <hr />
        {"获取props值（只读）：{name=" + this.props.name 
        + ",age=" + this.props.age + ",sex=" + this.props.sex + "}"}
        <div className='content'>{"获取state值（读写）：" + this.state.name}</div>
        <hr />
        <button onClick={this.handleClink.bind(this)} className="btn btn-primary">修改state值</button>
        <hr />
        {this.state.nickName.map(item =>{
            return (<div key={item.id}>
                        {item.name}
                        <button onClick={this.handleClinkNickName.bind(this, item)} className="btn btn-primary">
                            获取本item值
                        </button>
                    </div>)
        })}
        
       </div>)
    }
}