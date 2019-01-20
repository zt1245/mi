import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './car-isShop.scss';
import CarList from './car-list';

class carIsshop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 列表数据
            carlist: [],
            //显示请勾选要结算的商品
            showgou: true,
            // 商品总数量
            totalNum: '',
            // input框的值的数组（每个商品对应的数量）
            allNum: [],
            // 控制是否显示蒙层
            showMeng: false,
            // 删除哪一个item
            inDex: '',
            // 控制全选
            selectAll: false,
            // 控制单选（一个数组，数组里头是true和false）
            select: [],
            // 选中的商品的总件数
            proNum: 0,
            // 选中的商品的总价格
            totalPrice: 0,
            // 结算框颜色
            isColor: false
        }
        this.changeInput = this.changeInput.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.cancel = this.cancel.bind(this);
        this.sure = this.sure.bind(this);
        this.selAll = this.selAll.bind(this);
        this.selseOne = this.selseOne.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div className="car-isShop">
                    <div className="container carall">
                        <div className="car-box clearfix">
                            <div className="car-lists">
                                {/* 头部 */}
                                <div className="car-head clearfix">
                                    {/* 全选 */}
                                    <div className="selectAll">
                                        <input type="checkbox"
                                            onChange={this.changeInput}
                                            className="checkboxAll"
                                            checked={this.state.selectAll}
                                            onClick={this.selAll}
                                        />
                                        <span>全选</span>
                                    </div>
                                    {/* 空格 */}
                                    <div className="space">&nbsp;</div>
                                    {/* 商品名称 */}
                                    <div className="item-name">商品名称</div>
                                    {/* 单价 */}
                                    <div className="item-singleprice">单价</div>
                                    {/* 数量 */}
                                    <div className="item-num">数量</div>
                                    {/* 小计 */}
                                    <div className="item-smallSum">小计</div>
                                    {/* 操作 */}
                                    <div className="item-opation">操作</div>
                                </div>
                                {/* 商品列表 */}
                                <div className="car-body clearfix">
                                    {
                                        this.state.carlist.map((item, index) => {
                                            return (
                                                <div className="car-item" key={index}>
                                                    <div className="item-table clearfix">
                                                        <div className="item-row">
                                                            {/* 小勾 */}
                                                            <div className="getTrue">
                                                                <input type="checkbox" className="checkboxone"
                                                                    checked={this.state.select[index]}
                                                                    onClick={() => {
                                                                        this.selseOne(index);
                                                                    }}
                                                                    onChange={this.changeInput}
                                                                />
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
                                                                        <span>{item.shopColor}</span>
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
                                                                    <input type="text" value={this.state.allNum[index]} onChange={this.changeInput} />
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
                                    }
                                </div>
                            </div>
                            <div className="allSpace"></div>
                            {/* 继续购物 */}
                            <div className="totalPrice clearfix">
                                <div className="tol-first">
                                    <NavLink to="/home">继续购物</NavLink>
                                    <span className="chooseGood">
                                        共
                                     <i className="chooseColor">{this.state.totalNum}</i>
                                        件商品，已选择
                                     <i className="chooseColor"> {this.state.proNum}</i>
                                        件
                                 </span>
                                </div>
                                {/* 占位符 */}
                                <div className="noPosition">优惠活动呀</div>
                                {/* 合计 */}
                                <span className="allPrices">
                                    合计：
                                 <i>{this.state.totalPrice}</i>
                                    元
                             </span>
                                {/* 结算 */}
                                <a href="#" className="goTobuy"
                                    style={{ background: this.state.totalPrice>0 ? "#ff6700" : "#e0e0e0", color: this.state.totalPrice>0 ? "#fff" : "#b0b0b0" }}>去结算</a>
                                {/* 请勾选 */}
                                <div className="pleaseChoose"
                                    style={this.state.showgou ? { display: 'block' } : { display: 'none' }}>
                                    请勾选需要结算的商品
                                    <i className="iconfont"></i>
                                    <i className="iconfont arrow2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="car-list">
                            <CarList title="买购物车中商品的人还买了" />
                        </div>
                    </div>
                </div>
                <div className={this.state.showMeng ? "mengblock showmeng" : "mengblock"}>
                    <div className="mengf">
                        <div className="mengtext">
                            <h3>确认删除吗？</h3>
                        </div>
                        <div className="mengdele">
                            <button className="cancel" onClick={this.cancel}>取消</button>
                            <button className="sure" onClick={this.sure} >确认</button>
                        </div>
                        <div className="mengcuo">
                            <a onClick={this.cancel}
                                className="iconfont icon-cuo">
                            </a>
                        </div>
                    </div>
                </div>
                <div className={this.state.showMeng ? "mengc showmeng" : "mengc"}></div>
            </Fragment>
        )
    }
    //改变input值
    changeInput() {
        console.log(1);
    }

    //蒙层点击取消
    cancel() {
        this.setState({
            showMeng: false
        })
        return false;
    }

    //数量减少
    delete(index) {
        // input框的值的数组（每个商品对应的数量）
        var allArr = this.state.allNum;
        //获取localstorage的数据
        var username = localStorage.getItem("username");
        var goodsInfo = localStorage.getItem(username + "GoodsInfo");
        var goodsArr = JSON.parse(goodsInfo);
        // 商品总数量
        var num = this.state.totalNum;
        //获取商品列表
        var arr = this.state.carlist;
        var tnum = 0;
        // 控制单选（一个数组，数组里头是true和false）
        var tSelect = this.state.select;
        console.log(allArr);
        var hnum = 0;
        for (var i = 0; i < allArr.length; i++) {
            //这个i是指循环出来的下标
            if (i === index) {
                if (allArr[i] === 1) {
                    allArr[i] = 1;
                    for (var j = 0; j < tSelect.length; j++) {
                        console.log(tSelect[j])
                        if (tSelect[j] === true) {
                            console.log(allArr[j], arr[j].singlePrice);
                            hnum += allArr[j];
                            tnum += parseInt(allArr[j]) * parseInt(arr[j].singlePrice);
                        }
                    }
                } else {
                    allArr[i]--;
                    num--;
                    for (var m = 0; m < tSelect.length; m++) {
                        console.log(tSelect[m])
                        if (tSelect[m] === true) {
                            console.log(allArr[m], arr[m].singlePrice);
                            hnum += allArr[m];
                            tnum += parseInt(allArr[m]) * parseInt(arr[m].singlePrice);
                        }
                    }
                }
            }
        }
        for (var k = 0; k < goodsArr.length; k++) {
            if (k === index) {
                goodsArr[k].num = allArr[k];
            }
        }

        localStorage.setItem(username + "GoodsInfo", JSON.stringify(goodsArr));
        this.setState({
            allNum: allArr,
            totalNum: num,
            totalPrice: tnum,
            proNum: hnum
        })

        return false;
    }

    //数量增加
    add(index) {
        var allArr = this.state.allNum;
        var username = localStorage.getItem("username");
        var goodsInfo = localStorage.getItem(username + "GoodsInfo");
        var goodsArr = JSON.parse(goodsInfo);
        var num = this.state.totalNum;
        var arr = this.state.carlist;
        var tnum = 0;
        var tSelect = this.state.select;
        var hnum = 0;
        console.log(goodsArr)
        for (var i = 0; i < allArr.length; i++) {
            if (i === index) {
                allArr[i]++;
                num++;
                for (var j = 0; j < tSelect.length; j++) {
                    console.log(tSelect[j])
                    if (tSelect[j] === true) {
                        console.log(allArr[j], arr[j].singlePrice);
                        hnum += allArr[j];
                        tnum += parseInt(allArr[j]) * parseInt(arr[j].singlePrice);
                    }
                }
            }
        }
        for (var k = 0; k < goodsArr.length; k++) {
            if (k === index) {
                goodsArr[k].num = allArr[k];
            }
        }
        localStorage.setItem(username + "GoodsInfo", JSON.stringify(goodsArr));
        this.setState({
            allNum: allArr,
            totalNum: num,
            totalPrice: tnum,
            proNum: hnum
        })
        return false;
    }

    //删除单条数据
    deleteItem(index) {
        this.setState({
            showMeng: true,
            inDex: index,
        })
    }

    //点击确认，删除数据
    sure() {
        var username = localStorage.getItem("username");
        var goodsInfo = localStorage.getItem(username + "GoodsInfo");
        var goodsArr = JSON.parse(goodsInfo);
        var num = this.state.totalNum;
        var tNum = 0;
        for (var i = 0; i < goodsArr.length; i++) {
            if (this.state.inDex === i) {
                tNum = goodsArr[i].num;
                goodsArr.splice(i, 1);
            }
        }
        num = num - tNum;
        localStorage.setItem(username + "GoodsInfo", JSON.stringify(goodsArr));
        var arr = this.state.carlist;
        for (var j = 0; j < arr.length; j++) {
            if (j === this.state.inDex) {
                arr.splice(j, 1);
            }
        }
        var arrA = this.state.select;
        for (var k = 0; k < arrA.length; k++) {
            if (k === this.state.inDex) {
                arrA.splice(this.state.inDex, 1);
            }
        }
        var hj = 0;
        var totnum = 0;
        var sel = this.state.select;
        var alln = this.state.allNum;
        var allLi = this.state.carlist;
        for (var m = 0; m < sel.length; m++) {
            if (sel[m] === true) {
                totnum += alln[m];
                hj += parseInt(alln[m]) * parseInt(allLi[m].singlePrice);
            }
        }
        this.setState({
            carlist: arr,
            totalNum: num,
            showMeng: false,
            select: arrA,
            proNum: totnum,
            totalPrice: hj
        })
    }

    //全选
    selAll() {
        var arr = this.state.select;
        var liArr = this.state.carlist;
        var tNum = 0;
        var seArr = this.state.select;
        var tprice = 0;
        var flag = true;
        var anum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (this.state.selectAll === false) {
                arr[i] = true;
            } else {
                arr[i] = false;
            }
        }
        for (var j = 0; j < seArr.length; j++) {
            if (seArr[j] === true) {
                tNum += liArr[j].num;
                flag = false;
                tprice += parseInt(liArr[j].num) * parseInt(liArr[j].singlePrice);
                this.setState({
                    isColor: true
                })
            }
            if (seArr[j] === false) {
                anum++;

            }
        }
        if (anum === seArr.length) {
            flag = true;
            this.setState({
                isColor: false
            })
        }
        this.setState({
            selectAll: !this.state.selectAll,
            select: arr,
            proNum: tNum,
            totalPrice: tprice,
            showgou: flag
        })
    }

    //单选
    selseOne(index) {
        // this.setState({
        //     showgou:false
        // })
        var arr = this.state.select;
        var isTrue = false;
        var liArr = this.state.carlist;
        var tNum = 0;
        var tprice = 0;
        var sNum = 0;
        var alln = this.state.allNum;
        var flag = true;
        var anum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (i === index) {
                arr[i] = !arr[i];
            }
            if (arr[i] === false) {
                isTrue = false;
            } else {
                sNum++;
            }
        }
        if (sNum === arr.length) {
            isTrue = true;
            this.setState({
                isColor: false
            })
        }
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] === true) {
                console.log(alln[j], liArr[j].singlePrice)
                tNum += alln[j];
                flag = false;
                tprice += parseInt(alln[j]) * parseInt(liArr[j].singlePrice);
                this.setState({
                    isColor: true
                })
            }
            if (arr[j] === false) {
                anum++;
                this.setState({
                    isColor: false
                })
            }
        }
        if (anum === arr.length) {
            flag = true;
        }
        this.setState({
            select: arr,
            selectAll: isTrue,
            proNum: tNum,
            totalPrice: tprice,
            showgou: flag
        })
    }

    componentDidMount() {
        var username = localStorage.getItem("username");
        var localInfo = localStorage.getItem(username + 'GoodsInfo');
        var arr = JSON.parse(localInfo);
        var total = 0;
        // console.log(arr)
        var selectArr = [];
        var allArr = [];
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                total += arr[i].num;
                allArr.push(arr[i].num);
                selectArr.push(false);
            }
            this.setState({
                carlist: arr,
                allNum: allArr,
                totalNum: total,
                select: selectArr
            })
        }
    }
}

export default carIsshop;
