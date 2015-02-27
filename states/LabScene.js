BasicGame.labScene = function(game) {    
}

BasicGame.labScene.prototype = {
    
    create: function () {
        //this is where all your assets need to be called to be in the main menu
        background = this.add.image(0,0,'labScene');
        can = this.add.sprite(344, 380, 'Lab_Can');
        gun = this.add.sprite(544, 436, 'Lab_Gun');;
        newspaper = this.add.sprite(744, 436, 'Lab_Paper');;
        postCard = this.add.sprite(944, 436, 'Lab_Card');;
        this.textX = this.add.text(0,this.world.centerY+300, '', { font: '24px fjalla', wordWrap: true, wordWrapWidth: 500,fill: '#fffff' });
        this.textY = this.add.text(0,this.world.centerY+340, '', { font: '24px fjalla', wordWrap: true, wordWrapWidth: 500,fill: '#fffff' });
        this.textX.setText(this.game.input.mousePointer.x);
       
    },
    
    update: function () {
        
        if(BasicGame.levelCounter === 10) {
            this.state.start('Match Prints');
        }
        this.textX.setText(this.game.input.mousePointer.x);
        this.textY.setText(this.game.input.mousePointer.y);
    
    
    },
   startGlassLevel: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go to the next state.
		this.state.start('glassLevel');

	},
    startWeaponLevel: function (pointer) {
        //	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

	    //	Then let's go to the next state.
		this.state.start('weaponLevel');
    },
    startPaperLevel: function (pointer) {
         //	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

	    //	Then let's go to the next state.
        this.state.start('paperLevel');

},
    startDocumentLevel: function (pointer) {
        this.state.start('documentLevel');
    },
    startCanLevel: function (pointer) {
        this.state.start('canLevel');
    },
}