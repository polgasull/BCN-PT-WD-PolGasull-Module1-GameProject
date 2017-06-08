
  function Game(options) {
      this.rows    = options.rows;
      this.columns = options.columns;
      this.target = new Target(options.rows, options.columns);
      this.points = 0;

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
  };

  Game.prototype.clearTarget = function() {
    var self = this;
    $(".target").click(function() {
      $(".target").removeClass("target");
      self.generateTarget();
      self.drawTarget();
      self.clearTarget();
    });
  };

  Game.prototype.removeAllTargets = function() {
    $(".target").removeClass("target");
  };

  Game.prototype.count = function() {
    $(".target").click(function() {
      console.log(this.points + 1);
    });
  };

$(document).ready(function() {

  var myGame = new Game({
    rows: 50,
    columns: 52,
  });

  setInterval( function(){
    myGame.generateTarget();
    myGame.removeAllTargets();
    myGame.drawTarget();
    myGame.clearTarget();
  }, 3000);

    myGame.count();

});

console.log("LINKED!!!");
