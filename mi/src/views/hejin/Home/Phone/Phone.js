import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Phone.scss'
import axios from 'axios'
import phoneSrc from '../../images/Phone/phoneFirst.jpg'

class Phone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      brickList: []
    }
    this.clickMe = this.clickMe.bind(this);
    this.zuzhi = this.zuzhi.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/json/hejin/phone.json')
    .then((res) => {
      // console.log(res.data);
      this.setState({
        brickList: res.data
      })
    })
  }

  clickMe(id) {

    this.props.history.push(`/product/?id=${id}`);
  }

  zuzhi(e) {
    return false;
  }

  render() {
    return (
      <div id="hj-phone">
        <div className="box-hd">
          <h2 className="title">
            手机
          </h2>
          <div className="more">
            <NavLink to='/Site'>
              查看全部
              <i className='iconfont icon-gengduo'></i>
            </NavLink>
          </div>
        </div>
        <div className="box-bd">
          <div className="row">
            <div className="span4">
              <ul className="brick-promo-list">
                <li className='brick-item'>
                  <a href="">
                    <img src={phoneSrc} alt=""/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="span16">
              <ul className='brick-list'>
              {
                this.state.brickList.map((item,index) => {
                  return (
                    <li className='brick-item'
                        key={index}
                        onClick={
                          () => {
                            this.clickMe(item.id);
                          }
                        }>
                      <div className="figure">
                        <a onClick={this.zuzhi}>
                          <img src={item.src} alt=""/>
                        </a>
                      </div>
                      <div className="title">
                        <a onClick={this.zuzhi}>{item.title}</a>
                      </div>
                      <div className="desc">
                        {item.desc}
                      </div>
                      <div className="price">
                        <span className='num'>{item.price}</span>
                        元&nbsp;
                        <del>
                          <span className='num'>{item.del}</span>
                          元
                        </del>
                      </div>
                      <div className="flag" style={{background: item.flag!='新品'?'#e53935':'#83c44e'}}>
                        {item.flag}
                      </div>
                    </li>
                  )
                })
              }
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Phone;
