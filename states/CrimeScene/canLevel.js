 /******************************************************************
    
    This Level covers Slides 18 through 21.  
    
    Item: Can
    Details: Complex Background, removable, non-porous item.  
    Fingerprints? No.
    Collect? Yes.
    Fume? At lab.
    
 ******************************************************************/
    
BasicGame.canLevel = function(game) {
 this.background;
 this.image; //image for the level
 this.returnStar; //return to the Menu
 
};
BasicGame.canLevel.prototype = {
    
   create: function () {
       
        //adding the images to the canvas
        background = this.add.image(0,0, 'crimeScene');
        image = this.add.sprite(this.world.centerX/2,this.world.centerY/2,'Can');
        powder = this.add.sprite(this.world.centerX, this.world.centerY-400, 'Use_Powder');
        glue = this.add.sprite(this.world.centerX, this.world.centerY-200, 'Use_Superglue');
        ninhydrin = this.add.sprite(this.world.centerX, this.world.centerY, 'Use_Ninhydrin');
        collect = this.add.sprite(this.world.centerX, this.world.centerY+200, 'Use_Collect');
        returnStar = this.add.image(0,0, 'star');
        
        //Input enabled for images
        returnStar.inputEnabled = true;
        powder.inputEnabled = true;
        glue.inputEnabled = true;
        ninhydrin.inputEnabled = true;
        collect.inputEnabled = true;  
        
        // When the user clicks on the image, return the method with the message
        returnStar.events.onInputDown.addOnce(this.returnToMenu,this);
        powder.events.onInputDown.addOnce(this.usePowder,this);
        glue.events.onInputDown.addOnce(this.useSuperGlue,this);
        ninhydrin.events.onInputDown.addOnce(this.useNinhydrin,this);
        collect.events.onInputDown.addOnce(this.collectItem,this);
        // collect.events.onInputDown.addOnce(this.incorrectResponseThree,this);

        
        //How the text will look
        this.response = this.add.text(0,this.world.centerY+300, '', { font: "24px Arial", wordWrap: true, wordWrapWidth: 500, fill: '#fffff' });
        
    },
    update: function () {
        
       
    },
   returnToMenu: function (pointer) {
         this.state.start('crimeSceneMain');   
    },
    
    usePowder: function () {
        powder.loadTexture('Incorrect_Powder');
        this.response.setText("A brush and black powder is good for processing nonporous items, but this soda can has a complex background that would not provide good contrast.  Try something else.");
        this.response.addColor('#B00000',0);
    },
    useSuperGlue: function () {
       glue.loadTexture('Incorrect_Superglue');
       this.response.setText("You are unable to fume with superglue at the crime scene. Try something else.");
       this.response.addColor('#B00000',0);
    },
    
    useNinhydrin: function () {
      ninhydrin.loadTexture('Incorrect_Ninhydrin');
      this.response.setText("Ninhydrin works best on porous items.  Besides, you would not be able to apply ninhydrin to an item at the crime scene.  Try something else.");
      this.response.addColor('#B00000',0);
        
    },
    collectItem: function () {   
     //  This will stop the user from visiting the other options
    //  Also, it will stop them from clicking option 1 and incrementing the levelCounter by an infinite amount
    BasicGame.levelCounter++;
    collect.loadTexture('Correct_Collect');
    powder.inputEnabled = false;
    glue.inputEnabled = false;
    ninhydrin.inputEnabled = false;
    collect.inputEnabled = false;
    BasicGame.canLevelComplete = true;
    this.response.setText("Good idea!  The gun can be removed from the crime scene and this nonporous item with a dark background can more easily be processed back at the lab.");
    this.response.addColor('#009900',0);
    },


}