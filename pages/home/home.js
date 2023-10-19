// pages/home/home.js
// https://www.winkp.com/19966.html--------------
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let user = wx.getStorageSync('user');
    console.log("本地缓存user数据为：",user)
    this.setData({
      userInfo:user
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  login(){
    wx.getUserProfile({
      desc: '授权后使用',
      success:result=>{
        let user = result.userInfo
        wx.setStorageSync('user', user)
        this.setData({
          userInfo:user
        })
        console.log("授权成功！获取的用户数据为：",result.userInfo)
      }
    })
  },
  logout(){
    this.setData({
      userInfo:""
    })
    wx.setStorageSync('user', null)
  }
})
