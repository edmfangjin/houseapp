import React, { Component } from 'react'
import { Flex, WingBlank, WhiteSpace,InputItem,Button} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            acc:'',
            psw:''
        }
    }
    render() {
        return (
            <div>
                <Flex justify='center'>
                    <img src={ require('../../assets/images/logo.png')} style={{width:150+'px',marginTop:50+'px'}} alt='logo'></img>
                </Flex>
                <WhiteSpace size="xl"/>
                <WhiteSpace size="xl"/>
            <WingBlank>
            <InputItem
            placeholder="请输入用户名"
            clear
            value={this.state.acc}
            onChange={val=>this.setState({acc:val})}
          >
            <div style={{ backgroundImage: `url(${require('../../assets/images/icon_user.png')})`,  backgroundSize: 'cover', height: '30px', width: '30px' }} />
          </InputItem>
          <InputItem
            placeholder="请输入密码"
            type='password'
            clear
            value={this.state.pwd}
            onChange={val=>this.setState({pwd:val})}

          >
            <div style={{ backgroundImage: `url(${require('../../assets/images/icon_pwd.png')})`,  backgroundSize: 'cover', height: '28px', width: '28px' }} />
          </InputItem>
          <WhiteSpace size="md"/>
          
            <Button style={{backgroundColor:'#33A3F4',color:'#fff'}}>
                登录
            </Button>
          <WhiteSpace size="md"/>

          <Flex justify='between'>

            <Link to="/sign" style={{color:'#33A3F4'}}>手机快速注册</Link>
            <Link to="/sign" style={{color:'#33A3F4'}}>忘记密码</Link>
          </Flex>

          </WingBlank>
          <Flex justify='center' style={{color:'#DDE1E9',position:"absolute",bottom:50+'px',width:'100%'}}>
              登录/注册即代表同意《贝壳找房用户协议》
          </Flex>
            </div>
        )
    }
}
