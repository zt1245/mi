
const defaultState = {
  title: '头部内容',
  username:'',
  password:'',
  totalNum: 0
}

export default (prevState=defaultState,action) => {
  if(action.type==='EXIT_LOGIN'){
    let newState=JSON.parse(JSON.stringify(prevState));
    newState.username='';
    return newState;
  }
  if(action.type==='TOTAL_NUM'){
    let newState=JSON.parse(JSON.stringify(prevState));
    newState.totalNum = action.totalNum;
    return newState
  }
  return prevState;
}
