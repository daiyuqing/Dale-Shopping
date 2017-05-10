$(function(){
	$("#cart").click(function(){
		alert("感谢你的购买！"+"\n你购买的"+"\n产品是："+$("h4").text()+"\n颜色是："+$(".color_change strong").text()+"\n尺寸是："+$(".size_select strong").text()+"\n数量是："+$(".select_num select").val()+"\n总价是："+$(".pro_price span").text());
		alert("您已经下单了！");
	});
});