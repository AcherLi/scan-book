// pages/index/index.js
Page({
  data: {
    src: '',
    result: []
  },
  handlePhoto() {
    let that = this
    // 调用扫描api
    wx.scanCode({
      success(code) {
        console.log(code)
        let isbn = code.result
        // 调用云函数
        wx.cloud.callFunction({
          name: 'getBookInfo',
          data: { isbn },
          success: res => {
            that.setData({ result: res.result })
          },
          fail: res => {
            wx.showModal({
              title: '提示',
              content: '获取数据失败，请稍后重试',
              success: res => { }
            })
          },
          complete: res => {
            wx.hideLoading();
          }
        })
      }
    })
  }
})