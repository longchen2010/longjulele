/**
 * Created by Administrator on 2016/12/16 0016.
 */

$('.icon-back' ).on('tap', function(){
	history.back();
});

$('.header-conf').on('tap', function(){
	$('.mask' ).show();
	$('.cancel-alert' ).show();
	$('.booking-conf').on('tap', function(){
		$('.cancel-alert' ).hide();
		$('.publish-alert' ).show();
	});
	$('.cancel' ).on('tap', function(){
		$('.mask' ).hide();
		$('.cancel-alert' ).hide();
	})
});


$('.tel-icon').on('tap', function(){
	$('.mask' ).show();
	$('.cancel-alert' ).show();
	$('.cancel' ).on('tap', function(){
		$('.mask' ).hide();
		$('.cancel-alert' ).hide();
	})
});
//预约看房成功
$('.booking-room' ).on('tap', function(){
	$('.header' ).css('background', 'none');
	$('.icon-back' ).css('background', 'none');
	$('.mask' ).css('background','#ccc').show();
	$('.booking-alert' ).show();
	$('.sure' ).on('tap', function(){
		location.href = '../order/order_detail.html'
	});
	$('.cancel' ).on('tap', function(){
		location.href = '../order/order.html'
	})
});

$('.reson-li' ).on('tap', function(){
	var i = $(this ).index();
	$(this).toggleClass('active');
	if(i == 2){
		$('.reson-input' ).toggle()
	}
});


$('.sure-btn').on('tap', function(){
	$('.mask' ).show();
	$('.cancel-order' ).show();
	$('.confirm' ).on('tap', function(){
		history.back();
	});
});


$('.upload-conf').on('tap', function(){
	$('.mask' ).show();
	$('.upload-alert' ).show();
});
$('.cancel-upload').on('tap', function(){
	$('.mask' ).show();
	$('.cancel-alert' ).show();
	$('.cancel' ).on('tap', function(){
		$('.mask' ).hide();
		$('.cancel-alert' ).hide();
	});
	$('.sure' ).on('tap', function(){
		history.back();
	})
});

//改期达成取消
$('.change_btn').on('tap', function(){
	location.href = '../order/booking_change.html'
});
$('.reach_btn').on('tap', function(){
	location.href = '../order/upload_contract.html'
});
$('.cancel_btn').on('tap', function(){
	location.href = '../order/reserve_cancel.html'
});



//弹出输入时间框
$('.time-house' ).on('tap', function(){
	$('.mask' ).show();
	$('.cancel-alert' ).show();
	$('.cancel' ).on('tap', function(){
		$('.mask' ).hide();
		$('.cancel-alert' ).hide();
	});
	$('.sure' ).on('tap', function(){
		$('.mask' ).hide();
		$('.cancel-alert' ).hide();
	})
});
//接单按钮
$('.order-btn').on('tap', function(){
	location.href = '../order/order_detail.html'
});

