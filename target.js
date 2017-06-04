$(document).ready(function() {

// target
var target = $(".target");
var targetLoad = (target).hide(0);


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
}

Target();





});
