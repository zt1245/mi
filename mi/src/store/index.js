// 这个文件是我们的 根store
import { createStore,applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const store = createStore(reducers,applyMiddleware(thunk));

export default store;
