$(document).ready(function() {

  function Game(options) {
      this.rows    = options.rows;
      this.columns = options.columns;
      this.target   = {
        row: Math.floor(Math.random() * this.rows),
        column: Math.floor(Math.random() * this.columns)
    };

      for (var rowIndex = 0; rowIndex < options.rows; rowIndex++){
         for (var columnIndex = 0; columnIndex < options.columns; columnIndex++){
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
        $(selector).addClass('target');
      };

      Game.prototype.killTarget = function() {
        $(".target").click(function(){
          $(".target").hide();
      });
    };

var game = new Game({
  rows: 55,
  columns: 60,
});

game.generateTarget();
game.drawTarget();
game.killTarget();


});




console.log("LINKED!!!");
