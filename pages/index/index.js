//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    scrollT:0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    prizeLists: [
      { id: 0, name: "大包子小脸", prize: "投票获得68元代金券" },
      { id: 1, name: "大包子", prize: "投票获得66元红包" },
      { id: 2, name: "小脸", prize: "投票获得88元代金券" },
      { id: 3, name: "包子小脸", prize: "投票获得38元红包" },
      { id: 4, name: "大脸", prize: "投票获得8元代金券" },
      { id: 5, name: "小包子", prize: "投票获得8元代金券" }
    ],
    playerLists: [
      { id: 0, no: 545, giftNum: '7574', name: "大包子小脸", imgUrl:'../../images/player_0.png', introduce: "法规的规范合法更符合法规" },
      { id: 1, no: 545, giftNum: '7574', name: "大包子", imgUrl: '../../images/player_0.png', prize: "广东省氟苯尼考六十分舒服而出" },
      { id: 2, no: 545, giftNum: '7574', name: "小脸", imgUrl: '../../images/player_0.png', prize: "鬼地方个不得发布吧大风车v" },
      { id: 3, no: 545, giftNum: '7574', name: "包子小脸", imgUrl: '../../images/player_0.png', prize: "热公司人头都放不出VB" }
    ]
  },
  onShow: function () {
    var that = this;
    var boxheight = undefined;
    wx.createSelectorQuery().select('#prize_list_box').boundingClientRect(function (rect) {
      boxheight = rect.height  // 节点的高度
    }).exec()

    setInterval(function () {
      if (that.data.scrollT > boxheight){
        that.data.scrollT = 0;
      }
      that.data.scrollT += 5;
      that.setData({
        scrollT: that.data.scrollT
      })
    },300);
  }
})