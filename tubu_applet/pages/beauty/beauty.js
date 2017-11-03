Page({
    data: {
        "beautysInfo":""
    },
    onLoad: function (options) {
        var that=this;
        wx.request({
            url: "http://192.168.3.49:3000/beautys",
            method: "get",
            success:function(res){
                var beautys = res.data;
                var beauty = beautys[i];
                for (var i in beautys) {
                    that.setData({
                        beautysInfo: beautys,
                    })
                }
            },
            error:function(){
                console.log("请求错误");
            }
        })
    },
    deleteUser: function () {
        wx.showModal({
            title: '提示',
            content: '确认删除吗',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                } else if (res.cancel) {
                    console.log('用户点击取消');
                }
            }
        })
    },
    thumbsfn: function (event){
        var that=this;
        var idx = event.currentTarget.dataset.index;
        var thumbsCount = event.currentTarget.dataset.thumbscount;
        console.log(idx);
        wx.request({
            url: "http://localhost:3000/beautys",
            method:'post',
            success: function(res){ 
                
            }
        })
    },

    // 跳转
    beauytDetailfn: function(event){
        var that = this;
        var idx = event.currentTarget.dataset.index;
        wx.navigateTo({
            url: 'beauty_detail/beauty_detail?index='+idx
        })
    },

    // 加载
    onReachBottom: function () {
        wx.showToast({
            title: '加载中...',
            icon: 'loading'
        })
    },
    //  刷新
    onPullDownRefresh: function () {
        wx.showToast({
            title: '刷新中...',
            icon: 'loading'
        })
        console.log('onPullDownRefresh', new Date())
    },
    stopPullDownRefresh: function () {
        wx.stopPullDownRefresh({
            complete: function (res) {
                wx.hideToast();
            }
        })
    }
})