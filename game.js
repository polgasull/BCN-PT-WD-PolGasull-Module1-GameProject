
  function Game(options) {
      this.rows    = options.rows;
      this.columns = options.columns;
      this.target = new Target(options.rows, options.columns);
      this.points = 0;
      this.timer = 60;

  for (var rowIndex = 0; rowIndex < this.rows; rowIndex++){
     for (var columnIndex = 0; columnIndex < this.columns; columnIndex++){
       $('.container').append($('<div>')
         .addClass('cell board')
         .attr('data-row', rowIndex)
         .attr('data-col', columnIndex)
       );
     }
   }
  }

  Game.prototype.generateTarget = function() {
      this.target = new Target(this.rows, this.columns);
    };

  Game.prototype.start = function() {
    this.generateTarget();
  };

  Game.prototype.drawTarget = function(){
    var selector = '[data-row=' + this.target.row + '][data-col=' + this.target.column + ']';
    $(selector).addClass('target');
    this.killTarget();
  };

  Game.prototype.clearTarget = function() {
    var self = this;
    // $(".target").removeClass("target");
      this.removeAllTargets();
      self.generateTarget();
      self.drawTarget();
  };

  Game.prototype.killTarget = function() {
    var self = this;
    $(".target").click(function() {
      var isTouched = self.target.isTouched();
      if(isTouched) {
        self.clearTarget();
        self.countPoints();
      }
      });
  };

  Game.prototype.removeAllTargets = function() {
    $(".target").removeClass("target");
  };

  Game.prototype.countPoints = function() {
    $(".totalPoints span").text(this.points += 5);
  };

  Game.prototype.countDown = function() {
      $(".displayTimer span").text(this.timer--);
      console.log(this.timer);
      if (this.timer === 0) {
        alert("GAME OVER");
        clearInterval();
      }
  };

$(document).ready(function() {

  var myGame = new Game({
    rows: 5,
    columns: 12,
  });

  setInterval( function() {
  myGame.countDown();
  }, 1000);

  setInterval( function(){
    myGame.drawTarget();
  }, 3000);

});

console.log("LINKED!!!");
