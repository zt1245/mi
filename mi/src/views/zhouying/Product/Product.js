import { connect } from 'react-redux'
import ProductUI from './ProductUI'

const mapStateToProps = (state) => {
  // return 的对象是给到UI组件的 props
  return {
    title: state.ProductReducer.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      console.log(111);
    }
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(ProductUI)
