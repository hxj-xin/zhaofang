//切换
var $titleLi = $('.title li');
var $div = $('form > div');
$titleLi.tap(function () {

    var index = $(this).index();

    $titleLi.removeClass('active');
    $(this).addClass('active');

    $div.hide();
    $div.eq(index).show();
});
//验证码
var min = 60;
var time;
var code = Math.floor(Math.random() * 10000) < 1000 ? Math.floor(Math.random() * 10000 + 1000) : Math.floor(Math.random() * 10000);
$('#code').tap(function () {
    clearInterval(time);
    time = setInterval(fn, 1000);
    alert(code);
});
function fn() {
    min = --min;
    if (min > 0) {
        $('#code').html('（' + min + '秒）重发');
    } else {
        min = 60;
        $('#code').html('发送验证码');
    }
}
