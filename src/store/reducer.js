import {combineReducers} from "redux-immutable"//引用全局immutable对象，将store里的state变成immutab对象，方便统一获取
import { reducer as HeaderReducer }from '../components/header/store'
import { reducer as HomeReducer }from '../components/home/store'
import { reducer as DeteleReducer }from '../components/detele/store'

const reducer=combineReducers({
   header: HeaderReducer,
   home:HomeReducer,
   detele:DeteleReducer
})
export default reducer;