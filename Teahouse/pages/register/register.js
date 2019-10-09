// pages/help/help.js

// const indexUrl = 'http://demo001.free.idcfengye.com';
// const indexUrl = 'http://localhost:8080';
const app = getApp()
const indexUrl = app.globalData.url
let iphone_code = '';
var verification_code = '';
Page({

  //自动加载
  onLoad: function() {
    this.setData({
      get_code: true,
      register_submit: true,
      username: '',
      code: true,
    })
  },

  //18行到45行 获取验证码按钮步骤
  data: {
    iphone: '',
    masg: indexUrl + '/images/TeaRegister.png',
  },

  username: function(e) {
    this.setData({
      iphone: e.detail.value,
    })
  },

  get_verification_code: function(e) {
    let iphone = this.data.iphone;
    var that = this
    //打印测试用
    // console.log(iphone+"嘿嘿嘿");
    wx.request({
      url: indexUrl + '/register_iphone_code',
      method: 'GET',
      data: {
        iphone: iphone
      },
      success: function(e) {
        verification_code = e.data.codeone
      }
    })
  },

  //注册小茶楼提交请求
  add_user: function(e) {
    let {
      iphone,
      pwd
    } = e.detail.value;
    var that = this;
    wx.request({
      url: indexUrl + '/register_user_password',
      method: 'GET',
      data: {
        iphone: iphone,
        pwd: pwd
      },
      success: function(res) {
        if (res.data) {
          wx.navigateTo({
            url: '/pages/index/index',
          })
        }else{
          wx.navigateTo({
            url: '/pages/register/register',
          })
          wx.showToast({
            title: '注册失败',
            icon:'none'
          })
        }
      }
    })
  },

  //手机号输入框失焦时触发
  select_username(e) {
    let val = parseInt(e.detail.value)
    if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(val))) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
      this.setData({
        get_code: true,
        code: true
      })
    } else {
      this.setData({
        get_code: '',
        code: ''
      })

      wx.request({
        url: indexUrl + '/register_select',
        method: 'GET',
        data: {
          iphone: val
        },
        success: function(e) {
          if (e.data) {
            messge: ''
          }
          else {
            messge: '账号已存在，请重新填写'
          }
        }
      })
    }
  },

  //验证码框失焦时触发
  code: function(e) {
    let code = e.detail.value;
    code = code.replace(/\s*/g, "");
    if (code != null) {
      if (code == verification_code) {
        iphone_code = 'true'
      } else {
        iphone_code = 'false'
      }
      this.setData({
        username: true
      })
    }
  },

  //密码框失焦时触发
  password: function(e) {
    let pwd = e.detail.value;
    pwd = pwd.replace(/\s*/g, "");
    if (pwd != null) {
      if (/(^[a-zA-Z]\w{5,17}$)/.test(pwd)) {
        if (iphone_code === 'true') {
          this.setData({
            register_submit: ''
          })
        }
      } else {
        wx.showToast({
          title: '密码格式不正确',
          icon: 'none'
        })
        this.setData({
          register_submit: true
        })
      }
    }
  },




















})