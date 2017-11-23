var wxCharts = require('../../utils/wxcharts.js');
var radarChart = null;
Page({
    data: {
        widthScale:'',
        standardWidth: 375,
        BMImy: false,
        BMIjy: true,
        BMIng: false,
        scaleCount: '50%'
    },
    touchHandler: function (e) {
        radarChart.showToolTip(e, {
            format: function (item, category) {
                return item.data
            }
        });
    },
    onShow: function (e) {
        this.scaleCountFn();
        var windowWidth;
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
        radarChart = new wxCharts({
            canvasId: 'radarCanvas',
            type: 'radar',
            categories: ['碳水化合物', '脂肪', '能量', '蛋白质', '盐'],
            series: [{
                name: '健康',
                data: [90, 110, 125, 95, 87]
            }],
            width: (360 * this.data.widthScale).toFixed(0),
            height: (360 * this.data.widthScale).toFixed(0),
            extra: {
                radar: {
                    max: 150
                }
            }
        });
    },
    onHide: function () {
        var that = this;
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
            delay: '200'
        })
        that.animation = animation;
        animation.left('0%').step();
        that.setData({
            scaleCount: animation.export()
        })
    },
    scaleCountFn: function () {
        var that = this;
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
            delay: '200'
        })
        that.animation = animation;
        animation.left(that.data.scaleCount).step();
        that.setData({
            scaleCount: animation.export()
        })
    },
});