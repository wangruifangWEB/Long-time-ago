App({
    globalData: {
        globalUrl: 'https://www.sqbqr.cn/'
    },
    onShow: function () {
        var that = this;
        wx.checkSession({
            success: function () {
                // 查询是否授权
                wx.getSetting({
                    success(res) {
                        if (!res.authSetting['scope.userInfo']) {
                            that.getUserInfo();
                        }
                    }
                })
            },
            fail: function () {
                that.getUserInfo();
            }
        })
    },
    getUserInfo: function () {
        var that = this;
        wx.login({
            success: function (res) {
                var code = res.code;  //获取code
                if (res.code) {
                    wx.getUserInfo({  //得到rawData, signatrue, encryptData
                        withCredentials: true,
                        success: function (data) {
                            wx.setStorageSync('userInfo', data.userInfo);
                            var userInfo = wx.getStorageSync('userInfo');
                            console.log(userInfo);
                            var rawData = data.rawData;
                            var signature = data.signature;
                            var encryptedData = data.encryptedData;
                            var iv = data.iv;
                            wx.request({
                                url: that.globalData.globalUrl + "index.php/Home/Wxprogram/onLogin",
                                data: {
                                    "code": code,
                                    "signature": signature,
                                    "rawData": rawData,
                                    'iv': iv,
                                    "encryptedData": encryptedData
                                },
                                success: function (data) {
                                    wx.setStorageSync('3rdSession', data.data);
                                },
                                fail: function () {
                                    wx.showModal({
                                        title: '提示',
                                        content: '请求超时，请退出小程序重试',
                                    })
                                }
                            })
                        },
                        fail: function () {
                            console.log('用户信息授权失败');
                            that.userModal();
                        }
                    })
                }
            }
        })
    },
    userModal: function (data) {
        console.log(1);
        var that = this;
        wx.showModal({
            title: '警告',
            content: '拒绝用户信息授权将无法使用本小程序部分功能,请确认授权',
            success: (res) => {
                if (res.confirm) {
                    console.log("确定授权用户信息");
                    that.userGetSetting();
                } else {
                    console.log("用户点击取消");
                    that.getUserInfo();
                }
            }
        })
    },
    userGetSetting: function () {
        var that = this;
        wx.openSetting({
            success: function (res) {
                if (res.authSetting["scope.userInfo"]) {
                    wx.getUserInfo({
                        success: function (data) {
                            that.getUserInfo();
                            var session3rd = wx.getStorageSync('3rdSession');
                        }
                    })
                } else {
                    that.getUserInfo();
                }
            }
        })
    },
})