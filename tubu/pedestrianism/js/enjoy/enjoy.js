(function(w){
	
	// 重写高级浏览器Array的forEach方法
	// 为低级浏览器的Array和HTMLCollection添加forEach方式
	Array.prototype.forEach = HTMLCollection.prototype.forEach = function(fn){
		for(var i = 0; i < this.length; i ++){
			fn.call(this[i],this[i],i);
		}
	}
	// 扩展number
	Number.prototype.forEach = function(fn){
		for(var i = 1; i <= this; i++){
			fn.call(i);
		}
	}
	// 扩展对象
	Object.prototype.on = function(str){
		if(str in this){
			return true;
		}else{
			return false;
		}
	}
	var enjoy = {
		init : function(){
			var path = this.getPath();
			var cssLink = this.createDom("link",{
				attrs : {
					href : path + "css/enjoy.css",
					onload : function(){
						console.info("Enjoy温馨提示 : enjoy.css 加载成功,祝您使用愉快！");
					},
					onerror : function(){
						console.error("Enjoy错误提示 : enjoy.css 加载失败！\n\n 请您仔细检查路径是否正确");
					}
				},
				append : {
					tagName : "head"
				}
			});
			this.sweep();
		},
		enjoy : function(tag,str){
			$(".z-sr").css("bottom","5.68rem");
			var toTag = str[1];
			var page = this.getParentOffset(tag);
			if(document.getElementById("eui-enjoy")) return false;
				var val = $("#text").html() ;
						$("#text").html(val);
						console.log(val);
			var enjoyTag = this.createDom("div",{
				attrs : {
					id : "eui-enjoy"
				},
				styles : {
					left : page.left+"px",
					top : (page.top + tag.offsetHeight + 10) + "px"
				},
				append : {
					tagName : "body"
				}
			})
			document.addEventListener("click",function(){
				$(".z-sr").css("bottom","0");
				var dom = document.getElementById("eui-enjoy");
				if(dom){
					document.body.removeChild(dom);
					event.stopPropagation();
				}
				
			},false);
			var num = 140;
			var path = this.getPath();
			num.forEach(function(t,i){
			
				var src = this;
				var _this = this;
				var html = this <= 132 ? "<span><img src='"+path + "enjoy/" + src + ".gif"+"' oid = '|[enjoy-"+this+"]'/></span>" : "";
				enjoy.createDom("li",{
					attrs : {
						html : html,
						onclick : function(){
							if(str[2] == "text"){
								var otext = this.getElementsByTagName("img")[0].getAttribute("oid");
								enjoy.createDom("span",{
									
									styles:{
										display : "inline"
										
									},
									append : {
										tagName : toTag
									}
								})
							}else{
								var oSrc = this.getElementsByTagName("img")[0].getAttribute("src");
								enjoy.createDom("img",{
									attrs : {
										src : oSrc,
									},
									append : {
										tagName : toTag
									}
								})
							}
							
							event.stopPropagation();
						}
					},
					append : {
						tagName : enjoyTag
					},
					canBack : function(){
						
					}
				})
			})
		},
		sweep : function(){
			var eles = document.getElementsByTagName("*");
			var elesList = [];
			eles.forEach(function(){
				if(this.getAttribute("enjoy")){
					var str = this.getAttribute("enjoy").split("|");
					this.addEventListener(str[0],function(){
						if(document.getElementById("eui-enjoy")){
							var dom = document.getElementById("eui-enjoy");
							document.body.removeChild(dom);
						}
						(function(str){
							enjoy.enjoy(this,str);
						}.call(this,str));
					})
					this.addEventListener("click",function(){
						event.stopPropagation();
					},false);
				}
			})
		},
		createDom : function(tagName,objs){
			objs = objs ? objs : {};
			var tag = null;
			var parent = null;
			if(tagName && typeof tagName == "string"){
				tag = document.createElement(tagName);
				if(typeof objs.append == "object"){
					parent = this.append(objs.append,tag).parent;
				}
				if(tagName == "link"){
					tag.rel = "stylesheet";
				}
				if(typeof objs.attrs == "object"){
					tag = this.setAttr(tag,objs.attrs);
				}
				if(typeof objs.styles == "object"){
					for(var i in objs.styles){
						tag.style[i] = objs.styles[i];
					}
				}
				if(typeof objs.canBack == "function"){
					objs.canBack.call(tag);
				}
			}
			return tag;
		},
		setAttr : function(tag,attrs){
			if(typeof tag != "object" || !tag.tagName || typeof attrs != "object"){
				return false;
			}
			for(var i in attrs){
				if(i != "html"){
					if(typeof attrs[i] == "function"){
						tag[i] = attrs[i];
					}else{
						tag.setAttribute(i,attrs[i]);
					}
				}else{
					tag.innerHTML = attrs[i];
				}
			}
			return tag;
		},
		append : function(app,tag){
			app = app ? app : "";
			if(!app) return false;
			if(typeof app == "object"){
				if(typeof app.tagName == "string"){
					var tagName = app.tagName ? app.tagName : "";
					var index = app.index ? app.index : 0;
					if(!tagName) return false;
					var reg = /\#|\.|[a-z]/;
					if(!reg.test(tagName[0])) return false;
					var name = tagName.substr(1);
					var pTag = null;
					switch(tagName.substr(0,1)){
						
						case "#" :
							pTag = document.getElementById(name);
						break;
						
						case "." :
							var eles = document.getElementsByTagName("*");
							var eleList = [];
							eles.forEach(function(i){
								if(this.getAttribute("class").indexOf(name) > -1){
									eleList.push(this);
								}
							})
							pTag = eleList[index];
						break;
						
						default :
							var eles = document.getElementsByTagName(tagName);
							pTag = eles[index];
					}
					pTag.appendChild(tag);
				}
				if(typeof app.tagName == "object" && app.tagName.tagName != ""){
					pTag = app.tagName;
					pTag.appendChild(tag);
				}
			}
		
			return {"tag" : tag,"parent" : pTag};
		},
		getParentLeft : function(tag){
			var left = tag.offsetLeft;
			while( tag = tag.offsetParent){
				left += tag.offsetLeft;
			}
			return left;
		},
		getParentTop : function(tag){
			var top = tag.offsetTop;
			while(tag = tag.offsetParent){
				top += tag.offsetTop;
			}
			return top;
		},
		getParentOffset : function(tag){
			var left = this.getParentLeft(tag) , top = this.getParentTop(tag);
			return {"top" : top , "left" : left};
		},
		getPath : function(fillname){
			var js = document.scripts,
				JsPath;
				fillname = fillname ? fillname : "enjoy.js";
			js.forEach(function(){
				if( this.src.indexOf(fillname) > -1 ){
					JsPath = this.src.substring(0,this.src.lastIndexOf("/")+1);
				}
			})
			return JsPath;
		}
	}
	
	
	window.onload = function(){
		enjoy.init();
	}
	
})(window)
