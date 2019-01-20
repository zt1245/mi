import React,{ Component } from 'react';
import './Channel.scss'

class Channel extends Component {
  render() {
    return (
      <ul className="home-channel-list">
        <li className='exposure'>
          <a href="">
            <i className='iconfont icon-shouji'></i>
            选购手机
          </a>
        </li>
        <li className="shu"></li>
        <li className='exposure'>
          <a href="">
            <i className='iconfont icon-tuangou'></i>
            企业团购
          </a>
        </li>
        <li className="shu"></li>
        <li className='exposure'>
          <a href="">
            <i className='iconfont icon-fma'></i>
            F码通道
          </a>
        </li>
        <li className='exposure noBottom'>
          <a href="">
            <i className='iconfont icon-dianhuaqia'></i>
            米粉卡
          </a>
        </li>
        <li className="shu"></li>
        <li className='exposure noBottom'>
          <a href="">
            <i className='iconfont icon-yijiuhuanxin'></i>
            以旧换新
          </a>
        </li>
        <li className="shu"></li>
        <li className='exposure noBottom'>
          <a href="">
            <i className='iconfont icon-dianhuaqia'></i>
            话费充值
          </a>
        </li>
      </ul>
    )
  }
}

export default Channel;
