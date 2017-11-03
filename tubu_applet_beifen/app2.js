//app.js
App({
    globalData: {
        userInfo: {},
        loginStatus: false,
    },
    onLaunch: function () {
        var that = this;
        wx.checkSession({
            // url: "",
            // data: {

            // },
            success: function () {
                console.log('success');
            },
            fail: function () {
                console.log('fail');
                // if (wx.getStorageSync('loginSessionKey')) {
                //     return;
                // }
                that.getUserInfo();
            }
        })
        // // 检测3rdSessionId是否存在
        // wx.request({
        //     url: "",
        //     success: function(res){
        //         console.log(res);

        //     }
        // })

        // 授权
        // wx.getSetting({
        //     success: (authSetting) => {
        //         console.log(authSetting);
        //     }
        // })
        // 兼容

        // 查询是否授权
        // wx.getSetting({
        //     success(res) {
        //         if (!res.authSetting['scope.werun']) {
        //             wx.authorize({
        //                 scope: 'scope.werun',
        //                 success() {
        //                     // 用户已经同意小程序使用微信运动步数功能，后续调用 wx.werun 接口不会弹窗询问
        //                     wx.getWeRunData();
        //                 }
        //             })
        //         }
        //         if (!res.authSetting['scope.userInfo']) {
        //             wx.authorize({
        //                 scope: 'scope.userInfo',
        //                 success() {
        //                     // 用户已经同意小程序使用用户信息功能，后续调用 wx.werun 接口不会弹窗询问
        //                     console.log('authorize');
        //                     that.getUserInfo();
        //                 }
        //             })
        //         }
        //     }
        // })
    },
    getUserInfo: function (cb) {
        var that = this;
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                wx.request({
                    url: "https://api.weixin.qq.com/sns/jscode2session",
                    header: {
                        'content-type': 'application/json'
                    },
                    data: {
                        appid: "wx949efef83655656d",
                        secret: "3cbfb9cc2bc0971f1a3e0897dcf61f63",
                        js_code: res.code,
                        grant_type: "authorization_code"
                    },
                    success: function (res) {
                        // console.log(res);
                        wx.getUserInfo({
                            withCredentials: true,
                            success: function (res) {
                                //  向后台传unionID
                                console.log(res);
                                that.globalData.userInfo = res.userInfo;
                                that.globalData.loginStatus = true;
                                console.log(that.globalData.userInfo);
                            },
                            fail: function (res) {
                                wx.showModal({
                                    title: '警告',
                                    content: '拒绝授权将无法使用微信运动功能,是否授权？',
                                    success: (res) => {
                                        if (res.confirm) {
                                            console.log("用户点击确定");
                                            wx.openSetting({
                                                success: function (res) {
                                                    console.log(res);
                                                    if (res.authSetting["scope.userInfo"]) {
                                                        wx.getUserInfo({
                                                            success: (res) => {
                                                                that.globalData.userInfo = res.userInfo;
                                                                that.globalData.loginStatus = true;
                                                            }
                                                        })
                                                    }
                                                }
                                            })
                                        } else {
                                            console.log("用户点击取消");
                                            that.globalData.loginStatus = false;
                                        }
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})