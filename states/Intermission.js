BasicGame.Intermission = function(game) {
    this.background;
    this.text;
    this.promptText;
}

BasicGame.Intermission.prototype = {
    
create: function() {
    this.background = this.add.image(0,0, 'labScene');
    this.text = this.add.text(0,this.world.centerY+300, 'So far so good! Unfortunately, The Lab Scene hasn\'t been implemented yet, come back next week!', { font: '24px fjalla', wordWrap: true, wordWrapWidth: 500,fill: '#fffff' });
   
    
},
update: function() {
   
    
}
}