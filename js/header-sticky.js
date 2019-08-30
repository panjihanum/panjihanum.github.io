$(document).ready(function(){

  window.addEventListener("scroll", function() {
    let mainNav = $("#sticky");
    let opacityNav = $("#sticky");
    let custommenu = $(".custom-menu-hide");

    if (window.pageYOffset > 0 || !$(window).scrollTop(0)) {
      custommenu.hide();
      opacityNav = opacityNav.find('.about-us-image');
      opacityNav.addClass("header-background-opacity");
      mainNav = mainNav.find(".header-menu");
      mainNav.addClass("is-sticky");
      mainNav.find('.logo-header-2').hide();
    } else {
      custommenu.show();
      opacityNav = opacityNav.find('.about-us-image');
      opacityNav.removeClass("header-background-opacity");
      mainNav = mainNav.find(".header-menu"); 
      mainNav.removeClass("is-sticky");
      mainNav.find('.logo-header-2').show();
    }
  });

  $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {

    var slide = $('#carouselExampleIndicators .carousel-indicators li.active');

    if(slide.data('slideTo') == 0){
      $("[id=imageMenu]").attr('src', './img/menu.png');
      $("[id=logoHeader]").attr ('src', './img/logo.png');
      $("[id=logoHeader2]").attr('src', './img/logo_2.png');
    }else if(slide.data('slideTo') == 1){
      $("[id=imageMenu]").attr('src', './img/menu-aurora.png');
      $("[id=logoHeader]").attr('src', './img/logo-aurora.png');
      $("[id=logoHeader2]").attr('src', './img/logo_2-aurora.png');
    }else{
      $("[id=imageMenu]").attr('src', './img/menu-orange.png');
      $("[id=logoHeader]").attr('src', './img/logo-orange.png');
      $("[id=logoHeader2]").attr('src', './img/logo_2-orange.png');
    }
  });
});