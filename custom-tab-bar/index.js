Component({
      data: {
            selected: 0,
            color: "#7A7E83",
            selectedColor: "#3cc51f",
            iconPath: "/image/bell.png",
            selectedIconPath: "/image/icon_component_HL.png",
            list: [{
                  pagePath: "/index/index",
                  iconPath: "/image/home.png",
                  selectedIconPath: "/image/home-active.png",
                  text: "主页"
            }, {
                  pagePath: "/equ/index",
                        iconPath: "/image/medical-box.png",
                        selectedIconPath: "/image/medical-box-active.png",
                  text: "设备"
            }, 
                  {
                        pagePath: "/equ/index",
                        iconPath: "/image/bell.png",
                        selectedIconPath: "/image/bell.png",
                        text: " "
                  },{
                  pagePath: "/order/index",
                        iconPath: "/image/resourc.png",
                        selectedIconPath: "/image/resource-active.png",
                  text: "order"
            }, {
                  pagePath: "/person/index",
                        iconPath: "/image/person.png",
                        selectedIconPath: "/image/person-active.png",
                  text: "我"
            }]
      },
      attached() {},
      methods: {
            switchTab(e) {
                  const data = e.currentTarget.dataset
                  const url = data.path
                  console.log(url)
                  wx.switchTab({
                        url: url
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