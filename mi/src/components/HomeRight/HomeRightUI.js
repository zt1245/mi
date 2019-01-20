import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './homeright.scss'
import bar from '../images/rightbar_l.png'
import totop from '../images/totop_hover.png'
import top from '../images/totop.png'
import { BackTop } from 'antd'

class HomeRightUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconFont: [
                {
                    className: 'iconfont ic icon-shouji1',
                    ewm: '手机扫一扫一分赢天下'
                },
                {
                    className: 'iconfont ic icon-lianxiren',
                    ewm: '个人中心'
                },
                {
                    className: 'iconfont ic icon-kefu',
                    ewm: '联系客服'
                },
                {
                    className: 'iconfont ic icon-cart--copy',
                    ewm: '购物车'
                },
                {
                    ewm: '回顶部'
                }
            ]
        }
    }
    render() {

        return (
            <div>
                <div className='home_right_bar'>
                    <ul className='bar-top'>
                        <li className='bar-sortJI'>
                            <a href='#'>
                                <div className='original'><i className={this.state.iconFont[0].className}></i></div>
                                <div className='bar_dingw'>
                                    <img src={bar} alt='' className='bar_img' />
                                    <div className='ewm'>{this.state.iconFont[0].ewm}</div>
                                    <p className='arrow'></p>
                                </div>
                            </a>
                        </li>
                        <li className='bar-sort'>
                            <a href='#'>
                                <div className='original'><i className={this.state.iconFont[1].className}></i></div>
                                <div className='bar_pop'>
                                    <p className='br'>{this.state.iconFont[1].ewm}</p>
                                    <div className='arrows'></div>
                                </div>
                            </a>
                        </li>
                        <li className='bar-sort'>
                            <a>
                                <div className='original'><i className={this.state.iconFont[2].className}></i></div>
                                <div className='bar_pop'>
                                    <p className='br'>{this.state.iconFont[2].ewm}</p>
                                    <div className='arrows'></div>
                                </div>
                            </a>
                        </li>
                        <li className='bar-sortGou'>
                            <NavLink to='/car'>
                                <div className='original'>
                                    <i className={this.state.iconFont[3].className} style={{color: this.props.totalNum>0?"#ff6700":"#b5b5b5"}}></i>
                                </div>
                                <div className='bar_pop'>
                                    <p className='bar_arrows'>{this.state.iconFont[3].ewm}<span className='barSMum'>({this.props.totalNum})</span></p>
                                    <div className='arrows'></div>
                                </div>
                            </NavLink>
                        </li>
                    </ul>

                    <div>
                        <BackTop>
                            <div className='shows'>
                                <div className="huidingbu">{this.state.iconFont[4].ewm}</div>
                                <div className='arrows'></div>
                            </div>
                            <a href='javascript:;' className='bar_totop'>
                                <div className='home_bar_img'>
                                    <img src={top} className='topShow' alt='' />
                                    <img src={totop} className='topHind' alt='' />
                                </div>
                            </a>
                        </BackTop>
                    </div>
                </div>
                {/* <div className='height'>111</div> */}
            </div>
        )

    }
}

export default HomeRightUI;
