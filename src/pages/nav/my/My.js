import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item;

export default class My extends Component {
    constructor() {
        super()

        this.state = {
            msg: '登录/注册',
            iconlist: [{ icon: 'icon17.png', name: '我的积分' },
            { icon: 'icon18.png', name: '我的订阅' },
            {},
            { icon: 'icon19.png', name: '微聊联系人' },
            {},
            { icon: 'icon20.png', name: '房贷计算器' },
            { icon: 'icon21.png', name: '我的房子' },
            {},
            { icon: 'icon22.png', name: '我的看房记录' },
            { icon: 'icon23.png', name: '我的问答' },
            {},
            { icon: 'icon24.png', name: '设置' },
            { icon: 'icon25.png', name: '意见反馈' }]
        }
    }

    render() {
        return (
            <div>
                <h1 onClick={this.clickLogin.bind(this)}>{this.state.msg}</h1>


                <List>
                    {
                        this.state.iconlist.map(obj => {

                            if (obj.icon) {
                                return <Item
                                    key={obj.name}
                                    thumb={require('../../../assets/images/' + obj.icon)}
                                    arrow="horizontal"
                                    onClick={() => { }}
                                >{obj.name}</Item>
                            }else{
                                return <div style={{height: '8px', backgroundColor: '#F5F5F9'}}></div>
                            }

                        })
                    }
                </List>
            </div>
        )
    }

    componentDidMount() {

        let val = localStorage.getItem('username')
        this.setState({ msg: val ? val : '登录/注册' })

    }

    //登录跳转判断
    clickLogin() {
        if (!localStorage.getItem('username'))
            this.props.h.push('/login')
    }
}