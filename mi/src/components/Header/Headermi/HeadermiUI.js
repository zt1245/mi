import React, { Component, Fragment } from 'react';
import './Headermi.scss'
import '../../../styles/base.scss'
import axios from 'axios'

class HeadermiUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zynavName: '小米手机',
      childnone:true,
      zynavIem: [],
      zyItemflags: '',
      zysearch: false,
      zyLogoImg: [
        require('../../../views/zhouying/images/zy-logomi.png'),

      ],
      zynavList: [
        '小米手机',
        '红米',
        '电视',
        '笔记本',
        '空调',
        '新品',
        '路由器',
        '智能硬件',
        '服务',
        '社区',
      ],
      zyResult: [
        {
          result: '小米6X',
          num: '约有5件'
        },
        {
          result: '黑鲨游戏手机',
          num: '约有3件'
        },
        {
          result: '红米Note 5',
          num: '约有6件'
        },
        {
          result: '红米5A',
          num: '约有13件'
        },
        {
          result: '小米电视4C',
          num: '约有5件'
        },
        {
          result: '电视32英寸',
          num: '约有3件'
        },
        {
          result: '笔记本pro',
          num: '约有5件'
        },
        {
          result: '空气净化器',
          num: '约有11件'
        },
        {
          result: '净水器',
          num: '约有8件'
        }

      ],

    }
    this.hiddenSearch = this.hiddenSearch.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.changList = this.changList.bind(this);
    this.hidden=this.hidden.bind(this);
    this.show=this.show.bind(this);
    this.shouGoods = this.shouGoods.bind(this);
  }

  shouGoods() {
    this.refs.ee.style.display="block";
  }

  hidden(){
    this.refs.ee.style.display="none";
  }

  show(){
    if(!this.state.childnone){
      this.refs.ee.style.display="block";
    }
  }

  init() {
    axios.get('http://localhost:3000/json/zhouying/list.json')
      .then((res) => {
        // console.log(222222);
        // console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].zynavName === this.state.zynavName) {
            // console.log(this.state.zynavName);
            // console.log(111);
            this.setState({
              zynavIem: res.data[i].zynavIem,
              childnone:res.data[i].childnone || ''
            })
          }
          // console.log(333);
          // console.log(this.state.zynavName);
          // console.log(this.state.zynavIem);
        }
      })
  }

  changList(e) {
    this.setState({
      zynavName: e.target.innerHTML
    })
    this.init();
    // console.log(this.state.zynavName);

  }

  componentDidMount() {
    this.init();
  }

  hiddenSearch() {
    this.setState({
      zysearch: true,
    })
  }

  showSearch() {
    this.setState({
      zysearch: false,
    })
  }

  render() {
    return (
      <div className="zy-headermi">
        <div className="container">
          <div className="zy-logomi">
            <a href="#" className="zy-miImg">
              <img src={this.state.zyLogoImg} alt="小米官网" />
            </a>
          </div>
          <div className="zy-navmi">
            <ul className="zy-navList">
              <li className="zy-navCategory">
                <a href="#" className="zy-linkCategory">
                  <span className="">全部商品分类</span>
                </a>
                <div className="zy-itemchildren">
                  <ol>
                    <li>
                      <div className="zy-figure">
                        <a href="#">
                          <img src="" alt="" />
                        </a>
                      </div>
                      <div className="zy-title">
                        <a href="#" ></a>
                      </div>
                      <p className="zy-miprice"></p>
                      <div className="zy-flags">
                        <div className="zy-flag"></div>
                      </div>
                    </li>
                  </ol>
                </div>
              </li>
              {
                this.state.zynavList.map((item, index) => {
                  return (
                    <li
                      className="zy-navItem"
                      key={index}
                      onMouseOver={this.show}>
                      <a href="#" className="zy-link">
                        <span onMouseMove={this.changList}>{item}</span>
                      </a>

                    </li>
                  );

                })
              }
            </ul>
          </div>
          <div className="zy-searchmi">
            <form className="zy-searchForm">
              <input type="text"
                className={this.state.zysearch ? "zy-searchtext borde" : "zy-searchtext"}
                onFocus={this.hiddenSearch}
                onBlur={this.showSearch} />
              <button
                className={this.state.zysearch ? "zy-searchbtn iconfont icon-fangdajing borde" : "zy-searchbtn iconfont icon-fangdajing"}
              ></button>
              <div className={this.state.zysearch ? "zy-keyword none" : "zy-keyword"}>
                <a href="#" className="zy-one">小米8</a>
                <a href="#" className="zy-one">小米MIX 25</a>
              </div>
              <div className={this.state.zysearch ? "zy-searchcont hide" : "zy-searchcont"} >
                <ul className="zy-result">
                  {
                    this.state.zyResult.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href="#" className="zy-resushop">
                            {item.result}
                            <span className="zy-resultnum">{item.num}</span>
                          </a>
                        </li>

                      )
                    })
                  }
                </ul>
              </div>
            </form>
          </div>
        </div>
        {/* 商品列表 */}
        {/* {console.log(this.state.zynavList)} */}
        <div className="zy-shopInfoList">
          <div
            onMouseOut={this.hidden}
            className={this.state.childnone ? "zy-itemchild childnone":"zy-itemchild"} ref="ee"
            onMouseMove={this.shouGoods}>
            <div className="zy-container">
              <ol className="zy-children" >
                {

                  this.state.zynavIem.map((items, indexs) => {
                    return (
                      <li key={indexs} className="zy-childrenLi">
                        <div className="zy-figure">
                          <a href="#" className={items.isboder ? "borde" : ""}>
                            <img src={items.zyItemImg} alt="" />
                          </a>
                        </div>
                        <div className="zy-title">
                          <a href="#" >{items.zyItemName}</a>
                        </div>
                        <p className={items.color ? "zy-miprice recol" : "zy-miprice"}>{items.zyItemprice}</p>
                        <div className="zy-flags">
                          <div className={items.zyItemflags ?"zy-flag":"zy-flag hidden"} >{items.zyItemflags}</div>
                        </div>
                      </li>
                    )
                  })
                }
              </ol>

              {/* 原始结构 */}
              {/* <li className="zy-childrenLi">
                  <div className="zy-figure">
                    <a href="#">
                      <img src="" alt="" />
                    </a>
                  </div>
                  <div className="zy-title">
                    <a href="#" >3</a>
                  </div>
                  <p className="zy-miprice">2</p>
                  <div className="zy-flags">
                    <div className="zy-flag">1</div>
                  </div>
                </li> */}

            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default HeadermiUI


