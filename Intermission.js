BasicGame.Intermission = function(game) {
    this.background;
    this.text;
}

BasicGame.Intermission.prototype = {
    
create: function() {
    this.background = this.add.image(0,0, 'sky');
    this.text = this.add.text(this.world.centerX, this.world.centerY, 'Chimy Changa', { font: "12px Arial", wordWrap: true, wordWrapWidth: 200, fill: "#fffff"});
    
}
}