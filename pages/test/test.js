

Page({
  data: {
    a1:"g",
    longitude:"116.38",
    latitude:"39.90"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          latitude: res.latitude, // 经度
          longitude: res.longitude // 纬度

        })
      }
    })
  }

  

 

 

})