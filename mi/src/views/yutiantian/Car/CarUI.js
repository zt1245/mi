// 首页Car 的UI 组件
import React,{Component} from 'react';
import { NavLink } from 'react-router-dom'
import CarNologin from './components/car-noLogin'
import CarNoshop from './components/car-noShop'
import CarIsshop from './components/car-isShops'
import Footer from '@/components/Footer/Footer.js'
import './Car.scss'


class CartUI extends Component {
  constructor(props) {
    super(props);
    //传入数据
    this.state = {
      isLogin: false,
      user: '',
      isShow:false,
      //模拟数据
      localGoods: []
    }
  }

  render() {
    var username = localStorage.getItem("username");
    var local = localStorage.getItem(username + 'GoodsInfo');
    var html = [];
    if (username){
      // 登陆了
      if(local&&local !== '[]'){
        // 有购物商品信息
        // var arr = JSON.parse(local);
        html.push(<CarIsshop key='CarIsshop'
          localGoods={this.state.localGoods}
          userName={this.state.user}
        >
        </CarIsshop>)
      }else {
        // 没有购物商品信息
        html.push(<CarNoshop key='CarNoshop'></CarNoshop>)
      }
    }else {
      //用户名不存在，即没有登录
      html.push(<CarNologin key='CarNologin'></CarNologin>)
    }
    return (
      <div className='ytt-product'>
        <div className='car-all'>
          <div className="car-con">
            {/* 头部 */}
            <div className="car-header container">
              <div className="car-flex">
                <div className="car-backHome">
                  <NavLink to="/home" className="car-home">
                    小米官网
                  </NavLink>
                </div>
                <div className="car-text">
                  <h2 className="car-h2">我的购物车</h2>
                  <span id='car-Textspan'
                    style={{ display: this.state.localGoods.length >0 && this.state.user  ? "block" : "none"}}>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
                </div>
              </div>
              <div className="car-oparation">
                <NavLink to="/login" className="car-login link"
                  style={{ display: this.state.user? "none" : "inline-block"}}>登录
                </NavLink>
                <span className="car-userName"
                  style={{ display: this.state.user ? "inline-block" : "none" }}>
                  <a href="#" className="car-user">
                    <span className="car-uspan" >{this.state.user}</span>
                    <i className="icon-xiajiantou iconfont"></i>
                  </a>
                  <ul className="carUlList" className='carUlList'>
                      <li>
                        <a href="#" target="_blank">个人中心</a>
                      </li>
                      <li>
                        <a href="#" target="_blank">评价晒单</a>
                      </li>
                      <li>
                        <a href="#" target="_blank">我的喜欢</a>
                      </li>
                      <li>
                        <a href="#" target="_blank">小米账户</a>
                      </li>
                      <li>
                        <a onClick={this.props.logout} target="_blank">退出登录</a>
                      </li>
                    </ul>
                </span>

                <span>|</span>
                <NavLink to="/register" className="car-register link"
                  style={{ display: this.state.user ? "none" : "inline-block" }}>注册
                </NavLink>
                <NavLink to="/login" className="car-register link"
                  style={{ display: this.state.user ? "inline-block" : "none" }}>我的订单
                </NavLink>
              </div>
            </div>
          </div>
          {/* 中间部分渲染组件 */}
           {html}

        </div>
        <Footer></Footer>
      </div>
    )
  }

  componentDidMount() {
    // console.log(this.props.username)
    let username = localStorage.getItem("username");
    this.setState({
      user: username
    })
  }
}

export default CartUI;
