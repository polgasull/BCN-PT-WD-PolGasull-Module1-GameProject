function Target(gameRows, gameColumns, targetRole) {

  this.row = Math.floor(Math.random() * gameRows);
  this.column = Math.floor(Math.random() * gameColumns);
  this.killed = false;
  this.targetToKill = targetRole;

}

Target.prototype.isKilled = function() {
  if (this.killed) {
    return ;
  } else {
    return true;
  }
};
