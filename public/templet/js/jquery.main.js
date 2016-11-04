$(function(){

	//判断移动终端选择视频媒体
	if($(".videoWrap").length > 0){
		var isMobile = false;
		if (!navigator.userAgent.match(/mobile/i)) {
			$(".videoWrap").find("video").remove();
			isMobile = false;
		}
		else{
			$(".videoWrap").find("object").remove();
			isMobile = true;
		}
		$(".videoWrap").click(function(){
			var _this = $(this);
			_this.find(".videoImg").hide();
			_this.find(".videoMask").hide();
			_this.find(".videoIco").hide();
			_this.find(".videoObj").show(function(){
				isMobile ? _this.find("video")[0].play() : "";
			});

		})
	}

	//返回顶部
	if($(".backTop").length > 0){
		$(".backTop").pageTop();
		//toggleBackTop();
		//$(window).scroll(function(){
		//toggleBackTop();
        // })
	}
	//客服咨询
	if($(".onlineService").length > 0){
		$(".onlineService").find(".btn").click(function(){
			$(".onlineService").find(".list").toggle();
			$(this).find(".arrow").toggleClass("arrow1");
		})
	}


	//常见问题toggle
	if($(".qaList").length > 0){

		$(".qaList>li>.que").click(function(){
			var wrapElm = $(this).parents("li");
			wrapElm.siblings("li").find(".ans").slideUp();
			wrapElm.tabClass("sel").find(".ans").slideDown();
		})
		$(".qaTab>li").click(function(){
			$(this).tabClass("sel");
			$(".qaListWrap").eq($(this).index()).tabClass("block");
		})
		$(".pagingQa>span").click(function(){
			$(this).tabClass("cur");
			if(!$(this).hasClass("ctl")){
				var pageNo = parseInt($(this).text());
				var qaItems = $(this).parents(".qaListWrap").find(".qaList>li");
				qaItems.each(function(i){
					i >= (pageNo-1)*10 && i < pageNo*10 ? $(this).addClass("block") : $(this).removeClass("block") ;
				})
			}
		})
		$(".qaListWrap").each(function(){
			$(this).find(".qaList>li").each(function(i){
				if(i < 10){
					$(this).addClass("block");
				}
			})
		})
		$(".qaList>li").first().tabClass("sel").find(".ans").slideDown();
	}

	//资源下载
	if($(".rseList").length > 0){
		$(".rseList").first().tabClass("block");
		$("#curType").text($("#typeList>li").first().text())
		$("#typeList>li").click(function(){
			$("#curType").text($(this).text())
			$(".rseList").eq($(this).index()).tabClass("block");
			$("#typeList").hide();
			return false;
		})
		$("#curType").click(function(){
			$("#typeList").toggle();
			return false;
		})
		$(document).click(function(){
			$("#typeList").hide();
		})
	}

	//表单控件提示显隐
	if($(".textWrap").length > 0){
		inputTip();
	}

	//新闻瀑布流
	if($("#waterFallNews").length > 0){
		$.waterFallNews({parentElm:"#waterFallNews",listElm:".newsList",itemElm:".newsList>li",loadElm:"#loading"});
	}
	//新闻右侧固定
	if($(".newsRight").length > 0){
		$(window).scroll(function(){
			if($(document).scrollTop() >= 415 && $(document).height()-$(document).scrollTop() > 1225){ /*5-13修改*/
				$(".newsRight").addClass("newsRightFixed");
				$(window).width() <= 1460 ? $(".newsRight").css({"left":904-$(document).scrollLeft()}) : $(".newsRight").attr("style","none") ;
			}
			else{
				$(".newsRight").removeClass("newsRightFixed");
			}
		})
		$(window).resize(function(){
			$(window).width() <= 1460 ? $(".newsRight").css({"left":904-$(document).scrollLeft()}) : $(".newsRight").attr("style","none") ;
		})
	}

	//首页公告
	if($(".noticeList").length > 0){
		$.slideLi({triggerElm:"#noticeCtl>span",listElm:"#noticeList",stopElm:"#noticeCtl>span",moveUnit:30,interval:5000,speed:500});
	}
	//首页产品切换
	if($('.pdtListIndex').length != 0){
		$.rollItem({wrapElm:".indexPdtWrap",listElm:".pdtListIndex",stopElm:".pdtPrev, .pdtNext",prevElm:".pdtPrev",nextElm:".pdtNext",direction:"horizontal",moveUnit:400,loop:true,interval:5000,speed:600,tfc:"swing"});
	}
	//首页AR产品系列hover动画
	if($(".seriesList").length > 0){
		$(".seriesList>li").mouseover(function(){
			$(this).addClass("animated");
		}).mouseout(function(){
			$(this).removeClass("animated");
		});
	}
    //首页新闻图片定位截取
	if($(".indexNews").length > 0){
		var imgElm = $(".indexNews img");
		var imgW = imgElm.width();
		var imgH = imgElm.height();
		if(imgW/imgH > 235/115){
			imgElm.css({"height":"100%"});
			imgElm.css({"margin-left":(235-$(".indexNews img").width())/2});
		}
		else{
			imgElm.css({"width":"100%"});
		}
	}
	//首页video视频GIF图片 /*5-13修改*/
	if($(".videoIndex").length > 0 && !isMobile){
		$(".videoIndex").hover(function(){
			$(this).find(".videoImg").attr("src","resources/videoIndex.jpg")
		},function(){
			$(this).find(".videoImg").attr("src","resources/videoIndex.jpg")
		})
	}
	//首页banner动画
	if($(".g-bnrIndex").length > 0){
		//var cloud1 = $(".g-bnrIndex").find(".elm2");
//		var cloud2 = $(".g-bnrIndex").find(".elm3");
//		var boat = $(".g-bnrIndex").find(".elm4");
//		var person1 = $(".g-bnrIndex").find(".elm6");
//		cloud1.animate({"left":"+=100px"},5000,"linear").animate({"left":"-=100px"},5000,"linear")
//		setInterval(function(){
//			cloud1.animate({"left":"+=100px"},5000,"linear").animate({"left":"-=100px"},5000,"linear")
//		},10000)
//		cloud2.animate({"left":"-=70px"},4000,"linear").animate({"left":"+=70px"},4000,"linear")
//		setInterval(function(){
//			cloud2.animate({"left":"-=70px"},4000,"linear").animate({"left":"+=70px"},4000,"linear")
//		},8000)
//		boat.animate({"top":"-=30px"},2000,"linear").animate({"top":"+=30px"},2000,"linear")
//		setInterval(function(){
//			boat.animate({"top":"-=30px"},2000,"linear").animate({"top":"+=30px"},2000,"linear")
//		},4000)
//		person1.animate({"top":"-=60px"},3000,"linear").animate({"top":"+=60px"},3000,"linear")
//		setInterval(function(){
//			person1.animate({"top":"-=60px"},3000,"linear").animate({"top":"+=60px"},3000,"linear")
//		},6000)
$.toggleFade({fadeElm:".bnrList>li",crlElm:".bnrCtl>span",prevElm:".bnrPrev",nextElm:".bnrNext",stopElm:".bnrCtl>span, .bnrPrev, .bnrNext",interval:6000,speed:1200});
	}

	//授权查询
	if($(".sqSearch").length > 0){
		$("#openSearch").click(function(){
			$(".sqSearch, .sqMask").show();
		})
		$("#sqClose, .sqMask").click(function(){
			$(".sqBox").eq(0).tabClass("block");
			$(".sqSearch, .sqMask").hide();
		})
		$("#sqBtn").click(function(){
			var code = $("#sqCnt").val().replace(/\s/g, "");
			$.ajax({
				url:"/ajax_check.php",
				type:"get",
				dataType:"text",
				data:{
					code : code
				},
				cache:false,
				success:function(data) {

					data = strToJson(data);

					if(data.success == true){

						$(".sqBox").eq(1).tabClass("block");

						var appendStr = '<div class="ta">查询结果<br /><br /></div>'
							+'<p class="t">代理商姓名：'+data.name+'</p>'
							+'<p class="t">手机号后四位：'+data.phone+'</p>'
							+'<p class="t">微信号：'+data.wechat+'</p>'
							+'<p class="t">授权码：'+data.number+'</p>'

						$('.sqBox .cnt').html(appendStr);

					}
					else{
						$(".sqBox").eq(2).tabClass("block");
					}
				}
			})
		})
	}

	//2016-06-16 AR商城获取代理商信息
	$('#shopSearch').click(function(){

			$("#sqClose, .sqMask").click(function(){
				$(".sqBox").eq(0).tabClass("block");
				$(".sqSearch, .sqMask").hide();
			})

			var shopVal=$.trim($('#shopCnt').val());	//获取微信号/手机号/授权码
			$.ajax({
				type:"get",
				url:"/ajax_check.php",
				data:{code:shopVal},
				success:function(data) {

					data = strToJson(data);

					if(data.success == true){

						$(".sqSearch, .sqMask").show();
						$(".sqBox").eq(1).tabClass("block");

						var appendStr ='<div class="ta">查询结果<br /><br /></div>'
							+'<p class="t">代理商姓名：'+data.name+'</p>'
							+'<p class="t">手机号后四位：'+data.phone+'</p>'
							+'<p class="t">微信号：'+data.wechat+'</p>'
							+'<p class="t">授权码：'+data.number+'</p>'

						$('.sqBox .cnt').html(appendStr);

					}
					else{
						$(".sqSearch, .sqMask").show();
						$(".sqBox").eq(2).tabClass("block");
					}
				}
			});
	})

  	//2016-06-16获取城市区域信息
	$('#citySearch').click(function(){
		var cityVal=$.trim($('#cityInput').val());//获取城市
		if(cityVal != ""){
			$.ajax({
				type:"get",
				url:"/ajax_city.php",
				data:{city:cityVal},
				success:function(data){

					data = JSON.parse(data);

					if(data.length > 0){
						//$('#cityName').text(cityVal);	//城市赋值
						$(".sqSearch1, .sqMask1").show();
						$(".sqBox1").eq(1).tabClass("block");
						var appendStr = '';
						appendStr = '<div class="ta">'+cityVal+'<br /></div>' ;
						for(var i = 0; i < data.length; i ++){
							appendStr += '<div class="tab"><p class="t1">'+data[i].name+'</p><p class="t1">'+data[i].addr+'</p></div>';
						}
						$('.sqBox1 .cnt1').html(appendStr);
					}
					else{
						$(".sqSearch1, .sqMask1").show();
						$(".sqBox1").eq(2).tabClass("block");
					}
				}
			});
		}
		else{
			alert("请输入省份")
		}
	})
	$("#sqClose1, .sqMask1").click(function(){
		$(".sqBox1").eq(0).tabClass("block1");
		$(".sqSearch1, .sqMask1").hide();
	})

	//2016-06-16字符串转成json-begin
	function strToJson(str){
		var json = eval('(' + str + ')');
		return json;
	}
	//2016-06-16字符串转成json-over

	//魔法学校角色
	if($(".roleList li").length > 0){
		$(".roleList li").mouseover(function(){
			$(".roleWrap").addClass("roleWrapOpen");
		}).mouseout(function(){
			$(".roleWrap").removeClass("roleWrapOpen");
		})
	}

	//新闻页公告弹出层
	if($("#msgPop").length > 0){
		$("#noticeList>li").click(function(event){
			var _this = $(this);
			$("#msgTitle").text(_this.find(".title").text());
			$("#msgIntro").text(_this.attr("data-intro"));
			$("#msgFrom").text(_this.attr("data-from"));
			$("#msgDate").text(_this.find(".date").text());
			$("#msgPop").show(function(){
				$("#msgPop").css("margin-top",-$(this).height()/2).addClass("msgPopIn");	/*4-12修改*/
				$(".popMask").show();
			})
		})
		$(".msgPop .closeBtn, .popMask").click(function(){
			$("#msgPop").addClass("msgPopOut");
			setTimeout(function(){
				$("#msgPop").removeClass("msgPopIn msgPopOut");
				$(".popMask").hide();
			},400)
		})
	}

})


