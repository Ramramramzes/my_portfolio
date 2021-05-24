gsap.timeline()
.from(".hero__title, .hero__btn", {opacity:0, y:50, duration:1})
.fromTo(".hero__descr", {opacity: 0}, {opacity: 1, duration: 1.5},1.1)
.fromTo(".photos-wrap__first", {opacity:0, scale: 0.8}, {opacity: 1, duration: 0.5, scale: 1},1.1)
.fromTo(".photos-wrap__second", {opacity:0, scale: 0.8}, {opacity: 1, duration: 0.3, scale: 1},1.5)
.fromTo(".photos-wrap__third", {opacity:0, scale: 0.8}, {opacity: 1, duration: 0.3, scale: 1},1.8)

var menu = document.querySelector(".menu");
var burger = document.querySelector(".burger");
var close = document.querySelector(".close");

var tl = gsap.timeline({paused: true});


  tl.fromTo(".menu", {display:'none',opacity: 0, y: 300}, {display:'block', opacity: 1, duration:.3, y: 0})
            .fromTo(".menu__top", {opacity: 0,y: -15}, {opacity: 1, duration: .3, y: 0})
            .fromTo(".menu__container", {opacity: 0,y: 15}, {opacity: 1, duration: .2, y: 0})
            .fromTo(".nav__list", {opacity: 0,y: 100}, {opacity: 1, duration: .4, y: 0})
            .fromTo(".social, .sub-menu", {opacity: 0,y: 100}, {opacity: 1, duration: .4, y: 0})


burger.onclick = function(){
  if(this.classList.contains('burger')){
    tl.play();
  }else{
    tl.reverse()
  }
}
close.onclick = function(){
  if(this.classList.contains('close')){
    tl.reverse()
  }else{
    tl.play();
  }
}