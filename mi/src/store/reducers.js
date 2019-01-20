// 这个文件是我们的 根reducers文件
// 可以使用 redux 模块提供了一个  combineReducers 东西，

import { combineReducers } from 'redux'

// 以下是何津引入的 reducer 文件位置
import HomeReducer from '@/views/hejin/Home/store/reducer.js'

// 以下是卓婷引入的 reducer 文件位置
import ProductReducer from '@/views/zhuoting/Product/store/reducer.js'

// 以下是李钦引入的 reducer 文件位置
import LoginReducer from '@/views/liqin/Login/store/reducer.js'

// 以下是余甜甜引入的 reducer 文件位置
import CarReducer from '@/views/yutiantian/Car/store/reducer.js'

// 以下是周颖引入的 reducer 文件位置
import HeaderReducer from '@/components/Header/store/reducer.js'



export default combineReducers({
  // 以下是何津配置的 reducer 文件位置
  HomeReducer,

  // 以下是卓婷配置的 reducer 文件位置
  ProductReducer,

  // 以下是李钦配置的 reducer 文件位置
  LoginReducer,

  // 以下是余甜甜配置的 reducer 文件位置
  CarReducer,

  // 以下是周颖配置的 reducer 文件位置
  HeaderReducer,
})

