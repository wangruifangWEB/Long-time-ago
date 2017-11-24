var wxCharts = require('../../utils/wxcharts.js');
var app=getApp();
var radarChart = null;
Page({
    data: {
        widthScale: '',
        standardWidth: 375,
        BMImy: false,
        BMIjy: true,
        BMIng: false,
        scaleCount: '0',
        energy: '',
        fat: '',
        salt:'6',
        protein: '',
        carbohydrate: '',
        carbohydrateScale: '',
        fatScale: '',
        energyScale: '',
        saltScale: '',
        proteinScale: '',
        health:'',
        PS: false,
        ZC: false,
        PP: false,
        FP: false
    },
    touchHandler: function (e) {
        // console.log(e)
        console.log(radarChart);
    },
    onShow: function (e) {
        this.requestFn();
    },
    requestFn:function(){
        var that = this;
        var timer = null;
        timer = setInterval(function () {
            var session3rd = wx.getStorageSync('3rdSession');
            if (session3rd == "") {
                return;
            } else {
                clearInterval(timer);
                var session3rd = wx.getStorageSync('3rdSession');
                wx.request({
                    url: app.globalData.globalUrl+'index.php/Home/Wxprogram/wxhealthyDiet',
                    data: {
                        "session3rd": session3rd
                    },
                    success: function (data) {
                        // console.log(data.data);
                        var data = data.data;
                        if (data.status == '1') {
                            that.setData({
                                energy: data.energy.toFixed(0),
                                fat: data.fat.toFixed(0),
                                protein: data.protein.toFixed(0),
                                carbohydrate: data.carbohydrate.toFixed(0),
                                scaleCount: data.health,
                                health: data.health
                            })
                            that.datum();
                            that.scaleCountFn();
                            that.textColor(data);
                        }
                        if (data.status == '0') {
                            wx.showModal({
                                title: '提示',
                                content: '查询失败，请稍后重试',
                                showCancel: false
                            })
                        }
                        if (data.status == '3') {
                            wx.showModal({
                                title: '提示',
                                content: data.conment,
                                showCancel: false,
                                success: function (res) {
                                    if (res.confirm) {
                                        wx.switchTab({
                                            url: '../personal/personal',
                                        })
                                    }
                                }
                            })

                        }
                    }
                })
            }
        }, 1000);
    },
    datum: function () {
        var windowWidth;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
            windowWidth = 375;
        }
        this.setData({
            widthScale: parseInt(windowWidth) / parseInt(this.data.standardWidth),
            carbohydrateScale: (145 / parseInt(this.data.carbohydrate) * 100).toFixed(1) + '%',
            fatScale: (22 / parseInt(this.data.fat) * 100).toFixed(1) + '%',
            energyScale: (818 / parseInt(this.data.energy) * 100).toFixed(1) + '%',
            saltScale: (2 / 6 * 100).toFixed(1) + '%',
            proteinScale: (45.4 / parseInt(this.data.protein) * 100).toFixed(1) + '%',
        })
        var carbohydrateScale = (145 / parseInt(this.data.carbohydrate)*100).toFixed(1)+'%';
        var fatScale = (22 / parseInt(this.data.fat) * 100).toFixed(1) + '%';
        var energyScale = (818 / parseInt(this.data.energy) * 100).toFixed(1) + '%';
        var saltScale = (2 / 6 * 100).toFixed(1) + '%';
        var proteinScale = (45.4 / parseInt(this.data.protein) * 100).toFixed(1) + '%';
        radarChart = new wxCharts({
            canvasId: 'radarCanvas',
            type: 'radar',
            categories: ['', '', '', '', ''],
            legend: false,
            bigData: [this.data.energy, 6, this.data.carbohydrate, this.data.protein,this.data.fat],
            series: [{
                name: '健康',
                data: [818, 2, 145, 45, 22]
            }],
            dataLabel: false,
            width: (250 * this.data.widthScale).toFixed(0),
            height: (250 * this.data.widthScale).toFixed(0)
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
        animation.left((that.data.scaleCount)*2+'%').step();
        that.setData({
            scaleCount: animation.export()
        })
    },
    textColor: function(){
        var healthValue = this.data.health;
        if (0 < healthValue && healthValue < 18.5){
            this.setData({
                PS: true,
                ZC: false,
                PP: false,
                FP: false
            })
        } else if (18.5 < healthValue && healthValue < 24){
            this.setData({
                PS: false,
                ZC: true,
                PP: false,
                FP: false
            })
        } else if (24 < healthValue && healthValue<28){
            this.setData({
                PS: false,
                ZC: false,
                PP: true,
                FP: false
            })
        }else{
            this.setData({
                PS: false,
                ZC: false,
                PP: false,
                FP: true
            })
        }
        
    }
});