//世界地图弹出层
  $("#wmap").mouseover(function(){
  $("#wmt").show();
  });
  $("#mx").click(function(){
  $("#wmt").hide();
  });
   $("#wmt").click(function(){
  $("#wmt").hide();
  });

 //中国地图弹出层
  $("#cmap").mouseover(function(){
  $("#cmt").show();
  });
  $("#cmx").click(function(){
  $("#cmt").hide();
  });
  $("#cmt").click(function(){
  $("#cmt").hide();
  });



//返回顶部
function toggleBackTop (){
	var st = $(document).scrollTop();
	if(st > 200){
		!$(".online").hasClass("onlineShow") ? $(".online").addClass("onlineShow") : "" ;
	}
	else{
		$(".online").removeClass("onlineShow");
	}
}

//inputTip输入框提示
function inputTip(){
	$('.textWrap .text').each(function(){
		$(this).val() != "" ? $(this).siblings(".tip").hide() : "";
	})
	$('.textWrap .text, .textWrap .tip').bind('click', function(){
		var parElm = $(this).parent();
		if(parElm.find(".tip").length != 0){
			parElm.find(".text").focus();
		}
	}).bind('focus', function(){
		var parElm = $(this).parent();
		if(parElm.find(".tip").length != 0){
			parElm.find(".tip").hide();
		}
	}).bind('blur', function(){
		var _this = $(this);
		if(_this.siblings(".tip").length != 0){
			var thisVal = _this.val().replace(/\s/g, "");
			if(thisVal == "" || thisVal == null){
				_this.siblings(".tip").show();
			}
		}
	})
}

