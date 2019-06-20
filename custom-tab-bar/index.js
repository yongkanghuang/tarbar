Component({
     data: {
          selected: 0,
          color: "#7A7E83",
          selectedColor: "#3cc51f",
          iconPath: "/image/qr_scan.png",
          selectedIconPath: "/image/icon_component_HL.png",
          list: [{
               pagePath: "/index/index",
               iconPath: "/image/icon_component.png",
               selectedIconPath: "/image/icon_component_HL.png",
               text: "组件"
          }, {
               pagePath: "/index/index2",
               iconPath: "/image/icon_API.png",
               selectedIconPath: "/image/icon_API_HL.png",
               text: "接口"
          }]
     },
     attached() {},
     methods: {
          switchTab(e) {
               const data = e.currentTarget.dataset
               const url = data.path
               wx.switchTab({
                    url
               })
               this.setData({
                    selected: data.index
               })
               console.log(data.index)
          },
          openScan(e) {
               wx.scanCode({
                    scanType: ['barCode', 'qrCode'],
                    success(res) {
                         console.log(res)
                    }
               })
          }
     }
})