$(document).ready(function () {
  $(".menu-more").click(function () {
    $(".menu-more-content").addClass("show");
  });
  $(".menu-more-close").click(function () {
    $(".menu-more-content").removeClass("show");
  });
  // ----------match detail
  var swiper_match_nav = new Swiper(".match-nav-slider", {
    spaceBetween: 0,
    slidesPerView: "auto",
    freeMode: false,
    watchSlidesProgress: false,
  });
  var swiper_match_content = new Swiper(".match-content-slider", {
    autoHeight: true,
    spaceBetween: 0,
    navigation: false,
    thumbs: {
      swiper: swiper_match_nav,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
  // calendar show
  $(".calendar-btn").click(function () {
    $(".calendar-wrap").addClass("show");
  });
  $(".calendar-wrap").click(function (e) {
    if (!$(e.target).closest(".calendar").length) {
      $(this).removeClass("show");
    }
  });
});
