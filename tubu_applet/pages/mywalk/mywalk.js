var wxCharts = require('../../utils/wxcharts.js');
var lineChart = null;
var startPos = null;
var columnChart = null;
Page({
    data: {
        avatarUrl: '',
        selected_day: false,
        selected_week: false,
        selected_month: true,
        yunData: [],
        weRunDay: [],
        weRunDateMonth: '',
        weRunDateWeek: '',
        date_month: [],
        data_month: [],
        date_week: [],
        data_week: [],
        date_today: [],
        data_today: [],
        data_day: '0',
        totalData: '0'
    },
    // 点击日期
    selected_day: function (e) {
        this.setData({
            selected_day: true,
            selected_week: false,
            selected_month: false,
            data_month: [],
            date_month: [],
            date_week: [],
            data_week: [],
            date_today: [],
            data_today: []
        });

        wx.showLoading({
            title: '加载中...',
        })
        this.getRunInfo();
    },
    // 点击星期
    selected_week: function (e) {
        this.setData({
            selected_day: false,
            selected_week: true,
            selected_month: false,
            data_month: [],
            date_month: [],
            date_week: [],
            data_week: [],
            date_today: [],
            data_today: []
        });

        wx.showLoading({
            title: '加载中...',
        })
        this.getRunInfo();
    },
    // 点击月份
    selected_month: function (e) {
        this.setData({
            selected_day: false,
            selected_week: false,
            selected_month: true,
            data_month: [],
            date_month: [],
            date_week: [],
            data_week: [],
            date_today: [],
            data_today: []
        });
        wx.showLoading({
            title: '加载中...',
        })
        this.getRunInfo();
    },
    touchHandler: function (e) {
        if (this.data.selected_week) {
            lineChart.showToolTip(e, {
                format: function (item, category) {
                    return item.data
                }
            });
        }
        if (this.data.selected_month) {
            lineChart.scrollStart(e);

        }
        if (this.data.selected_day) {
            // console.log(columnChart.getCurrentDataIndex(e));
            columnChart.showToolTip(e, {
                format: function (item, category) {
                    return item.data
                }
            });
        }
    },
    moveHandler: function (e) {
        lineChart.scroll(e);
    },
    touchEndHandler: function (e) {
        lineChart.scrollEnd(e);
        lineChart.showToolTip(e, {
            format: function (item, category) {
                return item.data
            }
        });
    },
    onShow: function () {
        var that = this;
        that.setData({
            data_month: [],
            date_month: [],
            date_week: [],
            data_week: [],
            date_today: [],
            data_today: []
        })
        wx.checkSession({
            success: function () {
                // console.log('success');
                // 查询是否授权
                wx.getSetting({
                    success(res) {
                        if (!res.authSetting['scope.werun']) {
                            // console.log('success1');
                            that.getUserInfo();

                        } else {
                            // console.log('success2');
                            wx.showLoading({
                                title: '加载中...',
                            })
                            that.getUserInfo();
                        }
                    }
                })
            },
            fail: function () {
                console.log('fail');
                that.getUserInfo();
            }
        })
    },
    getUserInfo: function (data) {
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
                            that.setData({
                                avatarUrl: userInfo.avatarUrl
                            })
                            var rawData = data.rawData;
                            var signature = data.signature;
                            var encryptedData = data.encryptedData;
                            var iv = data.iv;
                            wx.request({
                                url: "https://www.sqbqr.cn/index.php/Home/Wxprogram/onLogin",
                                data: {
                                    "code": code,
                                    "signature": signature,
                                    "rawData": rawData,
                                    'iv': iv,
                                    "encryptedData": encryptedData
                                },
                                success: function (data) {
                                    wx.setStorageSync('3rdSession', data.data);
                                    var session3rd = wx.getStorageSync('3rdSession');

                                    //  取运动数据
                                    that.getRunInfo();

                                },
                                fail: function () {
                                    wx.showModal({
                                        title: '提示',
                                        content: '网络超时'
                                    })
                                }
                            })
                        },
                        fail: function () {
                            // 用户信息授权失败
                            console.log('用户信息授权失败');
                            that.userModal(data);
                        }
                    })
                }
            }
        })
    },
    getRunInfo: function () {
        var that = this;
        var session = wx.getStorageSync('3rdSession');
        // console.log(session);
        wx.getWeRunData({
            success(res) {
                var yunencryptedData = res.encryptedData;
                var yuniv = res.iv;
                wx.request({
                    url: 'https://www.sqbqr.cn/index.php/Home/Wxprogram/yundong',
                    data: {
                        'yunencryptedData': yunencryptedData,
                        'yuniv': yuniv,
                        "session3rd": session
                    },
                    header: {
                        'content-type': 'application/json'
                    },
                    dataType: 'json',
                    method: 'GET',
                    success: (data) => {
                        wx.showLoading({
                            title: '加载中...',
                        })
                        that.setData({
                            yundata: data.data.stepInfoList
                        })

                        that.walkShow();
                    }
                })
            },
            fail: function () {
                that.runModal();
            }
        })
    },
    userModal: function (data) {
        var that = this;
        wx.showModal({
            title: '警告',
            content: '拒绝授权将无法使用微信部分功能,是否授权？',
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
                    console.log('同意授权');
                    wx.getUserInfo({
                        success: function (data) {
                            that.getUserInfo();
                            var session3rd = wx.getStorageSync('3rdSession');
                            // console.log(session3rd);
                            that.getRunInfo();
                        }
                    })
                } else {
                    that.getUserInfo();
                }
            }
        })
    },
    runModal: function () {
        var that = this;
        wx.showModal({
            title: '警告',
            content: '拒绝授权将无法使用微信计步功能,是否授权？',
            success: (res) => {
                if (res.confirm) {
                    console.log("确定授权运动信息");
                    that.runGetSetting();
                } else {
                    console.log("用户点击取消");
                    that.getRunInfo();
                }
            }
        })
    },
    runGetSetting: function () {
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
    walkShow: function () {
        // X轴
        var weRunDayArr = [];
        weRunDayArr = this.data.yundata;
        for (var i in weRunDayArr) {
            // 月份
            this.data.weRunDay.push(this.formatDate(weRunDayArr[i].timestamp));
            this.setData({
                weRunDateMonth: this.data.weRunDay[i].substring(5, 10),
                weRunDateWeek: this.data.weRunDay[i].substring(10, 12),
            })
            this.data.data_month.push(weRunDayArr[i].step);
            this.data.date_month.push(this.data.weRunDateMonth);
            this.data.date_week.push(this.data.weRunDateWeek);
            
        }

        // console.log(this.data.date_month.length);
        // console.log(this.data.date_week);
        // console.log(this.data.data_month.slice(-7));
        // console.log(this.data.data_day);
        // console.log(this.data.data_month);
        var dataMonth = this.data.data_month;
        
        var total = dataMonth.reduce(function (a, b) {
            return a + b;
        }, 0);
        // console.log(total);
        // 总数据
        this.setData({
            totalData: total
        })

        // 星期
        this.setData({
            date_week: this.data.date_week.slice(-7),
            data_week: this.data.data_month.slice(-7)
        })

        // 今天
        this.setData({
            date_today: this.data.date_week.slice(-2),
            data_today: this.data.data_month.slice(-2),
            data_day: this.data.data_month.slice(-1)
        })
        
        if (this.data.selected_month) {
            this.data_month_process();
            wx.hideLoading();
        }
        if (this.data.selected_week) {
            this.data_week_process();
            wx.hideLoading();
        }
        if (this.data.selected_day) {
            this.data_today_process();
            wx.hideLoading();
        }
    },
    createSimulationData1: function () {
        return {
            categories: this.data.date_week,
            data: this.data.data_week
        }
    },
    createSimulationData: function () {
        wx.showLoading({
            title: '加载中...',
        })
        return {
            categories: this.data.date_month,
            data: this.data.data_month
        }
    },
    createSimulationDataToday: function () {
        wx.showLoading({
            title: '加载中...',
        })
        return {
            categories: ['昨天', '今天'],
            data: this.data.data_today
        }
    },
    data_today_process: function () {
        var windowWidth = 375;
        var simulationData = this.createSimulationDataToday();
        columnChart = new wxCharts({
            canvasId: 'columnCanvas',
            type: 'column',
            categories: simulationData.categories,
            animation: true,
            legend: false,
            series: [{
                name: '步数',
                data: simulationData.data
            }],
            xAxis: {
                disableGrid: true,
            },
            yAxis: {
                disabled: true,
                min: 0,
                max: 30000
            },
            width: windowWidth * 0.933,
            height: 170,
            dataLabel: true,
            dataPointShape: true,
            extra: {
                column: {
                    width: 30
                }
            }
        });
    },
    data_week_process: function () {
        var windowWidth = 375;
        var simulationData = this.createSimulationData1();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: simulationData.categories,
            animation: true,
            legend: false,
            series: [{
                name: '步数',
                data: simulationData.data
            }],
            xAxis: {
                disableGrid: true,
            },
            yAxis: {
                disabled: true,
                min: 0,
                max: 30000
            },
            width: windowWidth * 0.933,
            height: 170,
            dataLabel: true,
            dataPointShape: true,
            extra: {
                lineStyle: 'curve'
            }
        });
    },
    data_month_process: function () {
        var windowWidth = 375;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }

        var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas2',
            type: 'line',
            categories: simulationData.categories,
            animation: true,
            legend: false,
            series: [{
                name: '步数',
                data: simulationData.data
            }],
            xAxis: {
                disableGrid: true
            },
            yAxis: {
                disabled: true,
                min: 0,
                max: 30000
            },
            width: windowWidth * 0.933,
            height: 170,
            dataLabel: true,
            dataPointShape: true,
            enableScroll: true,
            extra: {
                lineStyle: 'curve',
            }
        });
    },
    formatDate: function (time) {
        var unixtime = time;
        var unixTimestamp = new Date(unixtime * 1000);
        var year = unixTimestamp.getFullYear();
        var month = unixTimestamp.getMonth() + 1;
        var date = unixTimestamp.getDate();
        var day = unixTimestamp.getDay()
        if (month < 10) {
            month = '0' + month;
        }
        if (date < 10) {
            date = '0' + date;
        }
        switch (day) {
            case 0:
                day = "周日";
                break;
            case 1:
                day = "周一";
                break;
            case 2:
                day = "周二";
                break;
            case 3:
                day = "周三";
                break;
            case 4:
                day = "周四";
                break;
            case 5:
                day = "周五";
                break;
            case 6:
                day = "周六";
                break;
        }
        var toDay = year + '-' + month + '-' + date + day;
        return toDay;
    }
});