//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    background: ['../../img/log.jpeg','../../img/jms.jpg'],
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
