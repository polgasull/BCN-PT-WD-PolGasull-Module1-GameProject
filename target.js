$(document).ready(function() {

// target
var target = $(".target");
var targetLoad = (target).hide(0);
var posx = (Math.floor(Math.random() * ($(".board").width() )));
var posy = (Math.floor(Math.random() * ($(".board").height() )));

function Target() {
  this.position = 1;

  this.targetShow = setTimeout(function(){
   (target).show();
 }, 3000);
 this.targetHide = setTimeout(function() {
   (target).hide();
 }, 6000);
  this.dead = (target).click(function() {
    (target).css('background', 'yellow');
    (target).hide(2000);
  });
  this.randomTarget = function() {
    $(target).css({
      'position':'relative',
      'left':posx+'px',
      'top':posy+'px',
      'display':'inline-flex'
      }).fadeIn(1000).delay(1000).fadeOut(500, function(){
        $(this).remove();
      });
    }();
  }

  Target();


});
