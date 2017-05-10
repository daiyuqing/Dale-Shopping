// 左侧最新动态模块内容添加超链接提示
$(function(){
	$(".scrollNews li a").mouseover(function(e){	
		this.myTitle=this.title;
		this.title='';
		$("body").append("<p id='myTitle'>"+this.myTitle+"</p>");
		$("#myTitle").css({
			"position":"absolute",
			"left":e.pageX+20+'px',
			"top":e.pageY+10+'px',
			"border":"1px solid black",
			"background":"#f7f5d1"	
			});
	}).mousemove(function(e){
			$("#myTitle").css({
			"left":e.pageX+20+'px',
			"top":e.pageY+20+'px'
			});
	}).mouseout(function(){
		this.title=this.myTitle;
		$("#myTitle").remove();	
	});
})