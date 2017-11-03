Page({
    data: {
        enroll_num: '27',
        join_num: '27',
        scaleCount: '',
        showUserText: false,
        regUser: 1,
        userDelete: false,
        userInfo: '',
        userfocus: false,
        userDis: false,

        showTelText: false,
        regTel: 1,
        telDelete: false,
        telInfo: '',
        telfocus: false,
        telDis: false,

        industryDis: false,
        quartersDis: false,

        showCardText: false,
        regCard: 1,
        cardDelete: false,
        cardInfo: '',
        cardfocus: false,
        cardDis: false,

        showSexText: false,
        regSex: 1,
        sexDelete: false,
        sexInfo: '',
        sexfocus: false,
        sexDis: false,

        showAgeText: false,
        regAge: 1,
        ageDelete: false,
        ageInfo: '',
        agefocus: false,
        ageDis: false,

        showStatureText: false,
        regStature: 1,
        statureDelete: false,
        statureInfo: '',
        staturefocus: false,
        statureDis: false,

        array1: ['中国', '美国', '巴西', '日本'],
        array2: ['东城', '西城', '朝阳', '石景山']
    },
    onLoad: function (options) {
        this.scaleCountFn();
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
    // 用户名获得焦点
    userFocusfn: function (event) {
        var userReg = /^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/;
        if (event.detail.value == "") {
            this.setData({
                userDelete: true,
                showUserText: true,
                regUser: 1
            });
        } else if (!userReg.test(event.detail.value)) {
            this.setData({
                userfocus: true,
                regUser: 2
            })
        }
    },
    // 用户名输入框发生改变
    userInputfn: function (event) {
        this.setData({
            userfocus: true,
            regUser: 1
        })
    },
    // 用户名失去焦点
    userBlurfn: function (event) {
        this.setData({
            userDelete: false,
            noticeError: ''
        });
        var userReg = /^(((\s?[\u4e00-\u9fa5]+\s?)+)|([a-zA-Z]+\s?)+)$/;
        if (!userReg.test(event.detail.value)) {
            this.setData({
                userInfo: event.detail.value,
                userfocus: true,
                regUser: 2,
                userDelete: true,
                telDis: true,
                cardDis: true,
                industryDis: true,
                quartersDis: true,
                sexDis: true,
                ageDis: true,
                statureDis: true,
            })
        } else {
            this.setData({
                regUser: 3,
                userInfo: event.detail.value,
                telDis: false,
                cardDis: false,
                industryDis: false,
                quartersDis: false,
                sexDis: false, 
                ageDis: false,
                statureDis: false,
            })
        }
    },
    // 用户名删除按钮
    userDeletefn: function (event) {
        this.setData({
            userfocus: true,
            userInfo: ''
        })
    },

    // 电话获得焦点
    telFocusfn: function (event) {
        var telReg = /^1[3|4|5|8][0-9]\d{4,8}$/;
        if (event.detail.value == "") {
            this.setData({
                telDelete: true,
                showTelText: true,
                regTel: 1
            });
        } else if (!telReg.test(event.detail.value)) {
            this.setData({
                telfocus: true,
                regTel: 2
            })
        }
    },
    // 电话输入框发生改变
    telInputfn: function (event) {
        this.setData({
            telfocus: true,
            regTel: 1
        })
    },
    // 电话失去焦点
    telBlurfn: function (event) {
        this.setData({
            telDelete: false,
            noticeError: ''
        });
        var telReg = /^1[3|4|5|8][0-9]\d{4,8}$/;
        if (!telReg.test(event.detail.value)) {
            this.setData({
                telInfo: event.detail.value,
                telfocus: true,
                regTel: 2,
                telDelete: true,
                userDis: true,
                cardDis: true,
                industryDis: true,
                quartersDis: true,
                sexDis: true,
                ageDis: true,
                statureDis: true,
            })
        } else {
            this.setData({
                regTel: 3,
                telInfo: event.detail.value,
                userDis: false,
                cardDis: false,
                industryDis: false,
                quartersDis: false,
                sexDis: false,
                ageDis: false,
                statureDis: false,
            })
        }
    },
    // 电话删除按钮
    telDeletefn: function (event) {
        this.setData({
            telfocus: true,
            telInfo: ''
        })
    },

    //  身份证号

    // 身份证号获得焦点
    cardFocusfn: function (event) {
        var cardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if (event.detail.value == "") {
            this.setData({
                cardDelete: true,
                showCardText: true,
                regCard: 1
            });
        } else if (!cardReg.test(event.detail.value)) {
            this.setData({
                cardfocus: true,
                regCard: 2
            })
        }
    },
    // 身份证号输入框发生改变
    cardInputfn: function (event) {
        this.setData({
            cardfocus: true,
            regCard: 1
        })
    },
    // 身份证号失去焦点
    cardBlurfn: function (event) {
        this.setData({
            cardDelete: false,
            noticeError: ''
        });
        var cardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if (!cardReg.test(event.detail.value)) {
            this.setData({
                cardInfo: event.detail.value,
                cardfocus: true,
                regCard: 2,
                cardDelete: true,
                userDis: true,
                telDis: true,
                industryDis: true,
                quartersDis: true,
                sexDis: true,
                ageDis: true,
                statureDis: true,
            })
        } else {
            this.setData({
                regCard: 3,
                cardInfo: event.detail.value,
                userDis: false,
                telDis: false,
                industryDis: false,
                quartersDis: false,
                sexDis: false,
                ageDis: false,
                statureDis: false,
            })
        }
    },
    // 身份证号删除按钮
    sexDeletefn: function (event) {
        this.setData({
            cardfocus: true,
            cardInfo: ''
        })
    },


    //  性别

    // 性别获得焦点
    sexFocusfn: function (event) {
        var sexReg = /^(男|女)$/;
        if (event.detail.value == "") {
            this.setData({
                sexDelete: true,
                showSexText: true,
                regSex: 1
            });
        } else if (!sexReg.test(event.detail.value)) {
            this.setData({
                sexfocus: true,
                regSex: 2
            })
        }
    },
    // 性别输入框发生改变
    sexInputfn: function (event) {
        this.setData({
            sexfocus: true,
            regSex: 1
        })
    },
    // 性别失去焦点
    sexBlurfn: function (event) {
        this.setData({
            sexDelete: false,
            noticeError: ''
        });
        var sexReg = /^(男|女)$/;
        if (!sexReg.test(event.detail.value)) {
            this.setData({
                sexInfo: event.detail.value,
                sexfocus: true,
                sexCard: 2,
                sexDelete: true,
                userDis: true,
                telDis: true,
                industryDis: true,
                quartersDis: true,
                cardDis: true,
                ageDis: true,
                statureDis: false,
            })
        } else {
            this.setData({
                regSex: 3,
                sexInfo: event.detail.value,
                userDis: false,
                telDis: false,
                industryDis: false,
                quartersDis: false,
                cardDis: false,
                ageDis: false,
                statureDis: false,
            })
        }
    },
    // 性别删除按钮
    sexDeletefn: function (event) {
        this.setData({
            sexfocus: true,
            sexInfo: ''
        })
    },

    //  年龄

    // 年龄获得焦点
    ageFocusfn: function (event) {
        var ageReg = /^[0-9]*$/;
        if (event.detail.value == "") {
            this.setData({
                ageDelete: true,
                showAgeText: true,
                regAge: 1
            });
        } else if (!ageReg.test(event.detail.value)) {
            this.setData({
                agefocus: true,
                regAge: 2
            })
        }
    },
    // 年龄输入框发生改变
    ageInputfn: function (event) {
        this.setData({
            agefocus: true,
            regAge: 1
        })
    },
    // 年龄失去焦点
    ageBlurfn: function (event) {
        this.setData({
            ageDelete: false,
            noticeError: ''
        });
        var ageReg = /^[0-9]*$/;
        if (!ageReg.test(event.detail.value)) {
            this.setData({
                ageInfo: event.detail.value,
                agefocus: true,
                ageCard: 2,
                ageDelete: true,
                userDis: true,
                telDis: true,
                industryDis: true,
                quartersDis: true,
                cardDis: true,
                sexDis: true,
                statureDis: false,
            })
        } else {
            this.setData({
                regAge: 3,
                ageInfo: event.detail.value,
                userDis: false,
                telDis: false,
                industryDis: false,
                quartersDis: false,
                cardDis: false,
                sexDis: false,
                statureDis: false,
            })
        }
    },
    // 年龄删除按钮
    ageDeletefn: function (event) {
        this.setData({
            agefocus: true,
            ageInfo: ''
        })
    },

    //  身高

    // 身高获得焦点
    statureFocusfn: function (event) {
        var statureReg = /^[0-9]*$/;
        if (event.detail.value == "") {
            this.setData({
                statureDelete: true,
                showStatureText: true,
                regStature: 1
            });
        } else if (!statureReg.test(event.detail.value)) {
            this.setData({
                staturefocus: true,
                regStature: 2
            })
        }
    },
    // 身高输入框发生改变
    statureInputfn: function (event) {
        this.setData({
            staturefocus: true,
            regStature: 1
        })
    },
    // 身高失去焦点
    statureBlurfn: function (event) {
        this.setData({
            statureDelete: false,
            noticeError: ''
        });
        var statureReg = /^[0-9]*$/;
        if (!statureReg.test(event.detail.value)) {
            this.setData({
                statureInfo: event.detail.value,
                staturefocus: true,
                statureCard: 2,
                statureDelete: true,
                userDis: true,
                telDis: true,
                industryDis: true,
                quartersDis: true,
                cardDis: true,
                sexDis: true,
                ageDis: true,
            })
        } else {
            this.setData({
                regStature: 3,
                statureInfo: event.detail.value,
                userDis: false,
                telDis: false,
                industryDis: false,
                quartersDis: false,
                cardDis: false,
                sexDis: false,
                ageDis: false,
            })
        }
    },
    // 身高删除按钮
    statureDeletefn: function (event) {
        this.setData({
            staturefocus: true,
            statureInfo: ''
        })
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
    }
})