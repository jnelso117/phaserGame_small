BasicGame.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
    this.BG;
    //Items are named from left to right and top to bottom.  
    //Items 1-3 are the top items and 4-6 are the bottom.
    this.item1;
    this.item2;
    this.item3;
    this.item4;
    this.item5;
    this.item6;
    this.text = '';

};

BasicGame.Game.prototype = {

	create: function () {
        this.BG = this.add.image(0,0,'sky');
        this.item1 = this.add.image(0,0, 'diamond');
        this.item2 = this.add.image(this.world.centerX, 0, 'firstaid');
        this.item3 = this.add.image(this.world.centerX, this.world.centerY, 'star');
        this.item4 = this.add.image(0,570, 'diamond');
        this.item5 = this.add.image(this.world.centerX, 570, 'firstaid');
        this.item6 = this.add.image(570,570, 'diamond');
        this.item1.inputEnabled = true;
        this.item2.inputEnabled = true;
        this.item3.inputEnabled = true;
        this.item1.events.onInputDown.add(this.startGlassLevel,this);
        this.item2.events.onInputDown.add(this.startFirstAidLevel, this);
		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
         text = this.add.text(0,this.world.centerY, BasicGame.levelCounter, { fill: '#fffff' });
        

	},

	update: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
        //Statements to check if other levels have been completed
        
        /*******************************************
        
        Okay, so this is how the update function works in Phaser.
        
        "is intended to update positions, physics, scores, to manage user inputs, to invoke collision callbacks, to kill or revive objects, 
        and so on. It's the heart of your game really. Remember, unless drawing graphics by your own, you don't have to code object rendering, 
        Phaser does it for you on the object creation order basis."
        Source:
        https://github.com/photonstorm/phaser/wiki/Phaser-General-Documentation-:-States
        
        The update function is where all the live updates would go once the main items have been created.  
        I'm using this to check if the student/player has completed the states and replacing the click images with red, non-clickable images.
        This is my first time using Phaser, so I'm actually not replacing the sprite using the statements I have created, but simply placing
        them on top of the other.  There is probably a better way to do this, but as of now, this is how I'm getting it to work.  It will
        really matter when asset management becomes a factor if the game gets larger.  
        In the same statements, I am ensuring that the images are not clickable via boolean var.
        
        You can do this with anything.  If you want the user to do something and provoke a function in the state, you want to put them in the update 
        function usually.  
        
        ********************************************/
        
         if (BasicGame.glassLevelComplete === false) 
         { 
            this.item1.inputEnabled = false; //user can no longer access stage
            this.item1 = this.add.image(0,0, 'diamondComplete'); //replace graphic
        }
        if (BasicGame.aidDone === false) 
        {
             this.item2.inputEnabled = false; //user can no longer access stage
            this.item2 = this.add.image(0,0, 'firstaidComplete'); //replace graphic
        }
        if (BasicGame.levelCounter === 6) //checks to see if the levels were cleared
        {
            this.state.start('gameOver');
        }
        

	},

	startGlassLevel: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go to the next state.
		this.state.start('glassLevel');

	},
    startFirstAidLevel: function (pointer) {
        //	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

	    //	Then let's go to the next state.
		this.state.start('firstaidLevel');
    }

};
