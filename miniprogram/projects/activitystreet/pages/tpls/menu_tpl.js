Page({
  data: {
    currentTab: 0
  urls: [
        '/projects/activitystreet/pages/default/index/default_index',
        '/projects/activitystreet/pages/news/index/news_index',
        '/projects/activitystreet/pages/activity/index/activity_index',
        '/projects/activitystreet/pages/my/index/my_index'
      ]
    },
    swiperChange: function(e) {
      this.setData({
        currentTab: e.detail.current
      });
      let url = this.data.urls[e.detail.current];
      wx.reLaunch({
        url: url
      });
    }
  })