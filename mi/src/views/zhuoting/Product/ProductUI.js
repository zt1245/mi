// 首页product 的UI 组件
import React from 'react';
import Header from '@/components/Header/Header.js'
import Footer from '@/components/Footer/Footer.js'
import './product.scss'
import Pview from "./Pview.js";
// import Pinfo from "./Pinfo.js";
import PinfoU from "./PinfoU.js";

const ProductUI = (props) => {
  return (
    <div className='zt-product'>
      <Header></Header>
      <div className="product-con">
        <div className="product-box">
          <div className="navbar container">
            <h2>{ props.phone_list.phone_name }</h2>
            <div className="right">
              <ul>
                <li>概述<span>|</span></li>
                <li>参数<span>|</span></li>
                <li>图集<span>|</span></li>
                <li>F码通道<span>|</span></li>
                <li>用户评价</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="buy_box">
          {/* 未登录提示 */}
          <div className={props.isShow ? "login-notice" : "login-notice disappear" }>
            <div className="container notice">
              为方便您购买，请提前登录
              <a href="#/login" className="login-now">立即登录</a>
              <i className="iconfont icon-cuo" onClick={ props.disappear }></i>
            </div>
          </div>
          <div className="pro-main container">
            {/* 放大镜 */}
            <Pview { ...props }></Pview>
            <PinfoU {...props}></PinfoU>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}


export default ProductUI
