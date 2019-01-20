function randomNum(min,max){
  var sj = parseInt(Math.random()*(max-min+1)+min);//取整函数法
  //var sj = Math.floor(Math.random()*(max-min+1)+min);//地板函数法
  //var sj = Math.round(Math.random()*(max-min)+min);//四舍五入函数法
  return sj;
}

export default () => {
  var num = "0123456789abcdef";//16进制颜色值可取到的字符集合
  var ys = "#";
  for(var i = 0; i < 6;i++){
    //随机获取num的下标值
    //var sj = parseInt(Math.random()*16);//直接再写一次随即
    var sj = randomNum(0,15);//调用上面写的方法也可
    ys += num.charAt(sj);
  }
  return ys;//返回获取的随即颜色
}
