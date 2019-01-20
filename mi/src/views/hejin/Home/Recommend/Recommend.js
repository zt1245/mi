import React,{ Component } from 'react'
import './Recommend.scss'
import imgSrc from '../../images/Recommend/recommend1.jpg'
import axios from 'axios'

class Recommend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      RecommendList: [],
      step: 0
    }
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  prev() {
    let newStep = this.state.step;

    // console.log(newStep)
    if(newStep<=0){
      newStep=0
    }else{
      newStep--;
    }
    this.setState({
      step: newStep
    })
    this.refs.wrapper.style.marginLeft = -1226*newStep + 'px';
  }

  next() {
    let newStep = this.state.step;
    console.log(this.state.RecommendList.length/5);
    if(newStep>=Math.ceil(this.state.RecommendList.length/5)-1){
      newStep = Math.ceil(this.state.RecommendList.length/5)-1
    }else{
      newStep++;
    }
    this.setState({
      step: newStep
    })
    console.log(newStep);
    this.refs.wrapper.style.marginLeft = -1226*newStep + 'px';
    return false;
  }

  componentDidMount() {
    axios.get('/json/hejin/Recommend.json')
    .then((res) => {
      // console.log(res.data);
      this.setState({
        RecommendList: res.data
      })
    })
  }


  render(props) {
    return (
      <div className="hj-recommend">
        <div className="box-hd">
          <h2 className="title">
            为你推荐
          </h2>
          <div className="more">
            <div>
              <a className="control iconfont icon-zuoyoujiantou-copy-copy" onClick={this.prev}></a>
              <a className="control iconfont icon-zuoyoujiantou-copy-copy1" onClick={this.next}></a>
            </div>
          </div>
        </div>
        <div className="box-bd">
          <div className="xm-carousel-wrapper">
            <ul ref='wrapper'>
              {
                this.state.RecommendList.map((item,index) => {
                  return (
                    <li className='list'
                      key={index}>
                      <dl>
                        <dt>
                          <a href="">
                            <img src={item.src} alt=""/>
                          </a>
                        </dt>
                        <dd className='xm-recommend-name'>
                          <a href=""> {item.name} </a>
                        </dd>
                        <dd className='xm-recommend-price'>{item.price}元</dd>
                        <dd className='xm-recommend-tips'>{item.tips}</dd>
                        <dd className='xm-recommend-notice'></dd>
                      </dl>
                    </li>
                  )
                })
              }
              {/* <li className='list'>
                <dl>
                  <dt>
                    <a href="">
                      <img src={imgSrc} alt=""/>
                    </a>
                  </dt>
                  <dd className='xm-recommend-name'>
                    <a href=""> 米兔百变贴纸 </a>
                  </dd>
                  <dd className='xm-recommend-price'>19.9元</dd>
                  <dd className='xm-recommend-tips'>1138人好评</dd>
                  <dd className='xm-recommend-notice'></dd>
                </dl>
              </li>
              <li className='list'>
                <dl>
                  <dt>
                    <a href="">
                      <img src={imgSrc} alt=""/>
                    </a>
                  </dt>
                  <dd className='xm-recommend-name'>
                    <a href=""> 米兔百变贴纸 </a>
                  </dd>
                  <dd className='xm-recommend-price'>19.9元</dd>
                  <dd className='xm-recommend-tips'>1138人好评</dd>
                  <dd className='xm-recommend-notice'></dd>
                </dl>
              </li>
              <li className='list'>
                <dl>
                  <dt>
                    <a href="">
                      <img src={imgSrc} alt=""/>
                    </a>
                  </dt>
                  <dd className='xm-recommend-name'>
                    <a href=""> 米兔百变贴纸 </a>
                  </dd>
                  <dd className='xm-recommend-price'>19.9元</dd>
                  <dd className='xm-recommend-tips'>1138人好评</dd>
                  <dd className='xm-recommend-notice'></dd>
                </dl>
              </li>
              <li className='list'>
                <dl>
                  <dt>
                    <a href="">
                      <img src={imgSrc} alt=""/>
                    </a>
                  </dt>
                  <dd className='xm-recommend-name'>
                    <a href=""> 米兔百变贴纸 </a>
                  </dd>
                  <dd className='xm-recommend-price'>19.9元</dd>
                  <dd className='xm-recommend-tips'>1138人好评</dd>
                  <dd className='xm-recommend-notice'></dd>
                </dl>
              </li>
              <li className='list'>
                <dl>
                  <dt>
                    <a href="">
                      <img src={imgSrc} alt=""/>
                    </a>
                  </dt>
                  <dd className='xm-recommend-name'>
                    <a href=""> 米兔百变贴纸 </a>
                  </dd>
                  <dd className='xm-recommend-price'>19.9元</dd>
                  <dd className='xm-recommend-tips'>1138人好评</dd>
                  <dd className='xm-recommend-notice'></dd>
                </dl>
              </li>
              <li className='list'>
                <dl>
                  <dt>
                    <a href="">
                      <img src={imgSrc} alt=""/>
                    </a>
                  </dt>
                  <dd className='xm-recommend-name'>
                    <a href=""> 米兔百变贴纸 </a>
                  </dd>
                  <dd className='xm-recommend-price'>19.9元</dd>
                  <dd className='xm-recommend-tips'>1138人好评</dd>
                  <dd className='xm-recommend-notice'></dd>
                </dl>
              </li> */}
            </ul>

          </div>
        </div>

      </div>
    )
  }
}

export default Recommend;
