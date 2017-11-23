var wxCharts = require('../../utils/wxcharts.js');
var utils = require('../../utils/util.js');
var app = getApp();
var lineChart = null;
var startPos = null;
var ringChart = null;
Page({
    data: {
        avatarUrl: '',
        selected_day: true,
        selected_week: false,
        selected_month: false,
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
        totalData: '0',
        disToday: false,
        disWeek: false,
        disMonth: false,
        standardWidth: 375,
        widthScale: 1
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
            data_today: [],
            disToday: true
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
            data_today: [],
            disWeek: true
        });
        wx.showLoading({
            title: '加载中...',
        })
        this.setData({

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
            data_today: [],
            disMonth: true
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
                    console.log(111);
                    return item.data
                }
            });
        }
        if (this.data.selected_month) {
            lineChart.scrollStart(e);
        }
        if (this.data.selected_day) {
            console.log(ringChart.getCurrentDataIndex(e));
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
            data_today: [],

        })
        var timer = null;
        timer = setInterval(function () {
            var session3rd = wx.getStorageSync('3rdSession');
            if (session3rd == "") {
                return;
            } else {
                clearInterval(timer);
                that.setData({
                    avatarUrl: wx.getStorageSync('userInfo').avatarUrl
                })
                wx.checkSession({
                    success: function () {
                        wx.getSetting({
                            success(res) {
                                if (!res.authSetting['scope.werun']) {
                                    that.getRunInfo();
                                } else {
                                    that.getRunInfo();
                                }
                            }
                        })
                    },
                    fail: function () {
                        that.getRunInfo();
                    }
                })
            }
        }, 1000);
    },
    getRunInfo: function () {
        var that = this;
        var session = wx.getStorageSync('3rdSession');
        wx.getWeRunData({
            success(res) {
                var yunencryptedData = res.encryptedData;
                var yuniv = res.iv;
                wx.request({
                    url: app.globalData.globalUrl + 'index.php/Home/Wxprogram/yundong',
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
    runModal: function () {
        var that = this;
        wx.showModal({
            title: '警告',
            content: '拒绝授权将无法使用微信计步功能,请授权',
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
                    // that.getRunInfo();
                } else {
                    that.getRunInfo();
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
            this.data.weRunDay.push(utils.formatDate(weRunDayArr[i].timestamp));
            this.setData({
                weRunDateMonth: this.data.weRunDay[i].substring(5, 10),
                weRunDateWeek: this.data.weRunDay[i].substring(10, 12),
            })
            this.data.data_month.push(weRunDayArr[i].step);
            this.data.date_month.push(this.data.weRunDateMonth);
            this.data.date_week.push(this.data.weRunDateWeek);

        }
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
            date_today: this.data.date_week.slice(-1),
            data_today: this.data.data_month.slice(-1),
            data_day: this.data.data_month.slice(-1)
        })
        this.data.data_day = parseInt(this.data.data_day);
        if (this.data.selected_month) {
            this.data_month_process();
            wx.hideLoading();
            this.setData({
                disMonth: false
            })
        }
        if (this.data.selected_week) {
            this.data_week_process();
            wx.hideLoading();
            this.setData({
                disWeek: false
            })
        }
        if (this.data.selected_day) {
            this.data_today_process();
            wx.hideLoading();
            this.setData({
                disToday: false
            })
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
    data_week_process: function () {
        var windowWidth = 375;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
            windowWidth = 375;
        }
        this.setData({
            widthScale: parseInt(windowWidth) / parseInt(this.data.standardWidth)
        })
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
            height: (170 * this.data.widthScale).toFixed(0),
            dataLabel: false,
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
            windowWidth = 375;
        }
        this.setData({
            widthScale: parseInt(windowWidth) / parseInt(this.data.standardWidth)
        })

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
            height: (170 * this.data.widthScale).toFixed(0),
            dataLabel: false,
            dataPointShape: true,
            enableScroll: true,
            extra: {
                lineStyle: 'curve',
            }
        });
    },

    data_today_process: function () {
        // wx.showLoading({
        //     title: '加载中...',
        // })
        var windowWidth = 375;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
            windowWidth = 375;
        }
        this.setData({
            widthScale: parseInt(windowWidth) / parseInt(this.data.standardWidth)
        })
        var circleX = 175 * (this.data.widthScale);
        var circleY = 80 * (this.data.widthScale);
        var scaleCircle = Math.min(this.data.data_day / 4000, 1);
        var context1 = wx.createCanvasContext('outerCanvas');
        var context4 = wx.createCanvasContext('drawImage');
        function drawAngle(startAngle, endAngle1) {
            context1.setLineWidth(8);
            context1.setStrokeStyle('#dfdfdf');
            context1.setLineCap('round')
            context1.beginPath();
            context1.arc(circleX, circleY, 70, 0, 2 * Math.PI);
            context1.stroke();
            context1.save();
            context1.restore();
            context1.setLineWidth(8);
            context1.setStrokeStyle('#82e34d');
            context1.setLineCap('round');
            context1.beginPath();
            context1.arc(circleX, circleY, 70, startAngle, endAngle1, false);
            context1.stroke();
            context1.draw();
        }
        var startAngle = 1.5 * Math.PI, endAngle1 = 1.5 * Math.PI, endAngle2 = Math.PI * 2 * scaleCircle + Math.PI * 1.5;
        var that = this;
        var timer = null, timer2 = null;
        // that.timeNumber();

        // for (var i = 0; i < that.data.data_day; i++) {
        //     console.log(i);
        //     var time2 = setInterval(function () {
        //         if (i < that.data.data_day) {
        //             i++;
        //             that.setData({
        //                 data_day: i
        //             })
        //             return;
        //         } else {
        //             clearInterval(time2);
        //             that.setData({
        //                 data_day: i
        //             })
        //         }
        //     }, 10)
        // }

        timer = setInterval(function () {
            if (endAngle1 <= endAngle2) {
                drawAngle(startAngle, endAngle1);
                endAngle1 = endAngle1 + 0.1;
                var angle = endAngle1 - startAngle;
                var X = circleX + Math.sin(angle) * 70 - 8;
                var Y = 80 - Math.cos(angle) * 70 - 8;
                drawImage(X, Y);
                return;
            } else {
                clearInterval(timer);
                drawAngle(startAngle, endAngle1);
            }
        }, 20)

        function drawImage(X, Y) {
            context4.drawImage('/images/circle.png', X, Y, 15, 15);
            wx.drawCanvas({
                canvasId: 'imageCanvas',
                actions: context4.getActions()
            })
        }
    },
    timeNumber: function () {
        var dataDay = this.data.data_day.toString();
        var that = this;
        var numbArr = [];
        var time2 = null;
        
        // for (var i = 0; i < that.data.data_day; i++) {
        //     console.log(i);
        //     var time2 = setInterval(function () {
        //         if (i < that.data.data_day) {
        //             i++;
        //             that.setData({
        //                 data_day: i
        //             })
        //             return;
        //         } else {
        //             clearInterval(time2);
        //             that.setData({
        //                 data_day: i
        //             })
        //         }
        //     }, 10)
        // }
        
        

        // for (var i = 0; i < dataDay.length; i++) {
        //     var numb = parseInt(dataDay[i]);
        //     function increase(numb) {
        //         console.log(numb);
        //         for (var i = 0; i < numb; i++) {
        //             var time2 = setInterval(function () {
        //                 if (i < numb) {
        //                     i++;
        //                     numbArr.push(i);
        //                     that.setData({
        //                         data_day: numbArr
        //                     })
        //                     return;
        //                 } else {
        //                     clearInterval(time2);
        //                     that.setData({
        //                         data_day: numbArr
        //                     })
        //                 }
        //             }, 3000)
        //         }
        //     }
        //     increase(numb);
        // };
    }
});