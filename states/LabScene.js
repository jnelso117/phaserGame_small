BasicGame.labScene = function(game) {    
    this.can;
    this.gun;
    this.newspaper;
    this.postCard;
    this.gunPrint;
    this.paperPrint;
};

BasicGame.labScene.prototype = {
    
    create: function () {
        //this is where all your assets need to be called to be in the main menu
        background = this.add.image(0,0,'labScene');
        can = this.add.sprite(344, 380, 'Lab_Can');
        gun = this.add.sprite(544, 436, 'Lab_Gun');
        newspaper = this.add.sprite(744, 436, 'Lab_Paper');
        postCard = this.add.sprite(944, 436, 'Lab_Card');
        gunPrint = this.add.sprite(544,0,'Veronica_Print');
        gunPrint.alpha = 0;
        gunPrint.tint = 0x9999FF;
        paperPrint = this.add.sprite(944,0,'Helen_Print');
        paperPrint.alpha = 0;
        paperPrint.tint = 0x9999FF;
        // On input, run the function listed in the parameter
        can.inputEnabled = true;
        gun.inputEnabled = true;
        newspaper.inputEnabled = true;
        postCard.inputEnabled = true;
        
        
      can.events.onInputDown.add(this.startCanLevel, this);
      gun.events.onInputDown.add(this.startWeaponLevel, this);
      newspaper.events.onInputDown.add(this.startPaperLevel, this);
      postCard.events.onInputDown.add(this.startCardLevel, this);
       
    },
    
    update: function () {
        
        if(BasicGame.labCounter === 4) {
            this.state.start('MatchPrints');
        }
        if(BasicGame.gunLabComplete === true){
            gunPrint.alpha = 1;
            gun.destroy();
        }
        if(BasicGame.canLabComplete === true){
            can.destroy();
        }
        if(BasicGame.paperLabComplete === true) {
            paperPrint.alpha = 1;
            newspaper.destroy();
        }
        if(BasicGame.postCardLabComplete === true) {
            postCard.destroy();
        }

	},
    startWeaponLevel: function (pointer) {
	    //	Then let's go to the next state.
		this.state.start('gunLab');
    },
    startPaperLevel: function (pointer) {
	    //	Then let's go to the next state.
        this.state.start('paperLab');

},
    startCardLevel: function (pointer) {
        this.state.start('postCardLab');
    },
    
    startCanLevel: function (pointer) {
        
        this.state.start('canLab');
    },


    shutdown: function() {
        //Bug: Keeps the game in an infinite loop.  Shutdown method
        //supposedly is called when the state shuts down, or when the
        //user leaves the scene.  
        //BasicGame.labCounter = 0;
        
    },
}