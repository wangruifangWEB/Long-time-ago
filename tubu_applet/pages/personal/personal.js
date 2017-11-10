Page({
    data: {
        personInfo: '',
        enrollNum: 26,
        joinNum: '6',
        scaleCount: {},
        checkSex: '1',
        male_checked: true,
        famale_checked: false,
        unknown_label: false,

        noticeText: '',
        alertModel: false,
        waitPerfect: false,
        waitEdit: false,


        userInfo: '姓名',
        telInfo: '电话',
        cardInfo: '身份证号',
        ageInfo: '年龄',
        statureInfo: '身高（cm）',
        nowWeightInfo: '当前体重（kg）',
        aimWeightInfo: '目标体重（kg）',
        quarterInfo: false,
        industryInfo: false,
        male: true,
        famale:false,
        unknown: false,
        arrayIndustry: ['工作行业', '中国', '美国', '巴西', '日本'],
        industryIndex: 0,
        arrayQuarter: ["工作岗位", '东城', '西城', '朝阳', '石景山'],
        quarterIndex: 0,


        checked_edit: true,
        checked_save: false,

        userText: false,
        telText: false,
        cardText: false,
        ageText: false,
        statureText: false,
        nowWeightText: false,
        aimWeightText: false,
        industryText: false,
        quarterText: false,


        grayUserNotice: false,
        redUserNotice: false,
        greenUserNotice: false,
        grayTelNotice: false,
        redTelNotice: false,
        greenTelNotice: false,
        grayIndustryNotice: false,
        redIndustryNotice: false,
        greenIndustryNotice: false,
        grayQuarterNotice: false,
        redQuarterNotice: false,
        greenQuarterNotice: false,
        grayCardNotice: false,
        redCardNotice: false,
        greenCardNotice: false,
        grayAgeNotice: false,
        redAgeNotice: false,
        greenAgeNotice: false,
        grayStatureNotice: false,
        redStatureNotice: false,
        greenStatureNotice: false,
        grayNowWeightNotice: false,
        redNowWeightNotice: false,
        greenNowWeightNotice: false,
        grayAimWeightNotice: false,
        redAimWeightNotice: false,
        greenAimWeightNotice: false,


        userInfoHolder: true,
        telInfoHolder: true,
        cardInfoHolder: true,
        ageInfoHolder: true,
        statureInfoHolder: true,
        nowWeightInfoHolder: true,
        aimWeightInfoHolder: true,
    },
    onShow: function () {
        this.scaleCountFn();
        var personInfo = wx.getStorageSync('userInfo');
        for (var i in personInfo) {
            this.setData({
                personInfo: personInfo
            })
        }
        if (this.data.industryIndex == 0) {
            this.setData({
                industryInfo: false
            })
        } else {
            this.setData({
                industryInfo: true
            })
        }

        if (this.data.quarterIndex == 0) {
            this.setData({
                quarterInfo: false
            })
        } else {
            this.setData({
                quarterInfo: true
            })
        }

        if (this.data.userInfo == "姓名") {
            this.setData({
                userInfoHolder: true
            })
        } else {
            this.setData({
                userText: true,
                userInfoHolder: false
            })
        }
        if (this.data.telInfo == "电话") {
            this.setData({
                telInfoHolder: true
            })
        } else {
            this.setData({
                telText: true,
                telInfoHolder: false
            })
        }
        if (this.data.cardInfo == "身份证号") {
            this.setData({
                cardInfoHolder: true
            })
        } else {
            this.setData({
                cardText: true,
                cardInfoHolder: false
            })
        }
        if (this.data.ageInfo == "年龄") {
            this.setData({
                ageInfoHolder: true
            })
        } else {
            this.setData({
                ageText: true,
                ageInfoHolder: false
            })
        }
        if (this.data.statureInfo == "身高（cm）") {
            this.setData({
                statureInfoHolder: true
            })
        } else {
            this.setData({
                statureText: true,
                statureInfoHolder: false
            })
        }
        if (this.data.nowWeightInfo == "当前体重（kg）") {
            this.setData({
                nowWeightInfoHolder: true
            })
        }else{
            this.setData({
                nowWeightText: true,
                nowWeightInfoHolder: false
            })
        }
        if (this.data.aimWeightInfo == "目标体重（kg）") {
            this.setData({
                aimWeightInfoHolder: true
            })
        }else{
            this.setData({
                aimWeightText: true,
                aimWeightInfoHolder: false
            })
        }
    },
    onHide: function () {
        var that = this;
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
            delay: '200'
        })
        that.animation = animation;
        animation.width('0%').step();
        that.setData({
            scaleCount: animation.export()
        })
        console.log(this.data.scaleCount);
    },
    editfn: function () {
        this.setData({
            checked_edit: false,
            checked_save: true
        })
    },
    savefn: function () {
        var userInfo = this.data.userInfo;
        var telInfo = this.data.telInfo;
        var industryIndex = this.data.industryIndex;
        var quarterIndex = this.data.quarterIndex;
        var cardInfo = this.data.cardInfo;
        var ageInfo = this.data.ageInfo;
        var statureInfo = this.data.statureInfo;
        var nowWeightInfo = this.data.nowWeightInfo;
        var aimWeightInfo = this.data.aimWeightInfo;
        var checkSex = this.data.checkSex;
        var userReg = /^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/;
        var cardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        var telReg = /^1(3|4|5|7|8)\d{9}$/;

        console.log('industryIndex:' + industryIndex);
        console.log('quarterIndex:' + quarterIndex);
        console.log('userInfo：' + userInfo);
        console.log('cardInfo:' + cardInfo);
        console.log('telInfo:' + telInfo);
        console.log('ageInfo:' + ageInfo);
        console.log('statureInfo:' + statureInfo);
        console.log('nowWeightInfo:' + nowWeightInfo);
        console.log('aimWeightInfo:' + aimWeightInfo);
        console.log('checkSex:' + checkSex);

        if (userInfo == '' || telInfo == '' || industryIndex == 0 || quarterIndex == 0 || cardInfo == '' || ageInfo == '' || statureInfo == '' || nowWeightInfo == '' || aimWeightInfo == '') {
            this.setData({
                alertModel: true,
                waitPerfect: true,
                waitEdit: false,
            })
        } else if (!userReg.test(userInfo) || !telReg.test(telInfo) || !cardReg.test(cardInfo)) {
            this.setData({
                alertModel: true,
                waitPerfect: false,
                waitEdit: true,
            })
        } else {
            console.log('industryIndex:' + industryIndex);
            console.log('quarterIndex:' + quarterIndex);
            console.log('userInfo：' + userInfo);
            console.log('cardInfo:' + cardInfo);
            console.log('telInfo:' + telInfo);
            console.log('ageInfo:' + ageInfo);
            console.log('statureInfo:' + statureInfo);
            console.log('nowWeightInfo:' + nowWeightInfo);
            console.log('aimWeightInfo:' + aimWeightInfo);
            console.log('checkSex:' + checkSex);
            this.setData({
                alertModel: false,
                checked_edit: true,
                checked_save: false
            })
            wx.showToast({
                title: '已保存',
            })
        }
    },
    check_male: function () {
        this.setData({
            male_checked: true,
            famale_checked: false,
            unknown_label: false
        })
    },
    check_famale: function () {
        this.setData({
            male_checked: false,
            famale_checked: true,
            unknown_label: false
        })
    },
    check_unkoown: function () {
        this.setData({
            male_checked: false,
            famale_checked: false,
            unknown_label: true
        })
    },
    closeAlert: function () {
        this.setData({
            alertModel: false,
        })
    },
    // 性别
    sexChange: function (event) {
        this.setData({
            checkSex: event.detail.value
        })
    },
    // 用户名
    userFocusfn: function () {
        this.setData({
            userText: true,
            grayUserNotice: true,
            redUserNotice: false,
            greenUserNotice: false
        })
        if (this.data.userInfo == "姓名") {
            this.setData({
                userInfoHolder: false,
                userInfo: '',
            })
        }
    },
    userBlurfn: function (event) {
        var userReg = /^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/;
        if (!userReg.test(event.detail.value)) {
            this.setData({
                grayUserNotice: false,
                redUserNotice: true,
                greenUserNotice: false,
                userInfo: event.detail.value
            })
        } else {
            this.setData({
                grayUserNotice: false,
                redUserNotice: false,
                greenUserNotice: true,
                userInfo: event.detail.value
            })
        }
    },

    // 电话
    telFocusfn: function () {
        this.setData({
            telText: true,
            grayTelNotice: true,
            redTelNotice: false,
            greenTelNotice: false
        })
        if (this.data.telInfo == "电话") {
            this.setData({
                telInfoHolder: false,
                telInfo: '',
            })
        }
    },
    telBlurfn: function (event) {
        var telReg = /^1(3|4|5|7|8)\d{9}$/;
        if (!telReg.test(event.detail.value)) {
            this.setData({
                grayTelNotice: false,
                redTelNotice: true,
                greenTelNotice: false,
                telInfo: event.detail.value,
            })
        } else {
            this.setData({
                telInfo: event.detail.value,
                grayTelNotice: false,
                redTelNotice: false,
                greenTelNotice: true
            })

        }
    },
    // 身份证号
    cardFocusfn: function () {
        this.setData({
            cardText: true,
            grayCardNotice: true,
            redCardNotice: false,
            greenCardNotice: false,
        })
        if (this.data.cardInfo == "身份证号") {
            this.setData({
                cardInfoHolder: false,
                cardInfo: '',
            })
        }
    },
    cardBlurfn: function (event) {
        var cardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if (!cardReg.test(event.detail.value)) {
            this.setData({
                grayCardNotice: false,
                redCardNotice: true,
                greenCardNotice: false,
                cardInfo: event.detail.value
            })
        } else {
            this.setData({
                grayCardNotice: false,
                redCardNotice: false,
                greenCardNotice: true,
                cardInfo: event.detail.value
            })
        }
    },

    // 年龄
    ageFocusfn: function () {
        this.setData({
            ageText: true,
            grayAgeNotice: true,
            redAgeNotice: false,
            greenAgeNotice: false,
        })
        if (this.data.ageInfo == "年龄") {
            this.setData({
                ageInfoHolder: false,
                ageInfo: '',
            })
        }
    },
    ageBlurfn: function (event) {
        if (event.detail.value == "") {
            this.setData({
                grayAgeNotice: false,
                redAgeNotice: true,
                greenAgeNotice: false,
                ageInfo: event.detail.value,
            })
        } else {
            this.setData({
                ageInfo: event.detail.value,
                grayAgeNotice: false,
                redAgeNotice: false,
                greenAgeNotice: true,
            })
        }
    },

    // 身高
    statureFocusfn: function () {
        this.setData({
            statureText: true,
            grayStatureNotice: true,
            redStatureNotice: false,
            greenStatureNotice: false,
        })
        if (this.data.statureInfo == "身高（cm）") {
            this.setData({
                statureInfoHolder: false,
                statureInfo: '',
            })
        }
    },
    statureBlurfn: function (event) {
        if (event.detail.value == "") {
            this.setData({
                grayStatureNotice: false,
                redStatureNotice: true,
                greenStatureNotice: false,
                statureInfo: event.detail.value,
            })
        } else {
            this.setData({
                statureInfo: event.detail.value,
                grayStatureNotice: false,
                redStatureNotice: false,
                greenStatureNotice: true,
            })
        }
    },
    // 当前体重
    nowWeightFocusfn: function () {
        this.setData({
            nowWeightText: true,
            grayNowWeightNotice: true,
            redNowWeightNotice: false,
            greenNowWeightNotice: false,
        })
        if (this.data.nowWeightInfo == "当前体重（kg）") {
            this.setData({
                nowWeightInfoHolder: false,
                nowWeightInfo: '',
            })
        }
    },
    nowWeightBlurfn: function (event) {
        if (event.detail.value == "") {
            this.setData({
                grayNowWeightNotice: false,
                redNowWeightNotice: true,
                greenNowWeightNotice: false,
                nowWeightInfo: event.detail.value,
            })
        } else {
            this.setData({
                nowWeightInfo: event.detail.value,
                grayNowWeightNotice: false,
                redNowWeightNotice: false,
                greenNowWeightNotice: true,
            })
        }
    },
    // 目标体重
    aimWeightFocusfn: function () {
        this.setData({
            aimWeightText: true,
            grayAimWeightNotice: true,
            redAimWeightNotice: false,
            greenAimWeightNotice: false,
        })
        if (this.data.aimWeightInfo == "目标体重（kg）") {
            this.setData({
                aimWeightInfoHolder: false,
                aimWeightInfo: '',
            })
        }
    },
    aimWeightBlurfn: function (event) {
        if (event.detail.value == "") {
            this.setData({
                grayAimWeightNotice: false,
                redAimWeightNotice: true,
                greenAimWeightNotice: false,
                aimWeightInfo: event.detail.value,
            })
        } else {
            this.setData({
                aimWeightInfo: event.detail.value,
                grayAimWeightNotice: false,
                redAimWeightNotice: false,
                greenAimWeightNotice: true,
            })
        }
    },


    // 工作行业
    industryfn: function (event) {
        this.setData({
            industryText: true,
            industryIndex: event.detail.value
        })
        if (this.data.industryIndex == 0) {
            this.setData({
                industryInfo: false,
                grayIndustryNotice: false,
                redIndustryNotice: true,
                greenIndustryNotice: false,
            })
        } else {
            this.setData({
                industryInfo: true,
                grayIndustryNotice: false,
                redIndustryNotice: false,
                greenIndustryNotice: true,
            })
        }

    },
    // 工作岗位
    quarterfn: function (event) {
        this.setData({
            quarterText: true,
            quarterIndex: event.detail.value
        })
        if (this.data.quarterIndex == 0) {
            this.setData({
                quarterInfo: false,
                grayQuarterNotice: false,
                redQuarterNotice: true,
                greenQuarterNotice: false,
            })
        } else {
            this.setData({
                quarterInfo: true,
                grayQuarterNotice: false,
                redQuarterNotice: false,
                greenQuarterNotice: true,
            })
        }
    },

    // 活跃度动画
    scaleCountFn: function () {
        var that = this;
        var enrollNum = that.data.enrollNum;
        var joinNum = that.data.joinNum;
        that.data.scaleCount = parseInt(joinNum) / parseInt(enrollNum) * 100 + '%';
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
            delay: '200'
        })
        that.animation = animation;
        animation.width(that.data.scaleCount).step();
        that.setData({
            scaleCount: animation.export()
        })
    },
})