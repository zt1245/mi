// 组件自己的的 reducer 文件

// console.log(localStorage.getItem("username")+'GoodInfo');

const defaultState = {
  // login组件默认数据
  title: 'login页内容',
  username: localStorage.getItem("username"),
  password: ''
}


export default (state=defaultState,action) => {
  // console.log('我是login页面独有的reducer',action);
  // console.log(state.username);
  let newState = JSON.parse(JSON.stringify(state))
  if(action.type==='IS_LOGIN'){
    newState.username = action.username;
    newState.password = action.password;
  }

  if (action.type === 'UPDATE_USER') {
    newState.username = '';
    // console.log(newState)
    window.location.reload();
  }
  return newState;
}
