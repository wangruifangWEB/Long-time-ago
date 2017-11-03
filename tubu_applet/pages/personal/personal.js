var app = getApp();
Page({
    data: {
        nickName: {},
        userInfoGlobal: '',
        enroll_num: '27',
        join_num: '27',
        scaleCount: '',

        noticeText: '',
        noticeError: false,
        noticeAnimation: '',

        userInfo: '',
        userfocus: false,
        userDis: false,

        telInfo: '',
        telfocus: false,
        telDis: false,

        industryDis: false,
        quartersDis: false,

        cardInfo: '',
        cardfocus: false,
        cardDis: false,

        sexInfo: '',

        ageInfo: '',
        agefocus: false,
        ageDis: false,


        statureInfo: '',
        staturefocus: false,
        statureDis: false,

        array1: ['中国', '美国', '巴西', '日本'],
        array2: ['东城', '西城', '朝阳', '石景山'],
        array3: ['男', '女'],


    },
    onLoad: function (options) {
        this.scaleCountFn();
        
    },
    onReady: function () {
        var userInfoGlobal = {};
        userInfoGlobal = app.globalData.userInfo;
        console.log(userInfoGlobal);
        for (var i in userInfoGlobal) {
            this.setData({
                userInfoGlobal: userInfoGlobal
            })
        }
        console.log(this.data.userInfoGlobal.nickName);
        
    },
    onShow: function () {
        var that = this;
        // if (app.globalData.loginStatus){
        //     console.log('授权');
        // }else{
        //     console.log('未授权');
        // }
    },
    // 活跃度动画
    scaleCountFn: function () {
        var that = this;
        var enroll_num = that.data.enroll_num;
        var join_num = that.data.join_num;
        that.data.scaleCount = parseInt(enroll_num) / parseInt(join_num) * 100;
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
            delay: '100'
        })
        if (that.data.scaleCount > 95) {
            that.data.scaleCount = 95;
        }
        that.data.scaleCount = that.data.scaleCount - 2 + '%';
        that.animation = animation;
        animation.left(that.data.scaleCount).step();
        that.setData({
            scaleCount: animation.export()
        })
    },
    // 错误提示动画
    noticeAnimationfn: function () {
        var that = this;
        var animation = wx.createAnimation({
            duration: 3000,
            timingFunction: 'ease-in-out',
            delay: '100'
        })
        that.animation = animation;
        animation.opacity(0).step();
        that.setData({
            noticeAnimation: animation.export()
        })
    },
    // 用户名失去焦点
    userBlurfn: function (event) {
        var userReg = /^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/;
        this.setData({
            noticeError: false,
            noticeAnimation: ''
        })
        if (!userReg.test(event.detail.value)) {
            this.setData({
                telDis: true,
                industryDis: true,
                quartersDis: true,
                cardDis: true,
                sexDis: true,
                ageDis: true,
                statureDis: true,
                nowWeightDis: true,
                aimWeightDis: true,
                noticeText: '姓名格式输入错误，请检查！',
                userfocus: true,
                noticeError: true,
            })
            this.noticeAnimationfn();
        } else {
            this.setData({
                userInfo: event.detail.value,
                telDis: false,
                industryDis: false,
                quartersDis: false,
                cardDis: false,
                sexDis: false,
                ageDis: false,
                statureDis: false,
                nowWeightDis: false,
                aimWeightDis: false,
                noticeError: false
            })
        }
    },
    // 电话失去焦点
    telBlurfn: function (event) {
        this.setData({
            noticeError: false,
            noticeAnimation: ''
        })
        var telReg = /^1(3|4|5|7|8)\d{9}$/;
        if (!telReg.test(event.detail.value)) {
            this.setData({
                telfocus: true,
                userDis: true,
                industryDis: true,
                quartersDis: true,
                cardDis: true,
                sexDis: true,
                ageDis: true,
                statureDis: true,
                nowWeightDis: true,
                aimWeightDis: true,
                noticeText: '手机号格式输入错误，请检查！',
                noticeError: true,
            })
            this.noticeAnimationfn();
        } else {
            this.setData({
                telInfo: event.detail.value,
                userDis: false,
                industryDis: false,
                quartersDis: false,
                cardDis: false,
                sexDis: false,
                ageDis: false,
                statureDis: false,
                nowWeightDis: false,
                aimWeightDis: false,
                noticeError: false,
            })
        }
    },
    // 身份证号失去焦点
    cardBlurfn: function (event) {
        var cardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        this.setData({
            noticeError: false,
            noticeAnimation: ''
        })
        if (!cardReg.test(event.detail.value)) {
            this.setData({
                cardfocus: true,
                userDis: true,
                telDis: true,
                industryDis: true,
                quartersDis: true,
                sexDis: true,
                ageDis: true,
                statureDis: true,
                nowWeightDis: true,
                aimWeightDis: true,
                noticeText: '身份证格式输入错误，请检查！',
                noticeError: true,
            })
            this.noticeAnimationfn();
        } else {
            this.setData({
                cardInfo: event.detail.value,
                userDis: false,
                telDis: false,
                industryDis: false,
                quartersDis: false,
                sexDis: false,
                ageDis: false,
                statureDis: false,
                nowWeightDis: false,
                aimWeightDis: false,
                noticeError: false,
            })
        }
    },
    // 年龄失去焦点
    ageBlurfn: function (event) {
        if (event.detail.value == "") {
            this.setData({
                agefocus: true,
                userDis: true,
                telDis: true,
                industryDis: true,
                quartersDis: true,
                cardDis: true,
                sexDis: true,
                statureDis: true,
                nowWeightDis: true,
                aimWeightDis: true
            })
        } else {
            this.setData({
                ageInfo: event.detail.value,
                userDis: false,
                telDis: false,
                industryDis: false,
                quartersDis: false,
                cardDis: false,
                sexDis: false,
                statureDis: false,
                nowWeightDis: false,
                aimWeightDis: false
            })
        }
    },
    // 身高失去焦点
    statureBlurfn: function (event) {
        if (event.detail.value == "") {
            this.setData({
                staturefocus: true,
                userDis: true,
                telDis: true,
                industryDis: true,
                quartersDis: true,
                cardDis: true,
                sexDis: true,
                ageDis: true,
                nowWeightDis: true,
                aimWeightDis: true
            })
        } else {
            this.setData({
                statureInfo: event.detail.value,
                userDis: false,
                telDis: false,
                industryDis: false,
                quartersDis: false,
                cardDis: false,
                sexDis: false,
                ageDis: false,
                nowWeightDis: false,
                aimWeightDis: false
            })
        }
    },
    // 当前体重失去焦点
    nowWeightBlurfn: function (event) {
        if (event.detail.value == "") {
            this.setData({
                nowWeightfocus: true,
                userDis: true,
                telDis: true,
                industryDis: true,
                quartersDis: true,
                cardDis: true,
                sexDis: true,
                ageDis: true,
                statureDis: true,
                aimWeightDis: true
            })
        } else {
            this.setData({
                nowWeightInfo: event.detail.value,
                userDis: false,
                telDis: false,
                industryDis: false,
                quartersDis: false,
                cardDis: false,
                sexDis: false,
                ageDis: false,
                statureDis: false,
                aimWeightDis: false
            })
        }
    },
    // 目标体重失去焦点
    aimWeightBlurfn: function (event) {
        if (event.detail.value == "") {
            this.setData({
                aimWeightfocus: true,
                userDis: true,
                telDis: true,
                industryDis: true,
                quartersDis: true,
                cardDis: true,
                sexDis: true,
                ageDis: true,
                statureDis: true,
                nowWeightDis: true
            })
        } else {
            this.setData({
                aimWeightInfo: event.detail.value,
                userDis: false,
                telDis: false,
                industryDis: false,
                quartersDis: false,
                cardDis: false,
                sexDis: false,
                ageDis: false,
                statureDis: false,
                nowWeightDis: false
            })
        }
    },




    // 工作行业
    industryfn: function (event) {
        this.setData({
            index1: event.detail.value
        })
    },
    // 工作岗位
    quarterfn: function (event) {
        console.log(event.detail.value)
        this.setData({
            index2: event.detail.value
        })
    },
    sexfn: function (event) {
        this.setData({
            index3: event.detail.value
        })
    },

    saveFormfn: function () {
        this.setData({
            noticeError: false,
            noticeAnimation: ''
        })
        if (this.data.userInfo == '' || this.data.telInfo == '' || (!this.data.index1) || (!this.data.index2) || this.data.cardInfo == '' || (!this.data.index3) || this.data.ageInfo == '' || this.data.statureInfo == '' || this.data.nowWeightInfo == '' || this.data.aimWeightInfo == '') {
            this.setData({
                noticeText: '您还有相关信息未完善，请检查！',
                noticeError: true,
            })
            this.noticeAnimationfn();
        }
    }
})