$(document).ready(function(){
    $('.faqitem').click(function(){
        $(this).next('.faqtext').slideToggle();
        $(this).toggleClass('active');        
        $(this).siblings().removeClass('active');
    });
});