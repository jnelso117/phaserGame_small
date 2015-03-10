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
        this.helenPrint = this.add.sprite(this.world.centerX, this.world.centerY, 'Helen_Print');
        this.victoriaPrint = this.add.sprite(1500,800,'Victoria_Print');
        this.response = this.add.text(this.world.centerX, 700, { font: "24px fjalla", wordWrap: true, wordWrapWidth: 500, align: 'center', fill: '#ffffff'});
        this.text = this.add.text(this.world.centerX, this.world.centerY, 'This scene isn\t quite ready yet, come back in about 8 hours!', {font: '24px fjalla', wordWrap: true, wordWrapWidth: 500, fill:'#ffffff' });
    },
    update: function() {
    },
    
}