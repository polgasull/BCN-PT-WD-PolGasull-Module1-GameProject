function Target(gameRows, gameColumns) {

  this.row = Math.floor(Math.random() * gameRows);
  this.column = Math.floor(Math.random() * gameColumns);
  this.touched = false;

}

Target.prototype.isTouched = function() {
  if (this.touched) {
    return ;
  } else {
    return true;
  }
};
