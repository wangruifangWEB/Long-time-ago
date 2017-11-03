//app.js
var util = require('utils/util.js');
App({
    globalData: {
        userInfo: {},
        loginStatus: false,
        weRunArr:[]

    },
    onLaunch: function () {
        var that = this;
        wx.checkSession({
            success: function () {
                console.log('success');
            },
            fail: function () {
                console.log('fail');
                that.getUserInfo();
            }
        })
    },
    getWeRun: function (data,code) {
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
                        console.log(info);
                        console.log(info.data.stepInfoList)
                        var listLength = info.data.stepInfoList.length;
                        for (var i = 0; i < info.data.stepInfoList.length; i++) {
                            var werunDay = info.data.stepInfoList[i].step;
                            that.globalData.weRunArr.push(werunDay);
                            wx.setStorageSync('weRunArr', that.globalData.weRunArr);
                        }
                    }
                })
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
                        success: function (data) {
                            that.getWeRun(data,code);
                        },
                        fail: function(){
                            
                        }
                    })
                }
            }
        })
    },
    
})