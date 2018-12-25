import React,{Component} from "react"
import {connect} from "react-redux"
import {actions} from "./store"
import Commend from "./components/Commend"
import List from "./components/List"
import Topic from "./components/Topic"
import Write from "./components/Write"
import "./style.scss"
class Home extends Component{
    componentDidMount(){
        this.props.getHomeList()
        window.addEventListener("scroll",this.props.scrollTop)
       this.getScroll()
    }
    componentWillUnmount(){//避免影响其他组件  当组件销毁时把事件撤销
        window.removeEventListener("scroll",this.props.scrollTop)
    }
    getScroll=()=>{
        // console.log(this.refs['test'].scrollTop)
    }
    render(){
        // console.log(this.props.scrollShow)
        return (
            <div className="page-wrapper">
                <div className="left-wrapper">
                    <div className="banner-wrapper">
                        <img src="//upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" className="img-responsive" alt="Image"/>
                    </div>
                    <Topic/>
                    <div className="hr"></div>
                    <List/>
                </div>
                <div className="right-wrapper">
                    <Commend/>
                    <Write/>
                </div>
                <div className="test" ref="test"></div>
                  {this.props.scrollShow? <div className="function-button"  onClick={()=>{window.scrollTo(0,0)}} ></div>:null}
             </div>
        )
    }
}

const mapState=(state)=>({
    scrollShow:state.getIn(['home','scrollShow'])
})
const mapDispatch=(dispatch)=>({
getHomeList(){
  
    dispatch(actions.getHomeList())
},
scrollTop(){
    if(document.documentElement.scrollTop>100){
        dispatch(actions.scrollTop(true))
    }else{
        dispatch(actions.scrollTop(false))
    }
}
})
export default connect(mapState,mapDispatch)(Home)