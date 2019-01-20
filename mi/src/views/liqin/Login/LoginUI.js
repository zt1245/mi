// 首页product 的UI 组件
import React, { Fragment } from 'react'
import './login.scss'
import mist from '../images/mistore_logo.png'
// import ghs from '../images/ghs.png'
// import Account from './Account.js'
import Ewm from "./Ewm";
import Footer from './Footer/Footer.js'


const LogintUI = (props) => {
  return (
    <Fragment>

      <div className='lq-login'>
        <div className="login-con" >
          {/* 这是登录页面{props.title} */}
          <img src={mist}  alt="" />
        </div>
      </div>
      <div className='login-banner'>
        <div className= 'login-main'></div>

        {/* --------------------banner-end------------------- */}

          <div className='layout'>
            <Ewm {...props}></Ewm>
          </div>
      </div>
      <div className='custom-footer'>
        <Fragment>
            <Footer></Footer>
        </Fragment>
      </div>
    </Fragment>
  )
}


export default LogintUI
