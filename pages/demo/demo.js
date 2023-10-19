// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uuid:[]
    // textdata:[]
  },

  /**
   * 生命周期函数--监听页面加载 
   */
  // 发送请求并获取数据库数据显示在页面
  onLoad: function (options) {
    const userCryptoManager = wx.getUserCryptoManager()
    userCryptoManager.getLatestUserKey({
    success: res => {
      const {encryptKey, iv, version, expireTime} = res
      console.log(encryptKey, iv, version, expireTime)
    }
})
    // wx.request({
    //   url: 'http://127.0.0.1/php/demo1.php', //接口地址
    //   data: {
    //     action: 'read',
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: result=> {
    //     console.log("发送请求成功！提交的数据为：",result.data),
    //     this.setData({
    //       textdata:result.data.uesrs,
    //     })
    //   }
    // })
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
    var that = this;

    if (e.detail.value.ques1.length == 0 || e.detail.value.ques2.length == 0  || e.detail.value.ques3.length == 0 || e.detail.value.ques4.length == 0) {
      wx.showToast({
        title: '内容不能为空!',   
        icon: 'error',
        duration: 1500
      })
    }
    else{
      // // 获取uuid的请求
      // wx.request({
      //   url: 'http://127.0.0.1/php/form.php',
      //   data:{
      //     action:'readuuid'
      //   },
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   success: result=> {
      //     console.log("发送请求成功！返回的数据为：",result.data),
      //     this.setData({
      //       uuid:result.data.unique_id
      //     })
      //   }
      // })

      wx.request({ 
        url: 'http://192.168.100.68/php/form.php',      
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
          that.setData({
            uuid:res.data.u_id
          })
          console.log("uuid:",that.data.uuid)
          console.log("res.data",res.data)

          if (res.data.status == 400) {
            wx.showToast({     
            title: '提交失败！请检查输入内容规范！',    
            icon: 'loading',
            duration: 1500
            })
          } 
          else {  
            //获取的PHP页面form.php的u_id问卷唯一标识
            // console.log(res.data.u_id)

            // wx.showToast({  
            // title: "操作成功！",//这里打印出登录成功
            // icon: 'success',
            // duration: 1000
            // })
            wx.setStorage({
              key:"formdata",
              data: {
                ques1:e.detail.value.ques1,
                ques2:e.detail.value.ques2,
                ques3:e.detail.value.ques3,
                ques4:e.detail.value.ques4,
                ques5:e.detail.value.ques5,
                ques6:e.detail.value.ques6,
                ques7:e.detail.value.ques7,
                uuid:that.data.uuid
              },
              success(res) {
                console.log("success:",e.detail.value);
                wx.redirectTo({
                  url: '/pages/success/success',
                })
              }
            })
            // wx.redirectTo({
            //   url: '/pages/success/success',
            // })
          }
        }
      })

      
    }


    
  }





})