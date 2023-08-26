// ==========================Image Slider Code=================
var currentImg = 0;
var imgs = document.querySelectorAll(".slider img");
let dots = document.querySelectorAll(".dot");
var interval = 3000;

var timer = setInterval(changeSlide, interval);

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(" active", "");
  }

  currentImg = (currentImg + 1) % imgs.length;

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += " active";
}

// =========================== NaviGation Pop =========================
function clickme() {
  var x = document.getElementById("SlideDivMain");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// =========================== min width NaviGation Pop =========================

function clickMenu() {
  var x = document.getElementById("SlideDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// =========================== Login Page Pop =========================

function clickFunction() {
  var x = document.getElementById("login");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// =========================== Close Login Page Pop =========================

function cross() {
  var x = document.getElementById("login");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// ===========================  Login Page Function =========================
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("login");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function cityFunction() {
  var x = document.getElementById("city").value;
  document.getElementById("onlineCity").innerHTML = x;
}
// ================================Plant Show And hidden

// plant

function plantShow() {
  const x = document.getElementById("plant_main");
  if (x.style.opacity == 0) {
    x.style.opacity = 1;
  }
}
function plantOff() {
  const x = document.getElementById("plant_main");
  if (x.style.opacity == 1) {
    x.style.opacity = 0;
  }
}

// Vegi
function vegiShow() {
  const x = document.getElementById("plant_vegi");
  if (x.style.opacity == 0) {
    x.style.opacity = 1;
  }
}
function vegiOff() {
  const x = document.getElementById("plant_vegi");
  if (x.style.opacity == 1) {
    x.style.opacity = 0;
  }
}

// flower
function flowerShow() {
  const x = document.getElementById("plant_flower");
  if (x.style.opacity == 0) {
    x.style.opacity = 1;
  }
}
function flowerOff() {
  const x = document.getElementById("plant_flower");
  if (x.style.opacity == 1) {
    x.style.opacity = 0;
  }
}
// AirPurify
function airShow() {
  const x = document.getElementById("plant_air");
  if (x.style.opacity == 0) {
    x.style.opacity = 1;
  }
}
function airOff() {
  const x = document.getElementById("plant_air");
  if (x.style.opacity == 1) {
    x.style.opacity = 0;
  }
}
// indoor
function indoorShow() {
  const x = document.getElementById("plant_indoor");
  if (x.style.opacity == 0) {
    x.style.opacity = 1;
  }
}
function indoorOff() {
  const x = document.getElementById("plant_indoor");
  if (x.style.opacity == 1) {
    x.style.opacity = 0;
  }
}
// Ayurvedic
function ayuShow() {
  const x = document.getElementById("plant_ayu");
  if (x.style.opacity == 0) {
    x.style.opacity = 1;
  }
}
function ayuOff() {
  const x = document.getElementById("plant_ayu");
  if (x.style.opacity == 1) {
    x.style.opacity = 0;
  }
}

// ========================Like Click event3==================
// function heartClick() {
//   const x = document.getElementById("heart");
//   if (x.style.opacity == 0) {
//     x.style.opacity = 1;
//   } else x.style.opacity = 0;
// }
