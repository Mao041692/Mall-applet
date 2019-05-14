//index.js
//获取应用实例
Page({
  data: {
    text: '获取验证码', //按钮文字
    currentTime: 61, //倒计时
    disabled: false, //按钮是否禁用
    phone: '', //获取到的手机栏中的值
    tempFilePaths: '',
    hidden: true, //true
    buthidden: false, //false
    sourceType: ['album', 'camera']
  },
  onLoad: function (options) {
    try {
      var res = wx.getSystemInfoSync()
      var platform = res.platform
      if (platform == 'ios') {
        util.msg("警告", "IOS系统暂不支持拍照，请从相册选择照片")
        this.setData({
          sourceType: ['album']
        })
      }
      console.log(platform)
    } catch (e) { }
  },
  frontimage: function () {
    var _this = this;
    var Type = _this.data.sourceType
    wx.chooseImage({
      count: 1, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: Type, // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        _this.setData({
          FilePaths: res.tempFilePaths
        })
      }
    })
  },
  reciteimage: function () {
    var _this = this;
    var Type = _this.data.sourceType
    wx.chooseImage({
      count: 1, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: Type, // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        _this.setData({
          recitePaths: res.tempFilePaths
        })
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})