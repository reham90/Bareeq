$(window).on('load', function() {
  $(".preloader").fadeOut();

});
$(document).ready(function() {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function(e) {
      e.preventDefault();
      $('.menu-bars .bar').toggleClass('hide-icon');
      $('.menu-bars .times').toggleClass('hide-icon');
      $(".navgition").toggleClass("reset-left");
     
      $(".dropdown").toggleClass("showing-language");
      $("body").toggleClass("overflow");
      $("html").toggleClass("overflow");

  });
  $(".close-btn").click(function() {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
      $("html").removeClass("overflow");
  });

  

  
  };

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 112) {
          $stickyNav.addClass("fixed-nav", 500);
      } else {
          $stickyNav.removeClass("fixed-nav", 500);
      }
      if (scroll == 0) {
          $stickyNav.removeClass("fixed-nav", 500);
      }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
      lastScroll = scroll;
      if (scroll == 0) {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
  });

   //////////////////////////// before-after-slider /////////////////////////////////
   const slider = document.getElementById('before-after-slider');
   const before = document.getElementById('before-image');
   const beforeImage = before.getElementsByTagName('img')[0];
   const resizer = document.getElementById('resizer');
   
   let active = false;
   
   //Sort overflow out for Overlay Image
   document.addEventListener("DOMContentLoaded", function() {
     let width = slider.offsetWidth;
     console.log(width);
     beforeImage.style.width = width + 'px';
   });
   
   //Adjust width of image on resize 
   window.addEventListener('resize', function() {
     let width = slider.offsetWidth;
     console.log(width);
     beforeImage.style.width = width + 'px';
   })
   
   resizer.addEventListener('mousedown',function(){
     active = true;
    resizer.classList.add('resize');
   
   });
   
   document.body.addEventListener('mouseup',function(){
     active = false;
    resizer.classList.remove('resize');
   });
   
   document.body.addEventListener('mouseleave', function() {
     active = false;
     resizer.classList.remove('resize');
   });
   
   document.body.addEventListener('mousemove',function(e){
     if (!active) return;
     let x = e.pageX;
     x -= slider.getBoundingClientRect().left;
     slideIt(x);
     pauseEvent(e);
   });
   
   resizer.addEventListener('touchstart',function(){
     active = true;
     resizer.classList.add('resize');
   });
   
   document.body.addEventListener('touchend',function(){
     active = false;
     resizer.classList.remove('resize');
   });
   
   document.body.addEventListener('touchcancel',function(){
     active = false;
     resizer.classList.remove('resize');
   });
   
   //calculation for dragging on touch devices
   document.body.addEventListener('touchmove',function(e){
     if (!active) return;
     let x;
     
     let i;
     for (i=0; i < e.changedTouches.length; i++) {
     x = e.changedTouches[i].pageX; 
     }
     
     x -= slider.getBoundingClientRect().left;
     slideIt(x);
     pauseEvent(e);
   });
   
   function slideIt(x){
       let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
       before.style.width = transform+"px";
       resizer.style.left = transform-0+"px";
   }
   
   //stop divs being selected.
   function pauseEvent(e){
       if(e.stopPropagation) e.stopPropagation();
       if(e.preventDefault) e.preventDefault();
       e.cancelBubble=true;
       e.returnValue=false;
       return false;
   }
   
   





  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function() {
      $("html,body").animate({
              scrollTop: 0,
          }
         
      );
  });
  $(this).scrollTop() >= 500 ?
      $(".arrow-top").fadeIn(300) :
      $(".arrow-top").fadeOut(300);

  $(window).scroll(function() {
      $(this).scrollTop() >= 500 ?
          $(".arrow-top").fadeIn(300) :
          $(".arrow-top").fadeOut(300);
  })



});