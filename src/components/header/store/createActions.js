import * as actionTypes from "./actionTypes"
import axios   from "axios"
import { fromJS } from "immutable";
const changList=(data)=>({
    type:actionTypes.CHANGELIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const changeFocusTrue=()=>{
    return {
        type:actionTypes.CHANGEFOCUSTRUE
    }
}
export const changeFocusFalse=()=>{
    return {
        type:actionTypes.CHANGEFOCUSFLASE
    }
}
export const getList=()=>{
    return (dispatch)=>{     
        axios.get("api/headerList.json").then((resolve)=>{
            dispatch(changList(resolve.data.data))
        }).catch((reject)=>{
            // console.log(reject)
        })
    }
}
export const searchMouseEnter=()=>{
    return {
        type:actionTypes.SEARCH_MOUSE_ENTER
    }
}
export const searchMouseLeave=()=>{
    return {
        type:actionTypes.SEARCH_MOUSE_LEAVE
    }
}
export const changeNewList=(page)=>{
    return {
        type:actionTypes.CHANGE_NEW_LIST,
        page
    }
}
