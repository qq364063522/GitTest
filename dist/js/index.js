$(function(){
	//点击关闭头部广告框
	$("#theFirstClose").click(function(){
		$("#theFirstRemove").remove();
	})
	
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
	
	//logo旁边的导航栏
	$.ajax({
		url:"../data/logonav.json",
		success:function(data){
//			var oUl = document.getElementById("logoNav")
			for(var i = 0; i < data.length; i++){
				$("#logoNav").append("<li>" + "</li>");
				$("#logoNav").find("li").eq(i).append(`<a href = "">` + data[i].title + "</a>")
//				alert(data[i].title);
				
			}
		},
		error:function(){
			alert(error);
		}
	})
	
	
	
	
	//bgBanner轮播图
	$.ajax({
		type:"get",
		url:"../data/bgBanner.json",
		success:function(data){
			for(var i = 0; i < data.length; i++){
				$("#bgBanner").append(`<a href = ""><div style = "background:url${data[i].img};opacity:0;"></div></a>`)
			}
			var num = 0;
			var timer = null;
			$("#bgBanner").find("div").eq(7).css("opacity","1");
			
			//轮播滚动函数
			function move(){
				//图片的自己滚动
				if(num != 0){
					$("#bgBanner").find("div").eq(num-1).animate({
						opacity:0
					});
				}else{
					$("#bgBanner").find("div").eq(7).animate({
						opacity:0
					});
				}
				
				$("#bgBanner").find("div").eq(num).animate({
					opacity:1
				});
				
				//圆点跟随图片移动
				$("#bgBanner").find("span").removeClass("hitClass");
				$("#bgBanner").find("span").eq(num).addClass("hitClass");
				num++;
				if(num > 7){
					num = 0;
				}
				
			}
			
			//设置定时器使图片滚动
			timer = setInterval(move,2000)
			
			//移入圆点使图片跟随圆点滚动
			var aSpan = $("#bgBanner").find("li").find("span");
			$("#bgBanner").find("li").find("span").hover(function(){
				clearInterval(timer);
				num = $(this).index();
				$("#bgBanner").find("div").stop().animate({
					opacity:0
				},1000);
				$("#bgBanner").find("div").eq(num).stop().animate({
					opacity:1
				},1000);
				$("#bgBanner").find("span").removeClass("hitClass");
				$("#bgBanner").find("span").eq(num).addClass("hitClass");
			},function(){
				timer = setInterval(move,2000);
			})	
			
			
			//轮播图的移入移出

			$("#bgBanner").find("div").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(move,2000);
			})	
			
		}
	});
	
	
	
	//二级菜单数据的获取
	$.ajax({
		type:"get",
		url:"../data/secondnav.json",
		success:function(data){
			var num = 0;
			for(var i = 0; i < data.length; i++){
				$(".secondNav").append(`
					<li class = "second_${++num}">
						<ul class = "secondNavMes"></ul>
						<p>
							<a href = "">${data[i].title}</a>
						</p>
						<span>
							<a href = "">${data[i].title_1}</a>
						</span>
						<span>
							<a href = "">${data[i].title_2}</a>
						</span>
						<span>
							<a href = "">${data[i].title_3}</a>
						</span>
						<i class="iconfont icon-jiantou">
					</li>`)
				
			}
			
		}
	})
	
	//二级菜单详细信息的获取
	//secondNavMes1
	$.ajax({
		type:"get",
		url:"../data/secondNavMes_1.json",
		success:function(data){

			for(var i = 0 ; i < data.length; i++){
				$(".secondNav").find(".second_1").find(".secondNavMes").append(`
					<p class = "theFirstMes">
						<a href = "">${data[i].title}</a>
					</p>
					<p class = "theSecondMes">
						<span>
							<a href = "">${data[i].mes_1}</a>
						</span><span><a href = "">${data[i].mes_2}</a>
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
					</p>`);
					
					//将信息添加到手机商品栏
					$(".shopDataBox").find(".phone").append(`
						<p class = "thePhoneMes">
						<span>
							<a href = "">${data[i].mes_1}</a>
						</span><span><a href = "">${data[i].mes_2}</a>
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
					`)
					
//				alert(data[i].child.length)
				for(var j = 0 ; j < data[i].child.length; j++){
					$(".secondNav").find(".second_1").find(".secondNavMes").append(
					`<p class = "theThirdMes">
						<a href = "http://localhost:8888/detailsPage.html" class = "img">
							<img src = "${data[i].child[j].img}" title = "华为荣耀">
							<span>${data[i].child[j].name}</span>
							<span style = "color:red">${data[i].child[j].money}</span>
						</a>
					</p>`)
				}
			}
			
		}
	})
	
	//secondNavMes2
	$.ajax({
		type:"get",
		url:"../data/secondNavMes_2.json",
		success:function(data){

			for(var i = 0 ; i < data.length; i++){
				$(".secondNav").find(".second_2").find(".secondNavMes").append(`
					<p class = "theFirstMes">
						<a href = "">${data[i].title}</a>
					</p>
					<p class = "theSecondMes">
						<span>
							<a href = "">${data[i].mes_1}</a>
						</span><span><a href = "">${data[i].mes_2}</a>
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
					</p>`);
					
					//将信息添加到笔记本电脑商品栏
					$(".shopDataBox").find(".notebook").append(`
						<p class = "thePhoneMes">
						<span>
							<a href = "">${data[i].mes_1}</a>
						</span><span><a href = "">${data[i].mes_2}</a>
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
					`)
					
//				alert(data[i].child.length)
				for(var j = 0 ; j < data[i].child.length; j++){
					$(".secondNav").find(".second_2").find(".secondNavMes").append(
					`<p class = "theThirdMes">
						<a href = "http://localhost:8888/detailsPage.html" class = "img">
							<img src = "${data[i].child[j].img}" title = "华为荣耀">
							<span>${data[i].child[j].name}</span>
							<span style = "color:red">${data[i].child[j].money}</span>
						</a>
					</p>`)
				}
			}
			
		}
	})
	
	//secondNavMes3
	$.ajax({
		type:"get",
		url:"../data/secondNavMes_3.json",
		success:function(data){

			for(var i = 0 ; i < data.length; i++){
				$(".secondNav").find(".second_3").find(".secondNavMes").append(`
					<p class = "theFirstMes">
						<a href = "">${data[i].title}</a>
					</p>
					<p class = "theSecondMes">
						<span>
							<a href = "">${data[i].mes_1}</a>
						</span><span><a href = "">${data[i].mes_2}</a>
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
					</p>`);
					
//				alert(data[i].child.length)
				for(var j = 0 ; j < data[i].child.length; j++){
					$(".secondNav").find(".second_3").find(".secondNavMes").append(
					`<p class = "theThirdMes">
						<a href = "http://localhost:8888/detailsPage.html" class = "img">
							<img src = "${data[i].child[j].img}" title = "华为荣耀">
							<span>${data[i].child[j].name}</span>
							<span style = "color:red">${data[i].child[j].money}</span>
						</a>
					</p>`)
				}
			}
			
		}
	})
	
	
	//secondNavMes4
	$.ajax({
		type:"get",
		url:"../data/secondNavMes_4.json",
		success:function(data){

			for(var i = 0 ; i < data.length; i++){
				$(".secondNav").find(".second_4").find(".secondNavMes").append(`
					<p class = "theFirstMes">
						<a href = "">${data[i].title}</a>
					</p>
					<p class = "theSecondMes">
						<span>
							<a href = "">${data[i].mes_1}</a>
						</span><span><a href = "">${data[i].mes_2}</a>
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
					</p>`);
//				alert(data[i].child.length)
				for(var j = 0 ; j < data[i].child.length; j++){
					$(".secondNav").find(".second_4").find(".secondNavMes").append(
					`<p class = "theThirdMes">
						<a href = "http://localhost:8888/detailsPage.html" class = "img">
							<img src = "${data[i].child[j].img}" title = "华为荣耀">
							<span>${data[i].child[j].name}</span>
							<span style = "color:red">${data[i].child[j].money}</span>
						</a>
					</p>`)
				}
			}
			
		}
	})
	
	
	
	//secondNavMes5
	$.ajax({
		type:"get",
		url:"../data/secondNavMes_5.json",
		success:function(data){

			for(var i = 0 ; i < data.length; i++){
				$(".secondNav").find(".second_5").find(".secondNavMes").append(`
					<p class = "theFirstMes">
						<a href = "">${data[i].title}</a>
					</p>
					<p class = "theSecondMes">
						<span>
							<a href = "">${data[i].mes_1}</a>
						</span><span><a href = "">${data[i].mes_2}</a>
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
					</p>`);
//				alert(data[i].child.length)
				for(var j = 0 ; j < data[i].child.length; j++){
					$(".secondNav").find(".second_5").find(".secondNavMes").append(
					`<p class = "theThirdMes">
						<a href = "http://localhost:8888/detailsPage.html" class = "img">
							<img src = "${data[i].child[j].img}" title = "华为荣耀">
							<span>${data[i].child[j].name}</span>
							<span style = "color:red">${data[i].child[j].money}</span>
						</a>
					</p>`)
				}
			}
			
		}
	})
	
	
	
	//secondNavMes6
	$.ajax({
		type:"get",
		url:"../data/secondNavMes_6.json",
		success:function(data){

			for(var i = 0 ; i < data.length; i++){
				$(".secondNav").find(".second_6").find(".secondNavMes").append(`
					<p class = "theFirstMes">
						<a href = "">${data[i].title}</a>
					</p>
					<p class = "theSecondMes">
						<span>
							<a href = "">${data[i].mes_1}</a>
						</span><span><a href = "">${data[i].mes_2}</a>
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
					</p>`);
//				alert(data[i].child.length)
				for(var j = 0 ; j < data[i].child.length; j++){
					$(".secondNav").find(".second_6").find(".secondNavMes").append(
					`<p class = "theThirdMes">
						<a href = "" class = "img">
							<img src = "${data[i].child[j].img}" title = "华为荣耀">
							<span>${data[i].child[j].name}</span>
							<span style = "color:red">${data[i].child[j].money}</span>
						</a>
					</p>`)
				}
			}
			
		}
	})
	
	
	//热销商品JSON数据的获取
	$.ajax({
		type:"get",
		url:"../data/hotProducts.json",
		success:function(data){
			for (var i = 0 ; i < data.length; i++) {
				$("#hotProducts").append(`<ul class = "imgPosition"><img src = "${data[i].title}"></ul><ul class = "salesDetails"></ul>`);
				for(var j = 0; j < data[i].child.length; j++){
					$("#hotProducts").find(".salesDetails").append(`
						<a href = "">
							<li class = "imgPosition" style = "background:white">
								<img src = "${data[i].child[j].img}">
								<p>${data[i].child[j].name}</p>
								<p>${data[i].child[j].discounts}</p>
								<p>${data[i].child[j].money}</p>
							</li>
						</a>
					`)
				}
			}
		}
	})
	
	
	//精品推荐商品数据列表
	$.ajax({
		type:"get",
		url:"../data/recommendation.json",
		success:function(data){
			var num = 0;
			for(var i = 0; i <data.length; i++){
				for(var j = 0; j < data[i].child.length; j++){
					num++;
					$("#recommendation").find("li").append(`
					<a href = "" class = "imgPosition">
						<img src = "${data[i].child[j].img}">
						<p style = "color:black;">${data[i].child[j].name}</p>
						<p>${data[i].child[j].discounts}</p>
						<p style = "color:red">${data[i].child[j].money}</p>
					</a>`);
					
					
				}
			}

			$("#recommendation").css({
				width:num * 218 + 100
			});
			
			//点击箭头实现轮播
			var arrowsNum = 0;
			$("#arrowsleft").click(function(){
				if(arrowsNum >= (num - 6)){
					arrowsNum = num - 6;
				}else{
				arrowsNum++;	
				}
				$("#recommendation").find(".recommendationBox").stop().animate({
					left: -arrowsNum *221
				},800);
			});
			
			$("#arrowsright").click(function(){
				
				if(arrowsNum <= 0){
					arrowsNum = 0;
				}else{
				arrowsNum--;	
				}
				
				$("#recommendation").find(".recommendationBox").stop().animate({
					left: -arrowsNum *221
				},800);
				
			})
			
		}		
	})
	
	
	//第二个轮播图
	$.ajax({
		type:"get",
		url:"../data/thebgBanner.json",
		success:function(data){
			for(var i = 0; i < data.length; i++){
				$("#thebgBanner").append(`<a href = ""><div style = "background:url${data[i].img};opacity:0;"></div></a>`)
			}
			var num = 0;
			var timer = null;
			$("#thebgBanner").find("div").eq(6).css("opacity","1");
			
			//轮播滚动函数
			function move(){
				//图片的自己滚动
				if(num != 0){
					$("#thebgBanner").find("div").eq(num-1).animate({
						opacity:0
					});
				}else{
					$("#thebgBanner").find("div").eq(6).animate({
						opacity:0
					});
				}
				
				$("#thebgBanner").find("div").eq(num).animate({
					opacity:1
				});
				
				//圆点跟随图片移动
				$("#thebgBanner").find("span").removeClass("hitClass");
				$("#thebgBanner").find("span").eq(num).addClass("hitClass");
				num++;
				if(num > 6){
					num = 0;
				}
				
			}
			
			//设置定时器使图片滚动
			timer = setInterval(move,2000)
			
			//移入圆点使图片跟随圆点滚动
			var aSpan = $("#thebgBanner").find("li").find("span");
			$("#thebgBanner").find("li").find("span").hover(function(){
				clearInterval(timer);
				num = $(this).index();
				$("#thebgBanner").find("div").stop().animate({
					opacity:0
				},1000);
				$("#thebgBanner").find("div").eq(num).stop().animate({
					opacity:1
				},1000);
				$("#thebgBanner").find("span").removeClass("hitClass");
				$("#thebgBanner").find("span").eq(num).addClass("hitClass");
			},function(){
				timer = setInterval(move,2000);
			})	
			
			
			//轮播图的移入移出

			$("#thebgBanner").find("div").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(move,2000);
			})	
			
		}
	});
	
	//手机商品列表页面
	$.ajax({
		type:"get",
		url:"../data/phone.json",
		success:function(data){
			for (var i = 0 ; i < data.length; i++) {
				$(".shopDataBox").find(".phone").append(`
					<a href = ""><div class = "imgPosition"><img src = "${data[i].title}"></div></a>	
				`)
				for (var j = 0; j < data[i].child.length; j++) {
					$(".shopDataBox").find(".phone").append(`
						<a \ href = "">
							<li class = "imgPosition phoneMes">
								<img src = "${data[i].child[j].img}">
								<p style = "padding-top:20px;color:"black";>${data[i].child[j].name}</p>
								<p>${data[i].child[j].discounts}</p>
								<p style = "color:red;">${data[i].child[j].money}</p>
							</li>
						</a>
					`)
				}
			}
		}
	})
	
	
	//笔记本电脑商品列表页面
	$.ajax({
		type:"get",
		url:"../data/notebook.json",
		success:function(data){
			for (var i = 0 ; i < data.length; i++) {
				$(".shopDataBox").find(".notebook").append(`
					<a href = ""><div class = "imgPosition"><img src = "${data[i].title}"></div></a>	
				`)
				for (var j = 0; j < data[i].child.length; j++) {
					$(".shopDataBox").find(".notebook").append(`
						<a \ href = "">
							<li class = "imgPosition phoneMes">
								<img src = "${data[i].child[j].img}">
								<p style = "padding-top:20px;color:"black";>${data[i].child[j].name}</p>
								<p>${data[i].child[j].discounts}</p>
								<p style = "color:red;">${data[i].child[j].money}</p>
							</li>
						</a>
					`)
				}
			}
		}
	})
	
	
	//第二个推荐商品数据列表
	$.ajax({
		type:"get",
		url:"../data/recommendation.json",
		success:function(data){
			var num = 0;
			for(var i = 0; i <data.length; i++){
				for(var j = 0; j < data[i].child.length; j++){
					num++;
					$("#recommendation_1").find("li").append(`
					<a href = "" class = "imgPosition">
						<img src = "${data[i].child[j].img}">
						<p style = "color:black;">${data[i].child[j].name}</p>
						<p>${data[i].child[j].discounts}</p>
						<p style = "color:red">${data[i].child[j].money}</p>
					</a>`);
					
					
				}
			}

			$("#recommendation_1").css({
				width:num * 218 + 100
			});
			
			//第二次点击箭头实现轮播
			var arrowsNum = 0;
			$("#arrowsleft_1").click(function(){
				if(arrowsNum >= (num - 6)){
					arrowsNum = num - 6;
				}else{
				arrowsNum++;	
				}
				$("#recommendation_1").find(".recommendationBox").stop().animate({
					left: -arrowsNum *221
				},800);
			});
			
			$("#arrowsright_1").click(function(){
				
				if(arrowsNum <= 0){
					arrowsNum = 0;
				}else{
				arrowsNum--;	
				}
				
				$("#recommendation_1").find(".recommendationBox").stop().animate({
					left: -arrowsNum *221
				},800);
				
			})
			
		}		
	})
	
	
	//第三个推荐商品数据列表
	$.ajax({
		type:"get",
		url:"../data/recommendation.json",
		success:function(data){
			var num = 0;
			for(var i = 0; i <data.length; i++){
				for(var j = 0; j < data[i].child.length; j++){
					num++;
					$("#recommendation_2").find("li").append(`
					<a href = "" class = "imgPosition">
						<img src = "${data[i].child[j].img}">
						<p style = "color:black;">${data[i].child[j].name}</p>
						<p>${data[i].child[j].discounts}</p>
						<p style = "color:red">${data[i].child[j].money}</p>
					</a>`);
					
					
				}
			}

			$("#recommendation_2").css({
				width:num * 218 + 100
			});
			
			//第三次点击箭头实现轮播
			var arrowsNum = 0;
			$("#arrowsleft_2").click(function(){
				if(arrowsNum >= (num - 6)){
					arrowsNum = num - 6;
				}else{
				arrowsNum++;	
				}
				$("#recommendation_2").find(".recommendationBox").stop().animate({
					left: -arrowsNum *221
				},800);
			});
			
			$("#arrowsright_2").click(function(){
				
				if(arrowsNum <= 0){
					arrowsNum = 0;
				}else{
				arrowsNum--;	
				}
				
				$("#recommendation_2").find(".recommendationBox").stop().animate({
					left: -arrowsNum *221
				},800);
				
			})
			
		}		
	})
	
	
	
	
	//第四个推荐商品数据列表
	$.ajax({
		type:"get",
		url:"../data/recommendation.json",
		success:function(data){
			var num = 0;
			for(var i = 0; i <data.length; i++){
				for(var j = 0; j < data[i].child.length; j++){
					num++;
					$("#recommendation_3").find("li").append(`
					<a href = "" class = "imgPosition">
						<img src = "${data[i].child[j].img}">
						<p style = "color:black;">${data[i].child[j].name}</p>
						<p>${data[i].child[j].discounts}</p>
						<p style = "color:red">${data[i].child[j].money}</p>
					</a>`);
					
					
				}
			}

			$("#recommendation_3").css({
				width:num * 218 + 100
			});
			
			//第四次点击箭头实现轮播
			var arrowsNum = 0;
			$("#arrowsleft_3").click(function(){
				if(arrowsNum >= (num - 6)){
					arrowsNum = num - 6;
				}else{
				arrowsNum++;	
				}
				$("#recommendation_3").find(".recommendationBox").stop().animate({
					left: -arrowsNum *221
				},800);
			});
			
			$("#arrowsright_3").click(function(){
				
				if(arrowsNum <= 0){
					arrowsNum = 0;
				}else{
				arrowsNum--;	
				}
				
				$("#recommendation_3").find(".recommendationBox").stop().animate({
					left: -arrowsNum *221
				},800);
				
			})
			
		}		
	});
	
	
	
	
	//固定的右侧back to top
	

	
	/*window.onscroll = function(){
//		$("#toTheTop").css("left","1000px");
//		$("#toTheTop").css("top","300px");
		var num = document.documentElement.clientHeight;
//		alert(num);
		var num_1 = ${parseInt($("body").css("width");
		if(parseInt($("body").css("width") != num_1){
			$("#toTheTop").css("left",`${parseInt($("body").css("width")) - 40 + "px"}`)
		}
		$("#toTheTop").css("left",`${parseInt($("body").css("width")) - 40 + "px"}`)
		$("#toTheTop").css("top",`num - 100 + "px"}`)
		 			
	}*/
	
	
})