import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { actions } from "../store"
import { Link } from "react-router-dom"
class List extends PureComponent{
    render(){
        const {list,page,getLoadMore}=this.props
        return (
            <div>
            <ul >
                {list.map((item) => (
                    <li className="list-item" key={item.id}>
                        <div className="conntent">
                            <Link to={`/detele${item.id}`} className="title">{item.title}</Link>
                            <p className="info">{item.desc} </p>
                        </div>
                        <Link to={`/detele${item.id}`}  className="img-wrapper">
                            <img src={item.imgUrl} className="img-responsive" alt="Image" />
                        </Link>
                        <div>
                            <a href="#">{item.startTitle}</a>
                            <a href="#">
                                <i className="iconfont"></i>{item.email}
                            </a>
                            <span>
                                <i className="iconfont"></i>{item.start}
                            </span>
                        </div>
                    </li>
                ))
            }
            </ul>
            <div onClick={()=>getLoadMore(page)}className="load-more">加载更多》》</div>
            </div>
        )
    }

}
const mapStateToProps=(state)=>({
list:state.getIn(['home',"list"]).toJS(),
page:state.getIn(["home","loadPage"])
})
const mapDispatch=(dispatch)=>({
    getLoadMore(page){
        dispatch(actions.getLoadMore(page))
    }
})
export default connect(mapStateToProps,mapDispatch)(List)