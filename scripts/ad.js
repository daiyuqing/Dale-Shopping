var index=0;
var timer=null;
var m=true;
function startMove(itarget){
	clearInterval(timer);
	timer=setInterval(function(){
	var speed=0;
	var oTop=parseInt($(".slide").css("top"));
	if (oTop>itarget) {
		speed=-1;
	}else if (oTop<itarget) {
		speed=1;
	}else{
		clearInterval(timer);
	}
	$(".slide").css("top",oTop+speed+'px');
	},3);
}

function run(){
	if (m==false) {
		return;
	}else{
		index++;
		if (index==5) {
			index=0;	
			$(".slide").css("top",0);
		}
		$("ul.num li").eq(index).addClass('on');
		$("ul.num li").eq(index).siblings().removeClass('on');
		startMove(-150*index);
	}
	
}
$(function(){
	
	$(".ad").mouseover(function(){
		m=false;
	});
	$(".ad").mouseout(function(){
		m=true;
	});
	$("ul.num li").mouseover(function(){
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		index=$("ul.num li").index(this);
		startMove(-150*index);
	});
		setInterval("run()",1000);
});
	
	
	
