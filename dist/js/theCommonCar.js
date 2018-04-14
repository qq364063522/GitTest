$(function(){

		sc_car();

		$.ajax({
			url: "../data/theCommonCar.json",
			type: "GET",
			success: function(res){
				//将数据进行解析，添加到页面上
				for(var i = 0; i < res.length; i++){
					
					$("#magnifyingGlass").append(`
						<img style = "position: absolute;top: 500px;left: 100px;" src="images/index/78_78_1520998479950mp.jpg" alt="" />
					`)
				}
				
				for(var j = 0; j < res.length; j++){
					
					$(".theJoinReduce").append(`
						<button id = "${res[j].id}" class = "join">加入购物车</button>
						<button id = "placeAnOrder">立即下单</button>
					`);
					
					var html = ""
				for(var i = 0; i < res.length; i++){
					html += '<li class="goods_item"  ><div class="goods_pic"><img src="'+res[i].img_1+'" alt=""></div><div class="goods_title"><p>【京东超市】奥利奥软点小草莓</p></div><div class="sc"><div class="sc_btn" id="'+res[i].id+'" >加入购物车</div></div></li>';
				}
					$("#loginNav").find("ol").find(".shoppingCar").find("p").html(html);
				}

			}
		})
		
		
		
		//给购物车按钮添加事件
		//页面控件非常多，非常容易叠加，很容易造成事件冒泡
		$(".theJoinReduce").on("click", ".join", function(){
			// alert(this.id);
			//是否是第一次添加cookie
			var id = this.id;
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				//第一次添加  [{id:id,num:2}]
				$.cookie("goods", '[{id:' + id + ',num:1}]', {
					expires: 7
				});
			}else{
				var str = $.cookie("goods");
				var arr = eval(str);
				var same = false; //代表是否有相同商品

				//遍历所有的对象，判断是否id相同，num++
				for(var i in arr){
					if(arr[i].id == id){
						arr[i].num = arr[i].num + 1;
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires: 7
						});
						var html = arr[i].num;
						$("#theShopNum").html(html);
						same = true;
						break;
					}
				}

				//没有相同的商品
				if(!same){
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr, {
						expires: 7
					});
				}	
			}
			sc_car();

//			alert($.cookie("goods"));

//			sc_msg()
			return false;
		})
		/*
			mouseenter  移入
			mouseleave  移出
		*/
		$("#theAccommodate").mouseenter(function(){
			sc_msg();
		});
//		$(".sc_right").mouseleave(function(){
//			$(this).stop().animate({
//				right: -270
//			})
//		});

		//购物车数字
		function sc_car(){
			var sc_str = $.cookie("goods");
			if(sc_str){ //判断字符串是否存在
				var sc_arr = eval(sc_str);
				var sc_num = 0;
				for(var i in sc_arr){
					sc_num = Number(sc_arr[i].num) + sc_num;
				}
				$(".sc_num").html(sc_num);
			}
		}




					

		//已经存储在cookie数据进行加载
		function sc_msg(){
			$.ajax({
				url: "../data/theCommonCar.json",
				type: "get",
				success: function(res){
					var sc_arr = eval($.cookie("goods"));
					var html = '';
					for(var i in sc_arr){
						html += '<li><div class="sc_goodsPic"><img src="'+res[i].img_1+'" alt=""></div><div class="sc_goodsTitle"><p>荣耀畅玩系列7C</p></div><div class="sc_goodsBtn" id="'+sc_arr[i].id+'">购买</div><div class="sc_goodsNum">商品数量:'+sc_arr[i].num+'</div></li>';
					}
					$("#loginNav").find("ol").find(".shoppingCar").find("p").html(html);
					if(html){
						$("#accommodate_1").css("display","none")
					}
				}
			})
		}



//购物车页面
	$.ajax({
				url: "../data/theCommonCar.json",
				type: "get",
				success: function(res){
					var sc_arr = eval($.cookie("goods"));
					var html = '';
					for(var i in sc_arr){
						html += '<li><div class="sc_goodsPic"><img src="'+res[i].img_1+'" alt=""></div><div class="sc_goodsTitle"><p>荣耀畅玩系列7C</p></div><div class="sc_goodsBtn" id="'+sc_arr[i].id+'">购买</div><div class="sc_goodsNum">商品数量:'+sc_arr[i].num+'</div></li>';
					}
					$("#shoppingIndex").html(html);
				}
			})





	})