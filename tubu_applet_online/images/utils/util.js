
function getUserInfo(){
    var that = this;
    
}
function formatDate(time) {
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

module.exports = {
    formatDate: formatDate
}
