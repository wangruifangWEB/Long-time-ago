Page({
  data: {
    alertSave: false
  },
  onLoad: function (options) {
    
  },
  search: function(){
    var that=this;
    this.setData({
      alertSave: true
    })
    setInterval(function () {
      that.setData({
        alertSave: false
      })
    }, 1500)
  }
})