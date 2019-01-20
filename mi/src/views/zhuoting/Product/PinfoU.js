import React, { Component } from "react";
import { connect } from "react-redux";
import Pinfo from './Pinfo.js'

class PinfoU extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Pinfo {...this.props}></Pinfo>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    username: state.LoginReducer.username,
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    addCar: (listObj) => {
      // console.log(listObj);
      var username = localStorage.getItem("username");
      var goodsInfo = localStorage.getItem(username + "GoodsInfo");
      if (username) {
        if (goodsInfo) {
          var goodsArr = JSON.parse(goodsInfo);
          var goodsObj = listObj;
          var flag = true;
          for (var i = 0; i < goodsArr.length; i++) {
            if (goodsArr[i].id === goodsObj.id) {
              // console.log(1111);
              goodsArr[i].num++;
              flag = false;
            }
          }
          if (flag) {
            goodsArr.push(goodsObj);
          }
          localStorage.setItem(username + "GoodsInfo", JSON.stringify(goodsArr));
        } else {
          var arr = [];
          arr.push(listObj);
          localStorage.setItem(username + "GoodsInfo", JSON.stringify(arr));
        }
        alert("成功加入购物车");
        props.history.push('/car');
      }else {
        alert('您还未登录，请登录');
        props.history.push('/login');
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PinfoU)
