import React,{ Component } from 'react';
import { connect } from 'react-redux'
import HeaderUI from './HeaderUI'


class Header extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render () {
    return (
      <HeaderUI {...this.props}></HeaderUI>
    )
  }
}

const mapStateToProps = ({ HeaderReducer }) => {
  return {
    title: HeaderReducer.title,
    username:HeaderReducer.username,
    password:HeaderReducer.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    exitLogin:() =>{
      dispatch({
        type:'EXIT_LOGIN'
      })
    },
    totalNumGoodsInfo(num) {
      console.log(num);
      dispatch({
        type: 'TOTAL_NUM',
        totalNum: num
      })
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);
