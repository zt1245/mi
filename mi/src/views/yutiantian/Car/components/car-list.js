import React, { Component,Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './car-list.scss';
import axios from 'axios';

class CarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:'',
            foryouList:[]
        }
        this.addToscar = this.addToscar.bind(this);
    }

    render() {
        return (
            <Fragment>
                <h2>
                    <span>{this.props.title}</span>
                </h2>
                <ul className="clearfix">
                    {
                        this.state.foryouList.map((item,index) => {
                            return (
                                <li
                                    key={index}>
                                    <dl>
                                        <dt>
                                            <NavLink to="/car">
                                                <img src={item.src} alt=""/>
                                            </NavLink>
                                        </dt>
                                        <dd className="carlName">
                                            <NavLink to="/car"> {item.productName} </NavLink>
                                        </dd>
                                        <dd className="carlPrice">{item.price}</dd>
                                        <dd className="carlAdd">
                                            {item.goodThink}
                                            <NavLink to='/car'
                                                className="carlAdda" onClick={() => {
                                                this.addToscar(index)
                                            }}>
                                                加入购物车
                                            </NavLink>
                                        </dd>
                                        <dd className={this.state.num === index ? 'carlsuccess show' : 'carlsuccess'} >
                                            成功加入购物车
                                        </dd>
                                    </dl>
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    addToscar(index) {
        this.setState({
            num: index
        })
        setTimeout(() => {
            this.setState({
                num:''
            })
        }, 1000);
    }

    componentDidMount() {
        axios.get('json/yutiantian/list.json')
        .then(res => {
            this.setState({
                foryouList:res.data
            })
        })
    }
}

export default CarList;
