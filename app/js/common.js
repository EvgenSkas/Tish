// slick slider
$(document).ready(function() {

	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});

$('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

$(".callback").submit(function() {
    $.ajax({
      type: "GET",
      url: "mail.php",
      data: $("#callback").serialize()
    }).done(function() {
      alert("Спасибо за заявку!");
      setTimeout(function() {
        $.fancybox.close();
      }, 1000);
    });
    return false;
  });
$(".callback2").submit(function() {
    $.ajax({
      type: "GET",
      url: "mail.php",
      data: $("#callback2").serialize()
    }).done(function() {
      alert("Спасибо за заявку!");
      setTimeout(function() {
        $.fancybox.close();
      }, 1000);
    });
    return false;
  });
});


$(".btn-map").click(function(e) {
  e.preventDefault();
  $(".btn-map").toggleClass('active');
  $(".maps").toggleClass('maps-active');
});

$(".mobile-mnu").click(function(e) {
  e.preventDefault();
  $(".sf-menu").toggleClass('hidden');
  $(".sf-menu").toggleClass('decoration');
});

$(".mobile-mnu").click(function() {
  var thiss = $(this).find('.toggle-mnu');
  thiss.toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;

});

$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});