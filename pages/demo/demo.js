// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textdata:[]
  },

  /**
   * 生命周期函数--监听页面加载 
   */
  // 发送请求并获取数据库数据显示在页面
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1/php/demo1.php', //仅为示例，并非真实的接口地址
      data: {
        action: 'read',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: result=> {
        console.log(result.data),
        this.setData({
          textdata:result.data.uesrs,
        })
      }
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


  // 表单提交
  submitForm: function(e) {
    // var formData = e.detail.value;       
    // wx.request({ 
    //   url: 'http://127.0.0.1/php/form.php',      
    //   method: 'POST',     
    //   data: formData,     
    //   success: function(res) {     
    //     console.log(res.data),
    //     console.log('form发生了submit事件，携带数据为：', e.detail.value) 
    //   }
    // })

    if (e.detail.value.ques1.length == 0 || e.detail.value.ques2.length == 0  || e.detail.value.ques3.length == 0 || e.detail.value.ques4.length == 0) {
      wx.showToast({
        title: '内容不能为空!',   
        icon: 'error',
        duration: 1500
      })
    }
    else{
      wx.request({ 
        url: 'http://127.0.0.1/php/form.php',      
        method: 'POST',     
        data: {
          ques1:e.detail.value.ques1,
          ques2:e.detail.value.ques2,
          ques3:e.detail.value.ques3,
          ques4:e.detail.value.ques4,
          ques5:e.detail.value.ques5,
          ques6:e.detail.value.ques6,
          ques7:e.detail.value.ques7,
        },    
        header: {
          "Content-Type": "application/x-www-form-urlencoded" 
        }, 
        success: function(res) {     
          // console.log(res.data),
          console.log('form发生了submit事件，携带数据为：', e.detail.value) 
          if (res.data.status == 0) {
            wx.showToast({     
            title: '提交失败！！！',    
            icon: 'loading',
            duration: 1500
            })
          } 
          else {  
            // wx.showToast({  
            // title: '提交成功！！！',//这里打印出登录成功
            // icon: 'success',
            // duration: 1000
            // })
            wx.redirectTo({
              url: '/pages/success/success',
            })
          }
        }
      })
    }


    
  }





})