$(function(){
	$(".color_change ul li img").click(function(){
		$(this).parent().addClass("size_on").siblings().removeClass("size_on");
		$(".color_change strong").text($(this).attr("alt"));
	});
	$(".color_change ul li img").livequery("click",function(){ 
		  var imgSrc = $(this).attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_small = imgSrc + "_one_small"+ unit;
		  var imgSrc_big = imgSrc + "_one_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
		  $(".imgList li img").eq(0).attr("src",imgSrc+"_one.jpg");
		  $(".imgList li img").eq(1).attr("src",imgSrc+"_two.jpg");
		  $(".imgList li img").eq(2).attr("src",imgSrc+"_three.jpg");
	});
})