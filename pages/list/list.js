// pages/list/list.js
Page({

  data: {
    idx: 0,
    CategoryList: [{
        cate_id: 1,
        cate_name: "居家",
        banner_url: "http://yanxuan.nosdn.127.net/92357337378cce650797444bc107b0f7.jpg",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '布艺软装',
            image: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png"
          },
          {
            child_id: 2,
            name: '被枕',
            image: "http://yanxuan.nosdn.127.net/b43ef7cececebe6292d2f7f590522e05.png"
          },
          {
            child_id: 3,
            name: '床品件套',
            image: "http://yanxuan.nosdn.127.net/81f671bd36bce05d5f57827e5c88dd1b.png"
          },
          {
            child_id: 4,
            name: '灯具',
            image: "http://yanxuan.nosdn.127.net/f702dc399d14d4e1509d5ed6e57acd19.png"
          },
          {
            child_id: 5,
            name: '地垫',
            image: "http://yanxuan.nosdn.127.net/1611ef6458e244d1909218becfe87c4d.png"
          },
          {
            child_id: 6,
            name: '床垫',
            image: "http://yanxuan.nosdn.127.net/d6e0e84961032fc70fd52a8d4d0fb514.png"
          },
          {
            child_id: 7,
            name: '暖气',
            image: "http://yanxuan.nosdn.127.net/79275db76b5865e6167b0fbd141f2d7e.png"
          },
          {
            child_id: 8,
            name: '家具',
            image: "http://yanxuan.nosdn.127.net/d5d41841136182bf49c1f99f5c452dd6.png"
          },
          {
            child_id: 9,
            name: '宠物',
            image: "http://yanxuan.nosdn.127.net/dae4d6e89ab8a0cd3e8da026e4660137.png"
          },
          {
            child_id: 10,
            name: '夏凉',
            image: "http://yanxuan.nosdn.127.net/bd17c985bacb9b9ab1ab6e9d66ee343c.png"
          },
          {
            child_id: 11,
            name: '宠物',
            image: "http://yanxuan.nosdn.127.net/d6e0e84961032fc70fd52a8d4d0fb514.png"
          },
          {
            child_id: 11,
            name: '家饰',
            image: "http://yanxuan.nosdn.127.net/ab0df9445d985bf6719ac415313a8e88.png"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "餐厨",
        banner_url: "http://yanxuan.nosdn.127.net/f4ff8b3d5b0767d4e578575c1fd6b921.jpg",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '锅具',
            image: "http://yanxuan.nosdn.127.net/d2db0d1d0622c621a8aa5a7c06b0fc6d.png"
          },
          {
            child_id: 2,
            name: '餐具',
            image: "http://yanxuan.nosdn.127.net/695ed861a63d8c0fc51a51f42a5a993b.png"
          },
          {
            child_id: 3,
            name: '清洁',
            image: "http://yanxuan.nosdn.127.net/3a40faaef0a52627357d98ceed7a3c45.png"
          },
          {
            child_id: 4,
            name: '杯壶',
            image: "http://yanxuan.nosdn.127.net/ec53828a3814171079178a59fb2593da.png"
          },
          {
            child_id: 5,
            name: '清洁保鲜',
            image: "http://yanxuan.nosdn.127.net/04cd632e1589adcc4345e40e8ad75d2b.png"
          },
          {
            child_id: 6,
            name: '功能厨具',
            image: "http://yanxuan.nosdn.127.net/5b94463017437467a93ae4af17c2ba4f.png"
          },
          {
            child_id: 7,
            name: '茶具咖啡具',
            image: "http://yanxuan.nosdn.127.net/be3ba4056e274e311d1c23bd2931018d.png"
          },
          {
            child_id: 8,
            name: '刀剪砧板',
            image: "http://yanxuan.nosdn.127.net/555afbfe05dab48c1a3b90dcaf89b4f2.png"
          },
          {
            child_id: 9,
            name: '厨房小电',
            image: "http://yanxuan.nosdn.127.net/c09d784ba592e4fadabbaef6b2e95a95.png"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "饮食",
        banner_url: "http://yanxuan.nosdn.127.net/dd6cc8a7e996936768db5634f12447ed.jpg",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '炒货',
            image: "http://yanxuan.nosdn.127.net/3972963a4b6f9588262d2a667f4c1c73.png"
          },
          {
            child_id: 2,
            name: '小食',
            image: "http://yanxuan.nosdn.127.net/418f86049f957108a31ad55cec42c349.png"
          },
          {
            child_id: 3,
            name: '食材',
            image: "http://yanxuan.nosdn.127.net/80db363e0687b1a65edc6e75c1b99726.png"
          },
          {
            child_id: 4,
            name: '冲饮',
            image: "http://yanxuan.nosdn.127.net/1e3d8f65c7c7811baccdfda6711cbfd5.png"
          },
          {
            child_id: 5,
            name: '糖巧',
            image: "http://yanxuan.nosdn.127.net/c12cf29b574c7e9d1fcff6a57a12eea2.png"
          },
          {
            child_id: 6,
            name: '糕点',
            image: "http://yanxuan.nosdn.127.net/66ea1d6ad602a8e441af7cada93bdc7a.png"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "配件",
        ishaveChild: false,
        children: []
      }
    ],
  },
  lefttap(event) {
    var index = event.currentTarget.dataset.index;
    this.setData({
      idx: index
    })
  },
  tapfun(event) {
    var img = event.currentTarget.dataset.imgsrc;
    var text = event.currentTarget.dataset.text;
    wx.navigateTo({
      //url: '/pages/detail/detail?ima=' + img + '&text' + text,
      url: `/pages/detail/detail?img=${img}&text=${text}`
    })
  }

})