(function($, doc) {
	$.init();
	$.ready(function() {
		var _getParam = function(obj, param) {
			return obj[param] || '';
		};
		//地区选择
		var userPicker1 = new $.PopPicker();
		userPicker1.setData([{
			value: '1',
			text: '东城区'
		}, {
			value: '2',
			text: '西城区'
		}, {
			value: '3',
			text: '朝阳区'
		}, {
			value: '4',
			text: '崇文区'
		}, {
			value: '5',
			text: '海淀区'
		}, {
			value: '6',
			text: '石景山区'
		}, {
			value: '7',
			text: '门头沟区'
		}, {
			value: '8',
			text: '丰台区'
		}, {
			value: '9',
			text: '房山区'
		}, {
			value: '10', 
			text: '大兴区'
			}, {
			value: '11',
			text: '通州区'
		}, {
			value: '12',
			text: '顺义区'
		}, {
			value: '13',
			text: '平谷区'
		}, {
			value: '14',
			text: '怀柔区'
		}, {
			value: '15',
			text: '延庆县'
		}, {
			value: '16', 
			text: '密云县'
		}]);	
		
		var showUserPickerButton = document.getElementById('showUserPicker');
		var userCounty=document.getElementById('userCounty');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker1.show(function(items) {
				var cont=items[0].text;
				userCounty.value=cont;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);				
	
	//系统选择
		var userPicker2 = new $.PopPicker();
		userPicker2.setData([{
			value: '1',
			text: '机关和事业系统'
		}, {
			value: '2',
			text: '企业系统'
		}, {
			value: '3',
			text: '自由组织系统'
		}]);	
		
	var showUserPickerButton = document.getElementById('showUserPicker2');
		var userSystem=document.getElementById('userSystem');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker2.show(function(items) {
				 console.log(items[0].text);
//							userResult.innerText = JSON.stringify(items[0]);
				var cont=items[0].text;
				userSystem.value=cont;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);						
	});
})(mui, document);