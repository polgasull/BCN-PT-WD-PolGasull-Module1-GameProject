$(document).ready(function() {

  function Game(options) {
      this.rows    = options.rows;
      this.columns = options.columns;
      this.target = {
      row: Math.floor(Math.random() * this.rows),
      column: Math.floor(Math.random() * this.columns)
      };

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
      this.target = {
        row: Math.floor(Math.random() * this.rows),
        column: Math.floor(Math.random() * this.columns)
      };
    };

  Game.prototype.drawTarget = function(){
    var selector = '[data-row=' + this.target.row + '][data-col=' + this.target.column + ']';
    $(selector).addClass("target");
  };

  var game = new Game({
    rows: 50,
    columns: 52,
  });
  game.generateTarget();
  game.drawTarget();
  game.killTarget();

});

console.log("LINKED!!!");
