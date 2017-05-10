$(function(){
	$(".tab_menu li").click(function(){
		$(this).addClass("cli").siblings().removeClass("cli");
		var index=$(".tab_menu li").index(this);
		$(".tab_box p").eq(index).fadeIn().siblings().hide();
	});
});