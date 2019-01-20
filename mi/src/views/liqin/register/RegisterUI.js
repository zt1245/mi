import React, { Fragment, Component } from 'react';
import Footer from '../Login/Footer/Footer.js'
import './register.scss'
import milogo from '../images/milogo.png' ;
import dui from '../images/data_img.png'
import axios from 'axios'

class ProductUI extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    console.log(this.refs.username.value,this.refs.password.value);
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    axios.post('http://10.36.134.164:3001/register',{
      username,
      password
    }).then((res) => {
      console.log(res.data,this.props.history);
      if(res.data.code==2){
        this.props.history.push('/login');
      }else{
        alert(res.data.msg);
      }
    })
  }

  render() {
    return (
      <Fragment>
        <div className='layout'>
          <div className='external_logo_area'>
            <img className='logo_img_area' src={milogo} alt='' />
            <div className='xiaomi_register'>
            注册小米账号
            </div>
            <div className="login_areat">
              <section className="loginbox">
                <label className='labelbox'>
                  <input type="text" className='login-input' placeholder="邮箱/手机号码/小米ID" ref='username'/>
                </label>
              </section>
              <section className="submit-lg">
                <label className='labelbox pwd_panel'>
                  <input type="password" className='login-input' placeholder="密码" ref='password'/>
                </label>
              </section>
              <section className="btns_bg">
                <input type="submit" value='注册' className='btnadpt' placeholder="密码" onClick={this.submit}/>
              </section>
            </div>
            <div className="privacy_box">
              <p className='privacy_dui'><img className='dui' src={dui} alt='' />注册帐号即表示您同意并愿意遵守小米
                <a className='font_siss'
                  title="用户协议"
                    href='https://static.account.xiaomi.com/html/agreement/account/cn.html'> 用户协议 </a>和
                <a className='font_siss' href='https://www.mi.com/about/privacy/'> 隐私政策 </a>
              </p>
            </div>
          </div>
          <div className='custom-footer'>
            {/* 注册页{props.title} */}
            <Footer></Footer>
          </div>
        </div>
      </Fragment>
    )
  }
}


export default ProductUI
