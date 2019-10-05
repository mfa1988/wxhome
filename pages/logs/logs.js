//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    background: ['../../img/jms.jpg', '../../img/jms1.jpg', '../../img/jms2.jpg', '../../img/jms3.jpg', '../../img/jms4.jpg'],
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