//alert通用提示
function alert(msg, title){
	if($(".webAlertBox").length > 0){
		return false;
	}
	var maskElm = $('<div />').addClass('webMask').appendTo('body')
	var alertElm = $('<div />').addClass('webAlertBox').appendTo('body')
	var titleElm = $('<h4 />').addClass('title').text(title || '提示').appendTo(alertElm)
	var messageElm = $('<p />').addClass('message').html(msg || '').appendTo(alertElm)
	var buttonElm = $('<div />').addClass('button').text('确定').appendTo(alertElm)
	maskElm.show().stop().animate({opacity:0.5})
	alertElm.show().stop().animate({opacity:1})
	buttonElm.bind('click', function(){
		maskElm.stop().animate({opacity:0}, function(){
			$(this).remove()
		})
		alertElm.stop().animate({opacity:0}, function(){
			$(this).remove()
		})
	})
}

//通用验证
function checkForm(form){
	var returnVal = true;  //表单是否可提交
    var formElm = $(form);  //验证的当前表单
    var submitItems = formElm.find("[name]");  //表单所有提交项

    submitItems.each(function(i,item){
    	if($(item).attr("data-tipNull")){  //为必填项
    		if($(item).attr("type") == "text" || $(item).attr("type") == "password" || $(item)[0].tagName == "SELECT" || $(item)[0].tagName == "TEXTAREA"){
		    	var itemVal = $(item).val().replace(/\s/g, "");
		    	if(itemVal == "" || itemVal == null){
		    		alert($(item).attr("data-tipNull"));
		    		returnVal = false;
		            return false;
		    	}
		    }
		    if($(item).attr("type") == "radio" || $(item).attr("type") == "checkbox"){
				if(!formElm.find('[name="'+$(item).attr("name")+'"]:checked').val()){
					alert($(item).attr("data-tipNull"));
		    		returnVal = false;
		            return false;
				}
			}
    	}
    	if($(item).attr("data-reg")){  //填写不符合正则规则
    		var itemVal = $(item).val().replace(/\s/g, "");
    		if(itemVal != "" && itemVal != null){
	    		var regu = eval($(item).attr("data-reg"));
		        var re = new RegExp(regu);
		        if (!re.test(itemVal)) {
		            alert($(item).attr("data-tipReg"));
		            returnVal = false;
		            return false;
		        }
	    	}
    	}
    	//两次输入不一致(仅限一个比较项)
    	if(submitItems.filter("[data-same]").length > 0){
	    	var itemSameVal1 = submitItems.filter("[data-same]").eq(0).val().replace(/\s/g, "");
	    	var itemSameVal2 = submitItems.filter("[data-same]").eq(1).val().replace(/\s/g, "");
	    	if(itemSameVal1 != "" && itemSameVal2 != "" ){
	    		if(itemSameVal1 != itemSameVal2){
	    			alert(submitItems.filter("[data-same]").eq(1).attr("data-tipSame"));
	    			returnVal = false;
	    			return false;
	    		}
	    	}
	    }
    })

    return returnVal;
}

