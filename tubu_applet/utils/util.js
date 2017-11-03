
function getRunInfo(){
    var session = wx.getStorageSync('3rdSession');
    console.log(session);
    wx.getWeRunData({
        success(res) {
            console.log(res);
            console.log(session);
            var yunencryptedData = res.encryptedData;
            var yuniv = res.iv;
            wx.request({
                url: 'https://www.sqbqr.cn/index.php/Home/Wxprogram/yundong',
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
                    runData(data);
                }
            })
        }
    })
}
function runData(data) {
    console.log(data);
    var that = this;
    console.log(data.data.stepInfoList)
    var listLength = data.data.stepInfoList.length;
    for (var i = 0; i < data.data.stepInfoList.length; i++) {
        var werunData = data.data.stepInfoList[i].step;
        var werunDay = data.data.stepInfoList[i].timestamp;
        var weRunDataArr=[];
        var weRunDayArr=[];
    }
    wx.setStorageSync('weRunDataArr', weRunDataArr.push(werunData));
    wx.setStorageSync('weRunDayArr', weRunDayArr.push(werunDay));
    console.log(data);
    var yunData = data;
    wx.setStorageSync('yunData', data)
}

module.exports = {
  getRunInfo: getRunInfo
}
