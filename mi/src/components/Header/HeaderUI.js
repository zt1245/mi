import React,{Component } from 'react';
import {Route,Switch,NavLink} from 'react-router-dom'
import './header.scss'
import Headermi from './Headermi/HeadermiUI'
import '../../styles/base.scss'


class HeaderUI extends Component {
  constructor(props){
    super(props);
    this.state={
      zyImg:[
        require('../../views/zhouying/images/zy-appo.png'),
      ],
      zyshoplist:[
        require('../../views/zhouying/images/zy-shoplist1.png'),
      ],
      zyhidden:'',
      username: '',
      listArr: [],
      totalNum: 0,
      totalMoney: 0
    }
    this.exitLogin = this.exitLogin.bind(this);
    this.deleteGoods = this.deleteGoods.bind(this);
  }

  deleteGoods(index) {
    // 删除商品操作
    let username = localStorage.getItem('username');
    let GoodsInfo = JSON.parse(localStorage.getItem(username+'GoodsInfo'));
    let totalNum = 0;
    let totalMoney = 0;
    if(GoodsInfo&&GoodsInfo.length>0){
      GoodsInfo.splice(index,1);
      for(var i=0;i<GoodsInfo.length;i++){
        if(GoodsInfo.length<=0){
          totalNum=0;
          totalMoney=0;
        }else{
          totalNum+=Number(GoodsInfo[i].num);
          totalMoney += Number(GoodsInfo[i].singlePrice*GoodsInfo[i].num);
        }
    }}
    this.setState({
      listArr: GoodsInfo,
      totalMoney,
      totalNum
    })
    this.props.totalNumGoodsInfo(totalNum);
    localStorage.setItem(username+'GoodsInfo',JSON.stringify(GoodsInfo));
  }

  exitLogin() {
    localStorage.setItem("username",'');
    this.setState({
      username: ''
    })
  }

  initGoods() {
    let username = localStorage.getItem("username");
    // console.log(username);
    if(username){
      this.setState({
        username
      })
    }
    // 从localStage拿到的购物信息
    let newNum = 0;
    let NewTotalMoney =0 ;
    let list = JSON.parse(localStorage.getItem(username+'GoodsInfo'));
    if(list){
    console.log(list,this.state.username);
    for(var i=0;i<list.length;i++){
      newNum += parseInt(list[i].num);
      NewTotalMoney += Number(list[i].singlePrice*list[i].num);
    }
    this.setState({
      totalNum: newNum,
      totalMoney: NewTotalMoney,
      listArr: list
    })
    this.props.totalNumGoodsInfo(newNum);
  }



  }

  componentDidMount(){
    this.initGoods();

  }

  render (){
    return (
      <div className='zy-header'>

        <div className="zy-topbar">
          <div className="zy-container">
            <div className="zy-nav">
              <ul>
                <li>
                  <a href="#" className="zy-navone">小米商城</a>
                  <span>|</span>
                  <a href="#">MIUI</a>
                  <span>|</span>
                  <a href="#">loT</a>
                  <span>|</span>
                  <a href="#">云服务</a>
                  <span>|</span>
                  <a href="#">金融</a>
                  <span>|</span>
                  <a href="#">有品</a>
                  <span>|</span>
                  <a href="#">小爱开放平台</a>
                  <span>|</span>
                  <a href="#">政企服务</a>
                  <span>|</span>
                  <a href="#">
                  下载app
                  <i className="zy-appimg">
                    <img src={this.state.zyImg[0]} alt="小米商城"/>
                    <em className="zy-arrow"></em>
                    <em className="zy-miapp">小米商城APP</em>
                  </i>
                  </a>
                  <span>|</span>
                  <a href="#">Select Region</a>
                </li>
              </ul>
            </div>
            {/* 购物车 */}
            <div className="zy-cart">
              <NavLink to="/car" className="zy-mini">
                <i className="iconfont icon-gouwuche"></i>
                购物车
                <span> ( {this.state.username?this.state.totalNum:0}
                  &nbsp;) </span>
              </NavLink>
              <div className="zy-menu">
                  <div className="zy-loading" style={{display: this.state.username.trim()?(this.state.listArr.length<=0)?"block":"none":"block"}}>
                    购物车中还没有商品，赶紧选购吧！
                    <div className="zy-loader">

                    </div>
                  </div>
                  {/* 登录后购物车商品 */}
                  <div className="zy-showshop" style={{display: this.state.username.trim()&&this.state.listArr.length>0?"block":"none"}}>
                    <ul className="zy-shoplist">
                    {
                      this.state.listArr.map((item,index) => {
                        return (
                          <li key={index}>
                            <img className="zy-shoplistImg" src={item.pic}/>
                            <a href="#" className="zy-shopName">{item.shopName}</a>
                            <span>
                              <i>{item.singlePrice}元</i>
                              <i>x</i>
                              <i>{item.num}</i>
                            </span>
                            <a className="zy-delete" onClick={
                              () => {
                                this.deleteGoods(index)
                              }
                            }>x</a>
                          </li>
                        )
                      })
                    }
                    </ul>
                    <div className="zy-zong">
                    <div className="zy-shopinfo">
                      <span className="zy-num">
                        共<i>{ this.state.totalNum }</i>件商品
                      </span>
                      <span className="zy-dan">{this.state.totalMoney}元</span>
                    </div>
                    <div  className="zy-price">
                      <NavLink to="/car" className="zy-pr">去购物车结算</NavLink>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
            {/* 登录注册 */}

            <div className="zy-info" style={{display:this.state.username ? 'none' : 'block' }}>
              <ul className="zy-user">
                <li>
                  <a href="#/login">登录</a>
                  <span>|</span>
                </li>
                <li>
                  <a href="#/register" className="zy-register">注册</a>
                  <span>|</span>
                </li>
                <li>
                  <a href="#">消息通知</a>
                </li>
              </ul>
            </div>
            <div className="zy-islogin" style={{display:this.state.username ? 'block' : 'none'}}>
                <ul className="zy-loginIfor">
                  <li className="zy-userlogin">
                    <a href="#" className="zy-loginName">
                      {this.state.username}
                      <i className="iconfont icon-xiajiantou"></i>
                    </a>
                    <ol className="zy-loginmore">
                      <li>
                        <a href="#">个人中心</a>
                      </li>
                      <li>
                        <a href="#">评价晒单</a>
                      </li>
                      <li>
                        <a href="#">我的喜欢</a>
                      </li>
                      <li>
                        <a href="#">小米账户</a>
                      </li>
                      <li>
                        <a href="#" onClick={this.exitLogin}>退出登录</a>
                      </li>
                    </ol>
                  </li>
                  <li className="zy-solid">
                    |
                  </li>
                  <li className="zy-message">
                    <a href="#">消息通知</a>
                  </li>
                  <li className="zy-solid">
                    |
                  </li>
                  <li className="zy-order">
                    <a href="#">我的订单</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        {/* 头部第二部分 */}
        <Headermi {...this.props}></Headermi>
      </div>
    )
  }


}


export default HeaderUI
