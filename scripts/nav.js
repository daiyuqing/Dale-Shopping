// 导航效果
$(function(){
	$("#navigation ul li").hover(function(){
		$(this).find("ul").stop(true,true).slideDown(400);
	},function(){
		$(this).find("ul").stop(true,true).slideUp("fast");
	});
});