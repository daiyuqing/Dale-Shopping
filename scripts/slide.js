// 左侧模块展开与关闭
$(function(){
	$(".module_up_down").click(function(){
		var $self=$(this);
		if ($self.prev().css("display")=="none") {
			$self.prev().slideDown(600,function(){
			$self.find("img").attr("src","images/down.gif");
		});
		}else{
			$self.prev().slideUp(600,function(){
			$self.find("img").attr("src","images/up.gif");
			});
		}
		
	});
});