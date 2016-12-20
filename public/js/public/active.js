$(function(){
	var $home=$(".home");
	var $reservation=$(".reservation");
	var $add=$("add");
	var $information=$(".information");
	var $me=$(".me");
	var $icon=$(".icon");
	$icon.on("tap",function(){
		var $con=$(this);
		if($con.hasClass("ective")){
			$con.removeClass("ective");
		}else{
			$con.addClass("ective");

		}
	});

	$home.on("tap",function(){
		var $home=$(this);
		if($home.hasClass("a0tive")){
			$home.removeClass("a0tive");
		}else{
			$home.addClass("a0tive");
		}
	});

	$reservation.on("tap",function(){
		var $reservation=$(this);
		if($reservation.hasClass("aotive")){
			$reservation.removeClass("aotive");
		}else{
			$reservation.addClass("aotive");
		}
	});

	$add.on("tap",function(){
		var $add=$(this);
		if($add.hasClass("active")){
			$add.removeClass("active");
		}else{
			$add.addClass("active");
		}
	});

	$information.on("tap",function(){
		var $information=$(this);
		if($information.hasClass("active")){
			$information.removeClass("active");
		}else{
			$information.addClass("active");
		}
	});

	$me.on("tap",function(){
		var $me=$(this);
		if($me.hasClass("actove")){
			$me.removeClass("actove");
		}else{
			$me.addClass("actove");
		}
	});

})