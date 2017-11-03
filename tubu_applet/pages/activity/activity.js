Page({
    data:{
        "activesInfo1":'',
        "activesInfo2":'',
        "tab_left": true,
        "tab_right": false
    },
    onLoad: function(option){
        this.allActivefn();
    },
    tabLeftfn: function(){
        this.setData({
            "tab_left": true,
            "tab_right": false,
        })
        this.allActivefn();
    },
    tabRightfn: function () {
        this.setData({
            "tab_left": false,
            "tab_right": true,
        })
        this.myActivefn();
    },
    allActivefn: function(event){
        var that = this;
        // wx.request({
        //     url: 'http://192.168.3.49:3000/actives1',
        //     method: 'get',
        //     success: function (res) {
        //         var actives = res.data;
        //         for (var i in actives) {
        //             that.setData({
        //                 activesInfo1: actives
        //             })
        //         }
        //     }
        // })
    },
    myActivefn: function (event) {
        var that = this;
        // wx.request({
        //     url: 'http://192.168.3.49:3000/actives2',
        //     method: 'get',
        //     success: function (res) {
        //         var actives = res.data;
        //         for (var i in actives) {
        //             that.setData({
        //                 activesInfo2: actives
        //             })
        //         }
        //     }
        // })
    },
    acticeDetailfn:function(event){
        var idx = event.currentTarget.dataset.index;
        // console.log(idx);
        wx.navigateTo({
            url: 'activity_detail/activity_detail?index='+idx,
        })
    }
})
