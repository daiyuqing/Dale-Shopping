// 左侧最新动态模块内容滚动
$(function(){
	var $this=$(".scrollNews");
	$this.hover(function(){
		clearInterval(scollTimer);
	},function(){
		scollTimer=setInterval(function(){
			scrollNews($this);
		},2000);
	});
	var scollTimer=setInterval(function(){
		scrollNews($this);
	},3000);
	
});
function scrollNews(obj){
	var $self=obj.find("ul:first");
	var lineHeight=$self.find("li:first").height();
	$self.animate({"marginTop":-lineHeight+'px'},600,function(){
		$self.css({marginTop:0}).find("li:first").appendTo($self);
	});
}
