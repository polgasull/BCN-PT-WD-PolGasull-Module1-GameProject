function Game(options) {
      this.rows    = options.rows;
      this.columns = options.columns;
      this.target = new Target(options.rows, options.columns);
      this.points = 0;
      this.timer = 60;
      this.bullets = 5;

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

Game.prototype.start = function() {
  var self = this;
  new buzz.sound("music/CoD- Modern Warfare 2 Soundtrack - Boneyard Intro.mp3").play();
  this.countdown = setInterval( function() {
    self.countDownTimer();
  }, 1000);
  this.generateTarget();
  this.drawBullets();
  this.shoot();

  this.autorun = setInterval( function(){
      self.autoCreateTarget();
  }, 1500);
};

Game.prototype.countDownTimer = function() {
    $(".displayTimer span").text(this.timer--);
    if (this.timer === -1) {
      $( ".container" ).append( "<p>GAME OVER</p>" );
      clearInterval(this.countdown);
      this.removeAllTargets();
      clearInterval(this.autorun);
    }
};

Game.prototype.generateTarget = function() {
  var targetType = Math.random() < 0.8;
  this.target = new Target(this.rows, this.columns, targetType);
};

Game.prototype.drawBullets = function() {
  for (var bulletIndex = 0; bulletIndex < this.bullets; bulletIndex++){
    $(".bulletBox").append($('<div>')
                   .addClass('bullets')
    );
  }
};

Game.prototype.drawTarget = function(){
  var selector = '[data-row=' + this.target.row + '][data-col=' + this.target.column + ']';
  $(selector).addClass('target');

      if (this.target.targetToKill){
        if (this.target.row === 0 && this.target.column === 3){
          $(selector).addClass('knife');
        }
        else {
          $(selector).addClass('terro');
        }
      } else {
        $(selector).addClass('pollo');
      }
};

Game.prototype.autoCreateTarget = function() {
  this.removeAllTargets();
  this.generateTarget();
  this.drawTarget();
};

Game.prototype.shoot = function() {
  var self = this;
  $(".container").on("click", function(e) {
    if (self.bullets !== 0) {
      self.bullets = self.bullets - 1;
      new buzz.sound("music/New AWP sound effect (No Bolt).mp3").play();
      $(".bulletBox").empty();
      self.drawBullets();
        if ($(e.target).hasClass("target")) {
          self.killTarget();
        }
      } else {
        new buzz.sound("music/outOfAmmo.wav").setVolume(100).play();
        console.log('I NEED TO RELOAD!!!');
      }
  });
};

Game.prototype.killTarget = function() {
  var self = this;
    clearInterval(self.autorun);
    var targetKill = self.target.isKilled();
    if (targetKill) {
      $(".target").off();
      $(".target").addClass("deadTarget");
      self.countPoints();
      self.autorun = setInterval( function(){
          self.autoCreateTarget();
        }, 1500);
      setTimeout(function(){
        self.removeAllTargets();
      }, 1500);
    }
};

Game.prototype.removeAllTargets = function() {
  $(".cell").removeClass("target pollo terro knife deadTarget");
};

Game.prototype.removeBullet = function() {
    $(".bullets").removeClass("bullets");
};

Game.prototype.countPoints = function() {
  var self = this;
  console.log(this.points);
  if (this.target.targetToKill) {
    $(".totalPoints span:nth-child(2)").text("+5").css({"font-size": "25px","color": "green"}).show("").delay(1000).fadeOut();
    setTimeout(function(){
    $(".totalPoints span:nth-child(1)").text(self.points += 5);
  }, 1500);
  } else {
    $(".totalPoints span:nth-child(2)").text("-5").css({"font-size": "25px","color": "red"}).show("").delay(1000).fadeOut();
    setTimeout(function(){
    $(".totalPoints span:nth-child(1)").text(self.points -= 5);
  }, 1500);
  }
};


Game.prototype.assignControlsToKeys = function() {
  $("body").on("keydown", function(event){
    switch (event.keyCode) {
      case 80:
        if (this.countdown, this.autorun) {
          $( ".container" ).append( "<p>GAME PAUSED</p>" );
          this.stop();
        } else {
          this.start();
        }
        break;
      case 82:
      var self = this;
      if (this.bullets === 0) {
        this.bullets = 5;
        new buzz.sound("music/reloadShotgun.wav").setVolume(100).play();
        setTimeout(function(){
        self.drawBullets();
      }, 800);
    }
        break;
    }
  }.bind(this));
};

Game.prototype.stop = function() {
  if (this.countdown, this.autorun) {
    clearInterval(this.countdown);
    clearInterval(this.autorun);
  }
};


$(document).ready(function() {

  myGame = new Game({
    rows: 1,
    columns: 12,
  });

  myGame.start();
  myGame.assignControlsToKeys();

});

console.log("LINKED!!!");
