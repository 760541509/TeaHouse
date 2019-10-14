// pages/boss/boss.js
const app = getApp()
const imgUrl = app.globalData.imgUrl
Page({
  data: {
    img001: imgUrl + "/images/teahouse.png"
  },
  sales: function() {
    wx.navigateTo({
      url: '/pages/boss/salesList/salesList',
    })
  }

})