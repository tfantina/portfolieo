

function expandNavigation() {
  let headerWidth = document.getElementById("navStatus");
  let menuBar = document.getElementById("navigation");
  menuBar.className === "navigation" ? menuBar.className += " responsive" : menuBar.className = "navigation";
  headerWidth.className === "navStatus" ? headerWidth.className += "-open" : headerWidth.className = "navStatus";
}

$(function(){ horizon()} == $(document).ready());

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
    let slid = false;
    $(".slides").each(function(){
      let position = $(this).offset().top;

      var windowTop = $(window).scrollTop();
      const imgs = document.getElementsByTagName('img');
    
     const imgArr = [].slice.call(imgs)

      if(slid != true) {
      let img = imgArr.filter((img) => {
        const bounding = img.getBoundingClientRect();
        const boundingHeight = bounding.height / 2;
        if(bounding.top >= bounding.height - 25 &&(bounding.bottom - bounding.height + 25)  <= (window.innerHeight || document.documentElement.clientHeight)) {
          $(this).addClass("slide-in");
          $(this).removeClass("slide-in-up slide-out-up slide-out");
          return;
        }
      }
      )}
    
      if (position > windowTop + 100 && position < windowTop + 300) {
        $(this).addClass("slide-in")
        $(this).removeClass("slide-in-up slide-out-up slide-out");
        return
      } else if(position > windowTop - 100 && position < windowTop - 300) {
        $(this).addClass("slide-out");
        $(this).removeClass("slide-in-up slide-out-up slide-in");
      }
      img = [];
    })

    // $(".slides").each(function(){
    //   let position = $(this).offset().top;

    //   var windowTop = $(window).scrollTop();

    //   if (position > windowTop - 100 && position < windowTop - 300) {
    //     $(this).addClass("slide-out")
    //     $(this).removeClass("slide-in-up slide-out-up slide-in");
    //     return

    //   }
    // })
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


  window.addEventListener('load', () => {
    const year = new Date().getFullYear();
     document.getElementById("current-year").innerHTML = "&nbsp;" + year;
  })