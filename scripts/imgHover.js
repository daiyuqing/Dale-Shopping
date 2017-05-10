// 右侧下部光标滑过产品列表的效果
$(function(){
	$(".prolist ul li a").hover(function(){
		$(this).append("<img src='images/zoom.gif' id='imgHover'>");
	},function(){
		$("#imgHover").remove();
	});
});