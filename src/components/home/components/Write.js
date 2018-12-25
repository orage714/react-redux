import React,{PureComponent} from "react"
import {connect } from "react-redux" 
class Write extends PureComponent{
    render(){
        const {list}=this.props
        return (
            <div className="write">
                <p className="title">
                    推荐作者：
                    <a href="#" >
                        <i ref={(icon)=>{this.spinIcon=icon}}className='iconfont spin'>&#xe851;</i>
                        换一批
                    </a>
                </p>
                <ul>
                    {
                        list.map((item)=>(
                            <li className="item" key={item.id}>
                                <a href="javascript:;" className="img-wrapper">
                                    <img src={item.url} className="img-responsive" alt="Image" />
                                </a>
                                <a href="javascript:;" className="add-start">+关注</a>
                                <a href="javascript:;" className="name">{item.name}</a>
                                <p> {item.info}</p>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        )
    }

}
const mapStateToProps=(state)=>({
list:state.getIn(['home','writeList']).toJS()
})
export default connect(mapStateToProps,null)(Write)