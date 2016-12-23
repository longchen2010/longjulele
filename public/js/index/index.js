/**
 * Created by Administrator on 2016/12/13 0013.
 */
//轮播图
var $slider = $('.slider_block');

var $sliderCon = $('.slider_container');

var $point = $('.point_block');

var wd = $(window ).width();

var lg = $slider.length;

var allWd = wd * lg;

var hg = wd * 0.85;

$sliderCon.width(allWd);

$slider.width(wd ).height(hg);

var swipeNow = 0;
var slideTime = null;
//轮播图向左滑
$sliderCon.on('swipeLeft', function(){
	clearTimeout(slideTime);
	if(swipeNow < lg - 1){
		var swipeWd = (++swipeNow) * wd;
		$sliderCon.css('transform', 'translateX(-'+ swipeWd + 'px)');
		$point.removeClass('active' ).eq(swipeNow ).addClass('active');
		autoSwipe();
	}
});
//轮播图向右滑
$sliderCon.on('swipeRight', function(){
	clearTimeout(slideTime);
	if(swipeNow > 0){
		var swipeWd = (--swipeNow) * wd;
		$sliderCon.css('transform', 'translateX(-'+ swipeWd + 'px)');

		$point.removeClass('active' ).eq(swipeNow ).addClass('active');
		autoSwipe();
	}
});
//轮播图自动
function autoSwipe(){
	slideTime = setTimeout(function(){
		if(swipeNow < lg - 1){
			var swipeWd = (++swipeNow) * wd;
			$sliderCon.css('transform', 'translateX(-'+ swipeWd + 'px)');
			$point.removeClass('active' ).eq(swipeNow ).addClass('active');
			autoSwipe();
		}
	},2000)
}
autoSwipe();

//轮播图下
$query = $('.query_block');
$('.down-box' ).hide();
$query.on('tap', function(){
	var $self = $(this);
	var i = $self.index();

	$('.header' ).addClass('active');
	$('.search_box').addClass('active');
	$('.query_box').addClass('active');
	$('.slider_box' ).hide();
	$('.overdue-list' ).addClass('active');


	if($self.hasClass('active')){
		$self.removeClass('active');
		$('.down-box' ).eq(i ).hide();
		$('.mask').hide();
	}
	else{
		$query.removeClass('active');
		$self.addClass('active');
		$('.down-box' ).hide().eq(i ).show();
		$('.mask').show();
	}

});


var $moreLi = $('.more-li');

$moreLi.on('tap', function(){
	var index = $(this ).index();
	$moreLi.removeClass('active' ).eq(index ).addClass('active');
	$('.more .box-right').hide().eq(index).show();
});

//按价格排序
$('.query_price').on('tap', function(){
	var $self = $(this);
	if($self.hasClass('active-down')){
		console.log('up');
		$self.removeClass('active-down').addClass('active-up');
		$('.overdue-cell').remove().sort(function(a,b){
			return a.textContent.match(/\d+(?= 元)/) - b.textContent.match(/\d+(?= 元)/);
		}).each(function(i,e){
			$('.overdue-list' ).append(e);
		});
		$('.price-tips' ).show();
		$('.price-tips' ).html('价格从低到高');
	}else if($self.hasClass('active-up')){
		console.log('normal');
		$self.removeClass('active-up');
		$('.price-tips' ).hide();
	}else{
		console.log('down');
		$self.addClass('active-down');
		$('.overdue-cell').remove().sort(function(a,b){
			return b.textContent.match(/\d+(?= 元)/) - a.textContent.match(/\d+(?= 元)/);
		}).each(function(i,e){
			$('.overdue-list' ).append(e);
		});
		$('.price-tips' ).show();
		$('.price-tips' ).html('价格从高到低');

	}
});

//手指向上滑
$(window).on('swipeUp', function(){
	$('.header' ).addClass('active');
	$('.search_box').addClass('active');
	$('.query_box').addClass('active');
	$('.slider_box' ).hide();
	$('.overdue-list' ).addClass('active');
	$('.toTop' ).show();
});
//手指向下滑
$(window).on('swipeDown', function(){
	$('.header' ).removeClass('active');
	$('.search_box').removeClass('active');
	$('.query_box').removeClass('active');
	$('.slider_box' ).show();
	$('.overdue-list' ).removeClass('active');
	$('.toTop' ).hide();
});

$('.select-city').on('tap', function(){
	location.href = '../index/select_city.html'
});


$('.publish_icon').on('tap', function(){
	location.href = '../publish/publish.html'
});

//返回顶部
$('.toTop').on('tap', function(){
	$('html,body' ).scrollTop(0);
	$('.toTop' ).hide();
});

//点击收藏
$('.collect' ).on('tap', function(){
	$(this ).toggleClass('active');
});

//点击搜索
$('.search_input').on('tap', function(){
	location.href = '../index/index_search.html'
});

