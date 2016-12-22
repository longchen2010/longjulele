/**
 * Created by Administrator on 2016/12/14 0014.
 */


$('.tab-bar-cell').on('tap', function(){
	var $self = $(this);
	var i = $self.index();
	if($self.hasClass('active')){
		$self.removeClass('active');
		$('.demand-cells' ).eq(i ).hide()
	}
	else{
		$('.tab-bar-cell' ).removeClass('active');
		$self.addClass('active');
		$('.demand-cells' ).hide().eq(i ).show();
	}
});