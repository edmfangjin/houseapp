import React, { Component } from 'react'
import{ Flex ,Carousel , WingBlank} from 'antd-mobile'

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            data: [require('../../../assets/images/1.jpg'), require('../../../assets/images/2.jpg'), require('../../../assets/images/3.jpg'),require('../../../assets/images/4.jpg'),require('../../../assets/images/5.jpg'),require('../../../assets/images/6.jpg'),require('../../../assets/images/7.jpg'),require('../../../assets/images/8.jpg'),require('../../../assets/images/9.jpg'),require('../../../assets/images/10.jpg')],
         
            menu:[
                {title:'新房',icon:require('../../../assets/images/icon-1.png')},
                {title:'二手房',icon:require('../../../assets/images/icon-2.png')},
                {title:'租房',icon:require('../../../assets/images/icon-3.png')},
                {title:'商铺写字楼',icon:require('../../../assets/images/icon-4.png')},
                {title:'卖房',icon:require('../../../assets/images/icon-5.png')},
                {title:'海外房产',icon:require('../../../assets/images/icon-6.png')},
                {title:'小区房价',icon:require('../../../assets/images/icon-7.png')},
                {title:'问答',icon:require('../../../assets/images/icon-1.png')}
            ],
            wiki:[
                {title:'贷款',icon:require('../../../assets/images/贷款.png')},
                {title:'房贷计算',icon:require('../../../assets/images/计算.png')},
                {title:'知识',icon:require('../../../assets/images/知识库.png')},
                {title:'扫一扫',icon:require('../../../assets/images/扫一扫.png')},
            ],
            houseList:[
                {
                name: "美的云溪郡",
                area: "仁寿县",
                type: "4室2厅",
                point: "117",
                price: "9000",
                range: "仁寿大道",
                imgs: require('../../../assets/images/1.jpg'),
                id: "1"
                },
                {
                name: "恒大未来城",
                area: "温江区",
                type: "3室1厅",
                point: "115",
                price: "12000",
                range: "光华新城",
                imgs: require('../../../assets/images/2.jpg'),
                id: "2"
                },
                {
                name: "蓝光雍锦丽府",
                area: "高新区",
                type: "5室2厅",
                point: "176",
                price: "19800",
                range: "桐梓林",
                imgs: require('../../../assets/images/3.jpg'),
                id: "3"
                },
                {
                name: "炎华置信上林开府",
                area: "温江区",
                type: "3室1厅",
                point: "96",
                price: "10500",
                range: "云溪路",
                imgs: require('../../../assets/images/4.jpg'),
                id: "4"
                },
                {
                name: "中国铁建西派国樾",
                area: "天府新区",
                type: "4室2厅",
                point: "168",
                price: "19400",
                range: "华府大道",
                imgs: require('../../../assets/images/5.jpg'),
                id: "5"
                },
                {
                name: "保利天空之城",
                area: "天府新区",
                type: "4室1厅",
                point: "140",
                price: "15000",
                range: "南延线",
                imgs: require('../../../assets/images/6.jpg'),
                id: "6"
                },
                {
                name: "保利天玺",
                area: "金牛区",
                type: "3室1厅",
                point: "119",
                price: "13833",
                range: "欢乐谷",
                imgs: require('../../../assets/images/7.jpg'),
                id: "7"
                },
                {
                name: "武侯金茂府",
                area: "武侯区",
                type: "3室1厅",
                point: "195",
                price: "28600",
                range: "武侯新城",
                imgs: require('../../../assets/images/8.jpg'),
                id: "8"
                },
                {
                name: "蓝润城",
                area: "双流区",
                type: "4室1厅",
                point: "188",
                price: "11800",
                range: "体育中心",
                imgs: require('../../../assets/images/9.jpg'),
                id: "9"
                },
                {
                name: "左岸名都",
                area: "龙泉驿区",
                type: "2室1厅",
                point: "78",
                price: "8000",
                range: "西江大道",
                imgs: require('../../../assets/images/10.jpg'),
                id: "10"
                }
                ],
                city:'定位中'
            
        }
    }

    render() {
        return (
            <Flex direction='column'>
            <Flex style={{backgroundColor:'#3072F3',color:'#FFF',height:'40px',width:'100%',paddingLeft:'15px',paddingRight:'15px'}} justify="between">
                <span onClick={ ()=>this.props.h.push('/city')}>{this.state.city}▼</span>
                <Flex style={{backgroundColor:'#fff',borderRadius:'15px',width:'70%',height:'70%'}} onClick={()=>this.props.h.push('./search')}>

                    <img src={require('../../../assets/images/搜索.png')} width="30px" style={{marginLeft:'5px'}} alt="icon-search"/>
                    <div style={{marginLeft:'10px',color:'#949494'}}>
                    挑好房，上贝壳房产APP
                    </div>

                </Flex>

                <img src={require('../../../assets/images/地图.png')} width="30px" alt="icon-map" onClick={()=>this.props.h.push('./map')}/>
            </Flex>
            <Carousel
          autoplay
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: '200px' }}
            >
              <img
                src={val}
                alt="Carousel-img"
                style={{ width: '100%', verticalAlign: 'top' ,height:'200px'}}

              />
            </a>
          ))}
        </Carousel>
                <Flex style={{width:'100%',paddingTop:'10px',backgroundColor:'#fff',paddingBottom:'10px'}} justify='around' wrap='wrap' >
                    {
                        this.state.menu.map(obj=>
                            <div style={{width:'25%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <img src={obj.icon} style={{width:'50%',height:'50%'}} alt="icon-menu"></img>
                                <div style={{marginTop:'8px',marginBottom:'8px',color:'#8a8a8a'}}>{obj.title}</div>
                            </div>
                            )
                    }
                </Flex>

                <div style={{width:'100%',backgroundColor:'#fff',marginTop:'10px'}}>
                    <Flex justify='start' style={{paddingLeft:'20px'}}>
                        <h3 style={{color:'#3072F3',marginRight:'10px'}}>房产全百科</h3>
                        <span style={{color:'#8a8a8a',fontSize:'12px'}}>专业的买房攻略</span>
                    </Flex>
                    <Flex>
                        {this.state.wiki.map(obj=>
                            <Flex style={{width:'25%'}} justify='center' direction='column'>
                                <img src={obj.icon} style={{width:"50%"}} alt="icon-wiki"></img>
                                <div style={{marginTop:'8px',marginBottom:'8px'}}>{obj.title}</div>
                            </Flex>
                            )}
                    </Flex>
                </div>

                            <div style={{width:"100%",padding:'0 1em',backgroundColor:'#fff',marginTop:'10px'}}>
              
                    <p>猜你喜欢</p>
                    
                    {this.state.houseList.map(obj=>
                        <Flex style={{marginBottom:'10px'}}>
                            <img alt={obj.name} src={obj.imgs} style={{width:'120px',height:'60xp'}}></img>
                            <div style={{flex:'1',paddingLeft:'10px'}}>
                                <Flex justify="between"> <h3 style={{margin:'0'}}>{obj.name}</h3> <h3 style={{color:'red',margin:'0'}}>￥{obj.price}/平</h3></Flex>
                                <Flex style={{color:'#8a8a8a',fontSize:"1em",margin:'8px 0'}}>{obj.area}  {obj.range}</Flex>
                                <Flex style={{color:'#8a8a8a',fontSize:"1em"}}>{obj.type}  {obj.point}平</Flex>
                            </div>
                        </Flex>
                        )}
               </div>
   
            </Flex>
        )
    }
    componentDidMount(){
        let _this = this
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    _this.setState({
                        city:cityinfo
                    })
                    //地图显示当前城市
                    // map.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
            }
        });
    }
}
