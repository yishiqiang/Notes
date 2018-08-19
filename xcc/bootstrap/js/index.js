//$(document).ready(function(){  //$(document).ready 里的代码是在页面内容都加载完才执行
//	$(".container").fullpage();
//})

$(function () {
//	初始化fullpage组件
//	1.设置每一个屏幕的背景颜色
//	2.设置屏幕内容的对齐方式  默认是垂直居中的 改成顶部对齐
//	3.设置项目导航是否显示,默认false,改成true
//	4.监听什么时候完全进入某一屏 ，回调函数 
	$('.container').fullpage({
//		配置参数
//		section(竖屏)s(每一个)Color(颜色)
//	1.设置每一个屏幕的背景颜色
		sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
//	2.设置屏幕内容的对齐方式  默认是垂直居中的 改成顶部对齐
		verticalCentered:false,
//	3.设置项目导航是否显示,默认false,改成true
		navigation:true,
//	4.监听什么时候完全进入某一屏 ，回调函数 
//			index参数，从序号1开始  获取当前屏幕的序号
		afterLoad:function(link,index){
//			index 从序号1开始  获取当前屏幕的序号
			console.log(index);
//			$('.section')选中.section类(竖屏)，.eq(index-1)每一个竖屏的序号（注：因从1开始所以减1）.addClass('now')当前...
//			选中当前页面的序号
			$('.section').eq(index-1).addClass('now')
		},
//		离开每一页面的时候触发
		onLeave:function(index,nextIndex,direction){
			if (index == 2 && nextIndex == 3) {
//				当前是从第二页到第三页
				$('.section').eq(index-1).addClass('leaved');
			}else if(index ==3 && nextIndex ==4){
//				当前是从第三页到第四页
				$('.section').eq(index-1).addClass('leaved');
			}
		},
		
//		最好在组件初始完毕或者插件内容渲染完毕
		afterRender:function(){
//			console.log(this);this没有安api方法时
//			要考虑jquery插件初始的时候有没有封装这个方法
//			1.jquery的封装	$.fn(封装).fullpage(封装的插件名) = function(){}(封装插件的内容)
//			2.jquery本身没有的方法通过$.fn的方式追加方法,可以认为是插件方法
		
//			点击更多切换下一页
			$('.more').on('click',function(){
//				调用封装的插件fullpage下面的moveSectionDown()方法
				$.fn.fullpage.moveSectionDown()
			});
			
//			当第四屏的购物车结束之后执行收货地址动画
			$('.screen04 .cart').on('transitionend',function () {
				$('.screen04 .address').show().find('img:last').fadeIn(1000);
				$('.screen04 .text').addClass('show');
//				console.log('guosui');
			});
		},
//			页面切换的时间，默认是700毫秒
			scrollingSpeed:1000
	});
});
