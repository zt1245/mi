// 组件自己的的 reducer 文件

const defaultState = {
  // product组件默认数据
  list: [1,2,3],
  title: '产品页内容'
}


export default (state=defaultState,action) => {
  // console.log('我是product页面独有的reducer');
  return state;
}
