BasicGame.Intermission = function(game) {
    this.background;
    this.text;
    this.promptText;
    this.timer;
}

BasicGame.Intermission.prototype = {
    
create: function() {
    this.background = this.add.image(0,0, 'labScene');
    this.text = this.add.text(0,this.world.centerY+300, 'So far so good! Let\s get these items analyzed from the crime scene.', { font: '24px fjalla', wordWrap: true, wordWrapWidth: 500,fill: '#fffff' });
    this.timer = this.time.events.add(Phaser.Timer.SECOND * 3, this.enterLab, this);
   
    
},
update: function() {
   
    
},
enterLab: function () {
    this.state.start('labSceneMain');
    
},
}