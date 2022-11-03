$("#farmer").on("click",function(){
    $("#farmerSignIn").slideToggle();
    $("#customer-sign-in").slideToggle();
    $("#farmer-sign-in").slideToggle();
    $("#welcome-text-1").slideToggle();
})

$("#customer").on("click",function(){
    $("#customerSignIn").slideToggle();
    $("#farmer-sign-in").slideToggle();
    $("#customer-sign-in").slideToggle();
    $("#welcome-text-2").slideToggle();
})

$("#return-1").on("click",function(){
    $("#farmerSignIn").slideToggle();
    $("#customer-sign-in").slideToggle();
    $("#farmer-sign-in").slideToggle();
    $("#welcome-text-1").slideToggle();
})

$("#return-2").on("click",function(){
    $("#customerSignIn").slideToggle();
    $("#farmer-sign-in").slideToggle();
    $("#customer-sign-in").slideToggle();
    $("#welcome-text-2").slideToggle();
})


var height = ($(document).height())/2;

$(document).ready(function(){
    $(window).resize(function(){
        $(".fullheight").height(height);
    });
});


/*index js*/

$('.div-i').on('mouseover',function(){
    $('.div-i').css('animation','lift 3s forwards ease-in-out');
})

$('.div-i').on('mouseout',function(){
    $('.div-i').css('animation','un-lift 3s forwards ease-in-out');
})


