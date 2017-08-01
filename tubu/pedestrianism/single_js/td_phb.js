$('.scroll').height($(window).height());	
	for (var i=0;i<$('.list_item li').length;i++) {
		var isEven=i % 2;
		if(isEven==0){
			$('.list_item li').eq(i).addClass('odd');
		}else if(isEven==1){
			$('.list_item li').eq(i).addClass('even');
		}
	}
	$(".bottom li a").click(function() {
	$(".bottom li a").removeClass("gz");
	$(this).addClass("gz");
});



 //基于准备好的dom，初始化echarts实例
var myChart=echarts.init(document.getElementById("main"));
//指定图表的配置项和数据
option = {
    title: {
        text: ''
    },
    color:['#fff','#8ED1FE'],
    tooltip: {},
    legend: {
        data: []
    },
    radar: {
         //shape: 'circle',
        indicator: [
            { name: '121% 徒步步数', max: 6500},
            { name: '142%\r\n距离', max: 16000},
            { name: '173% 精选会员', max: 30000},
            { name: '121% 徒步时长', max: 38000},
            { name: '118%\r\n数量', max: 52000}
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 18000, 20000, 34000, 19000],
                name : ''
            },
            {
                value : [5000, 14000, 28000, 24000, 42000, 21000],
                name : ''
            }
        ]
    }]
};
//使用刚指定的配置项和数据显示图表
myChart.setOption(option);