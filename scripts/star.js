// 评分效果
$(function(){
	$(".rating li").mouseover(function(){
		$(".rating").removeClass().addClass($(this).attr("class")+"stars"+" rating");
	});
	$(".rating li").click(function(){
		$(".rating").removeClass().addClass($(this).attr("class")+"star"+" rating");
		alert("您给此产品的评分是: "+$(this).find("a").attr("title"));
		return false;
	});
});