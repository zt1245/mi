import React,{ Component } from "react";
import './pinfo.scss'
import protect from './images/protect.jpg'
import axios from 'axios'

class Pinfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      // 倒计时终止时间
      time: '20',
      // 页面显示的剩余时间
      strTime: '',
      isShow: false,
      // 请求的所有数据
      phone_list: [],
      //手机的描述
      phone_dec: [],
      // 手机的版本数据
      phone_version: [],
      // 手机的颜色数据
      phone_color: [],
      // 版本的border的颜色变化
      sNum: 0,
      // color的border的颜色变化
      sColor: 0,
      // 选择的手机名称
      fName: '',
      // 选择的手机的价格
      fPrice: '',
      // 选择的手机的颜色
      fColor: '',
      //意外保障
      accident: false,
      // 碎片保障
      frag: false,
      // 延长保修
      extend: false,
      // 最终的价格
      totalPrice: '',
      id: '',
      pic: ''
    }
    this.prevent = this.prevent.bind(this);
    this.changSnum = this.changSnum.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.allSelect = this.allSelect.bind(this);
    this.FallSelect = this.FallSelect.bind(this);
    this.EallSelect = this.EallSelect.bind(this);
    this.addToCar = this.addToCar.bind(this);
  }
  // 改变snum的变化，让版本的选择boder的颜色进行变化
  changSnum(index,item){
    this.setState({
      sNum: index,
      fName: item.version,
      fPrice: item.price,
      totalPrice: item.price
    })
  }
  handler(){

  }
  // 改变snum的变化，让颜色的选择boder的颜色进行变化
  changeColor(index,item){
    this.setState({
      sColor: index,
      fColor: item.color
    })
  }
  addToCar(){
    this.props.addCar({
        "id": this.state.id,
        "pic": this.state.pic,
        "shopName": this.state.phone_list.phone_name,
        "singlePrice": this.state.fPrice,
        "num": 1,
        "shopVersion": this.state.fName,
        "shopColor": this.state.fColor
      })
      window.location.reload();
    return false;

  }
  // 阻止a链接的跳转
  prevent(e){
    return false;
  }
  // 全选与全不选
  allSelect(price){
    this.setState({
      accident: !this.state.accident
    })
    if(this.state.accident === false){
      var digital = parseInt(this.state.totalPrice) + parseInt(price);
      this.setState({
        totalPrice: digital
      })
    }else {
      var Pdigital = parseInt(this.state.totalPrice) - parseInt(price);
      this.setState({
        totalPrice: Pdigital
      })
    }
  }
  EallSelect(price){
    this.setState({
      extend: !this.state.extend
    })
    if (this.state.extend === false) {
      var digital = parseInt(this.state.totalPrice) + parseInt(price);
      this.setState({
        totalPrice: digital
      })
    } else {
      var Pdigital = parseInt(this.state.totalPrice) - parseInt(price);
      this.setState({
        totalPrice: Pdigital
      })
    }
  }
  FallSelect(price){
    this.setState({
      frag: !this.state.frag
    })
    if (this.state.frag === false) {
      var digital = parseInt(this.state.totalPrice) + parseInt(price);
      this.setState({
        totalPrice: digital
      })
    } else {
      var Pdigital = parseInt(this.state.totalPrice) - parseInt(price);
      this.setState({
        totalPrice: Pdigital
      })
    }
  }
  componentDidMount(){
    this.setState({
      id: this.props.location.search.split("=")[1]
    })
    // 请求数据
    axios.get('/json/zhuoting/list.json')
    .then((result) => {
      for (var i = 0; i < result.data.length; i++) {
        if (result.data[i].id === this.props.location.search.split("=")[1]) {
          this.setState({
            phone_list: result.data[i],
            phone_dec: result.data[i].phone_dec,
            phone_version: result.data[i].phone_version,
            phone_color: result.data[i].phone_color,
            fName: result.data[i].phone_version[0].version,
            fColor: result.data[i].phone_color[0].color,
            fPrice: result.data[i].phone_version[0].price,
            totalPrice: result.data[i].phone_version[0].price,
            pic: result.data[i].pic
          })
        }
      }
    })
    .catch((error) => {
      console.log(error);
    })
    // 倒计时
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var endTime = (20 * 60 * 60 * 1000);
    var startTime = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
    var difTime = (endTime - startTime) / 1000;
    var newH;
    var newM;
    var newS;
    var timer = setInterval(() => {
      difTime--;
      if(difTime < 0){
        this.setState({
          strTime: '抢购已结束',
        })
        clearInterval(timer);
      }else {
        newH = parseInt(difTime / 60 / 60);
        newM = parseInt((difTime / 60 / 60 - newH) * 60);
        newS = parseInt(((difTime / 60 / 60 - newH) * 60 - newM) * 60);
        this.setState({
          strTime: `剩${ newH }时${ newM }分${ newS }秒`
        })
      }
    }, 1000);
  }
  render(){
    return (
      <div className="pro-info">
        <h1>{ this.state.phone_list.phone_name }</h1>
        <p className="sel-dec">
          <span>{ this.state.phone_dec[0] }</span>
          { this.state.phone_dec[1] }
      </p>
        <div className="main">
          {/* 经营主体 */}
          <p className="aftersale-company">{ this.state.phone_list.aftersale_company }</p>
          {/* 价格 */}
          <div className="price">
            <span>{ this.state.phone_list.price }元</span>
            <del>{ this.state.phone_list.original_price != null? `${this.state.phone_list.original_price}元` : '' }</del>
          </div>
          {/* 倒计时提示 */}
          <div className={ this.state.phone_list.active ? "pro-time" : "pro-time isexit" } >
            <div className="pro-head">
              <em className="seckill-icon"></em>
              闪购
              <span className="time" ref="time">{ this.state.strTime }</span>
            </div>
            <div className="pro-con">
              <span className="pro-time-price">
                ￥<em>{ this.state.phone_list.price }</em>
              </span>
              <del>
                <em>{ this.state.phone_list.original_price != null ? `￥${this.state.phone_list.original_price}元` : '' }</em>
              </del>
            </div>
          </div>
          {/* 分仓地址 */}
          <div className="address">
            <div className="user-address">
              <i className="iconfont icon-locate-02"></i>
              <div>
                <div className="address-info">
                  <span>北京</span>
                  <span>北京市</span>
                  <span>东城区</span>
                  <span>永定门外街道</span>
                </div>
                <span className="update">修改</span>
              </div>
              <div className="pro-status">
                有现货
              </div>
            </div>
          </div>
          {/* 产品版本 */}
          <div className="list-warp">
            <div className="pro-choose">
              <div className="step-title">选择版本</div>
              <ul>
                {
                  this.state.phone_version.map((item,index) => {
                    return (
                      <li key={index}
                        className={ this.state.sNum === index ? 'active' : '' }
                        onClick={ () => {
                          this.changSnum(index,item);
                        } }
                        >
                        <a onClick={this.prevent}>
                          <span className="name">{ item.version }</span>
                          <span className="price">{ item.price }</span>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="pro-choose choose-color">
              <div className="step-title">选择颜色</div>
              <ul>
                {
                  this.state.phone_color.map((item,index) => {
                    return (
                      <li key={ index }
                        className={this.state.sColor === index? 'active' : '' }
                        onClick={() => {
                          this.changeColor(index,item);
                        }}
                      >
                        <a onClick={this.prevent}>
                          <img src={ item.img } alt="" className="se-img" />
                          { item.color }
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="pro-protect">
              <div className="step-title">
                选择小米提供的意外保护
                <a onClick={this.prevent}>了解意外保护&gt;</a>
              </div>
              <ul>
                <li className={this.state.accident ?'active':''}>
                  <input type="checkbox"
                    className="check"
                    checked={this.state.accident}
                    onClick={() => {
                      this.allSelect(299)
                    }}
                    onChange={this.handler}/>
                  <img src={ protect } alt=""/>
                  <div>
                    <span className={this.state.accident ? 'active name' : 'name'}>意外保障服务</span>
                    <p className="desc">手机意外摔落/进水/碾压等损坏</p>
                    <p className="aggrement">
                      <input type="checkbox"
                        checked={this.state.accident}
                        onClick={() => {
                          this.allSelect(299)
                        }}
                        onChange={ this.handler }/>
                      我已阅读
                      <a onClick={this.prevent}>服务条款<span>|</span></a>
                      <a onClick={this.prevent}>常见问题</a>
                    </p>
                    <span className="price-p">299元</span>
                  </div>
                </li>
                <li className={this.state.frag ? 'active' : ''}>
                  <input type="checkbox"
                    className="check"
                    checked={this.state.frag}
                    onClick={() => {
                      this.FallSelect(159)
                    }}
                    onChange={this.handler}/>
                  <img src={protect} alt="" />
                  <div>
                    <span  className={this.state.frag ?'active name':'name'}>碎片保障服务</span>
                    <p className="desc">手机意外碎片</p>
                    <p className="aggrement">
                      <input type="checkbox"
                        checked={this.state.frag}
                        onClick={() => {
                          this.FallSelect(159)
                        }}
                        onChange={this.handler}/>
                      我已阅读
                      <a onClick={this.prevent}>服务条款<span>|</span></a>
                      <a onClick={this.prevent}>常见问题</a>
                    </p>
                    <span className="price-p">159元</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pro-protect">
              <div className="step-title">
                选择小米提供的延长保修
                <a onClick={this.prevent}>了解延长保修&gt;</a>
              </div>
              <ul>
                <li className={this.state.extend ? 'active' : ''}>
                  <input type="checkbox"
                    className="check"
                    checked={this.state.extend}
                    onClick={() => {
                      this.EallSelect(99)
                    }}
                    onChange={this.handler}/>
                  <img src={protect} alt="" />
                  <div>
                    <span className={this.state.extend ? 'active name' : 'name'}>延长保修服务</span>
                    <p className="desc">厂延保一年，性能故障免费维修</p>
                    <p className="aggrement">
                      <input type="checkbox"
                        checked={this.state.extend}
                        onClick={() => {
                          this.EallSelect(99)
                        }}
                        onChange={this.handler}/>
                      我已阅读
                      <a onClick={this.prevent}>服务条款<span>|</span></a>
                      <a onClick={this.prevent}>常见问题</a>
                    </p>
                    <span className="price-p">99元</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 已选择的产品 */}
          <div className="prolist">
            <ul>
              <li>
                {this.state.phone_list.phone_name} {this.state.fName} {this.state.fColor }
                <del>{this.state.phone_list.original_price != null ? `${this.state.phone_list.original_price}元` : ''}</del>
                <span>{ this.state.fPrice }元</span>
              </li>
              <li
                className={this.state.accident ? '' : 'hide'}
              >
                意外保障服务
                <span>299</span>
              </li>
              <li
                className={this.state.frag ? '' : 'hide'}
              >
                碎屏保障服务
                <span>159</span>
              </li>
              <li
                className={this.state.extend ? '' : 'hide'}
              >
                延长保修服务
                <span>99</span>
              </li>
              <li className="totalPrice">闪购价 ：{ this.state.totalPrice  }元</li>
            </ul>
          </div>
          {/* 购买按钮 */}
          <ul className="btn-warp">
            <li>
              <a onClick={this.addToCar} className="btn-binglarge">加入购物车</a>
            </li>
            <li>
              <a onClick={this.prevent} className="btn-like">
                <i className="iconfont icon-aixin"></i>
                喜欢
              </a>
            </li>
          </ul>
          <div className="pro-policy">
            <a onClick={this.prevent}>
              <span>
                <i className="iconfont icon-dui1"></i>
                <em>小米自营</em>
              </span>
            </a>
            <a onClick={this.prevent}>
              <span>
                <i className="iconfont icon-dui1"></i>
                <em>小米发货</em>
              </span>
            </a>
            <a onClick={this.prevent}>
              <span>
                <i className="iconfont icon-dui1"></i>
                <em>7天无理由退货</em>
              </span>
            </a>
            <a onClick={this.prevent}>
              <span>
                <i className="iconfont icon-dui1"></i>
                <em>运费说明</em>
              </span>
            </a>
            <a onClick={this.prevent}>
              <span>
                <i className="iconfont icon-dui1"></i>
                <em>售后服务政策</em>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Pinfo
