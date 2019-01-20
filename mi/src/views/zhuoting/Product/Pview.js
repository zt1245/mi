import React,{ Component } from "react"
import "./pview.scss";
import axios from 'axios'

class Pview extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0,
      imgArr: [],
      liIndex: 0
    }
    this.changeImg = this.changeImg.bind(this);
    this.maskShow = this.maskShow.bind(this);
    this.maskDis = this.maskDis.bind(this);
    this.bShow = this.bShow.bind(this);
    this.bDis = this.bDis.bind(this);
    this.move = this.move.bind(this);
  }
  changeImg(index){
    this.setState({
      num: index,
      isShow: false,
      liIndex: index
    })
  }
  maskShow(){
    this.setState({
      isShow: true
    })
  }
  move(e){
    var x = e.pageX;
    var y = e.pageY;
    var left = x - this.refs.small.offsetLeft - this.refs.sPic.offsetWidth/2-this.refs.warpper.offsetLeft ;
    var top = y - this.refs.small.offsetTop - this.refs.sPic.offsetHeight/2-this.refs.warpper.offsetTop;
    var le = this.refs.sPic.offsetWidth;
    var to = this.refs.sPic.offsetHeight;
    // console.log(y,this.refs.small.offsetTop,this.refs.sPic.offsetHeight);
    // console.log(left)
    if (left >= le){
      left = le;
    }else if(left<0){
      left = 0;
    }
    if (top >= to) {
      top = to;
    } else if (top < 0) {
      top = 0;
    }
    var bigLeft = (left * this.refs.bPic.offsetWidth) / this.refs.small.offsetWidth;
    var bigTop = (top * this.refs.bPic.offsetHeight) / this.refs.small.offsetHeight;
    this.refs.sPic.style.left = left + 'px';
    this.refs.sPic.style.top = top + 'px';
    this.refs.bPic.style.left = -bigLeft + 'px';
    this.refs.bPic.style.top = -bigTop + 'px';
  }
  maskDis(){
    this.setState({
      isShow: false
    })
  }
  bShow(){
    this.setState({
      isShow: true
    })
  }
  bDis() {
    this.setState({
      isShow: false
    })
  }
  componentDidMount(){
    axios.get('/json/zhuoting/list.json')
    .then((result) => {
      for (var i = 0; i < result.data.length; i++) {
        if (result.data[i].id === this.props.location.search.split("=")[1]) {
          this.setState({
            imgArr: result.data[i].show_img
          })
        }
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }
  render() {
    return(
      <div className = "pro-view" >
          <div className="view-con" ref="mBox">
            <div className="view-warpper" ref='warpper'>
              {/* 小图 */}
            <div className="smallPic"
              onMouseEnter={ this.maskShow }
              onMouseLeave={ this.maskDis }
              ref="small"
              onMouseMove={ this.move }
              >
              <img src={ this.state.imgArr[this.state.num] }
                alt=""
                />
                {/* 遮罩层 */}
                <div
                className={ this.state.isShow ? 'isshow mask' :'mask' }
                ref="sPic"

                ></div>
              </div>
              {/* 大图 */}
            <div className={ this.state.isShow? 'bigPic bShow' : 'bigPic'}
              onMouseEnter={ this.bShow }
              onMouseLeave={ this.bDis }
            >
                <img src={ this.state.imgArr[this.state.num] } alt="" ref="bPic"/>
              </div>
              <ul>
                {
                  this.state.imgArr.map((item, index) => {
                    return (
                      <li key={index}
                        onClick={() => {
                          this.changeImg(index);
                        }}
                        style={{borderColor: index === this.state.liIndex? "#ff6700" : "#e0e0e0"}}
                      >
                        <img src={item} alt="" />
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
      </div>
    )
  }
}

export default Pview
