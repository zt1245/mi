import React, { Component } from 'react'
import RegisterUI from './RegisterUI'
import { connect} from 'react-redux'


class Register extends Component {
    render() {
        return(
            <RegisterUI {...this.props}></RegisterUI>
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


export default connect(mapStateToProps, mapDispatchToProps)(Register)