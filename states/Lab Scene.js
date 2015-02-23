BasicGame.labScene = function(game) {    
}

BasicGame.labScene.prototype = {
    
    create: function () {
        //this is where all your assets need to be called to be in the main menu
        background;
        can;
        gun;
        newspaper;
        postCard;
        
        startStar = this.add.image(this.world.centerX,this.world.centerY-80, 'star');        
        this.text = this.add.text(this.world.centerX,this.world.centerY, '', { fill: '#fffff' });
        this.timer = this.time.events.add(Phaser.Timer.SECOND * 3, this.enableClick, this);
        
    },
    
    },
    enableClick: function () {
        
       startStar.inputEnabled = true;
       this.text.setText("Click the star to begin the lab!"); 
       startStar.events.onInputDown.addOnce(this.startGame,this);
    },
    useSuperGlue: function () {
    },
    useNinhydrin: function () {
    },
}