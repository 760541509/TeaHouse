// pages/admin/system/system.js
const app = getApp()
const indexUrl = app.globalData.url
// const indexUrl = 'http://demo001.free.idcfengye.com'
var page = 0
var teliphone = ''
Page({

  //我是全局变量
  data: {
    user_modify: '/image/system/modify.png',
    modal_none: 'none',
    modal_none_add: 'none',
    iphone: "",
    platform: "",
    role: "",
    sign_in: "",
    staff: "",
    store: "",
    time : '',
    name:''
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this
    page = page + 1
    wx.request({
      url: indexUrl + '/select_limit?page=' + page,
      method: 'GET',
      success: function(e) {
        var articles = e.data;
        var user = that.data.user
        var newuser = user.concat(articles)
        that.setData({
          user: newuser
        })
        if(e.data.length==0){
          that.setData({
            tips: '-------------------------没啦------------------------'
          })
        }
      }
    })
  },

  //我是页面加载时就会触发的事件
  onLoad: function() {
    const that = this
    page = 0
    wx.request({
      url: indexUrl + '/select_all',
      method: 'GET',
      data: {
        page: page
      },
      success: function(e) {
        that.setData({
          user: e.data
        })
      }
    })
  },

  //我是for循环提交事件
  user_table_change: function(e) {

    this.setData({
      modal_none: 'block'
    })

    const that = this

    let {
      iphone
    } = e.detail.value;

    teliphone = iphone

    wx.request({
      url: indexUrl + '/select_iphone',
      method: 'GET',
      data: {
        iphone: iphone,
      },
      success: function(e) {
        that.setData({
          modal_username: e.data.username,
          modal_name: e.data.name,
          modal_staff: e.data.staff,
          modal_store: e.data.store,
          modal_platform: e.data.platform,
          modal_role: e.data.role,
          modal_times: e.data.times,
          modal_sign_in: e.data.sign_in
        })
      }
    })
  },

  //以下皆是修改信息时会触发的事件
  //我是修改电话时触发
  modal_iphone: function(e) {
    this.setData({
      iphone: e.detail.value
    })
  },
  //我是修改职位时触发
  modal_staff: function(e) {
    this.setData({
      staff: e.detail.value
    })
  },
  //我是修改所属门店时触发
  modal_store: function(e) {
    this.setData({
      store: e.detail.value
    })
  },
  //我是修改可登录平台时触发
  modal_platform: function(e) {
    this.setData({
      platform: e.detail.value
    })
  },
  //我是修改权限时触发
  modal_role: function(e) {
    this.setData({
      role: e.detail.value
    })
  },
  //我是修改是否允许登录时触发
  modal_sign_in: function(e) {
    this.setData({
      sign_in: e.detail.value
    })
  },

  //我是弹出框确定事件
  changeModel: function() {

    this.setData({
      modal_none: 'none'
    })

    wx.request({
      url: indexUrl + '/update_user',
      method: 'GET',
      data: {
        teliphone: teliphone,
        name: this.data.iphone,
        platform: this.data.platform,
        role: this.data.role,
        sign_in: this.data.sign_in,
        staff: this.data.staff,
        store: this.data.store
      },
      success: function(e) {
        if (e.data) {
          wx.showToast({
            title: '修改成功',
            icon: 'anon'
          })
        }
      }
    })
  },

  //我是弹出框取消事件
  modelCancel: function() {
    this.setData({
      modal_none: 'none'
    })
  },


  //以下皆是添加信息时会触发的事件
  add_user_button:function(){
    this.setData({
      modal_none_add: 'block'
    })
  },
  //我是添加名字时触发
  add_user_name:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  //我是添加电话时触发
  add_user_iphone: function (e) {
    this.setData({
      iphone: e.detail.value
    })
  },
  //我是添加职位时触发
  add_user_staff: function (e) {
    this.setData({
      staff: e.detail.value
    })
  },
  //我是添加所属门店时触发
  add_user_store: function (e) {
    this.setData({
      store: e.detail.value
    })
  },
  //我是添加可登录平台时触发
  add_user_platform: function (e) {
    this.setData({
      platform: e.detail.value
    })
  },
  //我是添加权限时触发
  add_user_role: function (e) {
    this.setData({
      role: e.detail.value
    })
  },
  //我是添加入职时间时触发
  add_user_time:function(e){
    this.setData({
      time: e.detail.value
    })
  },
  //我是添加是否允许登录时触发
  add_user_sign_in: function (e) {
    this.setData({
      sign_in: e.detail.value
    })
  },

  //我是添加信息点击确定事件
  changeModel_add:function(){

    this.setData({
      modal_none_add: 'none'
    })

    wx.request({
      url:indexUrl + '/add_user',
      method:'GET',
      data:{
        name: this.data.iphone,
        platform: this.data.platform,
        role: this.data.role,
        sign_in: this.data.sign_in,
        staff: this.data.staff,
        store: this.data.store,
        time:this.data.time,
        username:this.data.name
      },
      success:function(e){
        if(e.data){
          wx.showToast({
            title: '添加成功',
            icon:'anon'
          })
        }
      }
    })
  },

//我是添加信息点击取消事件
  modelCancel_add: function () {
    this.setData({
      modal_none_add: 'none'
    })
  },





















})