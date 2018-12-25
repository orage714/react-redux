import React,{PureComponent} from "react"
import { connect } from "react-redux"
import { actions } from "./store"
import "./style.scss"

class Detele extends PureComponent{
    componentDidMount(){
        this.props.getinfo(this.props.match.params)
    }
    render(){
        const { title,content}=this.props
        console.log(typeof content)

        return (
            <div className="page-wrapper">
              <h1 className="tit">{title}</h1>
              <div  dangerouslySetInnerHTML={{__html: content}}>
              </div>
             
             {/* {eval(content)} */}
            </div>
        )
    }

}
const mapState=(state)=>({
    title:state.getIn(['detele','title']),
    content:state.getIn(['detele','content'])
})
const mapDispatch=(dispatch)=>({
    getinfo(id){
        dispatch(actions.getInfo(id))
    }
})
export default connect( mapState,mapDispatch)(Detele)