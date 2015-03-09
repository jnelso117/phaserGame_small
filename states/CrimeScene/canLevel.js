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
        this.BG = this.add.image(0,0,'crimeScene');
        this.drinkingGlass = this.add.image(629,573, 'Table_Glass');
        this.doorKnob = this.add.image(446,302, 'Door_Knob');
        this.gun = this.add.image(604, 830, 'Table_Gun');
        this.newspaper = this.add.image(855,446, 'Table_Newspaper');
        this.paperDoc = this.add.image(424, 630, 'Table_Card');
        this.sodaCan = this.add.image(525,561, 'Table_Can');
       
       //Adding a tint to all other objects to give the game a more focused feel
        this.BG.tint = 0x9999FF;
        this.drinkingGlass.tint = 0x9999FF;
        this.doorKnob.tint = 0x9999FF;
        this.gun.tint = 0x9999FF;
        this.newspaper.tint = 0x9999FF;
        this.paperDoc.tint = 0x9999FF;
       
       //images for buttons
        powder = this.add.sprite(this.world.centerX+400, this.world.centerY-400, 'Use_Powder');
        glue = this.add.sprite(this.world.centerX+400, this.world.centerY-200, 'Use_Superglue');
        ninhydrin = this.add.sprite(this.world.centerX+400, this.world.centerY, 'Use_Ninhydrin');
        collect = this.add.sprite(this.world.centerX+400, this.world.centerY+200, 'Use_Collect');
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
         if (BasicGame.glassLevelComplete === true) 
         { 
            this.drinkingGlass.inputEnabled = false; //user can no longer access stage
            this.drinkingGlass.destroy(); 
        }
        if (BasicGame.knobLevelComplete === true) 
        {
            this.doorHandle.inputEnabled = false; //user can no longer access stage
            this.doorHandle.destroy();
        }
        if (BasicGame.weaponLevelComplete === true)
        {
            this.gun.inputEnabled  = false;
            this.gun.destroy();
        }
        if (BasicGame.paperLevelComplete === true)
        {
            this.newspaper.inputEnabled = false;
            this.newspaper.destroy();
        }
        if (BasicGame.documentLevelComplete === true)
        {
            this.paperDoc.inputEnabled = false;
            this.paperDoc.destroy();
        }
        if (BasicGame.canLevelComplete === true)
        {
            this.sodaCan.inputEnabled = false;
            this.sodaCan.destroy();
        }
       
        
       
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
    //  Also, it will stop them from clicking option 1 and incrementing the crimeCounter by an infinite amount
    BasicGame.crimeCounter++;
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