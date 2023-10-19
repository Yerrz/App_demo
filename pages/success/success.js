// pages/success/success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[],
    // ques3_radio:{
    //   大一:"",
    //   大二:"",
    //   大三:"",
    //   大四:"",
    // }
    ques3_radio:[
      {grade:"大一",sta:""},
      {grade:"大二",sta:""},
      {grade:"大三",sta:""},
      {grade:"大四",sta:""}
    ],

    ques5_radio:[
      {sex:"男",sta:""},
      {sex:"女",sta:""}
    ],

    ques6_radio:[
      {influ:"不会有影响",sta:""},
      {influ:"多少会有点影响",sta:""},
      {influ:"会有很大影响",sta:""}
    ],

    ques4_radio:[
      {cost:"购物",sta:""},
      {cost:"饮食",sta:""},
      {cost:"娱乐",sta:""},
      {cost:"旅游",sta:""},
      {cost:"交通",sta:""},
      {cost:"通讯",sta:""},
      {cost:"礼物",sta:""},
      {cost:"其他",sta:""},
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取本地缓存数据,来自demo页面
    // wx.getStorage({
    //   key:"formdata",
    //   success: res=>{
    //     // console.log(res.data)
    //     this.setData({
    //       info:{
    //         ques1:res.data.ques1,
    //         ques2:res.data.ques2,
    //         ques3:res.data.ques3,
    //         ques4:res.data.ques4,
    //         ques5:res.data.ques5,
    //         ques6:res.data.ques6,
    //         ques7:res.data.ques7,
    //         uuid:res.data.uuid,
    //       }
    //     })
    //     console.log("info:",this.data.info);
    //     ////////// 对比年级，获取ques3 /////////
    //     // 获取年级字典的所有key值
    //     var ques3_key = Object.keys(this.data.ques3_radio)
    //     // console.log(Object.keys(this.data.ques3_radio))
    //     // console.log(ques3_key[0])

    //     console.log(this.data.ques3_radio[0].grade)
    //     var i = 0
    //     for(i=0;i<ques3_key.length;i++){
    //       if(res.data.ques3 == this.data.ques3_radio[i].grade){
    //         var j = i;
    //         // console.log(j);

    //         var num = 'ques3_radio['+j+'].sta';
    //         console.log(num);

    //         // console.log("年级："+ques3_key[i]);
    //         // console.log(this.data.ques3_radio[j]);
    //         this.setData({
    //           [num]:"checked"
    //         })
    //         // this.data.ques3_radio[j] = "checked";
    //         console.log(this.data.ques3_radio);
    //         break;
    //       }
    //     }

    //     ////////// 对比性别，获取ques5 /////////
    //     for(i=0;i<this.data.ques5_radio.length;i++){
    //       if(res.data.ques5 == this.data.ques5_radio[i].sex){
    //         var sex = "ques5_radio["+i+"].sta";
    //         this.setData({
    //           [sex] : "check"
    //         })
    //         console.log(this.data.ques5_radio);
    //       }
    //     }

    //     ////////// 对比影响，获取ques6 /////////
    //     for(i=0;i<this.data.ques6_radio.length;i++){
    //       if(res.data.ques6 == this.data.ques6_radio[i].influ){
    //         var influ = "ques6_radio["+i+"].sta";
    //         this.setData({
    //           [influ]:"checked"
    //         })
    //       }
    //     }

    //     ////////// 对比消费方面，获取ques4 /////////
    //     console.log(res.data.ques4);
    //     // console.log(this.data.ques4_radio);
    //     for(i=0;i<this.data.ques4_radio.length;i++){
    //       var cost = this.data.ques4_radio[i].cost;
    //       for(var k=0;k<res.data.ques4.length;k++){
    //         if(res.data.ques4[k] == cost ){
    //           // console.log(cost);
    //           // console.log(this.data.ques4_radio);
    //           var cost_sta = "ques4_radio["+i+"].sta";
    //           this.setData({
    //             [cost_sta]:"checked"
    //           })
    //         }
    //       }
    //     }
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

  }
})