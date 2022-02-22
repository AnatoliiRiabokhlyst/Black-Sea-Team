import $ from "jquery";
import slick from "slick-carousel"
$('.review-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});