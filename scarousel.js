$(document).on('ready', function() {
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<img src="img/10/leaf-left.png" class="slick-prev slick-arrow" style="width: 5%; height: auto; z-index: 10; left: -90px">',
      nextArrow: '<img src="img/10/leaf-right.png" class="slick-next slick-arrow" style="width: 5%; height: auto; right: -70px";>',
    });
  })