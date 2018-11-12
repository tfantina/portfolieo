

function expandNavigation() {
  let headerWidth = document.getElementById("navStatus");
  let menuBar = document.getElementById("navigation");
  menuBar.className === "navigation" ? menuBar.className += " responsive" : menuBar.className = "navigation";
  headerWidth.className === "navStatus" ? headerWidth.className += "-open" : headerWidth.className = "navStatus";
}

window.load = horizon();

function horizon() {

  if(window.location.hash == "#projects") {
    document.getElementById("projects").style.overflow = "scroll";

  } else {
    document.getElementById("projects").style.overflow = "hidden";

  }
}

$(document).ready(function(){
  $('a').on('click', function(event){
    if(this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top }, 1000, function() {
          window.location.hash = hash;
        });

      }
    });
  });

  let lastScroll = 0;
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position > lastScroll) {
      scrollDown();
      lastScroll = position;
    } else {
      scrollUp();
      lastScroll = position;
    }
  });


  function scrollDown() {

    $(".slides").each(function(){
      let position = $(this).offset().top;

      var windowTop = $(window).scrollTop();

      if (position > windowTop + 550 && position < windowTop + 650) {
        $(this).addClass("slide-in")
        $(this).removeClass("slide-in-up slide-out-up slide-out");
        return
      }
    })

    $(".slides").each(function(){
      let position = $(this).offset().top;

      var windowTop = $(window).scrollTop();

      if (position > windowTop - 250 && position < windowTop - 150) {
        $(this).addClass("slide-out")
        $(this).removeClass("slide-in-up slide-out-up slide-in");
        return

      }
    })
  }





  function scrollUp() {

    $(".slides").each(function(){
      let position = $(this).offset().top;

      var windowTop = $(window).scrollTop();

      if (position < windowTop + 500 && position > windowTop - 500) {

        $(this).addClass("slide-in-up")
        $(this).removeClass("slide-in slide-out-up slide-out")

      }
    })

    $(".slides").each(function(){
      let position = $(this).offset().top;

      var windowTop = $(window).scrollTop();

      if (position > windowTop + 500  && position < windowTop + 700) {

        $(this).addClass("slide-out-up")
        $(this).removeClass("slide-in-up slide-in slide-out");

      }
    })
  }
