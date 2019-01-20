// 扫码页面
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Account from './Account.js'
import './login.scss'

const Ewm = (props) => {
    return (
        <Fragment>
            <div className='login-dl'>
                <i className='navtab-link'>
                    <span>登陆账号</span>
                    <Account {...props}></Account>
                </i>
            </div>
        </Fragment>
    )
}
export default Ewm;
