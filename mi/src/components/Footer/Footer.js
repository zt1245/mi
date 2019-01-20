import React,{ Component,Fragment } from 'react';
import './footer.scss'
import '../../styles/base.scss'

class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
      zyService:[
        {
          name:'预约维修服务',
          icon:'icon-editor2'
        },
        {
          name:'7天无理由退货',
          icon:'icon-7'
        },
        {
          name:'15天免费换货',
          icon:'icon-15'
        },
        {
          name:'满150包邮',
          icon:'icon-liwuhuodong'
        },
        {
          name:'520余家售后网点',
          icon:'icon-locate-02'
        }
      ],
      zyAbout:[
        {
          bigname:'帮助中心',
          smallname:[
            {
              name:'账户管理'
            },
            {
              name:'购物指南'
            },
            {
              name:'订单操作'
            },

          ]
        },
        {
          bigname:'服务支持',
          smallname:[
            {
              name:'售后政策'
            },
            {
              name:'自助服务'
            },
            {
              name:'相关下载'
            },

          ]
        },
        {
          bigname:'线下门店',
          smallname:[
            {
              name:'小米之家'
            },
            {
              name:'服务站点'
            },
            {
              name:'授权体验店'
            },

          ]
        },
        {
          bigname:'关于小米',
          smallname:[
            {
              name:'了解小米'
            },
            {
              name:'加入小米'
            },
            {
              name:'投资者关系'
            },

          ]
        },
        {
          bigname:'关注我们',
          smallname:[
            {
              name:'新浪微博'
            },
            {
              name:'官方微信'
            },
            {
              name:'联系我们'
            },

          ]
        },
        {
          bigname:'特色服务',
          smallname:[
            {
              name:'F码通道'
            },
            {
              name:'礼物码'
            },
            {
              name:'防伪查询'
            },

          ]
        },
      ],
      zyLogoIr:[
        require('../../views/zhouying/images/zy-logomi.png'),
      ],
      zySites:[
        {
          sit:'小米商城',
        },
        {
          sit:'MIUI',
        },
        {
          sit:'米家',
        },
        {
          sit:'米聊',
        },
        {
          sit:'多看',
        },
        {
          sit:'游戏',
        },
        {
          sit:'路由器',
        },
        {
          sit:'米粉卡',
        },
        {
          sit:'政企服务',
        },
        {
          sit:'隐私政策',
        },
        {
          sit:'问题反馈',
        },
        {
          sit:'廉正举报',
        },
        {
          sit:'Select Region',
        },
      ],
      zyTar:[
        {
          tar:'京ICP备10046444号'
        },
        {
          tar:'京公网安备11010802020134号 '
        },
        {
          tar:'京网文[2017]1530-131号'
        },
        {
          tar:'（京）网械平台备字（2018）第00005号'
        },
        {
          tar:'互联网药品信息服务资格证 (京) -非经营性-2014-0090'
        },
        {
          tar:'营业执照'
        },
        {
          tar:'医疗器械公告'
        },

      ],
      zyFooterImg:[
        require('../../views/zhouying/images/zy-truste.png'),
        require('../../views/zhouying/images/zy-xing.png'),
        require('../../views/zhouying/images/zy-yong.png'),
        require('../../views/zhouying/images/zy-wang.png'),
        require('../../views/zhouying/images/zy-xiao.png'),

      ],
    }
  }
  render () {
    return (
      <div className='zy-footer'>
        <div className="zy-site">
          <div className="zy-siteTop">
            <div className="container">
              <ul className="zy-service">
                {
                  this.state.zyService.map((item,index) => {
                    return (
                      <li className="zy-serviceLi" key={index}>
                        <a href="#" className="zy-a">
                          <i className={`iconfont zy-icon ${item.icon}`}></i>
                          {item.name}
                        </a>
                      </li>
                    );
                  })
                }

              </ul>
            </div>
          </div>
          <div className="zy-siteBottom">
            <div className="zy-container">
              <div className="zy-left">
                {
                  this.state.zyAbout.map((item,index) =>{
                    return (
                      <dl
                        key={index}
                        className="zy-dl">
                        <dt className="zy-dt">{item.bigname}</dt>

                        {
                          item.smallname.map((items,index) =>{
                            return (
                              <dd
                                key={index}
                                className="zy-dd">
                                <a href="#" className="zy-defale">
                                  {items.name}
                                </a>
                              </dd>
                            )
                          })

                        }

                      </dl>
                    )
                  })
                }
                {/* 右边 */}
                <div className="zy-content">
                  <p className="zy-phone">400-100-5678</p>
                  <p className="zy-data">

                    周一至周日 8:00-18:00
                    <br />
                    (仅收市话费)
                  </p>
                  <a className="zy-follow">
                    <i className="iconfont zy-tell icon-duihuakuang4"></i>
                    联系客服
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 底部第二部分 */}
          <div className="zy-siteInfo">
              <div className="container">
                <div className="zy-logoIr">
                  <img src={this.state.zyLogoIr} alt="" />
                </div>
                <div className="zy-InfoText">
                  <p className="zy-sites">
                    {
                      this.state.zySites.map((item,index) => {
                        return (
                          <Fragment key={index}>
                            <a href="#"
                              className="zy-sea"
                              key={index}
                              >
                              {item.sit}
                            </a>
                            <span className="zy-sep">|</span>
                        </Fragment>
                        )
                    })
                  }
                  </p>
                  <p className="zy-jing">
                    &copy;
                    <a href="#" className="zy-tar">mi.com</a>
                    <a href="#" className="zy-targe">京ICP证110507号</a>
                    {
                      this.state.zyTar.map((item,index) =>{
                        return (
                          <a href="#"
                            className="zy-tar"
                            key={index}>
                            {item.tar}
                          </a>
                        )
                      })
                    }
                    <br />
                    <a className="zy-kk">违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</a>
                  </p>
                </div>
                <div className="zy-InfoLinks">
                    {
                      this.state.zyFooterImg.map((item,index) =>{
                        return(
                          <a href="#"
                            key={index}
                            className="zy-footerImg">
                            <img src={item} alt="" />
                          </a>
                        )
                      })
                    }
                </div>
              </div>
              <div className="zy-ir">探索黑科技，小米为发烧而生</div>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer
