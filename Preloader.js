BasicGame.Preloader = function(game) {
   this.sky = null;
   this.firstaid = null;
   this.diamond = null;
   this.ready = false;
   this.star = null;

};

BasicGame.Preloader.prototype = {
    
    preload: function() {
    //this.sky = this.load.image('sky', 'assets/sky.png');
    this.load.image('sky', 'assets/sky.png');
    this.load.image('diamond', 'assets/diamond.png');
    this.load.image('star','assets/star.png');
    this.load.image('firstaid', 'assets/firstaid.png');
    this.load.image('diamondComplete', 'assets/diamondRed.png'); 
    this.load.image('firstaidComplete', 'assets/firstaidGrey.png');
    this.load.image('gameOver', 'assets/gameOver.png');
    this.load.image('incorrect', 'assets/incorrect_star.png');
   
    },  
    
create: function () {

},
    
update: function() {
    BasicGame.levelCounter = 0;
    this.ready = true;
    this.state.start('Menu');
}
    
};