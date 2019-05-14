// pages/classify1/index.js
Page({
  data: {
    isLike: true,
    // banner
    indicatorDots: true, //设置是否显示面板指示点
    autoplay: true, //设置是否自动切换
    interval: 3000, //设置自动切换时间间隔,3s
    duration: 1000, //  设置滑动动画时长1s
    imgUrls: [
      "https://m.360buyimg.com/n12/jfs/t11317/108/1080677336/325163/f4c2a03a/59fd8b17Nbe2fcca3.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/jfs/t11575/282/348533702/60173/d75cd1cc/59edb8d6N688b420f.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/jfs/t11536/279/360605865/15194/442cab0b/59edb8d3N163a7608.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/s750x750_jfs/t9733/126/2033941175/68120/a4eb4468/59edb8d6N37bea6f7.jpg!q70.jpg",
      "https://m.360buyimg.com/n12/s750x750_jfs/t10744/195/2053933852/71608/94425578/59edb8d6Ne28c70ff.jpg!q70.jpg"
    ],
    // 商品详情介绍
    detailImg: [
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_0_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_500_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_1000_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_1500_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_2000_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_2500_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_3000_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_3500_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_4000_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_4500_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_5000_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_5500_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_6000_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nos.netease.com/a108a6ae73914a91b7e07b8cc0ad32ad1511959470997jal1mqad10611.jpg?imageView&quality=98&crop=0_7500_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nos.netease.com/a108a6ae73914a91b7e07b8cc0ad32ad1511959470997jal1mqad10611.jpg?imageView&quality=98&crop=0_8000_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nos.netease.com/a108a6ae73914a91b7e07b8cc0ad32ad1511959470997jal1mqad10611.jpg?imageView&quality=98&crop=0_8500_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nos.netease.com/a108a6ae73914a91b7e07b8cc0ad32ad1511959470997jal1mqad10611.jpg?imageView&quality=98&crop=0_9000_750_500&imageView&thumbnail=710x0&quality=85",
      "https://haitao.nos.netease.com/a108a6ae73914a91b7e07b8cc0ad32ad1511959470997jal1mqad10611.jpg?imageView&quality=98&crop=0_9500_750_376&imageView&thumbnail=710x0&quality=85",
    ],
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '../pages/shopping/index'
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
})