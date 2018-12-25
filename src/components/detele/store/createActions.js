
import axios from "axios"
import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable" 
const getin=(title,content)=>({
    type:actionTypes.GET_INFO,
    title,
    content
})
export const getInfo=(id)=>{
    return  (dispatch)=>{
        axios.get(`/api/detail.json?id=${id}`).then((res)=>{
            let result=res.data.data
            dispatch(getin(result.title,result.content))
        })
    }
}
// export const getHomeList=()=>{
//     return (dispatch) => {
//         axios.get("/api/home.json").then((resolve)=>{
//             const result =resolve.data.data
//             const action={
//                 type:actionType.GET_HOME_LIST,
//                 list:result.articleList,
//                 commendList:result.recommendList,
//                 topList:result.topicList,
//             }
//             dispatch(action)
//         }).catch("请求失败")
//     }
    
// }
// export const getLoadMore=(page)=>{
//     return(dispatch)=>{
//         axios.get("/api/homeList.json?page"+page).then((res)=>{
//            const action={
//                type:actionType.GET_LOAD_MORE,
//                list:res.data.data,
//               nextPage:page+1
//            }
//            dispatch(action)
//         })

//     }
// }

// export const scrollTop=(show)=>({
//     type:actionType. SCROLL_SHOW,
//     show
// })