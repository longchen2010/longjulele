var $radiolist=$(".radio-box .radio-block");//寻找到radio-box下的按钮
$radiolist.on("tap",function(){ //使用on绑定tap手机事件，并执行方法
	var $self=$(this); //指当前作用对象
	if(!$self.hasClass("selected")){ //hasClass寻找class名
		$radiolist.removeClass("selected");//如果对象有selected，class名字，则移除
	$self.addClass("selected"); //给当前对象增加selected
	}
}
);
var $selectTitle=$(".select-title");
var $selectlist=$(".select-list");
$selectTitle.on("tap",function(){
	$(this ).siblings(".select-list").toggle(); //切换元素的可见状态
});
$selectlist.find(".select-li" ).on("tap",function(){
	var $self=$(this);
	console.log($self);
	var $parent=$self.parent(".select-list");
	var text=$self.text();
	var val=$self.data("val");
	console.log(text, val);
	$parent.siblings(".select-title" ).text(text ).data("val",val);
	$parent.hide();
});

