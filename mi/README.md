public:
  json 文件夹放置我们自己需要请求的 假数据

src:
  index.js  入口文件
  App.js  主组件
  views
    hejin 每人在自己的文件夹下面去做自己负责的页面组件
      Home
        store
          actionCreate.js   组件动作生成器文件
          reducer.js        组件的reducer文件
        Home.js             home页面的容器组件
        HomeUI.js           home页面的UI组件
        Home.scss           home页面的样式文件  每人的样式class文件最外层使用自己第一个字母开头（如：hj-home），用sass写样式
        images              组件需要用到的图片放置的位置

    liqin
    zhuoting
    zhouying
    yutiantian

  components
    Footer  公用的头部组件
    Header  公用的底部组件
    images  公用的图片





