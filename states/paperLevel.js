 /******************************************************************
    
    This Level covers Slides 22 through 25.  
    
    Item: Newspaper.
    Details: Porous item.
    Fingerprints? No.
    Collect? Yes.
    
 ******************************************************************/
    
BasicGame.paperLevel = function(game) {
 this.background;
 this.image; //image for the level
 this.returnStar; //return to the Menu
 
};
BasicGame.paperLevel.prototype = {
    
   create: function () {
        //adding the images to the canvas
        background = this.add.image(0,0, 'crimeScene');
        image = this.add.sprite(this.world.centerX/2,this.world.centerY/2,'Newspaper');
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
        this.response = this.add.text(this.world.centerX,this.world.centerY-75, '', { font: "12px fjalla", wordWrap: true, wordWrapWidth: 200, fill: '#fffff' });
        
    },
    update: function () {
        
       
    },
   returnToMenu: function (pointer) {
    this.state.start('Game');   
    },
    
    usePowder: function () {
    powder.sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'incorrect');    
    this.response.setText("A brush and black powder is good for processing nonporous items, but the weapon has a very dark background that would not provide good contrast with the powder.     Try something else.");
    this.response.addColor('#B00000',0);
    },
    useSuperGlue: function () {
    glue.sprite = this.add.sprite(this.world.centerX, this.world.centerY+50,'incorrect');
    this.response.setText("Super glue works best on nonporous items.  Besides, you are not able to fume an item at the crime scene.  Try something else.");
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
    BasicGame.paperLevelComplete = false;
    this.response.setText("Good idea!  The newspaper can be removed from the crime scene and this porous item can more easily be processed back at the lab.");
    this.response.addColor('#009900',0);
    },


}