import React,{ Component } from 'react'
import { connect } from 'react-redux'
import HomeUI from './HomeUI'


// home 容器组件

class Home extends Component {
  render() {
    return (
      <HomeUI {...this.props}></HomeUI>
    )
  }

  componentDidMount() {
    // console.log(111111111)
  }
}


const mapStateToProps = (state) => {
  // return 的对象是给到UI组件的 props
  return {
    title: state.HomeReducer.title,
    list: state.HomeReducer.categoryItem,
    promo: state.HomeReducer.Promo,
    flash: state.HomeReducer.flash,
    Phone: state.HomeReducer.Phone,
    username: state.LoginReducer.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      console.log(111);
    }
  }
};




export default connect(mapStateToProps,mapDispatchToProps)(Home);


