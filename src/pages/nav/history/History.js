import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Flex} from 'antd-mobile'


class History extends Component {
    render() {
        return (
            <div>
                {
                    this.props.historyArr.map((obj)=>

                        <Flex style={{marginBottom:'10px'}}>
                            <img alt={obj.name} src={obj.imgs} style={{width:'120px',height:'60xp'}}></img>
                            <div style={{flex:'1',paddingLeft:'10px'}}>
                                <Flex justify="between"> <h3 style={{margin:'0'}}>{obj.name}</h3> <h3 style={{color:'red',margin:'0'}}>￥{obj.price}/平</h3></Flex>
                                <Flex style={{color:'#8a8a8a',fontSize:"1em",margin:'8px 0'}}>{obj.area}  {obj.range}</Flex>
                                <Flex style={{color:'#8a8a8a',fontSize:"1em"}}>{obj.type}  {obj.point}平</Flex>
                            </div>
                        </Flex>
                    )
                }
            </div>
        )
    }
}
export default connect((state) => {
    return {
        historyArr: state.historyArr
    }
})(History)
