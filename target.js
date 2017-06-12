function Target(gameRows, gameColumns, targetRole) {

  this.row = Math.floor(Math.random() * gameRows);
  this.column = Math.floor(Math.random() * gameColumns);
  this.touched = false;
  this.targetToKill = targetRole;

}

Target.prototype.isTouched = function() {
  if (this.touched) {
    return ;
  } else {
    return true;
  }
};
