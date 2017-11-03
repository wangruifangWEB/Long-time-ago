// //app.js
// var wxCharts = require('utils/wxcharts.js');
// var lineChart = null;
// App({
//     globalData: {
//         weRunDataArr: [],
//         weRunDayArr: [],
//         yunData: [],

//         weRunDay: [],
//         weRunDateMonth: '',
//         weRunDateWeek: '',
//         date_month: [],
//         data_month: [],
//         date_week: [],
//         data_week: [],
//         data_day: '',
//         checkClick: false
//     },
//     onShow: function () {
//         var that = this;
//         wx.checkSession({
//             success: function () {
//                 console.log('success');
//                 that.globalData.checkClick=true;
//                 // 查询是否授权
//                 wx.getSetting({
//                     success(res) {
//                         if (!res.authSetting['scope.werun']) {
//                             that.getUserInfo();
//                         }
//                     }
//                 })
//             },
//             fail: function () {
//                 console.log('fail');
//                 that.getUserInfo();
//             }
//         })
//     },
//     getUserInfo: function (data) {
//         var that = this;
//         wx.login({
//             success: function (res) {
//                 var code = res.code;  //获取code
//                 if (res.code) {
//                     wx.getUserInfo({  //得到rawData, signatrue, encryptData
//                         withCredentials: true,
//                         success: function (data) {
//                             console.log(data);
//                             var rawData = data.rawData;
//                             var signature = data.signature;
//                             var encryptedData = data.encryptedData;
//                             var iv = data.iv;
//                             wx.request({
//                                 url: "https://www.sqbqr.cn/index.php/Home/Wxprogram/onLogin",
//                                 data: {
//                                     "code": code,
//                                     "signature": signature,
//                                     "rawData": rawData,
//                                     'iv': iv,
//                                     "encryptedData": encryptedData
//                                 },
//                                 success: function (data) {
//                                     wx.setStorageSync('3rdSession', data.data);
//                                     var session3rd = wx.getStorageSync('3rdSession');
//                                     console.log(session3rd);
//                                     //  取运动数据
//                                     that.getRunInfo();
//                                 },
//                                 fail: function () {
//                                     wx.showModal({
//                                         title: '提示',
//                                         content: '网络超时'
//                                     })
//                                 }
//                             })
//                         },
//                         fail: function () {
//                             // 用户信息授权失败
//                             console.log('用户信息授权失败');
//                             that.userModal(data);
//                         }
//                     })
//                 }
//             }
//         })
//     },
//     getRunInfo: function () {
//         var that = this;
//         var session = wx.getStorageSync('3rdSession');
//         console.log(session);
//         wx.getWeRunData({
//             success(res) {
//                 console.log(res);
//                 var yunencryptedData = res.encryptedData;
//                 var yuniv = res.iv;
//                 wx.request({
//                     url: 'https://www.sqbqr.cn/index.php/Home/Wxprogram/yundong',
//                     data: {
//                         'yunencryptedData': yunencryptedData,
//                         'yuniv': yuniv,
//                         "session3rd": session
//                     },
//                     header: {
//                         'content-type': 'application/json'
//                     },
//                     dataType: 'json',
//                     method: 'GET',
//                     success: (data) => {
//                         console.log(data);
//                         that.runData(data);
//                     }
//                 })
//             },
//             fail: function () {
//                 that.runModal();
//             }
//         })
//     },
//     runData: function (data) {
//         console.log(data);
//         var that = this;
//         this.globalData.yunData = data.data.stepInfoList;
//         console.log(this.globalData.yunData);
//         var listLength = data.data.stepInfoList.length;
//         for (var i = 0; i < data.data.stepInfoList.length; i++) {
//             var werunData = data.data.stepInfoList[i].step;
//             var werunDay = data.data.stepInfoList[i].timestamp;
//             that.globalData.weRunDataArr.push(werunData);
//             that.globalData.weRunDayArr.push(werunDay);
//             wx.setStorageSync('weRunDataArr', that.globalData.weRunDataArr);
//             wx.setStorageSync('weRunDayArr', that.globalData.weRunDayArr);
//         }
//         wx.setStorageSync('yunData', this.globalData.yunData);
//         that.walkShow();
//     },
//     userModal: function (data) {
//         var that = this;
//         wx.showModal({
//             title: '警告',
//             content: '拒绝授权将无法使用微信部分功能,是否授权？',
//             success: (res) => {
//                 if (res.confirm) {
//                     console.log("确定授权用户信息");
//                     that.userGetSetting();
//                 } else {
//                     console.log("用户点击取消");
//                     that.getUserInfo();
//                 }
//             }
//         })
//     },
//     userGetSetting: function () {
//         var that = this;
//         wx.openSetting({
//             success: function (res) {
//                 if (res.authSetting["scope.userInfo"]) {
//                     console.log('同意授权');
//                     wx.getUserInfo({
//                         success: function (data) {
//                             that.getUserInfo();
//                             var session3rd = wx.getStorageSync('3rdSession');
//                             console.log(session3rd);
//                             that.getRunInfo();
//                         }
//                     })
//                 } else {
//                     that.getUserInfo();
//                 }
//             }
//         })
//     },
//     runModal: function () {
//         var that = this;
//         wx.showModal({
//             title: '警告',
//             content: '拒绝授权将无法使用微信计步功能,是否授权？',
//             success: (res) => {
//                 if (res.confirm) {
//                     console.log("确定授权运动信息");
//                     that.runGetSetting();
//                 } else {
//                     console.log("用户点击取消");
//                     that.getRunInfo();
//                 }
//             }
//         })
//     },
//     runGetSetting: function () {
//         var that = this;
//         wx.openSetting({
//             success: function (res) {
//                 if (res.authSetting["scope.werun"]) {
//                     console.log('微信运动授权成功');
//                     that.getUserInfo();
//                 } else {
//                     that.getWeRun();
//                 }
//             }
//         })
//     },
//     walkShow: function () {
//         var yunData = wx.getStorageSync('yunData');
//         console.log('walkShow');
//         console.log(yunData);
//         if (yunData) {
//             // X轴
//             var weRunDayArr = yunData;
//             console.log(weRunDayArr.length);
//             for (var i = 0; i < weRunDayArr.length; i++) {
//                 // 月份
//                 console.log(weRunDayArr[i]);
//                 // ary.splice(0, ary.length);
                
