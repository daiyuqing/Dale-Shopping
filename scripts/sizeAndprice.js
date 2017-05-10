 // 产品与尺寸切换
$(function(){
	$(".size_select ul li").click(function(){
		$(".size_select strong").text($(this).text());
		$(this).addClass("size_on").siblings().removeClass("size_on");
	});
	$(".select_num select").change(function(){
		$(".pro_price span").text($(this).val()*200);
	});
});