// 网页加载立即进行图片轮播
$(function(){
  var li =  $('.banner ul li');
  var em = $('.indicator em');
  // console.log(li);
  var number = li.size()-1;//得到最大下标
  var cur = 0;//当前下标
  //自动播放
  var timer = setInterval(slideNext,2000);
  $('.banner').mouseover(function(){
    clearInterval(timer);
  })//鼠标进入轮播停止
  .mouseout(function(){
  timer = setInterval(slideNext,2000);
  });//鼠标移出继续轮播
  //点击上一张
  $('.prev').click(function(){
    slidePrev();
  });
  //点击下一张
  $('.next').click(function(){
    slideNext();
  });
  //下一张
  function slideNext(){
    if(cur<number){
      li.eq(cur).stop().fadeOut();
      li.eq(cur+1).stop().fadeIn();
      cur++;
      em.removeClass().eq(cur).addClass('active');
    }else{
      li.eq(cur).stop().fadeOut();
      li.eq(0).stop().fadeIn();
      cur=0;
      em.removeClass().eq(cur).addClass('active');
    }
  }
  //上一张
  function slidePrev(){
    if(cur>0){
      li.eq(cur).stop().fadeOut();
      li.eq(cur-1).stop().fadeIn();
      cur--;
      em.removeClass().eq(cur).addClass('active');
    }else{
      li.eq(cur).stop().fadeOut();
      li.eq(number).stop().fadeIn();
      cur=number;
      em.removeClass().eq(cur).addClass('active');
    }
  }
  //点击圆点选择图片
 em.mouseover(function(){
   var now = $(this).index();
   if(now!=cur){
     li.eq(cur).stop().fadeOut();
     li.eq(now).stop().fadeIn();
     em.removeClass().eq(now).addClass('active');
     cur=now;
   }
 });
})
