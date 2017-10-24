$(window).on("load",function(){
    $('body').removeClass('loading');
    $('body').addClass('loaded');
});

function Init() {
    $('.center-content-one').css('height', $('.center-image-one').height());
    $('.center-content-two').css('height', $('.center-image-two').height());
    $('.center-content-third').css('height', $('.center-data-third').height() + 150);
    $('.features #Wave').css('bottom', '-' + $('.features #Wave').height());
    $('footer').css('padding-top', $('.features #Wave').height() + 100);
}

$(document).ready(function () {
    if ($('body').hasClass('main-page')) {
        Init();
    }else if($('.pricing-table #Wave').length > 0){
        $('.pricing-table').css('padding-bottom', ($('.pricing-table #Wave').height() + 100));
    }else if($('.about .about-image-one').length > 0){
        $('.teams').css('padding-top', $('.teams #Wave').height() + 100);
        $('.about .center-content-one').css('height',$('.about .about-image-one').height());
    }

    if(localStorage.getItem('cookie') == null){
        $('.cookie').addClass('active')
    }

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        height: "10px",
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true
    });

    $('.theme-slider').css('height',$('.center-data-third').height() + 150)

    new WOW().init();
});

$(window).resize(function () {
    if ($('body').hasClass('main-page')) {
        Init();
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

$(document).on('click', '.video-placeholder', function () {
    $(this).addClass('play-on')
    var video = $(".video-placeholder video").get(0);
    video.play();
});

$(document).on('click', '.cookie span', function() {
    $('.cookie').removeClass('active');
    localStorage.setItem("cookie", true);
});