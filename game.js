


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
      var targetType = Math.random() < 0.7;
      this.target = new Target(this.rows, this.columns, targetType);
    };

  Game.prototype.start = function() {
    var self = this;
    this.countdown = setInterval( function() {
      self.countDownTimer();
    }, 1000);
      this.generateTarget();

    setInterval( function(){
        myGame.clearTarget();
      }, 3000);
  };

  Game.prototype.drawTarget = function(){
    var selector = '[data-row=' + this.target.row + '][data-col=' + this.target.column + ']';
    $(selector).addClass('target');

    if (this.target.goodTarget){
      $(selector).addClass('terro');
    } else {
      $(selector).addClass('police');
    }

    this.killTarget();
  };

  Game.prototype.clearTarget = function() {
    $("div").unbind();
    this.removeAllTargets();
    this.generateTarget();
      this.drawTarget();
  };

  Game.prototype.killTarget = function() {
    var self = this;
    $('.target').on("click",function(){
      var targetTouched = self.target.isTouched();
        if (targetTouched) {
          $(".target").addClass("deadTarget");
          self.countPoints();
          $("div").unbind();
          setTimeout(function(){
            $(".deadTarget").removeClass("deadTarget");
            self.clearTarget();
            }, 2000);
        }
    });
  };

  Game.prototype.removeAllTargets = function() {
    $(".target").removeClass("target police terro");
  };

  Game.prototype.countPoints = function() {
    console.log(this.points);
    if (this.target.goodTarget) {
      $(".totalPoints span").text(this.points += 5);
    } else {
      $(".totalPoints span").text(this.points -= 5);
    }
  };

  Game.prototype.countDownTimer = function() {
      $(".displayTimer span").text(this.timer--);
      if (this.timer === 0) {
        alert("GAME OVER");
        clearInterval(this.countdown);
      }
  };

$(document).ready(function() {

  myGame = new Game({
    rows: 5,
    columns: 12,
  });

  myGame.start();

});

console.log("LINKED!!!");
