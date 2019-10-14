// pages/admin/admin.js
const adminUrl = ''
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    admin_img: adminUrl + '/image/tea_logo.png',
  },

  system: function() {
    wx.showActionSheet({
      itemList: ['用户管理', '权限管理', '角色管理', '房间设置', '计费设置', '商品分类', ],
      success: function(res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0) {
          wx.navigateTo({
            url: '/pages/admin/system/system',
          })
        } else if (res.tapIndex == 1) {

        } else if (res.tapIndex == 2) {

        } else if (res.tapIndex == 3) {

        } else if (res.tapIndex == 4) {

        } else if (res.tapIndex == 5) {

        }
      }
    })
  },

  room: function() {
    wx.showActionSheet({
      itemList: ['库房', '出库'],
      success: function(res) {
        console.log(res.tapIndex)
      },
    })
  },

  attendance: function() {
    wx.showActionSheet({
      itemList: ['考勤信息'],
      success: function(res) {
        console.log(res.tapIndex)
      },
    })
  },

  customer: function() {
    wx.showActionSheet({
      itemList: ['客户管理', '客户评价', '客户反馈'],
      success: function(res) {
        console.log(res.tapIndex)
      },
    })
  },

  form: function() {
    wx.showActionSheet({
      itemList: ['运营报表'],
      success: function(res) {
        console.log(res.tapIndex)
      },
    })
  },

  web: function() {
    wx.showActionSheet({
      itemList: ['网站设置'],
      success: function(res) {
        console.log(res.tapIndex)
      },
    })
  },
})