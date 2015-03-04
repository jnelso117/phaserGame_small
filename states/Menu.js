BasicGame.Menu = function(game) {
this.startBG;
this.startStar;
this.text;
this.counter = 0;
    
}

BasicGame.Menu.prototype = {
    
    create: function () {
        //this is where all your assets need to be called to be in the main menu

        startBG = this.add.image(0,0, 'crimeSceneFull');
        startBG.tint = 0x000033;
        this.startStar = this.add.image(0,700, 'star'); 
        
        this.text = this.add.text(30, 700, '', { font: "24px fjalla", wordWrap: true, wordWrapWidth: 500, fill: '#ffffff'});
        this.text.setText("Police received several 911 calls from a usually quiet neighborhood in Sunny City late on a Friday evening.");
        
    },
    update: function () {
        this.startStar.inputEnabled = true;
        this.startStar.events.onInputDown.add(this.enableClick,this);
        
            if (this.counter === 1)
             {
            this.text.setText("Within the neighborhood resided Dr. Alfred Dobbins Jr. He was new to the neighborhood and little was known about him");
             }
            if (this.counter === 2)
        {
            this.text.setText("An unknown assailant entered his home and an argument ensued.  Seconds later, a gunshot was heard.");
        }
            if (this.counter === 3)
        {
            this.text.setText("Police arrived moments later to find Dr. Dobbins unresponsive on his living room floor.");
        }
            if (this.counter === 4)
        {
            this.text.setText("...What happened?");
        }
            if (this.counter === 5)
        {
            this.text.setText("Search the living room for possible fingerprints and clues");
        }
            if (this.counter === 6) 
        {
            this.state.start("crimeSceneMain");
        }

    },
    
    startGame: function (pointer) {
        this.state.start('crimeSceneMain');
    
    },
    enableClick: function () {
        this.counter++;
     
    },
}