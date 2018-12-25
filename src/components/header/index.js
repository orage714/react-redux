import React,{Component} from "react"
import { connect } from "react-redux"
import {actions} from "./store"
import{CSSTransition} from "react-transition-group"
import {Link} from "react-router-dom"
import "./style.scss"
class Header extends Component{
   
    componentDidUpdate(){
       }
     
    getInfo=()=>{ 
        const {focused,list,page,totalPage,mouseIn,searchMouseEnter,searchMouseLeave,changeNewList}=this.props;//微调简化代码
        let newList=[]
        if(list.length){
            for(let i=(page-1)*10;i< page * 10;i++){
                newList.push(list[i])
            }

        }
        if(focused || mouseIn){
        return (
            <div className="searchInfo" 
            onMouseEnter={searchMouseEnter}
            onMouseLeave={searchMouseLeave}
            >
                <p className="title mar-b-10">
                    <span>热门搜索</span>
                    <a href="#" onClick={()=>changeNewList(page,totalPage,this.spinIcon)}>
                        <i ref={(icon)=>{this.spinIcon=icon}}className='iconfont spin'>&#xe851;</i>
                        换一批
                    </a>
                </p>
                <ul className="listWrapper">
                    {newList.map((item)=>{return  <li key={item}><a href="#">{item}</a></li>})}
                </ul>
        </div>
        )
        }else{
            return null;
        }
    }
    render(){
        const {focused,changeFocusTrue,changeFocusFalse,list}=this.props
        return (
            <div className="headerWrapper">
                <a  href="/" className="logo"></a>
                <div className="nav">
                    <div className=" navItem left active">首页</div>
                    <div className=" navItem left">下载APP</div>

                   <Link to="/from"> <div  className=" navItem right">登入</div></Link>
                    <div className="navItem right">
                    <i className="iconfont">&#xe636;</i>
                    </div>
                    <CSSTransition
                    timeout={200}
                    in={focused}
                    classNames="slide"
                    >
                        <form className={focused?"focused searchWrapper":"searchWrapper"} >
                            <input className="navSearch" placeholder="搜索" 
                            onFocus={()=>changeFocusTrue(list)}
                            onBlur={changeFocusFalse}
                            />
                            <i className={focused?"iconfont serachIcon serachIconColor":"iconfont serachIcon"}>&#xe614;</i>
                           {this.getInfo()}
                        </form>
                    </CSSTransition>
                </div>
                <div className="addItion">
                <button className="button2 ">
                <i className="iconfont">&#xe615;</i>
                写文章</button>
                <button className="button">注册</button>
                </div>
            </div>
        )
    }

}
//    mappropsToProps 处理数据如何映射到组件的
const mappropsToProps=(state)=>{
    return {
        // focused:state.header.get('focused')
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']).toJS(),
        totalPage:state.getIn(['header','totalPage']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn'])
    }

}
// mapDispathToProps触发的方法
const mapDispathToProps=(dispatch)=>{
    return {
        changeFocusTrue(list){
            if(!list.length)  dispatch(actions.getList())
            dispatch(actions.changeFocusTrue())
            //redux-thunk在store中合并以后,就可以在action里返回回调函数
        },
        changeFocusFalse(){
            dispatch(actions.changeFocusFalse())
        },
        searchMouseEnter(){
            dispatch(actions.searchMouseEnter())
        },
        searchMouseLeave(){
            dispatch(actions.searchMouseLeave())
        },
        changeNewList(page,totalPage,spin){
            let transf=spin.style.transform.replace(/[^0-9]/ig,'')
            if(transf){
                transf=parseInt(transf,10)
            }else{
                transf=0
            }
            spin.style.transform=`rotate(${transf+360}deg)`
            if(page<totalPage){
                dispatch(actions.changeNewList(page+1))    
            }else{
                dispatch(actions.changeNewList(1))  
            }
           
        }
    }
}
//connect链接作用 
export default connect(mappropsToProps,mapDispathToProps)(Header)