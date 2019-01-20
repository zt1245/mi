import React,{ Component } from 'react';
import './Category.scss'
import img from '../../images/Category/phone/80.jpg'

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    }
  }
  render() {
    return (
      <div className="hj-siteCategory">
        <ul className='siteCategory-list'>
          {
            // console.log(this.props.list)
            this.props.list.map((item,index) => {
              return (
                <li className='category-item' key={index}>
                  <a href="" className='title'
                    >
                    {item.item}
                    <i className='iconfont icon-icon1'></i>
                  </a>
                  <ol className='children'
                    >
                    {
                      item.children.map((child,indexs) => {
                        return (
                          <li key={indexs}>
                            <a href="" className='link'>
                              <img src={child.imgSrc} alt=""/>
                              <span>{child.text}</span>
                            </a>
                          </li>
                        )
                      })
                    }

                  </ol>
                </li>
              )
            })
          }
        </ul>
      </div>

    )
  }
}

export default Category;
