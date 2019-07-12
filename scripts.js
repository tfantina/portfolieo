function expandNavigation() {
  let headerWidth = document.getElementById("navStatus");
  let menuBar = document.getElementById("navigation");
  menuBar.className === "navigation"
    ? (menuBar.className += " responsive")
    : (menuBar.className = "navigation");
  headerWidth.className === "navStatus"
    ? (headerWidth.className += "-open")
    : (headerWidth.className = "navStatus");
}

$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

let lastScroll = 0;
$(window).scroll(function() {
  let position = $(this).scrollTop();
  if (position > lastScroll) {
    scrollDown();
    lastScroll = position;
  } else {
    scrollUp();
    lastScroll = position;
  }
});

function scrollDown() {
  const imgs = document.getElementsByClassName("slides");

  const imgArr = [].slice.call(imgs);
  const images = imgArr.map(img => {
    const bounding = img.getBoundingClientRect();

    const currentTop = bounding.bottom - bounding.height + window.innerHeight;
    //returns visable = false if the element is out of view otherwise it will be visible
    if (bounding.y > window.innerHeight || currentTop <= 0) {
      return { image: img, visible: false };
    } else {
      return { image: img, visible: true };
    }
  });

  for (i = 0; i <= images.length; i++) {
    const bounding = images[i].image.getBoundingClientRect();

    const currentBottom =
      bounding.bottom - window.innerHeight - bounding.height;

    if (currentBottom <= -100 && bounding.top > -100) {
      !images[i].image.className.includes("slide-in")
        ? (images[i].image.className = images[i].image.className + " slide-in")
        : "";

      // img[i].classList.remove("slide-in-up slide-out-up slide-out " );
    }
    if (bounding.top <= -100) {
      !images[i].image.className.includes("slide-out")
        ? (images[i].image.className = images[i].image.className + " slide-out")
        : "";
      images[i].image.classList.remove("slide-in");
      //img[i].classList.remove("slide-in-up slide-out-up slide-in");
    }
    console.log(images[i].image.innerHTML);
    console.log(images);
    if (images[i].visible === false) {
      images[i].image.classList.remove(
        "slide-in-up&nbsp;slide-out-up&nbsp;slide-out&nbsp;slide-in"
      );
    }
  }
}

function scrollUp() {
  const imgs = document.getElementsByClassName("slides");

  const imgArr = [].slice.call(imgs);
  const images = imgArr.map(img => {
    const bounding = img.getBoundingClientRect();

    const currentTop = bounding.bottom - bounding.height + window.innerHeight;
    //returns visable = false if the element is out of view otherwise it will be visible
    if (bounding.y > window.innerHeight || currentTop <= 0) {
      return { image: img, visible: false };
    } else {
      return { image: img, visible: true };
    }
  });
  const img = images.filter(img => {
    if (img.visible === true) {
      return img;
    }
  });

  for (i = 0; i <= img.length; i++) {
    console.log(img);
    const bounding = img[i]["image"].getBoundingClientRect();
    console.log(bounding);
    const currentBottom =
      bounding.bottom - window.innerHeight - bounding.height;

    if (currentBottom <= -100 && bounding.top > -100) {
      !img[i].image.className.includes("slide-in-up")
        ? (img[i].image.className = img[i].image.className + " slide-in-up")
        : "";
    }
    if (currentBottom >= -100) {
      !img[i].image.className.includes("slide-out-up")
        ? (img[i].image.className = img[i].image.className + " slide-out-up")
        : "";
      images[i].image.classList.remove("slide-in-up");
    }
    if (images[i].visible === false) {
      images[i].image.classList.remove(
        "slide-in-up&nbsp;slide-out-up&nbsp;slide-out&nbsp;slide-in"
      );
    }
  }
}

window.addEventListener("load", () => {
  const year = new Date().getFullYear();
  document.getElementById("current-year").innerHTML = "&nbsp;" + year;
});
