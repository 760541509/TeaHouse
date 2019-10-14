Page({

  aaaaa: function() {
    var that = this
    wx.request({
      url: 'http://localhost:8080' + '/lo',
      success: function(res) {
        console.log(res)
        that.setData({
          mas: res.data.lishi
        })
      }
    })

  }

})