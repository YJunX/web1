$(window).on('load', function() {
    $("body").addClass("loaded");
  })

  $(".home-hero__buttons > .button").on("mouseenter", function() {
    gsap.to( $(this).attr("data-target"), {
      autoAlpha: 1
    });
  });
  
  $(".home-hero__buttons > .button").on("mouseleave", function() {
    gsap.to(".home-hero__button-img", {
      autoAlpha: 0
    });
  });