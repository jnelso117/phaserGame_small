BasicGame.diamondLevel = function(game) {
 this.background;
 this.image; //image for the level
 this.returnStar; //return to the Menu
 
};
BasicGame.diamondLevel.prototype = {
    
    create: function () {
        background = this.add.image(0,0, 'sky');
        image = this.add.sprite(this.world.centerX,this.world.centerY,'diamond');
        returnStar = this.add.image(0,0, 'star');
        returnStar.inputEnabled = true;
        returnStar.events.onInputDown.addOnce(this.returnToMenu,this);
        
    },
    returnToMenu: function (pointer) {
        BasicGame.diamondDone = false;
        BasicGame.levelCounter + 1;
       // BasicGame.Game.item2 = BasicGame.Game.add.image(BasicGame.Game.world.centerX, 0, 'diamondComplete');
         this.state.start('Game');   
        }
}
