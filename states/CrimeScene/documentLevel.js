 /******************************************************************
    
    This Level covers Slides 26 through 29.  
    
    Item: Paper document.
    Details: Porous item.  
    Fingerprints? Yes.
    Collect? Yes.
    
 ******************************************************************/
    
BasicGame.documentLevel = function(game) {
 this.background;
 this.image; //image for the level
 this.returnStar; //return to the Menu
 
};
BasicGame.documentLevel.prototype = {
    
   create: function () {
        //adding the images to the canvas
      //adding the images to the canvas
        this.BG = this.add.image(0,0,'crimeScene');
        this.drinkingGlass = this.add.image(629,573, 'Table_Glass');
        this.doorHandle = this.add.image(446,302, 'Door_Knob');
        this.gun = this.add.image(604, 830, 'Table_Gun');
        this.newspaper = this.add.image(855,446, 'Table_Newspaper');
        this.paperDoc = this.add.image(424, 630, 'Table_Card');
        this.sodaCan = this.add.image(525,561, 'Table_Can');
       
       //Adding a tint to all other objects to give the game a more focused feel
        this.BG.tint = 0x9999FF;
        this.drinkingGlass.tint = 0x9999FF;
        this.doorHandle.tint = 0x9999FF;
        this.gun.tint = 0x9999FF;
        this.newspaper.tint = 0x9999FF;
        this.sodaCan.tint = 0x9999FF;       
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
       
        
        //How the text will look
        this.response = this.add.text(this.world.centerX,this.world.centerY-75, '', { font: "12px Arial", wordWrap: true, wordWrapWidth: 200, fill: '#fffff' });
        
    },
    update: function () {
        
       
    },
   returnToMenu: function (pointer) {
         this.state.start('crimeSceneMain');   
    },
    
    usePowder: function () {  
      
    this.response.setText("Super glue works best on nonporous items.  Besides, you are not able to fume an item at the crime scene.  Try something else.");
    this.response.addColor('#B00000',0);
    },
    
    useSuperGlue: function () {
    glue.sprite = this.add.sprite(this.world.centerX, this.world.centerY+50,'incorrect');
    this.response.setText("Oils from fingerprints are absorbed into porous materials like paper.  A brush and black powder is not very good at developing prints on porous items.  Try something else.");
    this.response.addColor('#B00000',0);
    },
    
    useNinhydrin: function () {
    ninhydrin.sprite = this.add.sprite(this.world.centerX, this.world.centerY+100,'incorrect');
    this.response.setText("Ninhydrin does work best on porous items, but ninhydrin is difficult to apply to items at the scene.  Try something else.");
    this.response.addColor('#B00000',0);
        
    },
    collectItem: function () {  
      BasicGame.levelCounter++;
        //  This will stop the user from visiting the other options
        //  Also, it will stop them from clicking option 1 and incrementing the levelCounter by an infinite amount
    powder.inputEnabled = false;
    glue.inputEnabled = false;
    ninhydrin.inputEnabled = false;
    collect.inputEnabled = false;
    BasicGame.documentLevelComplete = false;
    collect.sprite = this.add.sprite(this.world.centerX, this.world.centerY+150,'incorrect');
    this.response.setText("Good idea!  The paper can be removed from the crime scene and this porous item can more easily be processed back at the lab.");
    this.response.addColor('#009900',0);
    },


}