window.addEventListener("load", function() {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    scrollLock: true,
    dragVelocity: 2,
    draggable: true
    //   dots: ".dots"
    // arrows: {
    //   prev: '.glider-prev',
    //   next: '.glider-next'
    // }
  });
});