var Param = {
	page : 1
}

jQuery.extend({

	//案例瀑布流
	waterFallNews : function(opt){
		var parentElm = $(opt.parentElm) ;
		var listElm = $(opt.listElm) ;
		var itemElm = $(opt.itemElm) ;
		var loadElm = $(opt.loadElm) ;
		var ajaxType = 'get' ;
		var ajaxDateType = 'text' ;
		var ajaxCache = false;
		var ajaxLock = false;

		var ul_length = listElm.size();
		var li_length = itemElm.size();
		var array = [0,0];
		var minHeight = 0;
		var minIndex = 0;
		var fixedWidth = 320;

		$("html,body").stop().animate({scrollTop:0});
		listElm.empty();



		var loadData = function() {
			var ajaxUrl = $("#ajaxUrl").val();
			$.ajax({
				url:ajaxUrl+"?page="+Param.page,
				type:ajaxType,
				dataType:ajaxDateType,
				cache:ajaxCache,
				beforeSend:function() {
					loadElm.text("努力加载中...");
	            },
				success:function(data) {
					data = eval(data);
					$.each(data,function(i,Info){
						if(i < data.length-1){
							var htmlString = '<li><a class="img" href='+Info.url+'><img src='+Info.src+'></a><p class="date">'+Info.date+'</p><a class="title" href='+Info.url+'>'+Info.title+'</a><p class="intro">'+Info.intro+'</p></li>';

							if(li_length < 2){
								var o = listElm.eq(li_length).append(htmlString);
								var newItem = o.find("li").last();
								array[li_length] += fixedWidth/Info.width*Info.height+newItem.find(".title").height()+newItem.find(".intro").height();
								if(li_length == 0){  //初始化最小高度和最小高度列索引
									minHeight = array[li_length];
									minIndex = li_length;
								}
								if(array[li_length] < minHeight){
									minHeight = array[li_length];
									minIndex = li_length;
								}
							}
							else{
								var o = listElm.eq(minIndex).append(htmlString);
								var newItem = o.find("li").last();
								array[minIndex] += fixedWidth/Info.width*Info.height+newItem.find(".title").height()+newItem.find(".intro").height();
								minHeight = array[minIndex];
								for(var j = 0;j < ul_length;j ++){
									if(array[j] < minHeight){
										minHeight = array[j];
										minIndex = j;
									}
								}
							}
							newItem.find("img").bind("load",function(){
								var _this = $(this);
								_this.animate({opacity:1},1000);
							});
							li_length++;

							if($(document).scrollTop() >= 415 && $(document).height()-$(document).scrollTop() > 1050){
								$(".newsRight").addClass("newsRightFixed");
							}
							else{
								$(".newsRight").removeClass("newsRightFixed");
							}
						}
						else{
							if(Info){
								ajaxLock = false;
								loadElm.text("下拉加载更多");
							}
							else{
								ajaxLock = true;
								$(window).unbind('scroll',scrollReload);
								loadElm.text("没有更多了");
								setTimeout(function(){
									loadElm.hide();
								},1500);
							}
						}
					});
				}
			});
		}
		var scrollReload = function() {
		    var wh = parseInt($(window).height());
		    var ws = parseInt($(window).scrollTop());
		    var dh = document.body.scrollHeight;
		    if( dh - 470 <= wh + ws && !ajaxLock){
		        ajaxLock = true;
		        setTimeout(function(){
		        	Param.page++;
		        	loadData();
		        },1000);
		    }
		}
		if(parentElm.length != 0) {
			loadData();
			$(window).bind('scroll',scrollReload);
		}
	},
	rollItem : function(opt){
		var triggerElm = $(opt.triggerElm);
		var prevElm = $(opt.prevElm);
		var nextElm = $(opt.nextElm);
		var wrapElm = $(opt.wrapElm);
		var listElm = opt.listElm;
		var stopElm = opt.stopElm;
		var switchNum = opt.switchNum || 1; //切换个数，默认为1
		var interval = opt.interval;
		var direction = opt.direction;
		var moveUnit = direction == "horizontal" ? opt.moveUnit || $(wrapElm).width() : opt.moveUnit || $(wrapElm).height() ;
		var speed = opt.speed;
		var tfc = opt.tfc || "easeInOutExpo";
		var loop = opt.loop;
		var auto = opt.auto || true;
		var length = Math.ceil($(listElm).children().size()/switchNum);

		var curIndex = 0;
		var slideLock = false;

		if(length <= 3){
			prevElm.hide();
			nextElm.hide();
		}
		else{
			triggerElm.first().tabClass("sel");
			direction == "horizontal" ? $(listElm).css({"left":"-"+moveUnit+"px"}) : $(listElm).css({"top":"-"+moveUnit+"px"}) ;
			for(var i = 0; i < length; i ++){
				$(listElm).append($(listElm).children().eq(i).clone())
			}
	        $(listElm).prepend($(listElm).children().last());

			var slideQueue = function(dir,index){
				if(!slideLock){
					slideLock = true;
					var _listElm = $(listElm);
					if(dir == "next"){
						if(direction == "horizontal"){
							_listElm.stop().animate({"left":"-="+moveUnit},speed,tfc,function(){
								_listElm.append($(listElm).children().first());
								_listElm.css({"left":"-"+moveUnit+"px"});
								slideLock = false;
							});
						}
						if(direction == "vertical"){
							_listElm.stop().animate({"top":"-="+moveUnit},speed,tfc,function(){
								_listElm.append($(listElm).children().first());
								_listElm.css({"top":"-"+moveUnit+"px"});
								slideLock = false;
							});
						}
					}
					if(dir == "prev"){
						if(direction == "horizontal"){
							_listElm.prepend($(listElm).children().last());
							_listElm.css({"left":"-="+moveUnit+"px"});
							_listElm.stop().animate({"left":"+="+moveUnit},speed,tfc,function(){
								slideLock = false;
							});
						}
						if(direction == "vertical"){
							_listElm.prepend($(listElm).children().last());
							_listElm.css({"top":"-="+moveUnit+"px"});
							_listElm.stop().animate({"top":"+="+moveUnit},speed,tfc,function(){
								slideLock = false;
							});
						}
					}
				}
			}

			var isVpt = function(dir){
				if(dir == "next"){
					if(loop || curIndex < length - 1 ){
						return true;
					}
					else{
						return false;
					}
				}
				else if(dir == "prev"){
					if(loop || curIndex > 0 ){
						return true;
					}
					else{
						return false;
					}
				}
			}

			var toggleCtl = function(){
				if(!loop){
					curIndex <= 0 ? prevElm.hide() : prevElm.show();
					curIndex >= length - 1 ? nextElm.hide() : nextElm.show();
				}
			}

			/*triggerElm.click(function(){
				var idx = triggerElm.index($(this));
				slideQueue(idx);
			});*/
			prevElm.click(function(){
				if(isVpt("prev") && !slideLock){
					curIndex = curIndex <= 0 ? (length - 1) : (curIndex - 1) ;
					slideQueue("prev");
					toggleCtl();
				}
			});
			nextElm.click(function(){
				if(isVpt("next") && !slideLock){
					curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
					slideQueue("next");
					toggleCtl();
				}
			});

			if(auto){
				var autoSt = setInterval(function(){
					if(isVpt("next") && !slideLock){
						curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
						slideQueue("next");
						toggleCtl();
					}
				},interval);
				$(stopElm).mouseover(function(){
					clearInterval(autoSt);
				}).mouseout(function(){
					autoSt = setInterval(function(){
						if(isVpt("next") && !slideLock){
							curIndex = curIndex >= (length - 1) ? 0 : (curIndex + 1) ;
							slideQueue("next");
							toggleCtl();
						}
					},interval);
				});
			}

			toggleCtl();
		}
	}

})
