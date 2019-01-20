var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//跨域支持
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', function(req, res) {
  res.send('hello')
})


// 登录接口
app.post('/login',function(req,res){
  var connection = mysql.createConnection({//连接数据库需要放在这里面来处理
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
  });
  console.log(req.body.username);
  console.log(req.body.password);
  var username = req.body.username;
  var password = req.body.password;
  connection.connect();
  var  sql = `SELECT * FROM userInfo where username="${username}" and password="${password}"`;
  connection.query(sql,function (err, result) {
    if(err){
      res.send({code:-1,msg:'登录失败'});
    }else{
      console.log(result);
      if(result.length==0){
        res.send({code:1,msg:'用户名或者密码错误'});
      }else{
        res.send({code:2,msg:'登录成功',userneme: username});
      }
    }
  });
})

// 注册接口
app.post('/register',function(req,res){
  // console.log(req.body);
  var connection = mysql.createConnection({//连接数据库需要放在这里面来处理
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
  });
  var username = req.body.username;
  var password = req.body.password;
  connection.connect();
  // var  sql = `insert into userInfo (username,password) VALUES(${username},${password})`;
  var  sql = `SELECT * FROM userInfo where username="${username}"`;
  connection.query(sql,function (err, result) {
    if(err){
      res.send({code:-1,msg:'查询数据库失败'});
    }else{
      console.log(result);
      if(result.length>0){
        res.send({code:1,msg:'用户名已存在'});
      }else{
        console.log('++++++++++++++');
        var  sql1 = `insert into userInfo (username,password) VALUES("${username}","${password}")`;
        connection.query(sql1,function (err, result) {
          console.log(err);
          if(err){
            res.send({code:-1,msg:'插入失败'});
          }else{
            res.send({code:2,msg:'插入成功',username:username});
          }
        });
      }
    }
  });
});

app.listen(3001,()=>{
  console.log('success',function(){
    console.log('服务器启动成功,且地址是','http://localhost:3001')
  })
})
