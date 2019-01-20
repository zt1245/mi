import React,{ Component } from 'react';
import './Slide.scss'

let Swiper = window.Swiper;

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideImg:[
        require('../../images/Slide/slide1.jpg'),
        require('../../images/Slide/slide2.jpg'),
        require('../../images/Slide/slide3.jpg'),
        require('../../images/Slide/slide4.jpg'),
        require('../../images/Slide/slide5.jpg'),
      ]
    }
  }
  render() {
    return (
      <div className="swiper-container swiper0">
        <div className="swiper-wrapper">
            {
              this.state.slideImg.map((item,index) => {
                return (
                  <div className="swiper-slide"
                      key={index}>
                    <img src={item} alt=""/>
                </div>
                )
              })
            }

        </div>
        {/* <!-- 如果需要分页器 --> */}
        <div className="swiper-pagination"></div>

        {/* <!-- 如果需要导航按钮 --> */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/* <!-- 如果需要滚动条 --> */}
        <div className="swiper-scrollbar"></div>
      </div>
    )
  }

  componentDidMount() {
    // console.log(111);
    var mySwiper = new Swiper ('.swiper0', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay:true,

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
}

export default Slide;
