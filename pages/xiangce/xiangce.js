// pages/xiangce/xiangce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
imgArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.showModal({
      title: '温馨提示',
      content: '请添加六张您的美照',
      success (res) {
        if (res.confirm) {
          wx.chooseImage({
            count: 6,
            sizeType: ['original', 'compressed'],
            sourceType: ['album'],
            success (res) {
              // tempFilePath可以作为img标签的src属性显示图片
              _this.setData({
                imgArr:res.tempFilePaths
              })
            },
            fail(){
              _this.failfun();
            }
          })
        } else if (res.cancel) {
          _this.failfun();
        }
      }
    })
  },
  failfun(path){
    wx.showToast({
      title: '添加失败',
      icon:'success',
      duration:2000,
      success(){
        setTimeout(function(){
          wx.switchTab({
            url: '/pages/home/home',
        })
        },2000)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})