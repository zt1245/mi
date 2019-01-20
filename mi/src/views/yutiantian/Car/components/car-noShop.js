import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './car-noShop.scss';
import CarList from './car-list';

class carNoshop extends Component {
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
                        <div className="car-mcontent" style={{paddingTop:'25px'}}>
                            <h2>您的购物车还是空的！</h2>
                            <NavLink to='/home' className="car-immediate immediate-login">马上购物</NavLink>
                        </div>
                    </div>
                    <div className="car-list">
                        <CarList title="为您推荐"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default carNoshop;
