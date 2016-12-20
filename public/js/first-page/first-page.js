$(function(){
var $slider=$(".slider-container .slider-block");
var $slidecode=$(".slider-container"); //获取所有点
	//console.log($slidecode);
var $point=$(".point-block"); //获取屏幕宽度
var wind=$(".slider-box").width();//获取轮播个数
	console.log(wind);
var length=$slider.length;//计算容器宽度
var allwind=wind*length;//计算容器总宽度
var height=wind*0.85; //设置容器宽度
$slidecode.width(allwind);//设置元素高度
$slider.width(wind ).height(height); //表示当前元素
	var i=0;

$slidecode.on("swipeLeft",function(){
	clearInterval(slideTime);
	i++;
	if(i>=length){  //计算滑动距离，改变当前元素*/
		i=0
	}
	$slidecode.animate({
		"margin-left": -wind + 'px'
	}, 800, "ease", function(){
		$point.removeClass('active').eq(i).addClass('active');
		console.log($point);
		$slidecode.css({
			"margin-left": 0
		});
		$(".slider-container .slider-block").eq(0).appendTo($(".slider-container"));
		$point.removeClass('active').eq(i).addClass('active');
	});
	var slideTime =setInterval(my,2000);
});
	function my(){
		$slidecode.animate({
			"margin-left": -wind + 'px'
		}, 800, "ease", function(){
			$(".slider-container").css({
				"margin-left": 0
			});
			$(".slider-container .slider-block").eq(0).appendTo($(".slider-container"));
			$point.removeClass('active').eq(i).addClass('active');
		});
		i++;
		if(i>=length){ //计算滑动距离，改变当前元素*/
			i=0;
		}
		var slideTime =setInterval(my,2000);
	}
	$slidecode.on("swipeRight",function(){
		clearInterval(slideTime);
		$slidecode.animate({
			"margin-right": -wind + 'px'
		}, 800, "ease", function(){
			$point.removeClass('active').eq(i).addClass('active');
			console.log($point);
			$(".slider-container").css({
				"margin-right": 0
			});
			$(".slider-container .slider-block").eq(0).appendTo($(".slider-container"));

			i--;
			if(i<0){  //计算滑动距离，改变当前元素*/
				i=length-1;
				$point.removeClass('active').eq(i).addClass('active');
			}
		});
	});
	var slideTime =setInterval(my,2000);

var $queryblock=$(".query-block");
$queryblock.on("tap",function(){
	var $self=$(this);
	var index=$self.index();
	if($self.hasClass("active")){
		$self.removeClass("active");
		$(".down-box").eq(index).hide();
	}else{
		$queryblock.removeClass("active");
		$self.addClass("active");
		$(".down-box").hide().eq(index).show();
	}
});
$('.query-price').on('tap', function(){
	var $self = $(this);
	if($self.hasClass('active-down')){
		$self.removeClass('active-down').addClass('active-up');
	}else if($self.hasClass('active-up')){
		$self.removeClass('active-up');
	}else{
		$self.addClass('active-down');
	}
});
});


