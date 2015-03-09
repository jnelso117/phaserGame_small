 /******************************************************************
    
    This Level covers Slides 6 through 9.  
    
    Item: Drinking Glass
    Details: Clear, non-porous item.  
    Fingerprints? Victim's fingerprint.
    Dust at scene
    
 ******************************************************************/
    
BasicGame.glassLevel = function(game) {
 this.background;
 this.image; //image for the level
 this.returnStar; //return to the Menu
 this.powder;
 this.glue;
 this.ninhydrin;
 this.collect;
 this.response;
 
};
BasicGame.glassLevel.prototype = {
   
    
    
    
    create: function () {
        //adding the images to the canvas
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
        this.doorKnob.tint = 0x9999FF;
        this.sodaCan.tint = 0x9999FF;
        this.gun.tint = 0x9999FF;
        this.newspaper.tint = 0x9999FF;
        this.paperDoc.tint = 0x9999FF;
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
        //  This will stop the user from visiting the other options
        //  Also, it will stop them from clicking correct option and incrementing the crimeCounter by an infinite amount
        BasicGame.crimeCounter++;
        powder.loadTexture('Correct_Powder');
        powder.inputEnabled = false;
        glue.inputEnabled = false;
        ninhydrin.inputEnabled = false;
        collect.inputEnabled = false;
        BasicGame.glassLevelComplete = true;
        this.response.setText("A brush and black powder is ideal for processing a clear, nonporous piece of evidence at the scene.  Using the powder, you reveal a fingerprint!  You photograph and collect the print using a tape lift.  All items are packaged correctly.  Return to the crime scene to process more evidence, or finish up.");
        this.response.addColor('#009900',0);
    },
    useSuperGlue: function () {
        glue.loadTexture('Incorrect_Superglue');
        this.response.setText("You are unable to fume with superglue at the crime scene. Try something else.");
        this.response.addColor('#B00000',0);
    },
    
    useNinhydrin: function () {
    if (BasicGame.glassLevelComplete = true) {
        ninhydrin.inputEnabled = true;
        this.response.setText('');
    }
        else {
      ninhydrin.loadTexture('Incorrect_Ninhydrin');
      this.response.setText("Ninhydrin works best on porous items.  Besides, you would not be able to apply ninhydrin to an item at the crime scene.  Try something else.");
      this.response.addColor('#B00000',0);
    }
        
    },
    collectItem: function () {   
      collect.loadTexture('Incorrect_Collect');
      this.response.setText("You could collect this item, but this glass is a nonporous item that is clear.  Try something else before you lug it back to the crime lab.");
      this.response.addColor('#B00000',0);
    },


}