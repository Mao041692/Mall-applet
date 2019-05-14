//index.js
Page({
  data: {
    inputValue:'',//搜索的内容
    input: '',
    currentTab: 0,
    indicatorDots: true, //设置是否显示面板指示点
    autoplay: true, //设置是否自动切换
    interval: 3000, //设置自动切换时间间隔,3s
    duration: 1000, //  设置滑动动画时长1s
    imgUrls: [
      '../../icon/lunbo1.jpg',
      '../../icon/lunbo2.jpg',
      '../../icon/lunbo3.jpg',
      '../../icon/lunbo4.jpg'
    ],
    storeImgs: [],//banner
    current: 0,//banner当前的index
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'file://192.168.203.1/%E5%85%B1%E4%BA%AB/Chrysanthemum.jpg' },
      { url: 'http://192.168.203.1/Chrysanthemum.jpg' }
    ],
    //视频路径
    mdc_video: 'https://cloud.video.taobao.com/play/u/576446681/p/1/e/6/t/1/50140370746.mp4',
    //替换视频的封面图
    mdc_videofenmian: '../../icon/lunbo2.jpg',
    // 视频的封面图显示消失的参数
    xiaoshi: false,
    // 视频显示消失的参数
    mdc_show: true,
    // indicatorDots: false,
    // autoplay: false,
    // interval: 5000,
    // duration: 1000,
    goodsHotItems: [
      {
        goodId: 0,
        name: '天然植物唇膏2.4g',
        url: 'bill',
        imageurl: 'https://a3.vimage1.com/upload/merchandise/pdc/272/707/8870197248301707272/2/6922446703595-5_360x456_90.jpg',
        newprice: "32.00",
        oldprice: "59.00",
      },
      {
        goodId: 1,
        name: '流光水彩唇膏升级版 3.5g',
        url: 'bill',
        imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/03/8/4fb444e7-3417-4f4a-b5a1-7f1d884c610f_218x274_70.jpg',
        newprice: "89.00",
        oldprice: "99.00",
      },
      {
        goodId: 2,
        name: '卡姿兰蜗牛氧气泡泡面膜',
        url: 'bill',
        imageurl: 'https:////a3.vimage1.com/upload/merchandise/pdcvis/2017/08/24/167/28c3726f-dfdd-4a59-89ac-b79ea8e24f40_218x274_70.jpg',
        newprice: "139.00",
        oldprice: "159.00",
      },
      {
        goodId: 4,
        name: '御泥坊 | 美白嫩肤泥浆...',
        url: 'bill',
        imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/11/03/98/f34a6c251abf45e5ba60a645f13c7757-5.jpg',
        newprice: "79.00",
        oldprice: "80.00",
      },
      {
        goodId: 6,
        name: '玉兰油 | 水感透白光塑钻...',
        url: 'bill',
        imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/05/19/2/e5de903ab5ba4a6492f3574469fdfca9-5.jpg',
        newprice: "145.00",
        oldprice: "324.00",
      }
    ],
    goodsWelfareItems: [
      {
        goodId: 0,
        name: '泊尔崖蜜蜜光面膜（5片盒装）',
        url: 'bill',
        imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/142/fb2960bf8e074d029c24315279289c19-5_218x274_70.jpg',
        newprice: "86",
        oldprice: "88",
      },
      {
        goodId: 1,
        name: '透无瑕矿物养护两用粉饼#03',
        url: 'bill',
        imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/21/27/4b24e2a629644877866d3da755f6a36e-5_218x274_70.jpg',
        newprice: "147.00",
        oldprice: "150.00",
      },
      {
        goodId: 2,
        name: '川水水光面膜（5片盒装）',
        url: 'bill',
        imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/86/7891361fdab348a1bc91aeca31fc77b1-5_218x274_70.jpg',
        newprice: "86.00",
        oldprice: "88.00",
      },
      {
        goodId: 3,
        name: '蜜三色渐变咬唇膏3.2g 03蜜橙动心恋',
        url: 'bill',
        imageurl: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
        newprice: "97.00",
        oldprice: "99.00",
      },
      {
        goodId: 4,
        name: '时焕颜亮采套装',
        url: 'bill',
        imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/93/69a6bc1c11eb4be184b7dffb43b8565b-5_218x274_70.jpg',
        newprice: "398.00",
        oldprice: "459.00",
      }, {
        goodId: 5,
        name: '雪域眼霜套装',
        url: 'bill',
        imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/23/127/53409c86f74647af915bc379427b97c2-5_218x274_70.jpg',
        newprice: "238.00",
        oldprice: "358.00",
      }
      , {
        goodId: 6,
        name: '凝时鲜颜冰肌水套装',
        url: 'bill',
        imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/11/13/95/fb6c3d0c1f304b449dadb1f0100c1205-5_218x274_70.jpg',
        newprice: "248.00",
        oldprice: "348.00",
      }
      , {
        goodId: 7,
        name: '雪润皙白精选三件套',
        url: 'bill',
        imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/30/184/a5000156098940b5a05a0e696535ac20-5_218x274_70.jpg',
        newprice: "348.00",
        oldprice: "396.00",
      }
    ]
  },
  onLoad: function () {

  },
  navbarTap: function (e) {
    console.debug(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  //搜索框文本内容显示
  inputBind: function (event) {
    this.setData({
      inputValue: event.detail.value
    })
    console.log('bindInput' + this.data.inputValue)
  },
  // 封面点击的时候相应的操作  获取视频在JS里的参数属性 
  //重点：点击图片接下来视频进行播放，但是视频播放后直接触发了视频的pause() 结局的方案是，延时150ms后再进行视频的播放，就完美解决了
  bindPlay: function (e) {
    var that = this;
    that.videoContext = wx.createVideoContext('mdcVideo');
    // that.videoContext.play()
    that.videoContext.pause();
    setTimeout(function () {

      that.videoContext.play()
    }, 150);
    that.setData({
      xiaoshi: true,
      mdc_show: false
    })

  },
  //安卓系统能检测到 video touchemove 滑动的x距离，已此作为切换的swiper的凭证
  //ios系统，检测不到video touchemove 滑动的x距离，通过cover-view 点击事件进行切换
  mdc_move1: function (e) {
    var that = this;
    console.log(e)
    console.log(e.touches[0].pageX)
    that.videoContext = wx.createVideoContext('mdcVideo');
    if (e.touches[0].clientX > 20) {
      console.log(5555555555555555)
      // that.videoContext.pause();
      that.setData({
        xiaoshi: false,
        mdc_show: true,
      })
    }
  },
  returnquanping: function (e) {
    var that = this;
    that.setData({
      xiaoshi: false,
      mdc_show: true,
    })
  },
  /**
  * 搜索执行按钮
  */
  query: function (event) {
    var that = this
    /**
     * 提问帖子搜索API
     * keyword string 搜索关键词 ; 这里是 this.data.inputValue
     * start int 分页起始值 ; 这里是 0
     */
    wx.request({
      url: 'https://localhost/proj_online_class/server/public/index.php/forum/forum/get_issue_search/' + this.data.inputValue + /0/,
      data: {
        inputValue: this.data.inputValue
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        var searchData = res.data
        that.setData({
          searchData
        })

        /**
         * 把 从get_issue_searchAPI 
         * 获取 提问帖子搜索 的数据 设置缓存
         */
        wx.setStorage({
          key: 'searchLists',
          data: {
            searchLists: res.data
          }
        })
        /**
         * 设置 模糊搜索
         */
        if (!that.data.inputValue) {
          //没有搜索词 友情提示
          wx.showToast({
            title: '请重新输入',
            image: '../../picture/tear.png',
            duration: 2000,
          })
        } else if (searchData.search.length == 0) {
          //搜索词不存在 友情提示
          wx.showToast({
            title: '关键词不存在',
            image: '../../picture/tear.png',
            duration: 2000,
          })
        } else {
          //提取题目关键字 与搜索词进行匹配
          var searchIndex = searchData.search.length
          var d = 0;
          for (var i = 0; i <= searchIndex - 1; i++) {
            var searchTitle = searchData.search[d].title
            console.log(searchTitle)
            d = d + 1;
            for (var x = 0; x <= searchTitle.length; x++) {
              for (var y = 0; y <= searchTitle.length; y++) {
                var keyWord = searchTitle.substring(x, y);
                console.log(keyWord)
              }
            }
            /**
             * 根据关键词 跳转到 search搜索页面
             */
            wx.navigateTo({
              url: '../search/search',
            })
          }
        }
      }
    })
  },
  //加载更多
  onReachBottom: function () {
    console.log('加载更多');
    setTimeout(() => {
      this.setData({
        isHideLoadMore: true,
        goodsWelfareItems: [
          {
            goodId: 0,
            name: '泊尔崖蜜蜜光面膜（5片盒装）',
            url: 'bill',
            imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/142/fb2960bf8e074d029c24315279289c19-5_218x274_70.jpg',
            newprice: "86",
            oldprice: "88",
            discount: "8.8",
          },
          {
            goodId: 1,
            name: '透无瑕矿物养护两用粉饼#03',
            url: 'bill',
            imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/21/27/4b24e2a629644877866d3da755f6a36e-5_218x274_70.jpg',
            newprice: "147.00",
            oldprice: "150.00",
            discount: "8.8",
          },
          {
            goodId: 2,
            name: '川水水光面膜（5片盒装）',
            url: 'bill',
            imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/86/7891361fdab348a1bc91aeca31fc77b1-5_218x274_70.jpg',
            newprice: "86.00",
            oldprice: "88.00",
            discount: "8.8",
          },
          {
            goodId: 3,
            name: '蜜三色渐变咬唇膏3.2g 03蜜橙动心恋',
            url: 'bill',
            imageurl: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
            newprice: "97.00",
            oldprice: "99.00",
            discount: "8.8",
          },
          {
            goodId: 4,
            name: '时焕颜亮采套装',
            url: 'bill',
            imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/93/69a6bc1c11eb4be184b7dffb43b8565b-5_218x274_70.jpg',
            newprice: "398.00",
            oldprice: "459.00",
            discount: "8.8",
          }, {
            goodId: 5,
            name: '雪域眼霜套装',
            url: 'bill',
            imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/23/127/53409c86f74647af915bc379427b97c2-5_218x274_70.jpg',
            newprice: "238.00",
            oldprice: "358.00",
            discount: "8.8",
          }
          , {
            goodId: 6,
            name: '凝时鲜颜冰肌水套装',
            url: 'bill',
            imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/11/13/95/fb6c3d0c1f304b449dadb1f0100c1205-5_218x274_70.jpg',
            newprice: "248.00",
            oldprice: "348.00",
            discount: "8.8",
          }
          , {
            goodId: 7,
            name: '雪润皙白精选三件套',
            url: 'bill',
            imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/30/184/a5000156098940b5a05a0e696535ac20-5_218x274_70.jpg',
            newprice: "348.00",
            oldprice: "396.00",
            discount: "8.8",
          }

        ],
      })
    }, 500)
  }
})
