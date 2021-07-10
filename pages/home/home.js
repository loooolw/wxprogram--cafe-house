// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerarr: [
      "/imaghome/baner1.jpg",
      "/imaghome/baner2.jpg",
      "/imaghome/baner3.jpg",
      "/imaghome/baner4.jpg",
    ],
    num: 0,
    homearr:[
      {
        src: "/imaghome/home/card01.jpg",
        text: '给特别的你'
      },
      {
        src: "/imaghome/home/card02.jpg",
        text: '我想对你说'
      },
      {
        src: "/imaghome/home/card03.jpg",
        text: '勇敢爱'
      },
      {
        src: "/imaghome/home/card04.jpg",
        text: '一个人的精彩'
      },
      {
        src: "/imaghome/home/card05.jpg",
        text: '萌萌哒'
      },
      {
        src: "/imaghome/home/card06.jpg",
        text: '友谊万岁'
      },
      {
        src: "/imaghome/home/card07.jpg",
        text: '恋人未满'
      },
      {
        src: "/imaghome/home/card08.jpg",
        text: '生日快乐'
      }
    ],
    xihuanarr: [
        "/imaghome/ban1.jpg","/imaghome/ban2.jpg","/imaghome/ban3.jpg","/imaghome/ban4.jpg","/imaghome/ban5.jpg"
    ],
    num:0,
    likearr:[
      {
        src: "/imaghome/home/newPro1.jpg",
        text: '卡布奇诺'
      },
      {
        src: "/imaghome/home/newPro2.jpg",
        text: '白咖啡'
      },
      {
        src: "/imaghome/home/newPro3.jpg",
        text: '摩卡咖啡'
      },
      {
        src: "/imaghome/home/newPro4.jpg",
        text: '爱尔兰咖啡'
      },
      {
        src: "/imaghome/home/newPro5.jpg",
        text: '甜品咖啡'
      },
      {
        src: "/imaghome/home/newPro6.jpg",
        text: '意大利咖啡'
      },
      {
        src: "/imaghome/home/newPro7.jpg",
        text: '拿铁咖啡'
      },
      {
        src: "/imaghome/home/newPro8.jpg",
        text: '中式咖啡'
      }
    ]
  },
  changefun(event) {
    this.setData({
      num: event.detail.current
    })
  }
})