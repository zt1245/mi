import React,{ Component } from 'react'
import { connect } from 'react-redux'
import LoginUI from './LoginUI'

class Login extends Component {
  render() {
    return (
      <LoginUI {...this.props}></LoginUI>
    )
  }
}



const mapStateToProps = (state) => {
  // return 的对象是给到UI组件的 props
  return {
    title: state.LoginReducer.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      console.log(111);
    }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Login)
