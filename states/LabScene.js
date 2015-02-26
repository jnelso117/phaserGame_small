BasicGame.labScene = function(game) {    
}

BasicGame.labScene.prototype = {
    
    create: function () {
        //this is where all your assets need to be called to be in the main menu
        background = this.add.image('labScene');
        can;
        gun;
        newspaper;
        postCard;
        
       
    },
    
    update: function () {
        
        if(BasicGame.levelCounter === 10) {
            this.state.start('Match Prints');
        }
    
    
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