/*for wm page*/
(function(){
const itemWidth = 74;
const outerWidth = 60;

var galleryCurrentIndex = 0;
var galleryItemCount = 0;
var galleryViewCount = 0;
function resizeGallery(){
    galleryItemCount = $('.wmp-gallery-slider-viewport ul li').length;
    var fullWidth = $('.wmp-gallery-slider').width();
    var listWidth = itemWidth * galleryItemCount;
    var viewMaxCount = Math.floor((fullWidth - outerWidth)/itemWidth);
    galleryViewCount = (galleryItemCount < viewMaxCount ? galleryItemCount : viewMaxCount);
    var viewWidth = galleryViewCount * itemWidth;
    $('.wmp-gallery-slider-viewport ').width(viewWidth);
    $('.wmp-gallery-slider-viewport ul').width(listWidth);
    checkLeftRight();
}
function checkLeftRight(){
    if (galleryCurrentIndex <= 0){
        galleryCurrentIndex = 0;
        $('.wmp-gallery-slider-left').fadeOut(200);
    }else{
        $('.wmp-gallery-slider-left').fadeIn(200);
    }
    if (galleryCurrentIndex >= galleryItemCount-galleryViewCount){
        galleryCurrentIndex = galleryItemCount-galleryViewCount;
        $('.wmp-gallery-slider-right').fadeOut(200);
    }else{
        $('.wmp-gallery-slider-right').fadeIn(200);
    }
}
$('.wmp-gallery-slider-left a').click(function(){
    galleryCurrentIndex--;
    checkLeftRight();
    $('.wmp-gallery-slider-viewport ul').animate({left: (-galleryCurrentIndex*itemWidth)+'px'},200);
});
$('.wmp-gallery-slider-right a').click(function(){
    galleryCurrentIndex++;
    checkLeftRight();
    $('.wmp-gallery-slider-viewport ul').animate({left: (-galleryCurrentIndex*itemWidth)+'px'},200);
});
resizeGallery();
$(window).resize(resizeGallery);

$('.wmp-gallery-slider-viewport ul li').hover(function(){
    var x = $(this);
    x.addClass("wmp-act").siblings().removeClass("wmp-act");
    var tsrc = x.find('img').attr('src').replace(/(_100(?=\.\w{1,5}$))/i,'_600');
    $('.wmp-gallery-main img').attr('src',tsrc);
});

$('.wmp-gallery-main a').click(function(){

});


})();