import React,{ Component } from 'react';
import './Promo.scss'

class Promo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="home-promo-list">
      {
        this.props.promo.map((item,index) => {
          return (
            <li key={index}>
              <a href="">
                <img src={item} alt=""/>
              </a>
            </li>
          )
        })
      }

      </ul>

    )
  }
}

export default Promo;
