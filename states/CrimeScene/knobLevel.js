 /******************************************************************
    
    This Level covers Slides 10 through 13.  
    
    Item: Doorknob
    Details: Cannot remove, non-porous item.  
    Fingerprints? Yes.
    Dust at scene
    
 ******************************************************************/
    
BasicGame.knobLevel = function(game) {
 this.background;
 this.drinkingGlass;
 this.doorKnob;
 this.gun;
 this.newspaper;
 this.paperDoc;
 this.sodaCan;
 this.image; //image for the level
 this.returnBack; //return to the Menu
 this.textBG;
 this.response;
 
};
BasicGame.knobLevel.prototype = {
    
   create: function () {
        //adding the images to the canvas
         //adding the images to the canvas
        background = this.add.image(0,0,'crimeScene');
        drinkingGlass = this.add.image(629,573, 'Table_Glass');
        doorKnob = this.add.image(446,302, 'Door_Knob');
        gun = this.add.image(604, 830, 'Table_Gun');
        newspaper = this.add.image(855,446, 'Table_Newspaper');
        paperDoc = this.add.image(424, 630, 'Table_Card');
        sodaCan = this.add.image(525,561, 'Table_Can');
        textBG = this.add.sprite(this.world.centerX+95, 700, 'text_bg');
       
       //Adding a tint to all other objects to give the game a more focused feel
        background.tint = 0x9999FF;
        drinkingGlass.tint = 0x9999FF;
        sodaCan.tint = 0x9999FF;
        gun.tint = 0x9999FF;
        newspaper.tint = 0x9999FF;
        paperDoc.tint = 0x9999FF;
        powder = this.add.sprite(this.world.centerX+400, this.world.centerY-300, 'Use_Powder');
        glue = this.add.sprite(this.world.centerX+400, this.world.centerY-220, 'Use_Superglue');
        ninhydrin = this.add.sprite(this.world.centerX+400, this.world.centerY-140, 'Use_Ninhydrin');
        collect = this.add.sprite(this.world.centerX+400, this.world.centerY-60, 'Use_Collect');
        returnBack = this.add.image(0,0, 'Back');
        
        //Input enabled for images
        returnBack.inputEnabled = true;
        powder.inputEnabled = true;
        glue.inputEnabled = true;
        ninhydrin.inputEnabled = true;
        collect.inputEnabled = true;  
        
        // When the user clicks on the image, return the method with the message
        returnBack.events.onInputDown.addOnce(this.returnToMenu,this);
        powder.events.onInputDown.addOnce(this.usePowder,this);
        glue.events.onInputDown.addOnce(this.useSuperGlue,this);
        ninhydrin.events.onInputDown.addOnce(this.useNinhydrin,this);
        collect.events.onInputDown.addOnce(this.collectItem,this);
        // collect.events.onInputDown.addOnce(this.incorrectResponseThree,this);

        
        //How the text will look
        response = this.add.text(this.world.centerX+200,this.world.centerY+275, 'Which fingerprinting process is best for this piece of evidence?', { font: "24px Helvetica", wordWrap: true, align: 'left',wordWrapWidth: textBG.width-100, fill: '#ffffff' });
        
    },
    update: function () {
        
         if (BasicGame.glassLevelComplete === true) 
         { 
            drinkingGlass.inputEnabled = false; //user can no longer access stage
            drinkingGlass.destroy(); 
        }
        if (BasicGame.knobLevelComplete === true) 
        {
            doorKnob.inputEnabled = false; //user can no longer access stage
            doorKnob.destroy();
        }
        if (BasicGame.weaponLevelComplete === true)
        {
            gun.inputEnabled  = false;
            gun.destroy();
        }
        if (BasicGame.paperLevelComplete === true)
        {
            newspaper.inputEnabled = false;
            newspaper.destroy();
        }
        if (BasicGame.postCardLevelComplete === true)
        {
            paperDoc.inputEnabled = false;
            paperDoc.destroy();
        }
        if (BasicGame.canLevelComplete === true)
        {
            sodaCan.inputEnabled = false;
            sodaCan.destroy();
        }
       
        
       
    },
   returnToMenu: function (pointer) {
         this.state.start('crimeSceneMain');   
    },
    
    usePowder: function () {
        //  This will stop the user from visiting the other options
        //  Also, it will stop them from clicking option 1 and incrementing the crimeCounter by an infinite amount
        BasicGame.crimeCounter++;
        powder.loadTexture('Correct_Powder');
        returnBack.loadTexture('Next');
        powder.inputEnabled = false;
        glue.inputEnabled = false;
        ninhydrin.inputEnabled = false;
        collect.inputEnabled = false;
        BasicGame.knobLevelComplete = true;
        response.setText("A brush and black powder is ideal for processing a clear, nonporous piece of evidence at the scene.  Using the powder, you reveal a fingerprint!  You photograph and collect the print using a tape lift.  All items are packaged correctly.  Click Next to process more evidence.");
    },
    useSuperGlue: function () {
       glue.loadTexture('Incorrect_Superglue');
       response.setText("You are unable to fume with superglue at the crime scene. Try something else.");
    },
    
    useNinhydrin: function () {
      ninhydrin.loadTexture('Incorrect_Ninhydrin');
      response.setText("Ninhydrin works best on porous items.  Besides, you would not be able to apply ninhydrin to an item at the crime scene.  Try something else.");
        
    },
    collectItem: function () {   
      collect.loadTexture('Incorrect_Collect');
      response.setText("A door handle is really difficult to remove from the crime scene.  The handle is nonporous with a solid, light background, so maybe you could try something else.");
    },


}