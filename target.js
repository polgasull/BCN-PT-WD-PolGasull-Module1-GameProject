
function Target(target, deadColor) {

  this.receiveDamage = $(target).click(function() {
    $(target).css("background", deadColor);
    $(target).hide("");

});
}
