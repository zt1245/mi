import React,{ Component } from 'react'
import { connect } from 'react-redux'
import CarUI from './CarUI'


class Car extends Component {
  render() {
    return (
      <CarUI {...this.props}></CarUI>
    )
  }
}


const mapStateToProps = (state) => {
  // return 的对象是给到UI组件的 props
  return {
    isLogin: state.CarReducer.isLogin,
    list: state.LoginReducer.list,
    username: state.LoginReducer.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      localStorage.setItem("username","");
      dispatch({
        type:'UPDATE_USER'
      })
    }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Car)
