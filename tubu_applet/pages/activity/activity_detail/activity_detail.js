var app = getApp();
Page({

    data: {
        activeDetail :"",
        userInfoGlobal: '',
        isLoading: false,
        maskPosition: false,
        maskShow: true,
        screenHeight:""
    },
    onLoad: function (options) {
        // var idx = options.index;
        // var that=this;
        // var userInfoGlobal = {};
        // userInfoGlobal = app.globalData.userInfo;
        // console.log(app.globalData.userInfo);
        // for (var i in userInfoGlobal) {
        //     this.setData({
        //         userInfoGlobal: userInfoGlobal
        //     })
        // }
        // console.log(userInfoGlobal.nickName);
        // wx.request({
        //     url: "http://192.168.3.49:3000/actives1",
        //     method: "get",
        //     success: function (res) {
        //         console.log(res.data);
        //         var active = res.data[idx];
        //         console.log(active);
        //         that.setData({
        //             activeDetail: active
        //         })
        //     }
        // })   
        // console.log(this.data.activeDetail);
        var that=this;
        wx.getSystemInfo({
            
            success: function(res) {
                // console.log(res);
                // that.data.screenHeight = res.screenHeight*2;
                // console.log(that.data.screenHeight);
            },
        })
    },
    commentConfirm: function(event){
        console.log(event.detail.value);
    },
    upper: function () {
        console.log('刷新');
        wx.showToast({
            title: '刷新中',
            icon: 'loading'
        })
        // wx.stopPullDownRefresh();
    },
    // onReachBottom: function(){
    //     this.setData({
    //         isLoading: true
    //     })
    //     wx.showToast({
    //         title: '加载中',
    //     })
    // },
    lower: function(){
        console.log(this.data.maskShow);
        this.setData({
            isLoading: true
        })
        wx.showToast({
            title: '加载中',
        })
    },
    // 监听页面滚动
    onPageScroll: function(event){
        console.log('页面滚动');
        console.log(event.scrollTop);
    },
    maskShow: function(){
        this.maskShow({
            maskShow: false
        })
    },
    toComment: function(event){
        console.log(event);
        this.setData({
            maskPosition: true,
        })
    },
    findCommont: function(event){
        console.log(event.target.offsetTop);
    }
})