import React, { Component } from 'react'
import citydata from '../../json/city.json'
import BScroll from 'better-scroll'

export default class SelectCity extends Component {
    render() {
        console.log(citydata.hotcity)

        return (
            <div style={{height: '100%'}}>
                <div id='selectcity_div' style={{ height: '100%', overflow: 'scroll', paddingRight: '40px' }}>
                    <ul className='content'>

                        {/* 热门城市 */}
                        <p style={{ backgroundColor: '#CCC', margin: 0 }}>热门城市</p>
                        {
                            citydata.hotcity.map(cityname => <div>
                                <p style={{ lineHeight: '40px', borderBottom: '1px solid #CCC' }}>{cityname}</p>
                            </div>)
                        }

                        {/* 所有城市 */}
                        {
                            citydata.city.map(obj => <div id={ obj.title }>
                                <h1>{obj.title}</h1>
                                {
                                    obj.lists.map(cn => <p style={{ lineHeight: '30px', borderBottom: '1px solid #CCC' }}>{cn}</p>)
                                }
                            </div>)
                        }

                    </ul>
                </div>
                    

                <div style={{position: 'fixed',width: '15px', height: '100px',right: 0, top: 100}}>
                    {
                        citydata.city.map(obj => <div style={{margin:'8px 0'}} onClick={this.clickRightTitle.bind(this, obj.title)}>{obj.title}</div>)
                    }
                </div>
            
            </div>
        )
    }

    clickRightTitle(lab){
        //点谁滚动到左侧指定的标签上
        this.myscroll.scrollToElement('#' + lab, 500)
    }

    componentDidMount() {
        //初始化
        this.myscroll = new BScroll('#selectcity_div', {})
    }
}
