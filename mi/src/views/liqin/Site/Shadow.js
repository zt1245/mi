import React, { Component, Fragment } from 'react'
import './shadow.scss'
import axios from 'axios'

class Shadow extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // ShowImg: [
            //     require('../images/mi8.jpg'),
            //     require('../images/SE.jpg')
            // ],
            list: []
        }
    }

    componentDidMount() {
        axios.get('/json/liqin/list.json')
        .then((res) => {
            console.log('lllllllllllllllliiiiiiiiiiiii')
            console.log(res.data)
            this.setState({
                list: res.data
            })
        })
    }

    render() {
        return (
            <Fragment>
                <div className='channel-line'></div>
                <div className='shadow_min8'>
                {
                    this.state.list.map((item, index) =>{

                        return(
                            <div className='conten'
                                key={index}
                            >
                                <div className='row'>
                                    <div className='show'>
                                        <a href='javascript:;' className='exposure'>
                                            <img src={item.ShowImg} alt='' />
                                        </a>
                                    </div>
                                    <h3 className='title'>{item.name}</h3>
                                    <p className='price'>{item.price}</p>
                                    <p className='money'><strong>{item.money}</strong>元起&nbsp;<del>{item.del}</del></p>
                                </div>
                            </div>
                        )
                    })
                }
                    {/* <div className='conten'>
                        <div className='row'>
                            <div className='show'>
                                <a href='javascript:;' className='exposure'>
                                    <img src={this.state.ShowImg[1]} alt='' />
                                </a>
                            </div>
                            <h3 className='title'>小米8</h3>
                            <p className='price'>全球首款双频GPS，骁龙845</p>
                            <p className='money'><strong>2499</strong>元起&nbsp;<del>2699元</del></p>
                        </div>
                    </div> */}
                </div>
                <div className='channel-line'></div>
            </Fragment>
        )
    }
}
export default Shadow;