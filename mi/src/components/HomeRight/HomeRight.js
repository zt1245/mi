import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeRightUI from './HomeRightUI'
// import
class HomeRight extends Component {

    render() {
        return (
            <HomeRightUI {...this.props}></HomeRightUI>
        )
    }
}

const mapStateToProps = (state) => {
    // return 的对象是给到UI组件的 props
    return {
        title: state.LoginReducer.title,
        totalNum: state.HeaderReducer.totalNum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            console.log(33333333333);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeRight);
