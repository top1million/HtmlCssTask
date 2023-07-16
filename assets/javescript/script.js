$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  autoWidth: false,
  items: 3,
  navText: [
    "<span><i class='fa-solid fa-arrow-left-long fa-lg'></i></span>",
    "<span><i class='fa-solid fa-arrow-right-long fa-lg'></i></span>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    600: {
      items: 2,
      nav: false,
      dots: true,
    },
  },
});
