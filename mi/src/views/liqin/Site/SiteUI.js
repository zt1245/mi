import React, { Component, Fragment } from 'react'
import Header from '../../../components/Header/Header'
import './site.scss'
import Shadow from './Shadow'
import Footer from '@/components/Footer/Footer.js'

let Swiper = window.Swiper

class SiteUI extends Component {
    constructor(props) {
        super(props);
        // this.changShow = this.changShow.bind(this);
        this.state = {
            slideImg: [
                require('../images/sites.jpg'),
                require('../images/site.jpg')
            ],
            Shadow: [
                require('../images/mi8.jpg')
            ]
        }
    }

    // changShow(e) {
    //     this.setState({

    //     })
    // }

    render() {
        return (
            <Fragment>
                <Header></Header>
                <div id='site-topbar'>
                    {/* 轮播图 */}
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.slideImg.map((item, index) => {
                                    return (
                                        <div className="swiper-slide"
                                            key={index}>
                                            <img className='slideimg' src={item} alt='' />
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
                    {/* 导航等组件可以放在container之外 */}
                    <div className='conntainer'>
                        <h2 className='star'>明星产品</h2>
                        <div className='figure centers'
                        // onMouseOver={this.changShow}
                        >
                            <div className='product_cell'>
                                {/* <a href='javascript:;'> */}
                                    <img  src={this.state.Shadow[0]} />
                                {/* </a> */}
                            </div>
                            <div className='content'>
                                <h3 className='tetile'>小米8 青春版</h3>
                                <p className='desc'>潮流镜面渐变色，2400万自拍旗舰</p>
                                <p className='prce'><strong>1399</strong>元起</p>
                                <p className='link'>了解产品 > </p>
                            </div>
                        </div>
                    </div>
                    <Shadow></Shadow>
                </div>
                <Footer></Footer>
            </Fragment>
        )
    }

    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 左右切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: true,

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
        })
    }
}

export default SiteUI;