// 组件的 动作生成器 文件

import createStore from 'redux'
import reducer from './reducer'

const stort = createStore(reducer)

export default stort