// 组件自己的的 reducer 文件

const defaultState = {
  // home组件默认数据
  title: '首页标题',
  categoryItem: [
    {
      item: '手机 电话卡',
      children: [
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米8 青春版',
          imgSrc: require('../../images/Category/phone/qingchun-80.png')
        },
        {
          text: '小米8 屏幕指纹版',
          imgSrc: require('../../images/Category/phone/pingmu-80.png')
        },
        {
          text: '小米8',
          imgSrc: require('../../images/Category/phone/m8-80.png')
        },
        {
          text: '小米8 SE',
          imgSrc: require('../../images/Category/phone/m8se-80.png')
        },
        {
          text: '小米MIX 2S',
          imgSrc: require('../../images/Category/phone/mix2s80-80white.png')
        },
        {
          text: '小米Max 3',
          imgSrc: require('../../images/Category/phone/max3-80-80.png')
        },
        {
          text: '小米6X',
          imgSrc: require('../../images/Category/phone/80808080808080.jpg')
        },
        {
          text: '黑鲨游戏手机 Helo',
          imgSrc: require('../../images/Category/phone/heishahelo-80.png')
        },
        {
          text: '黑鲨游戏手机',
          imgSrc: require('../../images/Category/phone/heisha-80.png')
        },
        {
          text: '小米MIX 2',
          imgSrc: require('../../images/Category/phone/mix2-80.png')
        },
        {
          text: '红米6 Pro',
          imgSrc: require('../../images/Category/phone/6pro140-140.png')
        },
        {
          text: '红米6',
          imgSrc: require('../../images/Category/phone/666666.png')
        },
        {
          text: '红米6A',
          imgSrc: require('../../images/Category/phone/6AAAA.png')
        },
        {
          text: '红米Note 5',
          imgSrc: require('../../images/Category/phone/note5-80-80.png')
        },
        {
          text: '红米S2',
          imgSrc: require('../../images/Category/phone/s2-80-80.png')
        },
        {
          text: '移动4G+专区',
          imgSrc: require('../../images/Category/phone/80.jpg')
        },
        {
          text: '对比手机',
          imgSrc: require('../../images/Category/phone/compare.jpg')
        },
        {
          text: '米粉卡 日租卡',
          imgSrc: require('../../images/Category/phone/mifenka-1.jpg')
        },
        {
          text: '小米移动 电话卡',
          imgSrc: require('../../images/Category/phone/mimobile.jpg')
        },
        {
          text: '手机上门维修',
          imgSrc: require('../../images/Category/phone/weixiu80-80.png')
        },
      ]
    },
    {
      item: '电视 盒子',
      children: [
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米8 青春版',
          imgSrc: require('../../images/Category/phone/qingchun-80.png')
        },
        {
          text: '小米8 屏幕指纹版',
          imgSrc: require('../../images/Category/phone/pingmu-80.png')
        },
        {
          text: '小米8',
          imgSrc: require('../../images/Category/phone/m8-80.png')
        },
        {
          text: '小米8 SE',
          imgSrc: require('../../images/Category/phone/m8se-80.png')
        }
      ]
    },
    {
      item: '笔记本 平板',
      children: [
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米8 青春版',
          imgSrc: require('../../images/Category/phone/qingchun-80.png')
        },
        {
          text: '小米8 屏幕指纹版',
          imgSrc: require('../../images/Category/phone/pingmu-80.png')
        },
        {
          text: '小米8',
          imgSrc: require('../../images/Category/phone/m8-80.png')
        },
        {
          text: '小米8 SE',
          imgSrc: require('../../images/Category/phone/m8se-80.png')
        }
      ]
    },
    {
      item: '家电 插线板',
      children: [
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米8 青春版',
          imgSrc: require('../../images/Category/phone/qingchun-80.png')
        },
        {
          text: '小米8 屏幕指纹版',
          imgSrc: require('../../images/Category/phone/pingmu-80.png')
        },
        {
          text: '小米8',
          imgSrc: require('../../images/Category/phone/m8-80.png')
        },
        {
          text: '小米8 SE',
          imgSrc: require('../../images/Category/phone/m8se-80.png')
        }
      ]
    },
    {
      item: '出行 穿戴',
      children: [
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米8 青春版',
          imgSrc: require('../../images/Category/phone/qingchun-80.png')
        },
        {
          text: '小米8 屏幕指纹版',
          imgSrc: require('../../images/Category/phone/pingmu-80.png')
        },
        {
          text: '小米8',
          imgSrc: require('../../images/Category/phone/m8-80.png')
        },
        {
          text: '小米8 SE',
          imgSrc: require('../../images/Category/phone/m8se-80.png')
        }
      ]
    },
    {
      item: '智能 路由器',
      children: [
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米8 青春版',
          imgSrc: require('../../images/Category/phone/qingchun-80.png')
        },
        {
          text: '小米8 屏幕指纹版',
          imgSrc: require('../../images/Category/phone/pingmu-80.png')
        },
        {
          text: '小米8',
          imgSrc: require('../../images/Category/phone/m8-80.png')
        },
        {
          text: '小米8 SE',
          imgSrc: require('../../images/Category/phone/m8se-80.png')
        }
      ]
    },
    {
      item: '电源  配件',
      children: [
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米8 青春版',
          imgSrc: require('../../images/Category/phone/qingchun-80.png')
        },
        {
          text: '小米8 屏幕指纹版',
          imgSrc: require('../../images/Category/phone/pingmu-80.png')
        },
        {
          text: '小米8',
          imgSrc: require('../../images/Category/phone/m8-80.png')
        },
        {
          text: '小米8 SE',
          imgSrc: require('../../images/Category/phone/m8se-80.png')
        }
      ]
    },
    {
      item: '健康 儿童',
      children: [
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米8 青春版',
          imgSrc: require('../../images/Category/phone/qingchun-80.png')
        },
        {
          text: '小米8 屏幕指纹版',
          imgSrc: require('../../images/Category/phone/pingmu-80.png')
        },
        {
          text: '小米8',
          imgSrc: require('../../images/Category/phone/m8-80.png')
        },
        {
          text: '小米8 SE',
          imgSrc: require('../../images/Category/phone/m8se-80.png')
        }
      ]
    },
    {
      item: '耳机 音箱',
      children: [
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米8 青春版',
          imgSrc: require('../../images/Category/phone/qingchun-80.png')
        },
        {
          text: '小米8 屏幕指纹版',
          imgSrc: require('../../images/Category/phone/pingmu-80.png')
        },
        {
          text: '小米8',
          imgSrc: require('../../images/Category/phone/m8-80.png')
        },
        {
          text: '小米8 SE',
          imgSrc: require('../../images/Category/phone/m8se-80.png')
        }
      ]
    },
    {
      item: '生活 箱包',
      children: [
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米MIX 3',
          imgSrc: require('../../images/Category/phone/mix3-80.png')
        },
        {
          text: '小米8 青春版',
          imgSrc: require('../../images/Category/phone/qingchun-80.png')
        },
        {
          text: '小米8 屏幕指纹版',
          imgSrc: require('../../images/Category/phone/pingmu-80.png')
        },
        {
          text: '小米8',
          imgSrc: require('../../images/Category/phone/m8-80.png')
        },
        {
          text: '小米8 SE',
          imgSrc: require('../../images/Category/phone/m8se-80.png')
        }
      ]
    }

  ],
  Promo: [
    require('../../images/Promo/promo1.jpg'),
    require('../../images/Promo/promo2.jpg'),
    require('../../images/Promo/promo3.jpg')
  ],
  flash: [
    {
      title: '小米小钢炮蓝牙音箱 2 白色',
      desc: '极简设计，专业喇叭',
      price: '9.9',
      del: '129元',
      flag: '',
      src: require('../../images/flash/flash1.jpg')
    },
    {
      title: '小米电视4C 55英寸体育版',
      desc: '4K超高清，超窄边设计',
      price: '2199',
      del: '2899元',
      flag: '立减700',
      src: require('../../images/flash/flash2.jpg')
    },
    {
      title: '红米Note 5 3GB+32GB 玫瑰金',
      desc: '1.4μm大像素 AI 双摄',
      price: '849',
      del: '1099元',
      flag: ' ',
      src: require('../../images/flash/flash4.jpg')
    },
    {
      title: '小米降噪耳机 黑色',
      desc: '双动圈+动铁声学架构',
      price: '149.5',
      del: '299元',
      flag: '5折秒杀',
      src: require('../../images/flash/flash5.jpg')
    },
    {
      title: '小米活塞耳机 清新版 银色',
      desc: '新鲜绽放',
      price: '1',
      del: '29元',
      flag: '1元秒杀',
      src: require('../../images/flash/flash6.jpg')
    },
    {
      title: '小米降噪耳机 黑色',
      desc: '双动圈+动铁声学架构',
      price: '149.5',
      del: '299元',
      flag: '5折秒杀',
      src: require('../../images/flash/flash7.jpg')
    },
    {
      title: '小米活塞耳机 清新版 银色',
      desc: '新鲜绽放',
      price: '1',
      del: '29元',
      flag: '1元秒杀',
      src: require('../../images/flash/flash7.jpg')
    },
    {
      title: '小米降噪耳机 黑色',
      desc: '双动圈+动铁声学架构',
      price: '149.5',
      del: '299元',
      flag: '5折秒杀',
      src: require('../../images/flash/flash1.jpg')
    },
    {
      title: '小米活塞耳机 清新版 银色',
      desc: '新鲜绽放',
      price: '1',
      del: '29元',
      flag: '1元秒杀',
      src: require('../../images/flash/flash2.jpg')
    },
    {
      title: '小米降噪耳机 黑色',
      desc: '双动圈+动铁声学架构',
      price: '149.5',
      del: '299元',
      flag: '5折秒杀',
      src: require('../../images/flash/flash4.jpg')
    },
    {
      title: '小米活塞耳机 清新版 银色',
      desc: '新鲜绽放',
      price: '1',
      del: '29元',
      flag: '1元秒杀',
      src: require('../../images/flash/flash6.jpg')
    }
  ],
  Phone: [
    {
      title: '小米8 青春版 4GB+64GB',
      desc: '潮流镜面渐变色，2400万自拍旗舰',
      price: '1399',
      del: '',
      flag: '新品',
      src: require('../../images/Phone/phone1.jpg')
    },
    {
      title: '小米8 屏幕指纹版 8GB+128GB',
      desc: '全球首款压感屏幕指纹，双频GPS超精准定位',
      price: '3599',
      del: '',
      flag: '新品',
      src: require('../../images/Phone/phone2.jpg')
    },
    {
      title: '小米8 SE 4GB+64GB',
      desc: 'AI 超感光双摄，三星 AMOLED 屏幕',
      price: '1499',
      del: '1799',
      flag: '减 300 元  ',
      src: require('../../images/Phone/phone3.jpg')
    },
    {
      title: '小米MIX 2S 8GB+256GB',
      desc: '骁龙845 年度旗舰处理器，艺术品般陶瓷机身',
      price: '3399',
      del: '3999',
      flag: '减 600 元',
      src: require('../../images/Phone/phone4.jpg')
    },
    {
      title: '小米6X 6GB+128GB',
      desc: '轻薄美观的拍照手机',
      price: '1649',
      del: '1999',
      flag: '减 350 元',
      src: require('../../images/Phone/phone5.jpg')
    },
    {
      title: '小米Max 3 4GB+64GB',
      desc: '',
      price: '1599',
      del: '1699',
      flag: '减 100 元',
      src: require('../../images/Phone/phone6.jpg')
    },
    {
      title: '红米6 Pro 3GB+32GB',
      desc: '',
      price: '869',
      del: '999',
      flag: '减 130 元',
      src: require('../../images/Phone/phone7.jpg')
    },
    {
      title: '红米6A 2GB+16GB',
      desc: '',
      price: '569',
      del: '599',
      flag: '减 30 元',
      src: require('../../images/Phone/phone8.jpg')
    }
  ]
}

export default (state=defaultState,action) => {
  // console.log('我是home页面独有的reducer');
  return state;
}
