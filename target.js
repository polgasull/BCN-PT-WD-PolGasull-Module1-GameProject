function Target(gameRows, gameColumns, goodTarget) {

  this.row = Math.floor(Math.random() * gameRows);
  this.column = Math.floor(Math.random() * gameColumns);
  this.touched = false;
  this.goodTarget = goodTarget;

}

Target.prototype.isTouched = function() {
  if (this.touched) {
    return ;
  } else {
    return true;
  }
};
