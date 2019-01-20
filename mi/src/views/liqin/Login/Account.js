// 这是Account的容器组件

import React,{ Component } from 'react'
import { connect } from 'react-redux'
import AccountUI from './AccountUI'

class Account extends Component {
  render() {
    return (
      <AccountUI {...this.props}></AccountUI>
    )
  }
}



const mapStateToProps = (state) => {
  // return 的对象是给到UI组件的 props
  return {
    username: state.LoginReducer.username,
    password: state.LoginReducer.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    baocun: (username,password) => {
      dispatch({
        type: 'IS_LOGIN',
        username,
        password
      })
    }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Account)
