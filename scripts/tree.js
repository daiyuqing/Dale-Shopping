// 左侧最新产品分类树
$(function(){
	$(".m-expanded span").click(function(){
		$(this).siblings("li").toggle();
		$(this).parents("li").toggleClass("m-expanded");
		$(this).parents("li").toggleClass("m-collapsed");
		// $(this).parents("li").attr("class","m-collapsed");
	});
});