// 账号登陆
import React, { Component, Fragment } from 'react';
import './Account.scss'
import axios from 'axios'

class Account extends Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    login() {
        console.log(this.props.history);
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        axios.post('http://10.36.134.164:3001/login',{
            username,
            password
        }).then((res) => {
            if(res.data.code===2){
                localStorage.setItem("username",username);
                // localStorage.setItem(username+"GoodInfo","hahahah");
                // this.props.baocun(username,password);
                this.props.history.push('/home');
            }else{
                alert(res.data.msg)
            }
        })
    }

    register() {
        this.props.history.push('/register');
    }


    render () {
        return(
            <Fragment>
                    {/* <span>登陆账号</span> */}
                <div className="login_main">
                    <div className='other_log'>
                        <section className="login_qrcode">
                            <label className='login_labelbox'>
                                <input type="text" className='login_int' placeholder="邮箱/手机号码/小米ID" ref='username'/>
                            </label>
                        </section>
                        <section className="submit_qrcode">
                            <label className='login_labelbox'>
                                <input type="password" className='login_build login_int' placeholder="密码" ref='password'/>
                            </label>
                        </section>
                        <section className="set_pwd_panel">
                            <input type="submit" value='登陆' className='set_pwd login_int' placeholder="登陆" onClick={this.login}/>
                        </section>
                    </div>
                    <div className='sms_link'>
                        <span className='set_panel_login'>手机短信登录/注册</span>
                        <span className='outer_link'>
                            <i className='n_links_area' onClick={this.register}>立即注册</i>
                            <em>|</em><i className='reverse'>忘记密码？</i>
                        </span>
                    </div>
                    <div className='login_container'>
                                <fieldset className='login_qita'>
                                    <legend className='btn_weibo' >其他方式登录</legend>
                                </fieldset>
                        <div className='other-login'>
                                <i className='iconfont icon-qq'></i>
                                <i className='iconfont icon-weibo'></i>
                                <i className='iconfont icon-zhifubao'></i>
                                <i className='iconfont icon-weixindenglu'></i>
                        </div>
                    </div>
                </div>
                </Fragment>
        )
    }
}

export default Account;
