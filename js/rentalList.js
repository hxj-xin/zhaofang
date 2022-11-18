var detail = document.getElementsByClassName('mainbox_a')[0];
touch.on(detail, 'tap', function () {
    window.location.href = './SecondHandDetails.html';
})

// fix
var li_ = document.getElementsByClassName('hidden_a');
var div_ = document.getElementsByClassName('li_itema_bottom');
var mask = document.getElementsByClassName('mask')[0];
var lib = document.getElementsByClassName('hidden_b');
var tittle = document.getElementsByClassName('li_itema_top')[0];
var ab = document.getElementsByClassName('ab');
var sp = document.getElementsByClassName('sp');
for (var i = 0; i < li_.length; i++) {
    li_[i].setAttribute('index', i);
    li_[i].ontouchstart = function () {
        var index = this.getAttribute('index');
        for (var k = 0; k < div_.length; k++) {
            div_[k].style.display = 'none';
            div_[index].style.display = 'block';


        }
        tittle.style.display = 'block';
        mask.style.display = 'block';
        mask.ontouchstart = function () {
            mask.style.display = 'none';
            div_[index].style.display = 'none';
            tittle.style.display = 'none';
        }
    }
    // 获取定位后的内容后
    lib[i].setAttribute('index1', i);
    lib[i].ontouchstart = function () {
        var index1 = this.getAttribute('index1');
        for (var k = 0; k < div_.length; k++) {
            div_[k].style.display = 'none';
            div_[index1].style.display = 'block';
            for (var j = 0; j < ab.length; j++) {
                ab[j].className = 'ab';
                ab[index1].className = 'a ab';
                for (var y = 0; y < sp.length; y++) {
                    sp[y].className = 'sp';
                    sp[index1].className = 'span sp';
                }

            }
        }
        tittle.style.display = 'block';
        mask.style.display = 'block';
        mask.ontouchstart = function () {
            mask.style.display = 'none';
            div_[index1].style.display = 'none';
            tittle.style.display = 'none';
            ab[i].className = 'ab';
            sp[i].className = 'sp';
        }
    }
}
