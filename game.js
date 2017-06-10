


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
    var self = this;
    var countdown = setInterval( function() {
      self.countDown();
    }, 1000);
    this.generateTarget();
  };

  Game.prototype.drawTarget = function(){
    var selector = '[data-row=' + this.target.row + '][data-col=' + this.target.column + ']';
    $(selector).addClass('target');
    this.killTarget();
  };

  Game.prototype.clearTarget = function() {
    // $(".target").removeClass("target");
    this.removeAllTargets();
    this.generateTarget();
    this.drawTarget();
  };

  Game.prototype.killTarget = function() {
    var self = this;
    $('.target').on("click",function(){
      console.log("entra ");
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
    console.log(this.points);
    $(".totalPoints span").text(this.points += 5);
  };

  Game.prototype.countDown = function() {
      $(".displayTimer span").text(this.timer--);
    //  console.log(this.timer);
      if (this.timer === 0) {
        alert("GAME OVER");
        clearInterval(countdown);
      }
  };

$(document).ready(function() {

  myGame = new Game({
    rows: 5,
    columns: 12,
  });

  myGame.start();

  setInterval( function(){
    myGame.clearTarget();
  }, 3000);

});

console.log("LINKED!!!");
