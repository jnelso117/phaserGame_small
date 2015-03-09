BasicGame.MatchPrints = function(game) {
this.background;
};

BasicGame.MatchPrints.prototype = {
    create: function() {
        this.background = this.add.image(0,0, 'crimeSceneFull');
        
        this.text = this.add.text(this.world.centerX, this.world.centerY, 'This scene isn\t quite ready yet, come back in about 8 hours!', {font: '24px fjalla', wordWrap: true, wordWrapWidth: 500, fill:'#F5F5DC' });
    },
    update: function() {
    },
    
}