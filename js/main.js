$(document).ready(function () {
  $(".sk-cube-grid").fadeOut(1000, function () {
    $(".lodain").slideUp(1000, function () {
      $("body").css("overflow", "auto");
      $(".loding").remove()
    });
  });
});

let sectionOffset = $("#about").offset().top;
$(window).scroll(function () {
  let windowScroll = $(window).scrollTop();
  if (windowScroll >= sectionOffset) {
    $(".navbar").css({ backgroundColor: "#fff", paddingTop: "1rem" });
    $(".navbar").addClass("fixed-top");
    $(".navbar-brand,.nav-link").css("color", "#000");
    $("head").append(
      "<style>.navbar-nav .nav-link::after{background:#000}</style>"
    );
    $("#myBtn").fadeIn();
  } else {
    $(".navbar").css({ backgroundColor: "transparent", paddingTop: "2rem" });
    $(".navbar").removeClass("fixed-top");
    $(".navbar-brand,.nav-link").css("color", "#fff");
    $("head").append(
      "<style>.navbar-nav .nav-link::after{background:#fff}</style>"
    );
    $("#myBtn").fadeOut();
  }
});
// $("a[href^='#']").click(function (e) {
//   let aHref = e.target.getAttribute("href");
//   let sectionOffset1 = $(aHref).offset().top;
//   $("html,body").animate(
//     { scrollTop: sectionOffset1 },
//     { duration: 2000, queue: false }
//   );
// });

$("#myBtn").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 2000);
});
$(".nav-link").click(function () {
  $(this).addClass("active");
  $(this).parent().siblings().find("a").removeClass("active");
  let aHref = $(this).attr("href");
  let sectionTop = $(aHref).offset().top;
  $("html,body").animate(
    { scrollTop: sectionTop },
    { duration: 2000, queue: false }
  );
});
$(".box").click(function () {
  let color = $(this).css("background-color");
  localStorage.setItem("Favcolor", color);
  $(":root").css("--main-color", color);
});
if (localStorage.getItem("Favcolor") != null) {
  $(":root").css("--main-color", localStorage.getItem("Favcolor"));
}
$(".bgBox img").click(function () {
  let bgImge = $(this).attr("src");
  $(".home").css(
    "background-image",
    ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImge})`
  );
  localStorage.setItem("bgscr", bgImge);
});
if (localStorage.getItem("bgscr") != null) {
  $(".home").css(
    "background-image",
    ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${localStorage.getItem(
      "bgscr"
    )})`
  );
}
$(".setting").click(function () {
  let width = $(".innerBox").outerWidth();
  let left = $(".sideBar").css("left");
  if (left == "0px") {
    $(".sideBar").animate({ left: `-${width}px` }, 2000);
  } else {
    $(".sideBar").animate({ left: `0px` }, 2000);
  }
});
var typed3 = new Typed('#typing', {
  strings: ["mohamed samy","web design","andorid"],
  typeSpeed: 50,
  backSpeed: 0,
  smartBackspace: true, // this is a default
  loop: true,
  backSpeed:50
});
new WOW().init();