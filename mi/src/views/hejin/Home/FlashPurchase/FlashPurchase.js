import React,{Component} from 'react'
import './FlashPurchase.scss'
import timeImg from '../../images/flash/flashpurchase.png'
import getColor from './getColor'
import Banner from '../../images/Phone/banner.jpg'

class FlasdPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      totalStep: 1
    }
    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
  }

  moveNext() {
    let step = this.state.step;
    if(step>=this.state.totalStep-1){
      step = this.state.totalStep-1;
    }else{
      step++;
    }
    this.setState({
      step: step
    })
    this.refs.flashPurchaseList.style.marginLeft = -992*step + 'px';
  }

  movePrev() {
    console.log(this.state.step);
    let step = this.state.step;
    if(step<=0){
      step = 0;
    }else{
      step--;
    }
    this.setState({
      step: step
    })
    this.refs.flashPurchaseList.style.marginLeft = -992*step + 'px';
  }

  componentDidMount() {
    // console.log(this.props.flash.length);
    let NewtotalStep = Math.ceil(this.props.flash.length/4);
    this.setState({
      totalStep: NewtotalStep
    })
  }

  render() {
    return (
      <div className="hj-plain-box">
        <div className="box-hd">
          <h2 className='title'>小米闪购</h2>
          <div className="more">
            <div className="controls">
              <i href="" className='control iconfont' onClick={this.movePrev}>&#xe64a;</i>
              <i href="" className='control iconfont' onClick={this.moveNext}>&#xe605;</i>
            </div>
          </div>
        </div>
        <div className="box-bd">
          <div className="goods-list">
            <ul className='countdown'>
              <li className='rainbow-item-4'>
                <div className="time-title">
                  10:00 场
                </div>
                <img src={timeImg} alt=""/>
                <div className="sub">
                  距离结束还有
                </div>
                <div className="countdown">
                  <div className="box">
                   00
                  </div>
                  <div className="dosh">
                    :
                  </div>
                  <div className="box">
                   00
                  </div>
                  <div className="dosh">
                    :
                  </div>
                  <div className="box">
                   00
                  </div>

                </div>
              </li>
            </ul>

            <div className="wrapper">
              <ul className='flashPurchase-list' ref='flashPurchaseList'>
                {
                  this.props.flash.map((item,index) => {
                    return (
                      <li className='item' key={index}
                      style={{borderColor:getColor()}}>
                        <div className="content">
                          <a href="" className='thumb'>
                            <img src={item.src} alt=""/>
                          </a>
                          <h3 className='title'>
                            <a href="">{item.title}</a>
                          </h3>
                          <p className='desc'>{item.desc}</p>
                          <p className='price'>
                            <span>{item.price}</span>
                            <span>元</span>
                            <del>{item.del}</del>
                          </p>
                          <div className="flag" style={{display:item.flag.trim()===''?'none':'block'}}> {item.flag}</div>
                          {/* {console.log(item.flag=='')} */}
                        </div>
                      </li>
                    )
                  })
                }

              </ul>
            </div>
          </div>

        </div>
        <div className="home-banner-box">
          <a href="">
            <img src={Banner} alt=""/>
          </a>
        </div>
      </div>
    )
  }
}

export default FlasdPurchase;
