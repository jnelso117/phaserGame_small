BasicGame.diamondLevel = function(game) {
 this.background;
 this.image; //image for the level
 this.returnStar; //return to the Menu
 this.option1;
 this.option2;
 this.option3;
 this.option4;
 this.response;
 
};
BasicGame.diamondLevel.prototype = {
    
    create: function () {
        //adding the images to the canvas
        background = this.add.image(0,0, 'sky');
        image = this.add.sprite(this.world.centerX/2,this.world.centerY/2,'diamond');
        option1 = this.add.sprite(this.world.centerX, this.world.centerY, 'star');
        option2 = this.add.sprite(this.world.centerX, this.world.centerY+50, 'star');
        option3 = this.add.sprite(this.world.centerX, this.world.centerY+100, 'star');
        option4 = this.add.sprite(this.world.centerX, this.world.centerY+150, 'star');
        returnStar = this.add.image(0,0, 'star');
        
        //Input enabled for images
        returnStar.inputEnabled = true;
        option1.inputEnabled = true;
        option2.inputEnabled = true;
        option3.inputEnabled = true;
        option4.inputEnabled = true;  
        
       
        
    },
    update: function () {
        
        // When the user clicks on the image, return the method with the message
        returnStar.events.onInputDown.addOnce(this.returnToMenu,this);
        option1.events.onInputDown.addOnce(this.correctResponse,this);
        option2.events.onInputDown.addOnce(this.incorrectResponseOne,this);
        option3.events.onInputDown.addOnce(this.incorrectResponseTwo,this);
//        option4.events.onInputDown.addOnce(this.incorrectResponseThree,this);

        
        //How the text will look
        this.response = this.add.text(this.world.centerX,this.world.centerY-50, ' ', { wordWrap: true, wordWrapWidth: 200, fill: '#fffff' });
    },
   returnToMenu: function (pointer) {
         this.state.start('Game');   
    },
    
    correctResponse: function () {
        BasicGame.counter++;
        //this will stop the user from visiting the other options
        //Also, it will stop them from clicking option 1 and incrementing the levelCounter by an infinite amount
        option1.inputEnabled = false;
        option2.inputEnabled = false;
        option3.inputEnabled = false;
        option4.inputEnabled = false;
        BasicGame.diamondDone = false;
        this.response.setText('You got it right homie');
        this.response.addColor('#009900',0);
    },
    incorrectResponseOne: function () {
       option2.sprite = this.add.sprite(this.world.centerX, this.world.centerY+50,'incorrect');
       this.response.setText("You are unable to fume with superglue at the crime scene. Try something else.");
       this.response.addColor('#B00000',0);
    },
    
    incorrectResponseTwo: function () {
      option3.sprite = this.add.sprite(this.world.centerX, this.world.centerY+50,'incorrect');
        this.response = '';
      this.response = this.add.text(this.world.centerX,this.world.centerY-50,"Ninhydrin works best on porous items.  Besides, you would not be able to apply ninhydrin to an item at the crime scene.  Try something else.", { wordWrap: true, wordWrapWidth: 200, fill: '#B00000' });
        
    },
//    incorrectResponseThree: function () {
//       this.response = (this.world.centerX,this.world.centerY-50,"You could collect this item, but this glass is a nonporous item that is clear.  Try something else before you lug it back to the crime lab.", { fill: '#B00000' });
//        option4 = this.add.sprite(this.world.centerX, this.world.centerY+50,'incorrect');
//    },


}