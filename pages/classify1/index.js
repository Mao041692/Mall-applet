//index.js
//获取应用实例
const app = getApp()
var searchTitle = ['女装', '鞋包', '母婴'];

var searchContent = [
  {
    title: '女装',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀',ruter:'../commodity/index'},
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
    ],
  },
  {
    title: '鞋包',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
    ]
  },
  {
    title: '母婴',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
    ]
  },
];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchText: '蓝牙耳机迷你',
    searchTitle: searchTitle,
    searchContent: searchContent,
    scrHeig: '1000rpx',
    currentId: 0,
    scrollTop: '0',
    scView: 'c0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ratio = wx.getSystemInfoSync().windowWidth / 750;
    this.setData({
      scrHeight: wx.getSystemInfoSync().windowHeight / ratio - 60 - 32 + 'rpx'
    })
  },
  leftClassifyTap: function (e) {
    var curId = e.target.id;
    if (curId < 5) {
      this.setData({
        currentId: curId,
        scrollTop: '0',
        scView: 'c' + curId
      })
    } else {
      this.setData({
        currentId: curId,
        scrollTop: [0.5 + (curId - 5)] * 55,
        scView: 'c' + curId
      })
    }
  },
  rigConScr: function (e) {
    var that = this;
    var query = wx.createSelectorQuery();
    query.selectAll('.con-wrap-boxRight-item').boundingClientRect(function (res) {
      res.forEach(function (item) {
        if (item.top > 0 && item.top < 150) {
          var curId = item.id.substr(1);
          if (curId < 5) {
            that.setData({
              currentId: curId,
              scrollTop: '0'
            })
          } else {
            that.setData({
              currentId: curId,
              scrollTop: [0.5 + (curId - 5)] * 55
            })
          }
        }
      })
    }).exec();
  },
  scrLower: function () {
    var curId = this.data.searchTitle.length - 1;
    this.setData({
      currentId: curId,
      scrollTop: [0.5 + (curId - 5)] * 55
    })
  }
})