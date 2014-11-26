BasicGame.Preloader = function(game) {
    this.sky = null;
    this.firstaid = null;
    this.diamond = null;
    this.ready = false;
};

BasicGame.Preloader.prototype = {
    
    preload: function() {
    this.sky = this.add.sprite(0,0, 'sky');
    this.firstaid = this.add.sprite(this.world.centerX,0, 'firstaid');
    this.diamond = this.add.sprite(this.world.centerX, this.world.centerY, 'diamond');
    },
        
create: function () {
    this.sky.cropEnabled = false;
},
    
update: function() {
    this.ready = true;
}
    
};