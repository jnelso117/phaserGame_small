BasicGame.MatchPrints = function(game) {
this.background;
this.patrickPrint;
this.helenPrint;
this.victoriaPrint;
this.patrickPortrait;
this.helenPortrait;
this.victoriaPortrait;
this.response;
};

BasicGame.MatchPrints.prototype = {
    create: function() {
        this.state.backgroundColor = '#121643';
        this.patrickPrint = this.add.sprite(0,0,'Patrick_Print');
        this.helenPrint = this.add.sprite(this.world.centerX, 0, 'Helen_Print');
        this.victoriaPrint = this.add.sprite(1300,0,'Victoria_Print');
        //enable input on the print sprites and allow drag
        this.helenPrint.inputEnabled = true;
        this.patrickPrint.inputEnabled = true;
        this.victoriaPrint.inputEnabled = true;
        this.helenPrint.input.enableDrag();
        this.patrickPrint.input.enableDrag();
        this.victoriaPrint.input.enableDrag();
        
        this.response = this.add.text(this.world.centerX, 700, '',{ font: "24px fjalla", wordWrap: true, wordWrapWidth: 500, align: 'center', fill: '#ffffff'});
        this.text = this.add.text(this.world.centerX, this.world.centerY+200,'We have 4 fingerprints, let\'s see which fingerprints belong to Patrick. Note: You can only drag items right now. Currently still being completed.', {font: '24px fjalla', wordWrap: true, wordWrapWidth: 500, fill:'#ffffff' });
    },
    update: function() {
        
    },
    
}