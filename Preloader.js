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
   
    },  
    
create: function () {

},
    
update: function() {
    this.ready = true;
    this.state.start('Menu');
}
    
};