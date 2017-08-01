var myChart = echarts.init(document.getElementById('szt'));
	var len = 10;
	var sre = ['12000']
	option = {
	tooltip : {
	 	show	:	true,
	 	type:'showTip',
		seriesIndex: 1,
		dataIndex: 1,  	
        formatter: '<div class="shadow_box"><p>{c}</p><h3>步</h3></div>',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow',// 默认为直线，可选为：'line' | 'shadow'
        	shadowStyle:{
        		opacity:0.01,
        	}
        },
        backgroundColor	:	"rgba(0,0,0,0)",
        position: "top"
	},
	
	legend: {
        data:['周一']
    },
	

	dataZoom: {
		show: false,
		start: 0,
		end: 100
	},
	xAxis: [{
		
			type: 'category',
			boundaryGap: true,
			data :['2017.04.25',],
			axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
          },
          axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,0)',
                width:0,//这里是为了突出显示加上的，可以去掉
                opacity:0.01
            }
         }
		},
		
		{
			type: 'category',
			boundaryGap: true,
			data: (function() {
				var res = [];
				var len = 10;
				show:false;
				return res;
			})()
		}
	],
	
	
	
	yAxis: [{
			type: 'value',
			scale: false,
			max: 22000,
			min: 0,
			show:false,
		},
		
		{
			type: 'value',
			scale: true,
			max: 22000,
			min: 0,
			show:false,
		}
	],
	
	series: [{
			name: '预购队列',
			type: 'bar',
			xAxisIndex: 1,
			yAxisIndex: 1,
			barWidth:12,
		
				itemStyle: {
				normal: {　　　　　　　　　　　
					color: "#0066c9",
					lineStyle: {
						color: '#0066c9'
					},
					borderColor:"transparent",
					borderWidth:45,
					
				}
			},
			data: sre
		},
		{
			name: '步数',
			type: 'line',
			data: sre
		},
		
	]
};
myChart.setOption(option);