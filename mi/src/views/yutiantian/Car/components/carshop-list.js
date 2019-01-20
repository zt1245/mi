import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class carshopList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allshowHook: false,
            carlist: [],
            allNum: [],
            show:''
        }

        this.changeInput = this.changeInput.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {
        return (
            this.state.carlist.map((item, index) => {
                return (

                    <div className="car-item" key={index}>
                        <div className="item-table clearfix">
                            <div className="item-row">
                                {/* 小勾 */}
                                <div className="getTrue">
                                    <i className='iconfont'>
                                    </i>
                                </div>
                                {/* 图片 */}
                                <div className="item-pic">
                                    <a href="#">
                                        <img src={item.pic} alt="" />
                                    </a>
                                </div>
                                {/* 商品名称 */}
                                <div className="item-g-name">
                                    <h3>
                                        <a href="#">
                                            <span>{item.shopName}&nbsp;&nbsp;</span>
                                            <span>{item.shopVersion}&nbsp;&nbsp;</span>
                                            <span>{item.shopColor }</span>
                                        </a>
                                    </h3>
                                </div>
                                {/* 单价 */}
                                <div className="item-g-price">{item.singlePrice}元</div>
                                {/* 数量 */}
                                <div className="item-g-num">
                                    <div className="item-input">
                                        <a onClick={() => {
                                            this.delete(index);
                                        }}>
                                            <i className="iconfont icon-jian"></i>
                                        </a>
                                        <input type="text" value={this.state.allNum[index]} onChange={this.changeInput}/>
                                        <a onClick={() => {
                                            this.add(index);
                                        }}>
                                            <i className="iconfont icon-jia"></i>
                                        </a>
                                    </div>
                                </div>
                                {/* 小计 */}
                                <div className="item-g-smallPrice">{item.singlePrice * this.state.allNum[index]}元</div>
                                {/* 操作 */}
                                <div className="item-g-opation">
                                    <a onClick={() => {
                                        this.deleteItem(index);
                                    }}>
                                        <i className="iconfont icon-cuo"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
    changeInput() {
        console.log(1);
    }
    delete(index) {
        var allArr = this.state.allNum;
        var username = localStorage.getItem("username");
        var goodsInfo = localStorage.getItem(username+"GoodsInfo");
        var goodsArr = JSON.parse(goodsInfo);
        console.log(goodsArr)
        for (var i = 0; i < allArr.length;i++){
            if(i === index){
                if(allArr[i] === 1){
                    allArr[i] = 1;
                }else {
                    allArr[i]--;
                }
            }
        }
        console.log(allArr);
        for(var j = 0;j<goodsArr.length;j++){
            if(j === index){
                goodsArr[j].num = allArr[j];
            }
        }
        localStorage.setItem(username+"GoodsInfo",JSON.stringify(goodsArr));
        this.setState({
            allNum: allArr
        })
        return false;
    }
    add(index) {
        var allArr = this.state.allNum;
        var username = localStorage.getItem("username");
        var goodsInfo = localStorage.getItem(username + "GoodsInfo");
        var goodsArr = JSON.parse(goodsInfo);
        console.log(goodsArr)
        for (var i = 0; i < allArr.length; i++) {
            if (i === index) {
                allArr[i]++;
            }
        }
        for (var j = 0; j < goodsArr.length; j++) {
            if (j === index) {
                goodsArr[j].num = allArr[j];
            }
        }
        localStorage.setItem(username + "GoodsInfo", JSON.stringify(goodsArr));
        this.setState({
            allNum: allArr
        })
        return false;
    }
    deleteItem(index){
        console.log(index);
        var username = localStorage.getItem("username");
        var goodsInfo = localStorage.getItem(username + "GoodsInfo");
        var goodsArr = JSON.parse(goodsInfo);
        for(var i=0;i<goodsArr.length;i++){
            if(index===i){
                goodsArr.splice(i,1);
            }
        }
        localStorage.setItem(username+"GoodsInfo",JSON.stringify(goodsArr));
        var arr = this.state.carlist;
        for(var j=0;j<arr.length;j++){
            if(j===index){
                arr.splice(j,1);
            }
        }
        this.setState({
            carlist: arr
        })
    }
    componentDidMount() {
        var username = localStorage.getItem("username");
        var localInfo = localStorage.getItem(username + 'GoodsInfo');
        var arr = JSON.parse(localInfo);
        console.log(arr)
        var allArr = [];
        for(var i=0;i<arr.length;i++){
            allArr.push(arr[i].num);
        }
        this.setState({
            carlist: arr,
            allNum: allArr
        }, function () {
            console.log(this.state)
        })

    }
}

export default carshopList;
