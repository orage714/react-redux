import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"
const defaultState=fromJS({
    title:'',
    content:''
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.GET_INFO:
        return state.merge({
            title:action.title,
            content:action.content
        })
        default :return state

    }
}
// export default (state=defaultState,action)=>{
//     switch(action.type){
//         case actionTypes.GET_HOME_LIST:
//             return state.merge({
//                 topList: fromJS(action.topList),
//                 list: fromJS(action.list),
//                 commendList: fromJS(action.commendList)
//             })
//         case actionTypes.GET_LOAD_MORE:
//             return state.merge({
//                 list: state.get('list').concat(action.list),
//                 loadPage: action.nextPageNPM
//             })
//         case actionTypes.SCROLL_SHOW:
//             return state.set("scrollShow",action.show)
//         default :return state
//     }
// }
