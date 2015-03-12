BasicGame.postCardLab = function(game) {
this.background;
this.can;
this.gun;
this.newspaper;
this.postCard;
};

BasicGame.postCardLab.prototype = {
    
    create: function () {
     //this is where all your assets need to be called to be in the main menu
        this.background = this.add.image(0,0,'labScene');
        this.can = this.add.sprite(344, 380, 'Lab_Can');
        this.gun = this.add.sprite(544, 436, 'Lab_Gun');
        this.newspaper = this.add.sprite(744, 436, 'Lab_Paper');
        this.postCard = this.add.sprite(944, 436, 'Lab_Card');
        
        this.gun.tint = 0x9999FF;
        this.newspaper.tint = 0x9999FF;
        this.can.tint = 0x9999FF;
        ninhydrin = this.add.sprite(750, 600, 'Use_Ninhydrin');
        superglue = this.add.sprite(200, 600, 'Use_Superglue');
        returnBack = this.add.sprite(0,0,'Back');
        
        //Enable input on the items
        ninhydrin.inputEnabled = true;
        superglue.inputEnabled = true;
        returnBack.inputEnabled = true;
        superglue.events.onInputDown.add(this.useSuperGlue, this);
        ninhydrin.events.onInputDown.add(this.useNinhydrin, this);
        returnBack.events.onInputDown.add(this.returnToLab,this);

        
        //Text for the response
        this.response = this.add.text(0,this.world.centerY+300, '', { font: "24px fjalla", wordWrap: true, wordWrapWidth: 500, fill: '#fffff' });
    
    },
    
    update: function () {
        if(BasicGame.gunLabComplete === true){
            this.gun.destroy();
        }
        if(BasicGame.canLabComplete === true){
            this.can.destroy();
        }
        if(BasicGame.paperLabComplete === true) {
            this.newspaper.destroy();
        }
        if(BasicGame.documentLabCompelte === true) {
            this.postCard.destroy();
        }
    },
    
    useSuperGlue: function () {
    superglue.loadTexture('Incorrect_Superglue');
    this.response.setText("The postcard is a porous item.  Superglue works best on non-porous items, like cans and guns..");
    },
    
    useNinhydrin: function () {
     BasicGame.labCounter++;
    BasicGame.canLabComplete = true;
    ninhydrin.loadTexture('Correct_Ninhydrin');
    this.response.setText("Good idea!  Ninhydrin works on porous items like paper. Unfortunately, there are not any usable prints on this item.");
    superglue.inputEnabled = false;
    ninhydrin.inputEnabled = false;
    },
     returnToLab: function () {
        this.state.start('labSceneMain');
    },
    
}