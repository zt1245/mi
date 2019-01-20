import React, { Component,Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/base.scss'
import store from './store/index'
import { Provider } from 'react-redux'

// 何津引入的路由组件位置
import Home from './views/hejin/Home/Home.js'


// 卓婷引入的路由组件位置
import Product from './views/zhuoting/Product/Product'

// 周颖引入的路由组件位置
import HotProduct from './views/hejin/Home/HotProduct/HotProduct.js'

// 李钦引入的路由组件位置
import Login from './views/liqin/Login/Login'
import Register from './views/liqin/register/Register'
import Site from './views/liqin/Site/Site'

// 余甜甜引入的路由组件位置
import Car from './views/yutiantian/Car/Car'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>

              {/* 以下是何津路由设置位置 */}
              <Route path='/home' component={Home}></Route>
              <Route path='/hotProduct' component={HotProduct}></Route>

              {/* 以下是卓婷路由设置位置 */}
              <Route path='/product' component={Product}></Route>

              {/* 以下是李钦路由设置位置 */}
              <Route path='/login' component={Login}></Route>
              <Route path='/Register' component={Register}></Route>
              {/* <Route path='/HomeRight' component={HomeRight}></Route> */}
              <Route path='/Site' component={Site}></Route>

              {/* 以下是余甜甜路由设置位置 */}
              <Route path='/car' component={Car}></Route>


              {/* {以下是默认路由位置，大家无需更改} */}
              <Route path='' component={Home}></Route>
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
