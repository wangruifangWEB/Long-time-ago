//app.js
var util = require('utils/util.js');
App({
    globalData: {
        userInfo: {},
        loginStatus: false,
        weRunArr: []
    },
    onShow: function () {
        console.log('onshow');
    },
    onLaunch: function () {
        var that = this;
        wx.checkSession({
            success: function () {
                console.log('success');
                wx.request({
                    url: "",
                    data: '',
                    success: function () {

                    },
                    fail: function () {
                        that.getUserInfo();
                    }

                })
            },
            fail: function () {
                console.log('fail');
                that.getUserInfo();
            }
        })
    },

    getWeRun: function (data) {
        var code = wx.getStorageSync('code');
        console.log(code);
        console.log(data);
        var that = this;
        wx.getWeRunData({
            success(res) {
                var rawData = data.rawData;
                var signature = data.signature;
                var encryptedData = data.encryptedData;
                var yunencryptedData = res.encryptedData;
                var yuniv = res.iv;
                var iv = data.iv;
                wx.request({
                    url: 'https://www.sqbqr.cn/index.php/Home/Wxprogram/onLogin',
                    data: {
                        "code": code,
                        "rawData": rawData,
                        "signature": signature,
                        'yuniv': yuniv,
                        'iv': iv,
                        'encryptedData': encryptedData,
                        'yunencryptedData': yunencryptedData
                    },
                    header: {
                        'content-type': 'application/json'
                    },
                    dataType: 'json',
                    method: 'GET',
                    success: function (info) {
                        that.runData(info);
                    }
                })
            },
            fail: function () {
                wx.showModal({
                    title: '警告',
                    content: '拒绝授权将无法使用微信运动计步功能,是否授权？',
                    success: (res) => {
                        if (res.confirm) {
                            console.log("用户点击确定");
                            that.getSettingRun();
                        } else {
                            console.log("用户点击取消");
                            that.getWeRun(data);
                        }
                    }
                })
            }
        })
    },
    runData: function (info) {
        var that = this;
        console.log(info);
        console.log(info.data.stepInfoList)
        var listLength = info.data.stepInfoList.length;
        for (var i = 0; i < info.data.stepInfoList.length; i++) {
            var werunDay = info.data.stepInfoList[i].step;
            that.globalData.weRunArr.push(werunDay);
            wx.setStorageSync('weRunArr', that.globalData.weRunArr);
        }
    },
    getUserInfo: function () {
        var that = this;
        wx.login({
            success: function (res) {
                var code = res.code;  //获取code
                wx.setStorageSync('code', code);
                if (res.code) {
                    wx.getUserInfo({  //得到rawData, signatrue, encryptData
                        withCredentials: true,
                        success: function (data) {
                            that.getWeRun(data);
                        },
                        fail: function () {
                            that.refuseAuthorize();
                        }
                    })
                }
            }
        })
    },
    refuseAuthorize: function () {
        var that = this;
        wx.showModal({
            title: '警告',
            content: '拒绝授权将无法使用微信部分功能,是否授权？',
            success: (res) => {
                if (res.confirm) {
                    console.log("用户点击确定111");
                    // 点击确定后用户找不到data
                    that.getSettingUser();
                } else {
                    console.log("用户点击取消");
                    that.getUserInfo();
                }
            }
        })
    },
    getSettingUser: function () {
        var that = this;
        console.log(2222);
        wx.openSetting({
            success: function (res) {
                if (res.authSetting["scope.userInfo"]) {
                    console.log('同意授权');
                    wx.getUserInfo({
                        success: function (data) {
                            console.log(data)
                            that.getWeRun(data);
                        }
                    })
                } else {
                    that.getUserInfo();
                }
            }
        })
    },
    getSettingRun: function () {
        var that = this;
        wx.openSetting({
            success: function (res) {
                if (res.authSetting["scope.werun"]) {
                    console.log('微信运动授权成功');
                    that.getUserInfo();
                } else {
                    that.getWeRun();
                }
            }
        })
    },
})