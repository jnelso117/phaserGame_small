BasicGame.labScene = function(game) {    
    this.can;
    this.gun;
    this.newspaper;
    this.postCard;
};

BasicGame.labScene.prototype = {
    
    create: function () {
        //this is where all your assets need to be called to be in the main menu
        this.background = this.add.image(0,0,'labScene');
        this.can = this.add.sprite(344, 380, 'Lab_Can');
        this.gun = this.add.sprite(544, 436, 'Lab_Gun');
        this.newspaper = this.add.sprite(744, 436, 'Lab_Paper');
        this.postCard = this.add.sprite(944, 436, 'Lab_Card');
        // On input, run the function listed in the parameter
        this.can.inputEnabled = true;
        this.gun.inputEnabled = true;
        this.newspaper.inputEnabled = true;
        this.postCard.inputEnabled = true;
        
        
      this.can.events.onInputDown.add(this.startCanLevel, this);
      this.gun.events.onInputDown.add(this.startWeaponLevel, this);
      this.newspaper.events.onInputDown.add(this.startPaperLevel, this);
      this.postCard.events.onInputDown.add(this.startCardLevel, this);
       
    },
    
    update: function () {
        
        if(BasicGame.labCounter === 6) {
            this.state.start('MatchPrints');
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
}