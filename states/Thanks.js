BasicGame.Thanks = function(game) {
this.background;
this.text;
this.logo;
this.gray;
};
BasicGame.Thanks.prototype = {
    
    create: function() {
        this.background = this.add.sprite(0,0,'background');
        logo = this.add.sprite(this.world.centerX-200, this.world.centerY-300,'Logo');
        //logo.inputEnabled = true;
        //logo.events.onInputDown.addOnce(this.restartGame, this);
        this.text = this.add.text(this.world.centerX-500,this.world.centerY+200, 'Thank you for playing! If you would like to play again, refresh your browser. If you have any questions or concerns, contact your professor, Dr. Linville. \nThis game was developed using Phaser, an HTML5 and Javascript Framework. \nProgrammer: Jeremy Nelson\nDesigners: Tierra Andrews and Scott Thigpen. \n uab.edu/digitalmedia', { font: "24px Helvetica", wordWrap: true, wordWrapWidth: 1000, align: 'center',fill: '#ffffff'});
    },
    restartGame: function() {
        /*Restart function to restart everything in the game
        It restarts some elements, but not all.  
        */
        BasicGame.crimeCounter = 0;
        BasicGame.labCounter = 0;
        BasicGame.canLevelComplete = false;
        BasicGame.paperLevelComplete = false;
        BasicGame.knobLevelComplete = false;
        BasicGame.glassLevelComplete = false;
        BasicGame.newspaperLevelComplete = false;
        BasicGame.weaponLevelComplete = false;
        BasicGame.canLabComplete = false;
        BasicGame.postCardLabComplete = false;
        BasicGame.gunLabComplete = false;
        BasicGame.newspaperComplete = false;
        BasicGame.crimeSceneMain.counter = 4;
        BasicGame.labScene.counter = 4;
        
        this.state.restart('Boot',true,false);
        this.state.restart('Preloader',true,false);
        this.state.restart('Title',true,false);
        this.state.restart('crimeSceneMain',true,false);
        this.state.restart('glassLevel');
        this.state.restart('knobLevel');
        this.state.restart('weaponLevel');
        this.state.restart('canLevel');
        this.state.restart('paperLevel');
        this.state.restart('postCardLevel');
        this.state.restart('gameOver');
        this.state.start('Boot');
        
    },
    shutdown: function() {
    }
}
