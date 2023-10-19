// pages/update/update.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    update_info:[],            // 获取的本地缓存的uuid唯一标识
    update_old:[],             // 获取的数据库中uuid对应的问卷信息
    ques3:[
      {grade:"大一",sta:""},
      {grade:"大二",sta:""},
      {grade:"大三",sta:""},
      {grade:"大四",sta:""}
    ],
    ques5:[
      {sex:"男",sta:""},
      {sex:"女",sta:""}
    ],
    ques6:[
      {influ:"不会有影响",sta:""},
      {influ:"多少会有点影响",sta:""},
      {influ:"会有很大影响",sta:""}
    ],
    ques4:[
      {cost:"购物",sta:""},
      {cost:"饮食",sta:""},
      {cost:"娱乐",sta:""},
      {cost:"旅游",sta:""},
      {cost:"交通",sta:""},
      {cost:"通讯",sta:""},
      {cost:"礼物",sta:""},
      {cost:"其他",sta:""}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.getStorage({
      key:"formdata",
      success: (res) =>{
        console.log("success收到:",res.data.uuid),
        this.setData({
          update_info:{
            uuid:res.data.uuid,
          }
        })

        console.log("update_info获取的uuid:",this.data.update_info),
        wx.request({
          url: 'http://192.168.100.68/php/demo_update.php', //接口地址
          data: {
            action: 'read',
            uuid: this.data.update_info.uuid,
          },
          method: 'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: result=> {
            console.log("发送的数据为：",this.data.update_info.uuid)
            console.log("发送请求成功！返回的数据为：",result.data)
            this.setData({
              update_old:result.data.formdata_up
            })
            // 单选多选判断
            console.log(this.data.update_old)
            var i = 0
            // ques3
            for(i=0;i<this.data.ques3.length;i++){
              if(this.data.update_old.ques3 == this.data.ques3[i].grade){
                var grade_sta = "ques3["+i+"].sta"
                this.setData({
                  [grade_sta]:"checked"
                })
              }
            }
            // ques5
            for(i=0;i<this.data.ques5.length;i++){
              if(this.data.update_old.ques5 == this.data.ques5[i].sex){
                var sex_sta = "ques5["+i+"].sta"
                this.setData({
                  [sex_sta]:"checked"
                })
              }
            }
            // ques6
            for(i=0;i<this.data.ques6.length;i++){
              if(this.data.update_old.ques6 == this.data.ques6[i].influ){
                var influ_sta = "ques6["+i+"].sta"
                this.setData({
                  [influ_sta]:"checked"
                })
              }
            }
            // ques4
            console.log(this.data.update_old.ques4)
            var $ques4_list = this.data.update_old.ques4.split(",");
            console.log($ques4_list)
            for(i=0;i<this.data.ques4.length;i++){
              for(var j=0;j<$ques4_list.length;j++){
                if($ques4_list[j] == this.data.ques4[i].cost){
                  var cost_sta = "ques4["+i+"].sta"
                  this.setData({
                    [cost_sta]:"checked"
                  })
                }
              } 
            }
          }
        })
        
      }
    })


  },

  updateForm: function(e){
    if (e.detail.value.ques1.length == 0 || e.detail.value.ques2.length == 0  || e.detail.value.ques3.length == 0 || e.detail.value.ques4.length == 0 || e.detail.value.ques5.length == 0 || e.detail.value.ques6.length == 0 || e.detail.value.ques7.length == 0) {
      wx.showToast({
        title: '内容不能为空!',   
        icon: 'error',
        duration: 1500
      })
    }
    else{
      console.log("修改后的值为：",e.detail.value)
      wx.request({
        url: 'http://192.168.100.68/php/demo_update.php',
        method: 'POST',     
        data: {
          action:"update",
          uuid:this.data.update_info.uuid,
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
        success: res => {
          // console.log(res.data)
          if (res.data.up_status == 400) {
            wx.showToast({     
            title: '提交失败！请检查输入内容规范！',    
            icon: 'loading',
            duration: 1500
            })
          }
          else{
            console.log("修改成功！uuid:",this.data.update_info.uuid)
            wx.showToast({
              title: '修改成功！',
              icon: 'success',
              duration: 1000,
              success:()=>{
                wx.redirectTo({
                  url: '/pages/success/success',
                })
              }
            })
          }
        }
      })
    }
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

  }
})