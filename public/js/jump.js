/**
 * Created by Administrator on 2016/12/19 0019.
 */

$('.index-icon').on('tap', function(){
	location.href = '../index/index.html'
});
$('.order-icon').on('tap', function(){
	location.href = '../order/order.html'
});
$('.news-icon').on('tap', function(){
	location.href = '../msg/msg.html'
});
$('.info-icon').on('tap', function(){
	location.href = '../info/info.html'
});

$('.order-cell').on('swipeLeft', function(){
	$(this).css('left', '-65px');
	$(this).find('.delete' ).show();
	$(this).find('.delete' ).on('touchend', function(e){
		e.stopPropagation();
		$(this ).parent().remove();
	});
}).on('swipeRight', function(){
	$(this).css('left', '0');
	$(this).find('.delete' ).hide();
});
$('.order-cell' ).on('tap', function(){
	location.href = '../order/booking_detail.html';
});

$('.order-btn' ).on('tap', function(e){
	e.stopPropagation();
	$(this ).addClass('active' ).text('已接单，待反馈');
})