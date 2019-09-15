import React, { Component } from 'react'
import { Flex, WingBlank, WhiteSpace, InputItem, Button, Toast, Checkbox } from 'antd-mobile'
import { Link } from 'react-router-dom'
const AgreeItem = Checkbox.AgreeItem;
export default class Reg extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
            phone: '',
            pwd: '',
            identify: ''
        }
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('请输入11位手机号码');
        }
    }
    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            phone: value,
        });
    }
    render() {

        return (
            <div>
                <WhiteSpace size="xl"></WhiteSpace>

                <WingBlank>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.phone}
                    ></InputItem>
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        onChange={val => this.setState({ pwd: val })}
                        value={this.state.pwd}
                    ></InputItem>
                    <Flex style={{ position: 'relative', backgroundColor: '#fff' }}>

                        <InputItem

                            placeholder="请输入验证码"
                            onChange={val => this.setState({ identify: val })}
                            value={this.state.identify}
                        >

                        </InputItem>
                        <span style={{ position: 'absolute', right: '10px', color: '#ccc' }}>获取验证码</span>
                    </Flex>
                    <Flex>
                        <AgreeItem data-seed="logId" >
                            <span style={{ color: '#ccc' }}>我已同意</span> <a href="#" style={{ color: '#33A3F4' }}>《用户服务协议》及《隐私权政策》</a>
                        </AgreeItem>
                    </Flex>
                    <WhiteSpace size="md"></WhiteSpace>
                    <Button style={{ backgroundColor: '#33A3F4', color: '#fff' }}>
                        注册
                    </Button>
                    <WhiteSpace size="md"></WhiteSpace>

                    <Link to="/login" style={{ color: '#33A3F4' }}>已有帐号</Link>
                </WingBlank>
            </div>
        )
    }
}
