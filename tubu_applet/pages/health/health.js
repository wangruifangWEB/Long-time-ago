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
        FP: false,
        showHealthValue: false,
        healthValue:''
    },
    touchHandler: function (e) {
        // console.log(radarChart.getCurrentDataIndex(e));
        var healthArrIndex = radarChart.getCurrentDataIndex(e);
        var healthArr=[8180,2,145,45,22];
        var healthArrValue;
        healthArrValue = healthArr[healthArrIndex];
        var radarCenterX = radarChart.chartData.radarData.center.x;
        var radarCenterY = radarChart.chartData.radarData.center.y;
        var radarRadius = radarChart.chartData.radarData.radius;
        var canvasLeft= (500 - 250 * this.data.widthScale) / 2;
        // 80为画布top,118为画布left,48为text高，90为text宽
        for (var i in e.changedTouches){
            var currentDataIndex=radarChart.getCurrentDataIndex(e);
            this.setData({
                showHealthValue: true,
                healthValue: healthArrValue
            })
            if (currentDataIndex==0){
                var raderX = radarRadius * parseFloat(this.data.energyScale) / 100 * Math.cos(0 * Math.PI / 180);
                var raderY = radarRadius * parseFloat(this.data.energyScale) / 100;
                this.setData({
                    positionX: canvasLeft * 2 * this.data.widthScale + radarCenterX - 45 * this.data.widthScale,
                    positionY: (80 * 2 * this.data.widthScale + 15 + radarCenterY) - (raderY+24) * 2 * this.data.widthScale,
                })
            }else if (currentDataIndex == 1) {
                // 斜边长度 radarRadius * energyScale;
                // Cos∠A = 邻边 / 斜边, Sin∠A = 对边 / 斜边;
                // 弧度 = 角度 * Math.PI / 180;js接收弧度，数学接收角度
                // 15是画布内边距，为px
                // 18是显铭给的
                console.log(radarChart);
                var raderX = radarRadius * parseFloat(this.data.saltScale) / 100 * Math.cos(18 * Math.PI / 180);
                var raderY = radarRadius * parseFloat(this.data.saltScale) / 100 * Math.sin(18 * Math.PI / 180);
                this.setData({
                    positionX: canvasLeft * 2 * this.data.widthScale + radarCenterX + raderX * 2 * this.data.widthScale + 18,
                    positionY: (80 * 2 * this.data.widthScale + 15 + radarCenterY) + (raderY - 12) * 2 * this.data.widthScale,
                })
            }else if (currentDataIndex == 2) {
                var raderX = radarRadius * parseFloat(this.data.carbohydrateScale) / 100 * Math.cos(54 * Math.PI / 180);
                var raderY = radarRadius * parseFloat(this.data.carbohydrateScale) / 100 * Math.sin(54 * Math.PI / 180);
                this.setData({
                    positionX: canvasLeft * 2 * this.data.widthScale + radarCenterX + raderX * 2 * this.data.widthScale + 18,
                    positionY: (80 * 2 * this.data.widthScale + 15 + radarCenterY) + (raderY + 12) * 2 * this.data.widthScale,
                })
            }else if (currentDataIndex == 3) {
                var raderX = radarRadius * parseFloat(this.data.proteinScale) / 100 * Math.cos(54 * Math.PI / 180);
                var raderY = radarRadius * parseFloat(this.data.proteinScale) / 100 * Math.sin(54 * Math.PI / 180);
                this.setData({
                    positionX: (canvasLeft - 45) * 2 * this.data.widthScale + radarCenterX - raderX * 2 * this.data.widthScale - 18,
                    positionY: (80 * 2 * this.data.widthScale + 15 + radarCenterY) + (raderY + 12) * 2 * this.data.widthScale,
                })
            }else if (currentDataIndex == 4) {
                var raderX = radarRadius * parseFloat(this.data.fatScale) / 100 * Math.cos(18 * Math.PI / 180);
                var raderY = radarRadius * parseFloat(this.data.fatScale) / 100 * Math.sin(18 * Math.PI / 180);
                this.setData({
                    positionX: (canvasLeft - 45) * 2 * this.data.widthScale + radarCenterX - raderX * 2 * this.data.widthScale - 18,
                    positionY: (80 * 2 * this.data.widthScale + 15 + radarCenterY) + (raderY - 12) * 2 * this.data.widthScale,
                })
            } else if (currentDataIndex == -1){
                this.setData({
                    showHealthValue: false
                })
            }
        }
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