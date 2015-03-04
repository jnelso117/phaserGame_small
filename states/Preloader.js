BasicGame.Preloader = function(game) {
   this.sky = null;
   this.firstaid = null;
   this.diamond = null;
   this.ready = false;
   this.star = null;

};

BasicGame.Preloader.prototype = {
    
    preload: function() {
    this.load.image('star','assets/star.png');
    this.load.image('crimeScene', 'assets/Crime_Scene/Crime_Background.png');
    this.load.image('crimeSceneFull', 'assets/linvilleCrimeSceneFinal-Crime.png');
    this.load.image('labScene', 'assets/Lab/linville-lab-empty.png');
    //Items that are analyzed
//    this.load.image('Can', 'assets/Can.png');
//    this.load.image('Gun', 'assets/Gun.png');
//    this.load.image('Newspaper','assets/Newspaper.png');
//    this.load.image('Glass', 'assets/Glass.png');
//    this.load.image('Knob', 'assets/Knob.png');
    //Items that the player must locate in the canvas
    this.load.image('Table_Can', 'assets/Crime_Scene/table_can.png');
    this.load.image('Table_Gun', 'assets/Crime_Scene/table_gun.png');
    this.load.image('Table_Newspaper', 'assets/Crime_Scene/table_newspaper.png');
    this.load.image('Table_Glass', 'assets/Crime_Scene/table_glass.png');
    this.load.image('Table_Card', 'assets/Crime_Scene/table_card.png');
    this.load.image('Door_Knob', 'assets/Crime_Scene/door_knob.png');
    this.load.image('Lab_Can', 'assets/Lab/lab_can.png');
    this.load.image('Lab_Gun', 'assets/Lab/lab_gun.png');
    this.load.image('Lab_Card', 'assets/Lab/lab_document.png');
    this.load.image('Lab_Glass', 'assets/Lab/lab_glass.png');
    this.load.image('Lab_Paper', 'assets/Lab/lab_paper.png');
    // Function Buttons
    this.load.image('Use_Powder', 'assets/buttons/Powder/Initial.png');
    this.load.image('Use_Superglue', 'assets/buttons/Superglue/Initial.png');
    this.load.image('Use_Ninhydrin', 'assets/buttons/Ninhydrin/Initial.png');
    this.load.image('Use_Collect', 'assets/buttons/Collect/Initial.png');
    // Incorrect Function Buttons
    this.load.image('Incorrect_Powder', 'assets/buttons/Powder/Incorrect.png');
    this.load.image('Incorrect_Superglue', 'assets/buttons/Superglue/Incorrect.png');
    this.load.image('Incorrect_Ninhydrin', 'assets/buttons/Ninhydrin/Incorrect.png');
    this.load.image('Incorrect_Collect', 'assets/buttons/Collect/Incorrect.png');
    // Correct Function Buttons
    this.load.image('Correct_Powder', 'assets/buttons/Powder/Correct.png');
    this.load.image('Correct_Superglue', 'assets/buttons/Superglue/Correct.png');
    this.load.image('Correct_Ninhydrin', 'assets/buttons/Ninhydrin/Correct.png');
    this.load.image('Correct_Collect', 'assets/buttons/Collect/Correct.png');
   
    },  
    
create: function () {

},
    
update: function() {
    BasicGame.levelCounter = 0;
    this.ready = true;
    this.state.start('Menu');
}
    
};