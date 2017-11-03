$(function(){
	chart1();
});
function chart1(){
	option = {
        title: {
            text: null
        },
        color:['rgba(212,176,95,0.5)','rgba(212,176,95,1)'],
        width: 2,
        opacity: 0.1,
        legend: {
            // data: ['','']
            enabled: false
        },

        polar: {
            name:{
    			show: true,
    			formatter: null,
               	textStyle: {
                	color:'#d4b05f',
                    fontSize: '0.24rem'
               	}
            },
    		splitNumber: 5,
            indicator:[
                { name: '身份', max: 6500},
                { name: '人脉', max: 16000},
                { name: '履约', max: 30000},
                { name: '信用', max: 38000},
                { name: '行为', max: 52000}
            ],
            nameGap :5,
            center : ['50%','50%'],
            scale: true,
            type: 'circle',
            radius: 100,
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#d4b05f',
                    width: 1,
                    type: 'solid',
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: false,
                formatter: null,
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#d4b05f'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['transparent','transparent']
                },
            },
            splitLine : {
                show : true,
                lineStyle : {
                    width : 1,
                    color : '#d4b05f',
                }
            }
        },
        series: [{
            name: '',
            type: 'radar',
            symbolSize: '0',

            areaStyle: {
                normal: {},
            },
            data : [
                {
                    value : [4300, 8000, 15000, 20000, 34000],
                    name : '实际开销'
                },
                {
                    value : [1200, 10000, 19000, 5000, 20000],
                    name : '实际开销'
                }
            ]
        }]
    };
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option);
}

//  其他js
$('.index').height($('.credit_detail').height()+$('.radar').height()-$('.otherHeight').height());
