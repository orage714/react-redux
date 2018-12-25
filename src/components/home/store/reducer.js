
import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"
const defaultState=fromJS({
  topList:[],
  list:[],
    commendList:[ ],
    writeList:[
        {
            id:1,
            url:"//upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            name:"徐林Grance",
            info:"写了525.8k字 · 4.5k喜欢"
        },
        {
            id:2,
            url:"//upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            name:"徐林Grance",
            info:"写了525.8k字 · 4.5k喜欢"
        },
        {
            id:3,
            url:"//upload.jianshu.io/users/upload_avatars/5545154/1a3d5ed6-9ad1-44b3-9457-3e6a29dd1b71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            name:"徐林Grance",
            info:"写了525.8k字 · 4.5k喜欢"
        }
    ],
    loadPage:1,
    scrollShow:false

})
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.GET_HOME_LIST:
            return state.merge({
                topList: fromJS(action.topList),
                list: fromJS(action.list),
                commendList: fromJS(action.commendList)
            })
        case actionTypes.GET_LOAD_MORE:
            return state.merge({
                list: state.get('list').concat(action.list),
                loadPage: action.nextPageNPM
            })
        case actionTypes.SCROLL_SHOW:
            return state.set("scrollShow",action.show)
        default :return state
    }
}
