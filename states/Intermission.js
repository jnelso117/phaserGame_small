BasicGame.Intermission = function(game) {
    this.background;
    this.text;
    this.promptText;
    this.timer;
    this.counter = 0;
    this.knobPrint;
    this.glassPrint;
    this.helen;
    this.timer;
}

BasicGame.Intermission.prototype = {
    
create: function() {
    this.stage.backgroundClip = '#ffffff';
    this.goNext = this.add.sprite(120, 700,'Next');
    
    //Text
    this.text = this.add.text(50,this.world.centerY+150, 'You find several clues that point to cold-blooded murder, such as two fingerprints.', { font: '24px fjalla', wordWrap: true, wordWrapWidth: 500, align: 'center',fill: '#ffffff' });
    this.text.setShadow(0, 0, 'rgba(0, 0, 0, 2)', 0);
    //Fingerprints
    this.knobPrint = this.add.image(this.world.centerX+200, this.world.centerY, 'Victoria_Print');
    this.glassPrint = this.add.image(this.world.centerX, this.world.centerY, 'Patrick_Print');
    this.helen = this.add.image(this.world.centerX+400, this.world.centerY, 'Helen_Print');
    this.goNext.inputEnabled = true;
    this.goNext.events.onInputDown.add(this.enableClick,this);
    
    //Items Opacity
    this.knobPrint.alpha = 0;
    this.glassPrint.alpha = 0;
    this.helen.alpha = 0;
},
update: function() {

        if (this.counter === 5) 
        {
           
             this.state.start('labSceneMain');
            
        }    
            else if (this.counter === 1)
             {
            this.text.setText("Here is the Fingerprint from the front door knob.");
            this.knobPrintFade = this.add.tween(this.knobPrint).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
             }
            else if (this.counter === 2)
        {
            this.text.setText("Here is the Fingerprint from the drinking glass.");
            this.glassPrintFade = this.add.tween(this.glassPrint).to( { alpha: 1}, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
            else if (this.counter === 3)
        {
            this.text.setText("You picked up a gun, newspaper, postcard, and a can for further analysis");
        }
            else if (this.counter === 4)
        {
            this.text.setText("There are many questions and few pieces of evidence. Let’s head over to the lab and analyze the items.");
        }
           
},
enableClick: function () {
    this.counter++;
    
},
fadeToLab: function () {
    this.fadein = this.add.tween(this.world).to( { alpha: 0}, 2000, Phaser.Easing.Linear.None, true, 0, 0, false);
    this.state.start('labSceneMain');
    
},
returnToLab: function() {
    this.state.start('labSceneMain');
},
}