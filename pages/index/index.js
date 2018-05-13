//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'I will try ',
    motto2: ' times ',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    count: 1,
    u_longitude:0,
    u_latitude:0,
    op:" Create Now "
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })
  },

  move:function(e){
    wx.navigateTo({
      url: '../paint/paint?longitude="{{u_longitude}}"&latitude="{{u_latitude}}"'
    })
  },

  userscan: function(e){
    wx.scanCode({
    success: (res) => {
      console.log(res)
    }
    })
  
  },



  getloc: function (e) {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          u_latitude: res.latitude, // 经度
          u_longitude : res.longitude // 纬度})
         
        })
      }
    })
  }
  
})
