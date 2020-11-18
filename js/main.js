$(document).ready(function(){
    $("a[href^='#'").click(function(){
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".button").hover(function() {
        $( this ).fadeOut( 200 );
        $( this ).fadeIn( 200 );
    });

    $(".nav-item-instruments-button").click(function(){
        window.location.href="categories.html";
    });

    $(".nav-item-feedbacks-button").click(function(){
        window.location.href="feedbacks.html";
    });

    $(".nav-item-about-us-button").click(function(){
        window.location.href="about_us.html";
    });

    $(".nav-item-discount-button").click(function(){
        window.location.href="discount.html";
    });

    $(".content-item-button").click(function(){
        window.location.href="categories.html";
    });

    $(".feedbacks-button").click(function(){
        window.location.href="feedbacks.html";
    });

    $(".question-button").click(function(){
        window.location.href="categories.html";
    });
});