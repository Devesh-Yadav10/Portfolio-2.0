$(".right img").on('mouseover',function(){
    $(".hover-text").animate({opacity:1},300)
});
$(".right img").on('mouseout',function(){
    $(".hover-text").animate({opacity:0},200)
});
