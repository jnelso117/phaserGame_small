BasicGame.Menu = function(game) {
this.startBG;
this.startStar;
this.text;
this.timer;
    
}

BasicGame.Menu.prototype = {
    
    create: function () {
        //this is where all your assets need to be called to be in the main menu
        startBG = this.add.image(0,0, 'crimeSceneFull');
        startStar = this.add.image(this.world.centerX,this.world.centerY-80, 'star'); 
        this.text = this.add.text(0,this.world.centerY+300, '', { font: '24px fjalla', wordWrap: true, wordWrapWidth: 500,fill: '#fffff' });
        this.text.setText("Search the next area for possible items that the suspect left behind before the murder!");
        this.timer = this.time.events.add(Phaser.Timer.SECOND * 5, this.enableClick, this);
        
        
    },
    
    startGame: function (pointer) {
        this.state.start('Game');
    
    },
    enableClick: function () {
        
       startStar.inputEnabled = true;
       this.text.setText("Click the star to begin! Any stars you see in the next scene will return you back to the main scene(Which is coming up)."); 
       startStar.events.onInputDown.addOnce(this.startGame,this);
},
}