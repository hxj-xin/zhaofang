// header部分logo跳转首页
var logo=document.getElementsByClassName('logo')[0];
touch.on(logo,'tap',function(){
    window.location.href='./index.html';
 
})
// 我的
var my=document.getElementsByClassName('header_r_my')[0];
console.log(my);
my.ontouchstart=function(){
    window.location.href='./myLogin.html';
}

// 滑动前进、后退
var body=document.getElementsByTagName('body')[0];
touch.on(body,'swipeleft',function(){
    window.history.forward();
})
var body=document.getElementsByTagName('body')[0];
touch.on(body,'swiperight',function(){
    window.history.back();
})
