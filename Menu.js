BasicGame.Menu = function(game) {
this.startBG;
this.startStar;
this.text = '';
    
}

BasicGame.Menu.prototype = {
    
    create: function () {
        //this is where all your assets need to be called to be in the main menu
        startBG = this.add.image(0,0, 'sky');
        startStar = this.add.image(0,0, 'star');
        startStar.inputEnabled = true;
        startStar.events.onInputDown.addOnce(this.startGame, this);
        text = this.add.text(this.world.centerX,this.world.centerY, 'Click the star to load', { fill: '#fffff' });
        
    },
    
    startGame: function (pointer) {
        this.state.start('Game');
    
    }
}