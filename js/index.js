// 二手房
var secondhand=document.getElementsByClassName('secondhand')[0];
touch.on(secondhand,'tap',function(){
    window.location.href='./SecondHandList.html';
})

// 租房
var rental=document.getElementsByClassName('rental')[0];
touch.on(rental,'tap',function(){
    window.location.href='./rentalList.html';
})

// 热门关注 友情链接
var topic=document.getElementsByClassName('topic')[0].firstElementChild;
var link=document.getElementsByClassName('topic')[0].firstElementChild.nextElementSibling;
var linka=document.getElementsByClassName('linka')[0];
var linkb=document.getElementsByClassName('linkb')[0];
touch.on(topic,'tap',function(){
    topic.className='topic_a';
    link.className='';
    linka.style.display='block';
    linkb.style.display='none';
})

touch.on(link,'tap',function(){
    topic.className='';
    link.className='topic_a';
    linka.style.display='none';
    linkb.style.display='block';
})
