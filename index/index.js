// person/index.js
const app = getApp()
Page({

      /**
       * 页面的初始数据
       */
      data: {
            statusBarHeight: 0,
            navHeight: 48,
            pageHeight: 555,
            // 导航头组件所需的参数
            nvabarData: {
                  "bg_color": "orange",
                  "color": "#000",
                  "flag": 1,
                  "name": "我是标题独一无二天下无敌我是标题独一无二天下无敌",
                  "bg_image": "linear-gradient(to right,#0081ff, #1cbbb4)"
            }
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {
            var sysinfo = wx.getSystemInfoSync();
            let isiOS = sysinfo.system.indexOf('iOS') > -1
            let statusBarHeight = sysinfo.statusBarHeight;
            console.log(sysinfo)
            
            let navHeight = 48
            if (!isiOS) {
                  navHeight = 48;
            } else {
                  navHeight = 44;
            }
            let pageHeight = sysinfo.screenHeight - navHeight - statusBarHeight - parseInt(100 * (sysinfo.screenWidth / 750))
            console.log(pageHeight)
            this.setData({
                  statusBarHeight: statusBarHeight,
                  navHeight: navHeight + statusBarHeight,
                  pageHeight: pageHeight
            })
      },
})