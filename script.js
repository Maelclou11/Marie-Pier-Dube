/*#region     Toggle Menu + fade */
function toggleMenu() {
    const hamburgerMenu = document.querySelector('.hamburgerMenu');
    const sideMenu = document.querySelector('.sideMenu');
    const links = document.querySelectorAll('.sideMenu li');
    hamburgerMenu.classList.toggle('clicked');
    sideMenu.classList.toggle('clicked');

    links.forEach((link) => {
        link.classList.toggle('fade');
    })
    
 }
/* #endregion */
/*#region     Menu Stay Active */
const ListItems = document.querySelectorAll("#navbar li");

for (var i = 0; i < ListItems.length; i++) {
  ListItems[i].addEventListener("click", function () {
    var currentActive = document.querySelector(
      "#navbar li[data-attr='active']"
    );
    if (currentActive) {
      currentActive.setAttribute("data-attr", "");
    }
    this.setAttribute("data-attr", "active");
  });
}
/* #endregion */
/*#region     Loading */
/* var hasLoadedOnce = true;

$(window).on("load", function () {
  if (hasLoadedOnce) {
    setTimeout(() => {
      $(".loadingScreen").fadeOut(1500);
      hasLoadedOnce = false;
    }, 500);
  }
  else {
    $(".loadingScreen").fadeOut(1500);
  }
}); */
/* let firstRun = localStorage.getItem('firstRun') || true;

$(window).on("load", function () {
  if (firstRun) {
    localStorage.setItem('firstRun', false);
    setTimeout(() => {
      $(".loadingScreen").fadeOut(1500);
    }, 500);
  } else {
    $(".loadingScreen").fadeOut(1500);
  }
}); */

/* if(typeof(Storage) !== "undefined") {
  let firstRun = localStorage.getItem('firstRun') === 'false' ? false : true;
  $(window).on("load", function () {
      if (firstRun) {
          localStorage.setItem('firstRun', false);
          setTimeout(() => {
              $(".loadingScreen").fadeOut(1500);
          }, 500);
      } else {
          $(".loadingScreen").fadeOut(1500);
      }
  });
  window.addEventListener('beforeunload', function (e) {
      localStorage.removeItem('firstRun');
  });
} else {
 console.log("Sorry, your browser does not support Web Storage...");
} */


let getCookie = function (name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

let firstRun = getCookie('firstRun') === 'false' ? false : true;

/* if (firstRun) {
  document.cookie = "firstRun=false; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  setTimeout(() => {
      $(".loadingScreen").fadeOut(1500);
  }, 500);
} else {
  $(".loadingScreen").fadeOut(1500);
} */
const loadingScreen = document.querySelector(".loadingScreen");
window.addEventListener("load", function() {
  setTimeout(function() {
    loadingScreen.style.transition = "opacity var(--animation-duration) ease";
    loadingScreen.style.opacity = 0;
  }, 0);
  loadingScreen.addEventListener("transitionend", function() {
    loadingScreen.classList.add("hidden");
  });
});



let duration = 3000; // default duration
let startTime = window.performance.timing.navigationStart;
let endTime = window.performance.timing.loadEventEnd;
let loadTime = endTime - startTime;

if(loadTime > 2000){
  duration = loadTime;
}

document.documentElement.style.setProperty('--animation-duration', `${duration/4000}s`);
/* #endregion */


/*#region     Reveal  */
ScrollReveal({
  reset: false,
  distance: '60px',

  duration: 2000,
  delay: 400
})

/*#region     Reveal Page Index  */
// Reveal Menu
ScrollReveal().reveal('.navbar ', { delay: 300, origin: 'top'});
ScrollReveal().reveal('.navbar li', { delay: 0, origin: 'top', interval: 300});

// Reveal Accueil
ScrollReveal().reveal('.home__container--title', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.home__container--para', { delay: 800, origin: 'right' });
ScrollReveal().reveal('.home__container--boutons a', { delay: 1000, origin: 'right', interval: 300});

// Reveal A Propos
ScrollReveal().reveal('.about__imgBox', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about__textBox', { delay: 500, origin: 'right', interval: 200});

// Reveal Visite
ScrollReveal().reveal('.visite__content .textBox', { delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.visite__content .textBox a', { delay: 1000, distance: 0, opacity: 1, scale: 0.7});

// Reveal Info
ScrollReveal().reveal('.plusinfo__content .imgBox', { delay: 800, origin: 'left'});
ScrollReveal().reveal('.plusinfo__content .textBox', { delay: 800, origin: 'right'});
/*#endregion  */




/* #endregion */