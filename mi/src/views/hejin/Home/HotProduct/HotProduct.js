import './hotproduct.scss'
import '../../../../styles/base.scss'
import React,{Component} from 'react'

class HotProduct extends Component {
  constructor(props){
    super(props);
    this.state={
      zyImg:[
        require("../../images/hotProduct/zy-hoto.png"),
        require("../../images/hotProduct/zy-hott.png"),
        require("../../images/hotProduct/zy-hots.png"),
        require("../../images/hotProduct/zy-hotf.png"),
      ],
      zyList:[
        {
          zyImg:require("../../images/hotProduct/zy-hoto.png"),
          zycontent:'外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价比高。附图，给客服妹子一个大...',
          zytitle:'来自于 酸小妞～！ 的评价',
          zytitlene:'米家车载空气净化器 ( USB车充版 ) 灰色',
          zynum:'389',
          a1:'http://www.mi.com/carair',
          a2:'//order.mi.com/comment/commentDetail/comment_id/141831535',
        },
        {
          zyImg:require("../../images/hotProduct/zy-hott.png"),
          zycontent:'超级喜欢！小巧玲珑！音质完美！不知道为什么！只要是小米出的东西我都喜欢！那倒是因为那一句？？小米为发...',
          zytitle:' 来自于 田密 的评价 ',
          zytitlene:'小米随身蓝牙音箱',
          zynum:'63',
          a1:'http://www.mi.com/littleeaudio/',
          a2:'//order.mi.com/comment/commentDetail/comment_id/133394441',
        },
        {
          zyImg:require("../../images/hotProduct/zy-hots.png"),
          zycontent:'包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...',
          zytitle:'来自于 HZG 的评价 ',
          zytitlene:'米家压力IH电饭煲',
          zynum:'899',
          a1:'http://www.mi.com/dianfanbao',
          a2:'//order.mi.com/comment/commentDetail/comment_id/133452803',
        },
        {
          zyImg:require("../../images/hotProduct/zy-hotf.png"),
          zycontent:'东西真心不错，用过最好用的插线板，做工外观没得挑剔，3个USB接口很实用，充电快，建议不包邮的应该在...',
          zytitle:' 来自于 yinyin19891117 的评价 ',
          zytitlene:'小米插线板',
          zynum:'49',
          a1:'http://www.mi.com/powerstrip',
          a2:'//order.mi.com/comment/commentDetail/comment_id/10036491',
        }


      ]
    }
  }

  render(){
    return (
      <div className="zy-hot">
        <div className="container">
          <div className="box-hd">
            <h2 className="title">热评产品</h2>
          </div>
          <div className="box-bd">
            <ul className="review-list">
              {
                this.state.zyList.map((item,index) =>{
                  return (
                    <li key={index} className="review-item">
                    <div className="figure-img">
                      <a href={item.a1} className="exposure">
                        <img src={item.zyImg} alt="" />
                      </a>
                    </div>
                    <p className="review">
                      <a href={item.a2}>
                        {item.zycontent}
                      </a>
                    </p>
                    <p className="author">
                      {item.zytitle}
                    </p>
                    <div className="info">
                      <h3 className="titless">
                        <a href={item.a1} className="textne">
                         {item.zytitlene}
                        </a>
                      </h3>
                      <span className="sep">&nbsp;|&nbsp;</span>
                      <p className="price">
                        <span className="num">{item.zynum}</span>
                        元
                      </p>
                    </div>
                  </li>
                  )
                })
              }
              {/* <li className="review-item">
                <div className="figure-img">
                  <a className="exposure">
                    <img src={this.state.zyImg[0]} alt="" />
                  </a>
                </div>
                <p className="review">
                  <a href="#">
                    外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价比高。附图，给客服妹子一个大...
                  </a>
                </p>
                <p className="author">
                  来自于 酸小妞～！ 的评价
                </p>
                <div className="info">
                  <h3 className="titless">
                    <a href="#" className="textne">
                      米家车载空气净化器&nbsp;(&nbsp;USB车充版&nbsp;)灰色
                    </a>
                  </h3>
                  <span className="sep">&nbsp;|&nbsp;</span>
                  <p className="price">
                    <span className="num">389</span>
                    元
                  </p>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default HotProduct;
