$(function(){
	
	//标题图片下的导航部分
	$(".last").mouseover(function(){
		$(".last").find("dl").css("display","block");
	}).mouseout(function(){
		$(".last").find("dl").css("display","none");
	})
	
	
	//购物车的移入移出
	$("#loginNav").find("ol").eq(0).mouseover(function(){
		$(".shoppingCar").css("display","block")
	}).mouseout(function(){
		$(".shoppingCar").css("display","none")
	})
	//二级菜单的获取
	$.ajax({
		type:"get",
		url:"../data/thesecondnav.json",
		success:function(data){
			for (var i = 0; i < data.length; i++) {
				$("#theclassMes").find("dl").append(`
					<span class = "allName"><a href = "">${data[i].title}</a></span>	
					<p class = "theSecondMes_1"></p>	
					
				`)
				
				for (var j = 0 ; j < data[i].child.length; j++) {
					$("#theclassMes").find("dl").find(".theSecondMes_1").append(`
						<a href = "">
							<dd class = allNameMes>
								<img src = "${data[i].child[j].img}">
								<p>${data[i].child[j].name}</p>
								<p>${data[i].child[j].money}</p>
							</dd>
						</a>
					`)
				}
			}
		}
	})
	
	
	
	$.ajax({
		type:"get",
		url:"../data/secondNavMes_1.json",
		success:function(data){
			for(var i = 0 ; i < data.length; i++){
				$("#theclassMes").find("dl").append(`
					<p class = "theSecondMes">
						<span>
							<a href = "">${data[i].mes_1}</a>
						</span>
						<span>
							<a href = "">${data[i].mes_2}</a>
						</span>
						<span>
							<a href = "">${data[i].mes_3}</a>
						</span>
						<span>
							<a href = "">${data[i].mes_4}</a>
						</span>
						<span>
							<a href = "">${data[i].mes_5}</a>
						</span>
						<span>
							<a href = "">${data[i].mes_6}</a>
						</span>
						<span>
							<a href = "">${data[i].mes_7}</a>
						</span>
						<span>
							<a href = "">${data[i].mes_8}</a>
						</span>
					</p>
				`);
			}
		}
	})
	
	var theNum = 0 ;
	$("#theclassMes").find("navMes_1").hover(
		function(){
			theNum = $("#theclassMes").find(".navMes_1").index();
			$("#theclassMes").find(".navMes_2").eq(theNum).animate({
				opacity:1
			},500)
		}
	)
	
	var Num = document.getElementById("num");
	var shopNum = 0
	$("#add").click(function(){
		shopNum++;
		Num.value = shopNum 
	})
	
	$("#reduce").click(function(){
		if(shopNum <= 2){
			shopNum = 2;
		}
		shopNum--;
		Num.value = shopNum ;
	})
	
	Num.onkeyup = function(){
		if(Num.value < 1){
			Num.value = 1;
		}
		if(Num.value > 999){
			Num.value = 999;
		}
	}
})
