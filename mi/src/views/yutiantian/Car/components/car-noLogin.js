import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './car-noLogin.scss';
import CarList from './car-list';
class carNologin  extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="car-mainAll">
                <div className="car-main container">
                    <div className="car-empty">
                        <div className="car-mcontent">
                            <h2>您的购物车还是空的！</h2>
                            <p>登录后将显示您之前加入的商品</p>
                            <NavLink to='/login' className="car-immediate immediate-login">立即登录</NavLink>
                            <NavLink to="/home" className="car-immediate immediate-shop">马上去购物</NavLink>
                        </div>
                    </div>
                    <div className="car-list">
                        <CarList title="为您推荐" />
                    </div>
                </div>
            </div>
        )
    }
}

export default carNologin;
