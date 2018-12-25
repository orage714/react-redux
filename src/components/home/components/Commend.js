import React,{PureComponent} from "react"
import {connect} from "react-redux"
import { stat } from "fs";
class Commend extends PureComponent{
    render(){
        const {list}=this.props
        return (
          
            <div className="commend">
              {
                list.map((item)=>(
                    <a href="javascript:;" key={item.id}>
                    <img src={item.imgUrl} className="img-responsive" alt="Image"/>
               </a>  
                ))
            }
            </div>
        )
    }

}
const mapStateToProps=(state)=>({
    list:state.getIn(['home','commendList']).toJS()
})
export default connect(mapStateToProps,null)(Commend)