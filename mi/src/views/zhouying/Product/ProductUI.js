// 首页product 的UI 组件
import React from 'react';
import Header from '@/components/Header/Header.js'
import Footer from '@/components/Footer/Footer.js'
import './product.scss'


const ProductUI = (props) => {
  return (
    <div className='zt-product'>
      <Header></Header>
      <div className="product-con">
        这是产品详情页面{props.title}
      </div>
      <Footer></Footer>
    </div>
  )
}


export default ProductUI
