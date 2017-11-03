var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
Page({
    data: {
        selected_day: false,
        selected_week: true,
        selected_month: false,
        data_week: [],
        data_month: []
    },
    selected_day: function (e) {
        this.setData({
            selected_day: true,
            selected_week: false,
            selected_month: false
        });
    },
    selected_week: function (e) {
        this.setData({
            selected_day: false,
            selected_week: true,
            selected_month: false
        });
        this.data_week_process();
    },
    selected_month: function (e) {
        this.setData({
            selected_day: false,
            selected_week: false,
            selected_month: true
        });
        this.data_month_process();

    },
    touchHandler: function (e) {
        if (this.data.selected_week) {
            console.log(lineChart.getCurrentDataIndex(e));
            lineChart.showToolTip(e, {
                background: '#7cb5ec',
                format: function (item, category) {
                    return item.data
                }
            });
        }
        if (this.data.selected_month) {
            lineChart.scrollStart(e);
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
    onLoad: function (e) {
        var data_weeks=[];
        var that=this;
        wx.request({
            url: "http://www.sqbqr.cn/index.php/Home/Qu/ceshi",
            data: '',
            method: 'get',
            success: function (res) {
                for (var i in res.data) {
                    data_weeks.push(res.data[i]);
                }
                that.data.data_week = data_weeks;
                that.data_week_process();  
            },
            fail: function () {
                console.log(1111);
            }
        })
        
    },
    createSimulationData1: function () {
        var that=this;
        var categories_week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        console.log(that.data.data_week);
        // this.data.data_week = [30, 50, 80, 100, 40, 80, 90];
        for (var i = 0; i < 7; i++) {
            // data.push(Math.random() * (20 - 10) + 10);
        }
        return {
            categories: categories_week,
            data: that.data.data_week
        }
    },
    createSimulationData: function () {
        var categories_month = [];
        this.data.data_month = ['30', '50', '80', '100', '40', '80', '90', '150', '260', '30', '90', '80'];
        for (var i = 0; i < 12; i++) {
            categories_month.push((i + 1) + '月');
            // this.data.data_month.push(Math.random() * (20 - 10) + 10);
        }
        return {
            categories: categories_month,
            data: this.data.data_month
        }
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
                min: 0
            },
            width: windowWidth,
            height: 200,
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
                disableGrid: false
            },
            yAxis: {
                disabled: true,
                min: 0
            },
            width: windowWidth,
            height: 200,
            dataLabel: true,
            dataPointShape: true,
            enableScroll: true,
            extra: {
                lineStyle: 'curve'
            }
        });
    }
});