// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/new/1.jpg",
    newarr: [
      "/images/new/1.jpg",
      "/images/new/2.jpg",
      "/images/new/3.jpg",
      "/images/new/4.jpg",
      "/images/new/5.jpg",
      "/images/new/6.jpg",
      "/images/new/7.jpg",
      "/images/new/8.jpg",
      "/images/new/9.jpg"
    ],
    num: 0
  },
  tapfun(event) {
    var index = event.currentTarget.dataset.index;
    if( index == this.data.num){
      return;
    }
    this.setData({
      img: this.data.newarr[index],
      num: index
    })
  }
})