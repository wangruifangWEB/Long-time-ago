var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var radarChart = null;
Page({
    data: {
    },
    touchHandler: function (e) {
        console.log(radarChart.getCurrentDataIndex(e));
    },
    onReady: function (e) {
        var windowWidth = 375;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }

        radarChart = new wxCharts({
            canvasId: 'radarCanvas',
            type: 'radar',
            categories: ['碳水化合物', '脂肪', '能量', '蛋白质', '盐'],
            series: [{
                name: '成交量1',
                data: [90, 110, 125, 95, 87]
            }],
            width: windowWidth,
            height: 200,
            extra: {
                radar: {
                    max: 150
                }
            }
        });
    }
});