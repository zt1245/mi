import React,{ Component } from 'react'
import './Content.scss'
import slidImg from '../../images/Content/content1.jpg'
import axios from 'axios'

let Swiper = window.Swiper;

class Content extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      totalArr1: {},
      totalArr2: {},
      totalArr3: {},
      totalArr4: {},
      itemList1: [],
      itemList2: [],
      itemList3: [],
      itemList4: [],
      more1:{},
      more2:{},
      more3:{},
      more4:{}
    }

  }

  componentDidMount() {





    axios.get('/json/hejin/Content.json')
    .then((res) => {
      console.log(res.data);
      this.setState({
        totalArr1: res.data[0],
        totalArr2: res.data[1],
        totalArr3: res.data[2],
        totalArr4: res.data[3],
        itemList1: res.data[0].list,
        itemList2: res.data[1].list,
        itemList3: res.data[2].list,
        itemList4: res.data[3].list,
        more1: res.data[0].more,
        more2: res.data[1].more,
        more3: res.data[2].more,
        more4: res.data[3].more,
      })
    })

    var mySwiper1 = new Swiper ('.swiper1', {
      autoplay:false,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect : 'fade',
      fadeEffect: {
        crossFade: true,
      },

      pagination:{
        el: '.swiper-pagination',
        clickable: true,
        clickableClass : 'my-pagination-clickable',
      },
    })
    var mySwiper2 = new Swiper ('.swiper2', {
      autoplay:false,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect : 'fade',
      fadeEffect: {
        crossFade: true,
      },

      pagination:{
        el: '.swiper-pagination',
        clickable: true,
        clickableClass : 'my-pagination-clickable',
      },
    })
    var mySwiper3 = new Swiper ('.swiper3', {
      autoplay:false,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect : 'fade',
      fadeEffect: {
        crossFade: true,
      },

      pagination:{
        el: '.swiper-pagination',
        clickable: true,
        clickableClass : 'my-pagination-clickable',
      },
    })
    var mySwiper4 = new Swiper ('.swiper4', {
      autoplay:false,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect : 'fade',
      fadeEffect: {
        crossFade: true,
      },

      pagination:{
        el: '.swiper-pagination',
        clickable: true,
        clickableClass : 'my-pagination-clickable',
      },
    })
  }

  render() {
    return (
      <div id='hj-content'>
        <div className="box-hd">
          <h2 className='title'>内容</h2>
        </div>
        <div className="box-bd">
          <ul className="content-list">



            <li className='content-item'>
              <h2 className='title'>{this.state.totalArr1.type}</h2>
              <div className="swiper-container swiper1">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>哈利·波特与被诅咒的孩子</a>
                        <p className="desc">
                          <a href="">“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！ </a>
                        </p>
                        <p className='price'>
                          <a href="">29.37元</a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src='http://localhost:3000/json/hejin/Content/content2.png' alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>好吗好的</a>
                        <p className="desc">
                          <a href="">畅销作家大冰2016年新书！讲给你听，好吗好的！ </a>
                        </p>
                        <p className='price'>
                          <a href="">17.99元</a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src="http://localhost:3000/json/hejin/Content/content2.png" alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide" id='last'>
                      <p className="desc">
                        海量好书，享受精品阅读时光<br/>
                        漂亮的中文排版，千万读者选择！
                      </p>
                      <a href="" className='btn-small small'>前往多看阅读</a>
                      <img src='http://localhost:3000/json/hejin/Content/content3.jpg' alt=""/>
                    </div>

                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- 如果需要导航按钮 --> */}
                <div className="swiper-button-prev iconfont icon-zuoyoujiantou-copy-copy">
                  {/* <i className='iconfont '></i> */}
                </div>
                <div className="swiper-button-next iconfont icon-zuoyoujiantou-copy-copy1"></div>
              </div>

            </li>



            <li className='content-item' style={{borderColor:"#83c44e"}}>
              <h2 className='title' style={{color:"#83c44e"}}>MIUI 主题</h2>
              <div className="swiper-container swiper2">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>熊本熊 酷MA萌</a>
                        <p className="desc">
                          <a href="">戳一戳、摸一摸，酷MA萌会在锁屏跟你亲密互动哦。</a>
                        </p>
                        <p className='price'>
                          <a href=""></a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src="http://localhost:3000/json/hejin/Content/content4.jpg" alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>蚁人2</a>
                        <p className="desc">
                          <a href="">小米主题和迪士尼首度合作，打造精品漫威系列主题 </a>
                        </p>
                        <p className='price'>
                          <a href=""></a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src="http://localhost:3000/json/hejin/Content/content5.png" alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>复仇者联盟3-我的英雄</a>
                        <p className="desc">
                          <a href="">28张超级英雄个人专属锁屏及桌面壁纸随你挑！ </a>
                        </p>
                        <p className='price'>
                          <a href="">8.8米币</a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src="http://localhost:3000/json/hejin/Content/content6.png" alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide" id='last'>
                      <p className="desc">
                      众多个性主题、百变锁屏与自由桌面<br/>
                      让你的手机与众不同！
                      </p>
                      <a href="" id='smallminu' className='btn-small small' style={{borderColor:"#83c44e",color:"#83c44e"}}>前往MIUI主题市场</a>
                      <img src="http://localhost:3000/json/hejin/Content/content7.jpg" alt=""/>
                    </div>

                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- 如果需要导航按钮 --> */}
                <div className="swiper-button-prev iconfont icon-zuoyoujiantou-copy-copy">
                  {/* <i className='iconfont '></i> */}
                </div>
                <div className="swiper-button-next iconfont icon-zuoyoujiantou-copy-copy1"></div>
              </div>

            </li>

            <li className='content-item' style={{borderColor:"#e53935"}}>
              <h2 className='title' style={{color:"#e53935"}}>游戏</h2>
              <div className="swiper-container swiper3">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>非人学园</a>
                        <p className="desc">
                          <a href="">脑洞大开的二次元竞技手游 </a>
                        </p>
                        <p className='price'>
                          <a href=""></a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src="http://localhost:3000/json/hejin/Content/content8.png" alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>小米超神</a>
                        <p className="desc">
                          <a href="">实力派，一起团！！ </a>
                        </p>
                        <p className='price'>
                          <a href=""></a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src="http://localhost:3000/json/hejin/Content/content9.png" alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>米柚手游模拟器</a>
                        <p className="desc">
                          <a href="">在电脑上玩遍小米所有手游 </a>
                        </p>
                        <p className='price'>
                          <a href="">免费</a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src="http://localhost:3000/json/hejin/Content/content10.png" alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide" id='last'>
                      <p className="desc">
                      免费下载海量的手机游戏<br/>
                      天天都有现金福利赠送
                      </p>
                      <a href="" id='games' className='btn-small small' style={{borderColor:"#e53935",color:"#e53935"}}>前往小米游戏商店</a>
                      <img src="http://localhost:3000/json/hejin/Content/content11.jpg" alt=""/>
                    </div>

                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- 如果需要导航按钮 --> */}
                <div className="swiper-button-prev iconfont icon-zuoyoujiantou-copy-copy">
                  {/* <i classNameName='iconfont '></i> */}
                </div>
                <div className="swiper-button-next iconfont icon-zuoyoujiantou-copy-copy1"></div>
              </div>

            </li>

            <li className='content-item' style={{borderColor:"#2196f3"}}>
              <h2 className='title' style={{color:"#2196f3"}}>应用</h2>
              <div className="swiper-container swiper4">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>2017金米奖</a>
                        <p className="desc">
                          <a href="">最优秀的应用和游戏 </a>
                        </p>
                        <p className='price'>
                          <a href=""></a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src="http://localhost:3000/json/hejin/Content/content12.png" alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>Forest</a>
                        <p className="desc">
                          <a href="">帮助您专心于生活中每个重要时刻 </a>
                        </p>
                        <p className='price'>
                          <a href="">免费</a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src="http://localhost:3000/json/hejin/Content/content13.png" alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide">
                      <h4 className='name'>
                        <a href="" className='shuming'>Forest</a>
                        <p className="desc">
                          <a href="">小米出品 必属精品 </a>
                        </p>
                        <p className='price'>
                          <a href="">免费</a>
                        </p>
                        <div className="figure">
                          <a href="">
                            <img src="http://localhost:3000/json/hejin/Content/content14.png" alt=""/>
                          </a>
                        </div>
                      </h4>
                    </div>
                    <div className="swiper-slide" id='last'>
                      <p className="desc">
                      帮助小米手机和其他安卓手机用户<br/>
                      发现好用的安卓应用
                      </p>
                      <a href="" id='apply' className='btn-small small' style={{borderColor:"#2196f3",color:"#2196f3"}}>前往小米应用商店</a>
                      <img src="http://localhost:3000/json/hejin/Content/content15.jpg" alt=""/>
                    </div>

                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- 如果需要导航按钮 --> */}
                <div className="swiper-button-prev iconfont icon-zuoyoujiantou-copy-copy">
                  {/* <i classNameName='iconfont '></i> */}
                </div>
                <div className="swiper-button-next iconfont icon-zuoyoujiantou-copy-copy1"></div>
              </div>

            </li>

          </ul>

        </div>
      </div>
    )
  }
}

export default Content

