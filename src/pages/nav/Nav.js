import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Home from './home/Home'
import Chat from './chat/Chat'
import History from './history/History'
import My from './my/My'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'home',
          TabBar:[
            {title:'首页',key:'home',icon:require('../../assets/images/icon-home.png'),selectedIcon:require('../../assets/images/icon-home-s.png'),item:<Home h={this.props.history}/>},
            {title:'微聊',key:'chat',icon:require('../../assets/images/icon-chat.png'),selectedIcon:require('../../assets/images/icon-chat-s.png'),item:<Chat/>},
            {title:'足迹',key:'history',icon:require('../../assets/images/icon-history.png'),selectedIcon:require('../../assets/images/icon-history-s.png'),item:<History/>},
            {title:'我的',key:'my',icon:require('../../assets/images/icon-my.png'),selectedIcon:require('../../assets/images/icon-my-s.png'),item:<My/>}
          ]
        };
      }
    
      render() {
        return (
          <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
            >
                {
                  this.state.TabBar.map(obj=>
              <TabBar.Item
                title={obj.title}
                key={obj.key}
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${obj.icon}) center center /  21px 21px no-repeat`}}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${obj.selectedIcon}) center center /  21px 21px no-repeat` }}
                />
                }
                selected={this.state.selectedTab === obj.key}

                onPress={() => {
                  this.setState({
                    selectedTab: obj.key
                  });
                }}

              >
                {obj.item}
              </TabBar.Item>
                    
                    )
                }
            </TabBar>
          </div>
        );
      }
}
