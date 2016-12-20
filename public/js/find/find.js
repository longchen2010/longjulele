var $slider=$(".slider-block");
var $slidecode=$(".slider-container"); //获取所有点
var $point=$(".point-block"); //获取屏幕宽度
var wind=$(window).width();//获取轮播个数
var length=$slider.length;//计算容器宽度
var allwind=wind*length;//计算容器高度
var height=wind*0.85; //设置容器宽度
$slidecode.width(allwind);//设置元素高度
$slider.width(wind ).height(height); //表示当前元素
var swipnow=0;
var slideTime;//添加滑动事件
$slidecode.on("swipeLeft",function(){
	console.log("1");
	clearTimeout(slideTime);
	if(swipnow<length-1){ //计算滑动距离，改变当前元素
		var swipnoe=(++swipnow)*wind;
		$slidecode.css("transform","translateX(-"+swipnoe +"px)"); //改变点的选中
		$point.removeClass().eq(swipnow).addClass("active");
		outSwipe();
	}
});
$slidecode.on("swipeRight",function(){
	console.log("2");
	clearTimeout(slideTime);
	if(swipnow>0){ //计算滑动距离，改变当前元素
		var swipnoe=(--swipnow)*wind;
		$slidecode.css("transform","translateX(-"+swipnoe +"px)"); //改变点的选中
		$point.removeClass("active").eq(swipnow ).addClass("active");
		outSwipe();
	}
});

function outSwipe(){
	slideTime=setTimeout(function(){
		if(swipnow<length-1){ //计算滑动距离，改变当前元素
			var swipnoe=(++swipnow)*wind;
			$slidecode.css("transform","translateX(-"+swipnoe+"px)");
		$point.removeClass("active").eq(swipnow).addClass("active")
			outSwipe();
		}
	},2000);
}
outSwipe();
var $queyblock=$("query-block");
$queyblock.on("tap",function(){
	var $self=$(this);
	var index=$self.index();
	console.log(index);
if($self.hasClass("active")){
	$self.removeClass("active");
	$(".down-box").eq(index).hide();
}else{
	$queyblock.removeClass("active");
	$self.addClass("active");
	$(".down-box").hide().eq(index).show();
}
});


$('.query_price').on('tap', function(){
	var $self = $(this);
	if($self.hasClass('active-down')){
		console.log('up');
		$self.removeClass('active-down').addClass('active-up');
	}else if($self.hasClass('active-up')){
		console.log('normal');
		$self.removeClass('active-up');
	}else{
		console.log('down');
		$self.addClass('active-down');
	}
});
