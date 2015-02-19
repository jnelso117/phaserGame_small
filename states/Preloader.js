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
    this.load.image('Can', 'assets/Can.png');
    this.load.image('Gun', 'assets/Gun.png');
    this.load.image('Newspaper','assets/Newspaper.png');
    this.load.image('Glass', 'assets/Glass.png');
    this.load.image('Knob', 'assets/Knob.png');
    this.load.image('crimeScene', 'assets/Crime_Scene/Crime_Background.png');
   
    },  
    
create: function () {

},
    
update: function() {
    BasicGame.levelCounter = 0;
    this.ready = true;
    this.state.start('Menu');
}
    
};