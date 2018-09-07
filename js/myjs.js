$(document).ready(function(){

  // this has the scrolling text at the top of the hero image
  var typed = new Typed('.element', {
    strings: ["Marketing Needs. ^1000", "Web And Design Needs. ^1000"],
    typeSpeed: 30,
    loop: true,
    loopCount: 5,
    backSpeed: 20,
    showCursor: false,
    cursorChar: "|",
  });


//new scene
var controller = new ScrollMagic.Controller();

// Scene Animation
var fadeSection = new ScrollMagic.Scene({
  triggerElement: '.about_jcs',
  triggerHook: 1,
  offset: 400,
  reverse: false
})
.setClassToggle('.about_jcs','fadeInUp')
.addTo(controller);

//parallax scene
var ParallaxScene = new ScrollMagic.Scene({
  triggerElement: '.what_we_have_done',
  triggerHook: 1,
  duration: '150%'
})
.setTween(TweenMax.from('.done', 1, {y: '-30%', ease:Power0.easeNone}))
.addTo(controller);



//this scene counts to 3
var Cont={val:0} , NewVal = 3 ;

var Tween1 = TweenLite.to(Cont,3,{val:NewVal,roundProps:"val",onUpdate:function(){
  document.getElementById("counter1").innerHTML=Cont.val
}});

var scene1 = new ScrollMagic.Scene({
 triggerElement: '.we_number',
 triggerHook: 1,
 reverse: false,
})
.setTween(Tween1)
.addTo(controller);



// this scene counts to 6
var Counter={val:0} , NewValue = 6 ;
var Tween2 = TweenLite.to(Counter,3,{val:NewValue,roundProps:"val",onUpdate:function(){
  document.getElementById("counter2").innerHTML=Counter.val
}});

var scene1 = new ScrollMagic.Scene({
 triggerElement: '.we_number',
 triggerHook: 1,
 reverse: false,
})
.setTween(Tween2)
.addTo(controller);



//this adds a comma or decimal to scene 4
Number.prototype.numberFormat = function(decimals, dec_point, thousands_sep) {
    dec_point = typeof dec_point !== 'undefined' ? dec_point : '.';
    thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : ',';

    var parts = this.toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);

    return parts.join(dec_point);
}
var counter = { var: 0 };
var tal = document.getElementById("counter");
 var Tween = TweenMax.to(counter, 5, {
      var: 20000,
      onUpdate: function () {
          var nwc = counter.var.numberFormat(0);
          tal.innerHTML = nwc;
      },
      ease:Circ.easeOut
  });
// this scene is the numbers to scroll to 20000
var scene4 = new ScrollMagic.Scene({
  triggerElement: '.we_number',
  triggerHook: 1,
  reverse: false,
})
.setTween(Tween)
.addTo(controller);




//Scene 5 fades in left for the services section
var fadeInLeft = new ScrollMagic.Scene({
  triggerElement: '.services',
  triggerHook: 1,
  offset: 400,
  reverse: false
})
.setClassToggle('.services','fadeInLeft')
.addTo(controller);

//hamburger navbar

function resizeNav() {
    $(".menu").css({"height": window.innerHeight});
    var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
    var diameter = radius * 2;
    $(".nav-layer").width(diameter);
    $(".nav-layer").height(diameter);
    $(".nav-layer").css({"margin-top": -radius, "margin-left": -radius});
}
$(".nav-toggle").click(function() {
    $(".nav-toggle, .nav-layer, .menu").toggleClass("open");
});
$(window).resize(resizeNav);
resizeNav();


});
