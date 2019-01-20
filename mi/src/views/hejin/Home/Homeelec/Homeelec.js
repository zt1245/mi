import React,{ Component } from 'react'
import './Homeelec.scss'
import axios from 'axios'
import HomeelecImg from '../../images/Homeelec/Homeelec1.jpg'
import ele1Img from '../../images/Homeelec/ele1.jpg'


class Homeelec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      span4: [],
      span16: [],
      listIndex: "热门",
      listItem: [],
      moreList: []
    }
    this.changeList = this.changeList.bind(this);
  }

  init() {
    axios.get('http://localhost:3000/json/hejin/Homeelec.json')
    .then((res) => {
      // console.log(res.data[0].span4,res.data[0].span16);
      for(var i =0;i<res.data[0].span16.length;i++){
        if(res.data[0].span16[i].type===this.state.listIndex){
          this.setState({
            listItem: res.data[0].span16[i].list,
            moreList: res.data[0].span16[i].smallItem
          })
        }
      }
      this.setState({
        span4: res.data[0].span4,
        span16: res.data[0].span16
      })
    })
  }

  changeList(e) {
    // console.log(e.target.innerHTML);
    this.setState({
      listIndex: e.target.innerHTML
    })
    this.init();
  }

  componentDidMount() {
    this.init();
  }
  render() {
    // console.log(this.state.listItem,this.state.moreList);
    return (
      <div id="homeelec">
        <div className="box-hd">
          <h2 className="title">家电</h2>
          <div className="more">
            <ul>
              {
                this.state.span16.map((item,index) => {
                  return (
                    <li key={index} onMouseOver={this.changeList}
                        className={[this.state.listIndex===item.type?"active":""]}>{item.type}</li>
                  )
                })
              }
              {/* <li className='active'>热门</li>
              <li>电视影音</li>
              <li>电脑</li>
              <li>家居</li> */}
            </ul>
          </div>
        </div>
        <div className="box-bd">
          <div className="span4">
            <ul className="brick-promo-list">
              {
                this.state.span4.map((item,index) => {
                  return (
                    <li className='brick-item'
                      key={index}>
                      <a href="">
                        <img src={item} alt=""/>
                      </a>
                    </li>
                  )
                })
              }
              {/* <li className='brick-item'>
                <a href="">
                  <img src={HomeelecImg} alt=""/>
                </a>
              </li>
              <li className='brick-item'>
                <a href="">
                  <img src={HomeelecImg} alt=""/>
                </a>
              </li> */}
            </ul>
          </div>
          <div className="span16">
            <div id="homeelec-content">
              <ul className='brick-list'>
                {
                  this.state.listItem.map((item,index) => {
                    return (
                      <li className='brick-item brick-item-m'
                        key={index}>
                        <div className="figure">
                        {/* {console.log('=============')} */}
                        {/* {console.log(item.list)} */}
                          <a href="">
                            <img src={item.src} alt=""/>
                          </a>
                        </div>
                        <div className="title">
                          <a href="">{item.title}</a>
                        </div>
                        <p className='desc'></p>
                        <p className='price'>
                          <span className='num'>{item.price}</span>元
                          <del>
                          <span className='num'>{item.del}</span>元
                          </del>
                        </p>
                        <p className='rank'>{item.rank}</p>
                        <div className="flag"
                        style={{display:item.flag.trim()?"block":"none",background:item.flag.trim()==="新品"?"#83c44e":"#e53935"}}
                        >{item.flag}</div>
                        <div className="review-wrapper" style={{display:item.isReview?"block":"none"}}>
                          <a href="">
                            <span className='review'>{item.review}</span>
                            <span className='author'>
                              {item.author}
                              <span className='date'></span>
                            </span>
                          </a>
                        </div>
                      </li>
                    )
                  })
                }
                {
                  this.state.moreList.map((item,index) => {
                    return (
                      <li className='brick-item brick-item-s'
                        key={index}>
                        <div className="figure">
                          <a href="">
                            <img src={item.src} alt=""/>
                          </a>
                        </div>
                        <div className="title">
                          <a href="">{item.title}</a>
                        </div>
                        <p className='price'>
                          <span className='num'>{item.price}</span>元
                        </p>
                      </li>
                    )
                  })
                }

                {/* <li className='brick-item brick-item-m'>
                  <div className="figure">
                    <a href="">
                      <img src={ele1Img} alt=""/>
                    </a>
                  </div>
                  <div className="title">
                    <a href="">小米电视4S 75英寸</a>
                  </div>
                  <p className='desc'></p>
                  <p className='price'>
                    <span className='num'>1499</span>元
                    <del>
                     <span className='num'>1499</span>元
                    </del>
                  </p>
                  <p className='rank'></p>
                  <div className="flag">减 200 元</div>
                  <div className="review-wrapper">
                    <a href="">
                      <span className='review'>一直都想买个小米电视.果然不失所望，大爱</span>
                      <span className='author'>
                        来自于 1471474629 的评价
                        <span className='date'></span>
                      </span>
                    </a>
                  </div>
                </li>
                <li className='brick-item brick-item-m'>
                  <div className="figure">
                    <a href="">
                      <img src={ele1Img} alt=""/>
                    </a>
                  </div>
                  <div className="title">
                    <a href="">小米电视4S 75英寸</a>
                  </div>
                  <p className='desc'></p>
                  <p className='price'>
                    <span className='num'>1499</span>元
                    <del>
                     <span className='num'>1499</span>元
                    </del>
                  </p>
                  <p className='rank'></p>
                  <div className="flag">减 200 元</div>
                  <div className="review-wrapper">
                    <a href="">
                      <span className='review'>一直都想买个小米电视.果然不失所望，大爱</span>
                      <span className='author'>
                        来自于 1471474629 的评价
                        <span className='date'></span>
                      </span>
                    </a>
                  </div>
                </li>
                <li className='brick-item brick-item-m'>
                  <div className="figure">
                    <a href="">
                      <img src={ele1Img} alt=""/>
                    </a>
                  </div>
                  <div className="title">
                    <a href="">小米电视4S 75英寸</a>
                  </div>
                  <p className='desc'></p>
                  <p className='price'>
                    <span className='num'>1499</span>元
                    <del>
                     <span className='num'>1499</span>元
                    </del>
                  </p>
                  <p className='rank'></p>
                  <div className="flag">减 200 元</div>
                  <div className="review-wrapper">
                    <a href="">
                      <span className='review'>一直都想买个小米电视.果然不失所望，大爱</span>
                      <span className='author'>
                        来自于 1471474629 的评价
                        <span className='date'></span>
                      </span>
                    </a>
                  </div>
                </li>
                <li className='brick-item brick-item-m'>
                  <div className="figure">
                    <a href="">
                      <img src={ele1Img} alt=""/>
                    </a>
                  </div>
                  <div className="title">
                    <a href="">小米电视4S 75英寸</a>
                  </div>
                  <p className='desc'></p>
                  <p className='price'>
                    <span className='num'>1499</span>元
                    <del>
                     <span className='num'>1499</span>元
                    </del>
                  </p>
                  <p className='rank'></p>
                  <div className="flag">减 200 元</div>
                  <div className="review-wrapper">
                    <a href="">
                      <span className='review'>一直都想买个小米电视.果然不失所望，大爱</span>
                      <span className='author'>
                        来自于 1471474629 的评价
                        <span className='date'></span>
                      </span>
                    </a>
                  </div>
                </li>
                <li className='brick-item brick-item-m'>
                  <div className="figure">
                    <a href="">
                      <img src={ele1Img} alt=""/>
                    </a>
                  </div>
                  <div className="title">
                    <a href="">小米电视4S 75英寸</a>
                  </div>
                  <p className='desc'></p>
                  <p className='price'>
                    <span className='num'>1499</span>元
                    <del>
                     <span className='num'>1499</span>元
                    </del>
                  </p>
                  <p className='rank'></p>
                  <div className="flag">减 200 元</div>
                  <div className="review-wrapper">
                    <a href="">
                      <span className='review'>一直都想买个小米电视.果然不失所望，大爱</span>
                      <span className='author'>
                        来自于 1471474629 的评价
                        <span className='date'></span>
                      </span>
                    </a>
                  </div>
                </li>
                <li className='brick-item brick-item-m'>
                  <div className="figure">
                    <a href="">
                      <img src={ele1Img} alt=""/>
                    </a>
                  </div>
                  <div className="title">
                    <a href="">小米电视4S 75英寸</a>
                  </div>
                  <p className='desc'></p>
                  <p className='price'>
                    <span className='num'>1499</span>元
                    <del>
                     <span className='num'>1499</span>元
                    </del>
                  </p>
                  <p className='rank'></p>
                  <div className="flag">减 200 元</div>
                  <div className="review-wrapper">
                    <a href="">
                      <span className='review'>一直都想买个小米电视.果然不失所望，大爱</span>
                      <span className='author'>
                        来自于 1471474629 的评价
                        <span className='date'></span>
                      </span>
                    </a>
                  </div>
                </li>
                <li className='brick-item brick-item-m'>
                  <div className="figure">
                    <a href="">
                      <img src={ele1Img} alt=""/>
                    </a>
                  </div>
                  <div className="title">
                    <a href="">小米电视4S 75英寸</a>
                  </div>
                  <p className='desc'></p>
                  <p className='price'>
                    <span className='num'>1499</span>元
                    <del>
                     <span className='num'>1499</span>元
                    </del>
                  </p>
                  <p className='rank'></p>
                  <div className="flag">减 200 元</div>
                  <div className="review-wrapper">
                    <a href="">
                      <span className='review'>一直都想买个小米电视.果然不失所望，大爱</span>
                      <span className='author'>
                        来自于 1471474629 的评价
                        <span className='date'></span>
                      </span>
                    </a>
                  </div>
                </li> */}
                {/* <li className='brick-item brick-item-s'>
                  <div className="figure">
                    <a href="">
                      <img src={ele1Img} alt=""/>
                    </a>
                  </div>
                  <div className="title">
                    <a href="">小米净水器（厨下式）</a>
                  </div>
                  <p className='price'>
                    <span className='num'>1499</span>元
                  </p>
                </li> */}
                <li className='brick-item brick-item-s'>
                  <div className="figure figure-more">
                    <a href="">
                      <i className='iconfont icon-gengduo1'></i>
                    </a>
                  </div>
                  <a href="" className='more'>
                    浏览更多
                    <span>{this.state.listIndex}</span>
                  </a>
                </li>
              </ul>


            </div>

          </div>

        </div>

      </div>

    )
  }
}

export default Homeelec;

