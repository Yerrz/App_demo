// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid_info:[],
    select_info:[],
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
    // 获取本地缓存数据,来自demo页面
    wx.getStorage({
      key:"formdata",
      success: res=>{
        // console.log(res.data)
        this.setData({
          uid_info:{
            uuid:res.data.uuid,
          }
        })
        console.log("uid_info:",this.data.uid_info);

        wx.request({
          url: 'http://192.168.100.68/php/demo_update.php', //接口地址
          data: {
            action: 'read',
            uuid: this.data.uid_info.uuid,
          },
          method: 'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: result=> {
            console.log("发送的数据为：",this.data.uid_info.uuid)
            console.log("发送请求成功！返回的数据为：",result.data)
            this.setData({
              select_info:result.data.formdata_up
            })
            console.log("数据库查询到的数据为：",this.data.select_info)

            // 单选多选判断
        var i = 0
        // ques3
        for(i=0;i<this.data.ques3.length;i++){
          if(this.data.select_info.ques3 == this.data.ques3[i].grade){
            var grade_sta = "ques3["+i+"].sta"
            this.setData({
              [grade_sta]:"checked"
            })
          }
        }
        // ques5
        for(i=0;i<this.data.ques5.length;i++){
          if(this.data.select_info.ques5 == this.data.ques5[i].sex){
            var sex_sta = "ques5["+i+"].sta"
            this.setData({
              [sex_sta]:"checked"
            })
          }
        }
        // ques6
        for(i=0;i<this.data.ques6.length;i++){
          if(this.data.select_info.ques6 == this.data.ques6[i].influ){
            var influ_sta = "ques6["+i+"].sta"
            this.setData({
              [influ_sta]:"checked"
            })
          }
        }
        // ques4
        console.log(this.data.select_info.ques4)
        var $ques4_list = this.data.select_info.ques4.split(",");
        console.log("多选数据：",$ques4_list)
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