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

  const clearbtn = document.querySelector(".task-clearBtn");
  var list = document.querySelector("#list");
  var itemsArray = list.childNodes;

  list.addEventListener("click", function(e) {
    if (e.target.classList.contains("task-clearBtn")) {
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      // removeTaskFromLS(e.target.parentElement.parentElement);
    }
    e.preventDefault();
  });

  //   slip
  new Slip(list);

  list.addEventListener("slip:beforeswipe", function(e) {
    if (shouldNotSwipe(e.target)) {
      e.preventDefault(); // won't move sideways if prevented
    }
  });

  list.addEventListener("slip:swipe", function(e) {
    e.target.parentNode.removeChild(e.target);
    e.preventDefault();
  });

  list.addEventListener("slip:beforereorder", function(e) {
    var movedItem = itemsArray[event.detail.originalIndex];
    itemsArray.splice(event.detail.originalIndex, 1); // Remove item from the previous position
    itemsArray.splice(event.detail.spliceIndex, 0, movedItem); // Insert item in the new position

    e.preventDefault();
  });

  list.addEventListener("slip:beforewait", function(e) {
    if (isScrollingKnob(e.target)) {
      // if prevented element will be dragged (instead of page scrolling)
      e.preventDefault();
    }
  });

  list.addEventListener("slip:reorder", function(e) {
    // e.target list item reordered.
    e.target.parentNode.insertBefore(e.target, e.detail.insertBefore);
    // element will fly back to original position
    e.preventDefault();
  });

  //   end
});
