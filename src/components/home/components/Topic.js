import React,{PureComponent} from "react"
import { connect } from "react-redux"
 class Topic extends PureComponent{
     componentDidMount(){
     }

    render(){
        return (
            <div className="list-wrapper">
            {
                this.props.topList.map((item)=>(
                   <a href="#" className="list" key={item.id}> 
                        <img src={item.imgUrl} alt="Image"/>
                        <div className="list-tit">
                            {item.title}
                        </div>
                   </a>
                ))
            }
               
              
                <a href="#">
                更多热门专题>
                </a>
            </div>
        )
    }

}
const mapStateToProps=(state)=>({
    
    topList:state.getIn(['home','topList']).toJS()
})
export default connect(mapStateToProps,null)(Topic)