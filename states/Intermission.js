BasicGame.Intermission = function(game) {
    this.background;
    this.goNext;
    this.text;
    this.promptText;
    this.timer;
    this.counter = 0;
    this.knobPrint;
    this.glassPrint;
    this.veronica;
    this.helen;
    this.veronica;
    this.fade;
    this.knobPrintFade;
    this.glassPrintFade;
}

BasicGame.Intermission.prototype = {
    
create: function() {
    background = this.add.image(0,0,'background');
    goNext = this.add.sprite(120, 720,'Next');
    
    //Text
    text = this.add.text(50,this.world.centerY+150, 'You found a lot of clues to this case, including two fingerprints.', { font: '24px Helvetica', wordWrap: true, wordWrapWidth: 500, align: 'left',fill: '#ffffff' });
    text.setShadow(0, 0, 'rgba(0, 0, 0, 2)', 0);
    //Fingerprints
    knobPrint = this.add.image(0, this.world.centerY-200, 'Veronica_Print');
    glassPrint = this.add.image(200, this.world.centerY-200, 'Patrick_Print');
    helen = this.add.image(1067,450,'Helen_small');
    veronica = this.add.image(1067, 0, 'Veronica_small');
    goNext.inputEnabled = true;
    goNext.events.onInputDown.add(this.enableClick,this);
    
    //Items Opacity
    knobPrint.alpha = 0;
    glassPrint.alpha = 0;
    veronica.alpha = 0;
    helen.alpha = 0;
},
update: function() {

        if (this.counter === 8) 
        {
           
             this.state.start('labSceneMain');
            
        }    
            else if (this.counter === 1)
             {
            text.setText("Here is the Fingerprint from the front door knob.");
            knobPrintFade = this.add.tween(knobPrint).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
             }
            else if (this.counter === 2)
        {
            text.setText("Here is the Fingerprint from the drinking glass.");
            glassPrintFade = this.add.tween(glassPrint).to( { alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
            else if (this.counter === 3)
        {
            text.setText("You picked up a gun, newspaper, postcard, and a can for further analysis");
        }
        else if(this.counter === 4) {
            text.setText("After collecting your evidence, your forensic artist drew two descriptions(based on an explanation of a neighbor) of the two women that left Patrick's apartment on the day of his untimely death.");
        }
        else if(this.counter === 5) {
            text.setText("Here is the portrait of the woman who left the apartment at approximately 7:18 P.M. Police have identified her as Veronica Johnson, Patrick's ex-girlfriend. She has a criminal record for stalking and harassment charges.");
            fade = this.add.tween(veronica).to( { alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
        else if(this.counter === 6) {
         text.setText("Here is a drawing of the woman that left the apartment approximately 4 hours before Patrick's death. Neighbors assumed that it was his new girlfriend, Helen Williams.");   
            fade = this.add.tween(helen).to( { alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
            else if (this.counter === 7)
        {
            text.setText("There are many questions and few pieces of evidence. Let’s head over to the lab and analyze the items for more fingerprints.");
        }
           
},
enableClick: function () {
    this.counter++;
    
},
fadeToLab: function () {
    //Tried to fade the entire 
    fadein = this.add.tween(this.world).to( { alpha: 0}, 2000, Phaser.Easing.Linear.None, true, 0, 0, false);
    this.state.start('labSceneMain');
    
},
returnToLab: function() {
    this.state.start('labSceneMain');
},
shutdown: function() {
    },
}