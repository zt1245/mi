import React,{ Component } from 'react'
import IsShop from './car-isShopUi'
import { connect } from 'react-redux'

class Shop extends Component {
    render() {
        return (
            <IsShop {...this.props}></IsShop>
        )
    }
}

const mapStateToProps = (state) => {
    // return 的对象是给到UI组件的 props
    return {
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


export default connect(mapStateToProps, mapDispatchToProps)(Shop)




