// pages/alter/alter.js
const app = getApp()
const alterUrl = app.globalData.url
const imgUrl = app.globalData.imgUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img001: imgUrl + '/images/teahouse.png',
    b_code: 'ture',
    iphone: '',
    code_t: 'code_t',
    sub_001: 'ture',
    code_bo: '',
    pwd_bo: ''
  },
  i_code: function(e) {
    var that = this
    let val = parseInt(e.detail.value)
    if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(val))) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
    } else {
      wx.request({
        url: alterUrl + '/register_select',
        method: 'GET',
        data: {
          iphone: val
        },
        success: function(e) {
          if (e.data) {
            wx.showToast({
              title: '账号不存在',
              icon: 'none'
            })
            that.setData({
              b_code: 'ture',
            })
          } else {
            that.setData({
              b_code: '',
              iphone: val,
            })
          }
        }

      })
    }
  },
  password: function(e) {
    let pwd = e.detail.value;
    pwd = pwd.replace(/\s*/g, "");
    if (pwd != null) {
      if (/(^[a-zA-Z]\w{5,17}$)/.test(pwd)) {
        this.setData({
          pwd_bo: 'ture',
        })
        if (this.data.pwd_bo == 'ture' && this.data.code_bo == 'ture') {
          this.setData({
            sub_001: ''
          })
        }
      } else {
        wx.showToast({
          title: '密码格式不正确',
          icon: 'none'
        })
        this.setData({
          sub_001: 'ture'
        })
      }
    }

  },
  ver: function(e) {
    // console.log(e.detail.value)
    // console.log(this.data.code_t)
    if (e.detail.value == this.data.code_t) {
      this.setData({
        code_bo: 'ture',
      })
      if (this.data.pwd_bo == 'ture' && this.data.code_bo == 'ture') {
        this.setData({
          sub_001: ''
        })
      }
    } else {
      wx.showToast({
        title: '验证码错误',
        icon: 'none'
      })
      this.setData({
        sub_001: 'ture'
      })
    }
  },
  tap_code: function() {
    var that = this
    wx.request({
      url: alterUrl + '/register_iphone_code',
      method: 'GET',
      data: {
        iphone: this.data.iphone
      },
      success: function(e) {
        that.setData({
          code_t: e.data.codeone
        })
      }
    })
  },

  alter_001: function(e) {
    let {
      iphone,
      pwd
    } = e.detail.value;
    var that = this;
    wx.request({
      url: alterUrl + '/alter',
      method: 'GET',
      data: {
        iphone: iphone,
        pwd: pwd
      },
      success: function(res) {
        if (res.data) {
          wx.showToast({
            title: '修改成功',
            icon: 'none'
          })
          wx.navigateTo({
            url: '/pages/index/index',
          })
        } else {
          wx.showToast({
            title: '修改失败',
            icon: 'none'
          })
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})