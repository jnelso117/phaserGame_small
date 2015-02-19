BasicGame.Menu = function(game) {
this.startBG;
this.startStar;
this.text;
this.timer;
    
}

BasicGame.Menu.prototype = {
    
    create: function () {
        //this is where all your assets need to be called to be in the main menu
        startBG = this.add.image(0,0, 'crimeScene');
        startStar = this.add.image(this.world.centerX,this.world.centerY-80, 'star');        
        this.text = this.add.text(this.world.centerX,this.world.centerY, '', { font: '24px fjalla', fill: '#fffff' });
        this.timer = this.time.events.add(Phaser.Timer.SECOND * 3, this.enableClick, this);
        
    },
    
    startGame: function (pointer) {
        this.state.start('Game');
    
    },
    enableClick: function () {
        
       startStar.inputEnabled = true;
       this.text.setText("Click the star to begin the game"); 
       startStar.events.onInputDown.addOnce(this.startGame,this);
},
}