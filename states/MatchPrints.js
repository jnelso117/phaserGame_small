BasicGame.MatchPrints = function(game) {
this.background;
this.patrickPrint;
this.helenPrint;
this.VeronicaPrint;
this.patrickPortrait;
this.helenPortrait;
this.VeronicaPortrait;
this.response;
this.goNext;
};

BasicGame.MatchPrints.prototype = {
    create: function() {
        this.state.backgroundColor = '#ffffff';
        this.goNext = this.add.sprite(this.world.centerX,this.world.centerY,'Next');
        this.patrickPortrait = this.add.sprite(0,600,'Patrick_small');
        this.helenPortrait = this.add.sprite(533,600,'Helen_small');
        this.VeronicaPortrait = this.add.sprite(1066,600,'Veronica_Small');
        this.patrickPrint = this.add.sprite(0,0,'Patrick_Print');
        this.helenPrint = this.add.sprite(200, 0, 'Helen_Print');
        this.VeronicaPrint = this.add.sprite(400,0,'Veronica_Print');
        this.VeronicaPrintTwo = this.add.sprite(600,0,'Veronica_Print');
        
        //enable input on the print sprites and allow drag
        this.helenPrint.inputEnabled = true;
        this.patrickPrint.inputEnabled = true;
        this.VeronicaPrint.inputEnabled = true;
        this.VeronicaPrintTwo.inputEnabled = true;
        this.patrickPrint.input.enableDrag();
        this.helenPrint.input.enableDrag();
        this.VeronicaPrint.input.enableDrag();
        this.VeronicaPrintTwo.input.enableDrag();
        this.patrickPrint.events.onDragStop.add(this.checkPatrick, this);
        
        this.response = this.add.text(this.world.centerX, 500, '',{ font: "24px Helvetica", wordWrap: true, wordWrapWidth: 500, align: 'center', fill: '#000000'});
        this.text = this.add.text(this.world.centerX, this.world.centerY+200,'We have 4 fingerprints let\'s see which fingerprints belong to Patrick. Note: You can only drag items right now. Currently still being completed.', {font: '24px Helvetica', wordWrap: true, wordWrapWidth: 500, fill:'#000000' });
    },
    update: function() {
        
        
        
        
    },
    checkPatrick: function () {
        if(this.patrickPrint.x > 533 && this.patrickPrint.y > this.world.centerY+100) {
            this.response.setText("This print is from the glass.");
            this.patrickPrint.x = 0;
            this.patrickPrint.y = 0;
            
        }
        else if (this.patrickPrint.x <= 533 && this.patrickPrint.y >= this.world.centerY) {
            this.patrickPrint.destroy();
            this.response.setText("Correct! This print belongs to the victim, Patrick!");
        }
        
    },
    
}