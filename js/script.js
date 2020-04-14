$(function () {

// wow js
  new WOW().init();


// region header

// header scroll
  window.onscroll = function (ev) {
    let B = document.body; //IE 'quirks'
    let D = document.documentElement; //IE with doctype
    let header = document.querySelector(".header ");
    D = (D.clientHeight) ? D : B;
    if (D.scrollTop > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
      
    }
    
    
  };
  
  
  let tap = document.querySelectorAll("li.tap");
  let responsiveMenu = document.querySelector("ul.taps");
  let smallMenu = document.querySelector(".menu-small-screen");
  
  for (let i = 0; i < tap.length; i++) {
    tap[i].onclick = function () {
      if (tap[i].classList.contains("active")) {
        tap[i].classList.remove("active");
        if (window.innerWidth >= 767) {
          closeMenu();
        }
      } else {
        for (let i = 0; i < tap.length; i++) {
          
          tap[i].classList.remove("active");
        }
        tap[i].classList.add("active");
        openMenu();
      }
    };
    
  }
  
  
  function openMenu() {
    responsiveMenu.classList.add("active");
    smallMenu.classList.add("opened");
  }
  
  function closeMenu() {
    responsiveMenu.classList.remove("active");
    smallMenu.classList.remove("opened");
    for (let i = 0; i < tap.length; i++) {
      tap[i].classList.remove("active");
    }
  }
  
  
  smallMenu.querySelector(".open-menu").onclick = openMenu;
  smallMenu.querySelector(".close-menu").onclick = closeMenu;
  
  
  $(".e").click(function (e) {
    e.preventDefault();
    $("html , body").animate({
      
      scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
    }, 1000);
    
  });
  
  
  $(window).scroll(function () {
    $(".block").each(function () {
      
      
      if ($(window).scrollTop() > $(this).offset().top) {
        let blockId = $(this).attr("id");
        
        $(".text , .scroll-x").removeClass("active");
        $("li a[data-scroll=\"" + blockId + "\"] , .scroll-x[data-scroll=\"" + blockId + "\"]")
          .addClass("active");
      }
      
    });
    
  });


// endregion header


});



