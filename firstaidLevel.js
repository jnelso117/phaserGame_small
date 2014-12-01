BasicGame.firstaidLevel = function(game) {
 this.background;
 this.image; //image for the level
 this.returnStar; //return to the Menu
 
};
BasicGame.firstaidLevel.prototype = {
    
    create: function () {
        background = this.add.image(0,0, 'sky');
        image = this.add.sprite(this.world.centerX,this.world.centerY,'firstaid');
        returnStar = this.add.image(0,0, 'star');
        returnStar.inputEnabled = true;
        returnStar.events.onInputDown.addOnce(this.returnToMenu,this);
        
    },
    returnToMenu: function (pointer) {
        BasicGame.aidDone = false;
        BasicGame.levelCounter + 1;
         this.state.start('Game');   
        }
}