//                 this.globalData.weRunDay.push(this.formatDate(weRunDayArr[i].timestamp));
//                 this.globalData.weRunDateMonth = this.globalData.weRunDay[i].substring(5, 10);
//                 this.globalData.weRunDateWeek = this.globalData.weRunDay[i].substring(10, 12);
//                 this.globalData.data_month.push(weRunDayArr[i].step);
//                 this.globalData.date_month.push(this.globalData.weRunDateMonth);
//                 this.globalData.date_week.push(this.globalData.weRunDateWeek);
//             }
//             console.log(this.globalData.date_month);
//             console.log(this.globalData.date_week);
//             console.log(this.globalData.data_month);
//             console.log(this.globalData.data_month.slice(-7));
//             // Y轴
//             var weRunDataArr = wx.getStorageSync('weRunDataArr');
//             // 星期X
//             this.globalData.date_week = this.globalData.date_week.slice(-7);
//             // 星期Y
//             this.globalData.data_week = this.globalData.data_month.slice(-7);4

//             // 今天
//             this.globalData.data_day = this.globalData.data_month.slice(-1).toString();

//             console.log(this.globalData.date_month);
//             console.log(this.globalData.data_month);
//             console.log(this.globalData.date_week);
//             console.log(this.globalData.data_week);
//             console.log(this.globalData.data_day);
//             this.data_month_process();
//         }
//     },
//     createSimulationData1: function () {
//         console.log(this.globalData.date_week);
//         console.log(this.globalData.data_week);
//         return {
//             categories: this.globalData.date_week,
//             data: this.globalData.data_week
//         }
//     },
//     createSimulationData: function () {
//         return {
//             categories: this.globalData.date_month,
//             data: this.globalData.data_month
//         }
//     },
//     data_week_process: function () {
//         var windowWidth = 375;
//         var simulationData = this.createSimulationData1();
//         lineChart = new wxCharts({
//             canvasId: 'lineCanvas',
//             type: 'line',
//             categories: simulationData.categories,
//             animation: true,
//             legend: false,
//             series: [{
//                 name: '步数',
//                 data: simulationData.data
//             }],
//             xAxis: {
//                 disableGrid: true,
//             },
//             yAxis: {
//                 disabled: true,
//                 min: 0
//             },
//             width: windowWidth,
//             height: 200,
//             dataLabel: false,
//             dataPointShape: true,
//             extra: {
//                 lineStyle: 'curve'
//             }
//         });
//     },
//     data_month_process: function () {
//         var windowWidth = 375;
//         try {
//             var res = wx.getSystemInfoSync();
//             windowWidth = res.windowWidth;
//         } catch (e) {
//             console.error('getSystemInfoSync failed!');
//         }
//         var simulationData = this.createSimulationData();
//         lineChart = new wxCharts({
//             canvasId: 'lineCanvas2',
//             type: 'line',
//             categories: simulationData.categories,
//             animation: true,
//             legend: false,
//             series: [{
//                 name: '步数',
//                 data: simulationData.data
//             }],
//             xAxis: {
//                 disableGrid: false
//             },
//             yAxis: {
//                 disabled: true,
//                 min: 0
//             },
//             width: windowWidth,
//             height: 200,
//             dataLabel: true,
//             dataPointShape: true,
//             enableScroll: true,
//             extra: {
//                 lineStyle: 'curve'
//             }
//         });
//     },
//     formatDate: function (time) {
//         var unixtime = time;
//         var unixTimestamp = new Date(unixtime * 1000);
//         var year = unixTimestamp.getFullYear();
//         var month = unixTimestamp.getMonth() + 1;
//         var date = unixTimestamp.getDate();
//         var day = unixTimestamp.getDay()
//         if (month < 10) {
//             month = '0' + month;
//         }
//         if (date < 10) {
//             date = '0' + date;
//         }
//         switch (day) {
//             case 0:
//                 day = "周日";
//                 break;
//             case 1:
//                 day = "周一";
//                 break;
//             case 2:
//                 day = "周二";
//                 break;
//             case 3:
//                 day = "周三";
//                 break;
//             case 4:
//                 day = "周四";
//                 break;
//             case 5:
//                 day = "周五";
//                 break;
//             case 6:
//                 day = "周六";
//                 break;
//         }
//         var toDay = year + '-' + month + '-' + date + day;
//         return toDay;
//     }
// })