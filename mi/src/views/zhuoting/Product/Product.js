import React,{ Component } from 'react'
import { connect } from 'react-redux'
import ProductUI from './ProductUI'
import axios from 'axios'


class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      phone_list: []
    }
  }
  render() {
    return (
      <ProductUI {...this.props}
        phone_list={ this.state.phone_list }
       ></ProductUI>
    )
  }
  componentDidMount(){
    axios.get('/json/zhuoting/list.json')
    .then((result) => {
      for(var i=0;i<result.data.length;i++){
        if (result.data[i].id === this.props.location.search.split("=")[1]) {
          this.setState({
            phone_list: result.data[i]
          })
        }
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

const mapStateToProps = (state) => {
  // return 的对象是给到UI组件的 props
  return {
    title: state.ProductReducer.title,
    isShow: state.ProductReducer.isShow
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      console.log(111);
    },
    disappear: () => {
      dispatch({
        type: 'CHANGE_ISSHOW'
      })
    },
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Product)
