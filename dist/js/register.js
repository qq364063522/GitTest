//账号登录的点击事件
$(function(){
	$("#ID").css("color","#b40707").click(function(){
		$("#ID").css("color","#b40707")
		$(".theID").css("display","block")
		$("theScanCode").css("display","none")
		$(".scanCode").css("color","black")
	})
	$(".scanCode").click(function(){
		$(".scanCode").css("color","#b40707");
		$(".theID").css("display","none");
		$(".theScanCode").css("display","block");
		$("#ID").css("color","black");
	})
	//二维码的移入移出事件
	$("#img_1").mouseover(function(){
		$("#img_1").css("position","absolute").stop().animate({
			left:0
		},500);
		$("#img_2").stop().animate({
			opacity:1
		},500)
	}).mouseout(function(){
		$("#img_1").css("position","absolute").stop().animate({
			left:100
		},500);
		$("#img_2").stop().animate({
			opacity:0
		},300)
	})
})