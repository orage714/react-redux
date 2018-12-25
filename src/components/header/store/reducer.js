
import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"
const defaultState=fromJS({
    focused:false,
    list:[],
    page:1,
    totalPage:1,
    mouseIn:false
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGEFOCUSFLASE :
            return state.set("focused",false)
        case actionTypes.CHANGEFOCUSTRUE:
            return state.set("focused",true)
        case actionTypes.CHANGELIST :
             return state.merge({
                list:action.data,
                totalPage:action.totalPage
             })
        case actionTypes.SEARCH_MOUSE_ENTER:
             return state.set('mouseIn',true)
        case actionTypes.SEARCH_MOUSE_LEAVE:
             return state.set('mouseIn',false)
        case actionTypes.CHANGE_NEW_LIST:
             return state.set('page',action.page)

        default :return state
    }
}