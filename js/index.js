window.onload = function(){
	//点 击 视 频 logo 播 放 视 频
	// $(".video_logo").click(function() {
	// 	$(this).hide()
	// 	$(this).prev(".poster").hide()
	// 	$(this).next("video").css('display', 'block')
	// 	document.querySelector("video").play()
	// 	//$("video").play() 报错
	// })
	
	//视 频 播 放 结 束 时 执 行
	// document.querySelector("video").onended = function() {
	// 	$(".video_logo").show()
	// 	$(".video_logo").prev(".poster").show()
	// 	$(".video_logo").next("video").hide()
	// }
	
	//swiper 轮 播 图
	var mySwiper = new Swiper('.swiper-container', {
		//loop: true,
		pagination: {
			el: '.swiper-pagination',
		}
	})
	
	
	
	//活 动 倒 计 时
	function GetRTime2(now_time, time) {
		var EndTime = now_time + time * 60 * 1000 * 60;
		var NowTime = new Date().getTime();
		var t = EndTime - NowTime;
		var d = 0;
		var h = 0;
		var m = 0;
		var s = 0;
		if(t >= 0) {
	
			d = Math.floor(t / 1000 / 60 / 60 / 24) > 9 ? Math.floor(t / 1000 / 60 / 60 / 24) : Math.floor(t / 1000 / 60 / 60 / 24);
			h = Math.floor(t / 1000 / 60 / 60 % 24) > 9 ? Math.floor(t / 1000 / 60 / 60 % 24) : "0" + Math.floor(t / 1000 / 60 / 60 % 24);
			m = Math.floor(t / 1000 / 60 % 60) > 9 ? Math.floor(t / 1000 / 60 % 60) : "0" + Math.floor(t / 1000 / 60 % 60);
			s = Math.floor(t / 1000 % 60) > 9 ? Math.floor(t / 1000 % 60) : "0" + Math.floor(t / 1000 % 60);
		}
		document.querySelector(".js_count_h").innerHTML = h;
		document.querySelector(".js_count_m").innerHTML = m;
		document.querySelector(".js_count_s").innerHTML = s;
		//		        document.querySelector(".js_count_d").innerHTML = d;
		// document.querySelector(".js_count_hh").innerHTML = h;
		// document.querySelector(".js_count_mm").innerHTML = m;
		// document.querySelector(".js_count_ss").innerHTML = s;
		//		        document.querySelector(".js_count_dd").innerHTML = d;
	};
	var now_time = new Date().getTime();
	setInterval(function() {
		GetRTime2(now_time, '8')
	}, 30);
	
	
	//购 买 人 数
	let nums = localStorage.getItem("nums") ? localStorage.getItem("nums") : 74256;
	if(nums > 100000) {
		nums = 74500
	}
	let text = `${nums}人已购买`;
	$(".buy_num").text(text);
	setInterval(function() {
		let a = $(".buy_num").text();
		var nums = a.replace(/[^0-9]/ig, "");
		nums++;
		let text = `${nums}人已购买`;
		localStorage.setItem("nums", nums);
		$(".buy_num").text(text)
	},3000);
	
	
	//订单信息
	let price_now=$('.price_now').text()
	let num = $('.num2').val() != '' ? $('.num2').val() : 0;
	let price = $('.price_now').text()
	$('.total_price').val(price)
	$(".up1").click(function() {
		let price = $('.price_now').text()
		let num = $('.num2').val();
		num++;
		$('.num2').val(num);
		let prices = num * price;
		$(".price").val(prices)
	});
	$(".down1").click(function() {
		let num = $('.num2').val();
		let price = $('.price_now').text()
		if(num <= 1) {
			return
		};
		num--;
		$('.num2').val(num);
		let prices = num * price;
		$(".price").val(prices)
	});
	$(".num2").on('keyup',function() {
		var str = $(this).val();
		if(str <= 0) {
			return false
		}
		prices = $(".num2").val() * $('.price_now').text()
		$('.price').val(prices)
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
