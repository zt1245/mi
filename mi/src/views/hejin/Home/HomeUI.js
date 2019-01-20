// 首页home 的UI 组件

import React from 'react';
import Header from '@/components/Header/Header.js'
import Footer from '@/components/Footer/Footer.js'
import './home.scss'
import Slide from './Slide/Slide'
import Category from './Category/Category'
import Channel from './Channel/Channel'
import Promo from './Promo/Promo'
import FlashPurchase from './FlashPurchase/FlashPurchase.js'
import Phone from './Phone/Phone'
import Chaoyue from '../images/barBanner/chaoyue.jpg'
import Homeelec from './Homeelec/Homeelec'
import Recommend from './Recommend/Recommend'
import HomeRight from '../../../components/HomeRight/HomeRight.js'
import Content from './Content/Content'
import HotProduct from './HotProduct/HotProduct'

const HomeUI = (props) => {
    return (
      <div className='hj-home'>
        <Header></Header>
        <div className="hj-index conpainer">
          {/* 轮播开始 */}
          <div className="slide">
              <Slide></Slide>
              <Category list={props.list}></Category>
            </div>
          {/* 选购手机开始 */}
          <div className="home-hero-sub">
              <div className="span4">
                <Channel></Channel>
              </div>
              <div className="span16">
                <Promo promo={props.promo}></Promo>
              </div>
            </div>

          {/* 小米闪购开始 */}
          <FlashPurchase flash={props.flash}></FlashPurchase>
         </div>
        {/* home-main开始 */}
        <div className="home-main">
          <div className="conpainer">
            <Phone phone={props.Phone} {...props}></Phone>
            {/* 超越所见 */}
            <div className="home-banner-box">
              <a href=""><img src={Chaoyue} alt=""/></a>
            </div>
            {/* 家电开始 */}
            <Homeelec></Homeelec>
            {/* 为你推荐开始 */}
            <Recommend></Recommend>
            {/* 热销产品开始 */}
            <HotProduct></HotProduct>
            {/* 内容开始 */}
            <Content></Content>
          </div>
        </div>
        <Footer></Footer>
        <HomeRight {...props}></HomeRight>
      </div>
    )
}


export default HomeUI
