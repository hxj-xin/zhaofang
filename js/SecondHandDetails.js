var mySwiper = new Swiper ('.swiper', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    // autoplay:true,//自动切换
    autoplay: {
       delay: 1500,
       stopOnLastSlide: false,
       disableOnInteraction: true,
      },
  
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },

  })
  //鼠标滑过pagination控制swiper切换
  for(i=0;i<mySwiper.pagination.bullets.length;i++){
    mySwiper.pagination.bullets[i].onmouseover=function(){
      this.click();
    };
  } 