BasicGame.MatchPrints = function(game) {
//Images
this.background;
this.patrickPrint;
this.helenPrint;
this.helenPrintSmall;
this.veronicaPrint;
this.patrickPortrait;
this.helenPortrait;
this.VeronicaPortrait;
    
//All the text variables
this.textBG; //background sprite for the text
this.text;
this.glassText;
this.paperText;
this.knobText;
this.gunText;
this.response;

//Counter for prints
this.counter = 0;
};

BasicGame.MatchPrints.prototype = {
    create: function() {
        this.background = this.add.sprite(0,0,'background');
        patrickPortrait = this.add.sprite(0,450,'Patrick_small');
        helenPortrait = this.add.sprite(533,450,'Helen_small');
        VeronicaPortrait = this.add.sprite(1066,450,'Veronica_small');
        patrickPrint = this.add.sprite(0,0,'Patrick_Print');
        helenPrint = this.add.sprite(200, 0, 'Helen_Print');
        helenPrintSmall = this.add.sprite(700,450,'Helen_Print_Small');
        veronicaPrint = this.add.sprite(400,0,'Veronica_Print');
        veronicaPrintTwo = this.add.sprite(600,0,'Veronica_Print');
        textBG = this.add.sprite(900,0,'text_bg');
        
        //enable input on the print sprites and allow drag
        helenPrint.inputEnabled = true;
        patrickPrint.inputEnabled = true;
        veronicaPrint.inputEnabled = true;
        veronicaPrintTwo.inputEnabled = true;
        patrickPrint.input.enableDrag();
        helenPrint.input.enableDrag();
        veronicaPrint.input.enableDrag();
        veronicaPrintTwo.input.enableDrag();
        patrickPrint.events.onDragStop.add(this.checkPatrick, this);
        helenPrint.events.onDragStop.add(this.checkHelen, this);
        veronicaPrint.events.onDragStop.add(this.checkVeronica, this);
        veronicaPrintTwo.events.onDragStop.add(this.checkVeronica, this);
        
        response = this.add.text(this.world.centerX, 300, '',{ font: "24px Helvetica", wordWrap: true, wordWrapWidth: 500, align: 'center', fill: '#ffffff'});
        this.text = this.add.text(920, 20,'We have 4 fingerprints let\'s see which fingerprints belong to Patrick. \nNote: Drag the each fingerprint and try to match them to the respected person.', {font: '24px Helvetica', wordWrap: true,align: 'left', wordWrapWidth: textBG.width-100, fill:'#ffffff' });
        this.glassText = this.add.text(0, 300,'Glass fingerprint', {font: '20px Helvetica', wordWrap: true,align: 'left', wordWrapWidth: textBG.width-100, fill:'#ffffff'});
        this.paperText = this.add.text(180, 300,'Newspaper fingerprint', {font: '20px Helvetica', wordWrap: true,align: 'left', wordWrapWidth: textBG.width-100, fill:'#ffffff'});
        this.knobText = this.add.text(400, 300,'Door Knob fingerprint', {font: '20px Helvetica', wordWrap: true,align: 'left', wordWrapWidth: textBG.width-100, fill:'#ffffff'});
        this.gunText = this.add.text(630, 300,'Gun fingerprint', {font: '20px Helvetica', wordWrap: true,align: 'left', wordWrapWidth: textBG.width-100, fill:'#ffffff'});
    },

    update: function() {
        if(this.counter === 4) {
            this.state.start('Outro');
        }
        
        
        
    },
    checkPatrick: function () {
        if (patrickPrint.x < 533){
            if(patrickPrint.y >= this.world.centerY) {
            patrickPrint.destroy();
            this.counter++;
            response.setText("Correct! This print matches the deceased victim, Patrick Evans.");
            }
        }
            
            else if(patrickPrint.x >= 533 ) {
            response.setText("This print is from the glass and matches the victim.");
            patrickPrint.x = 0;
            patrickPrint.y = 0;
                  }
            

        
    },
    checkVeronica: function () {
        //Veronica's First Print, which is the doorknob
                if(veronicaPrint.x < 533) {
            if(veronicaPrint.y >= 450) {
            veronicaPrint.x = 400;
            veronicaPrint.y = 0;
            response.setText("This print does not match Patrick's print. Try someone else");
            }
        }
        if(veronicaPrint.x >=533) 
            if(veronicaPrint.x <= 1066) {
            if(veronicaPrint.y >= 450) {
                veronicaPrint.x = 400;
                veronicaPrint.y = 0;
                response.setText("This print does not match any records we have for Helen. Try another person. Doesn't this print look familiar to another print here?");
            }
        }
        else if(veronicaPrint.x >= 1068) {
                if(veronicaPrint.y >= 450) {
                veronicaPrint.destroy();
                this.counter++;
                response.setText("This print matches the prints on Veronica's record. Good work.");
            }
            }
        //Second Print, the gun.
        //May want to make a seperate method for this in the future
        if(veronicaPrintTwo.x < 533) {
            if(veronicaPrintTwo.y >= 450) {
            veronicaPrintTwo.x = 600;
            veronicaPrintTwo.y = 0;
            response.setText("This print does not match Patrick's print. Try someone else");
            }
        }
        if(veronicaPrintTwo.x >=533) 
            if(veronicaPrintTwo.x <= 1066) {
            if(veronicaPrintTwo.y >= 450) {
                veronicaPrintTwo.x = 600;
                veronicaPrintTwo.y = 0;
                response.setText("This print does not match any records we have for Helen. Try another person. Doesn't this print look familiar to another print here?");
            }
        }
        if(veronicaPrintTwo.x >= 1068) {
                if(veronicaPrintTwo.y >= 450) {
                veronicaPrintTwo.destroy();
                this.counter++;
                response.setText("This print matches the prints on Veronica's record. It also matches the door knob's print. Good work.");
            }
            }
        
        
        
    },
    checkHelen: function () {
        //if user drops print on Patrick's instead of Helen.
        if(helenPrint.x < 533) {
            if(helenPrint.y >= 450) {
            helenPrint.x = 200;
            helenPrint.y = 0;
            response.setText("This print does not match Patrick's print. Try someone else");
            }
        }
        else if(helenPrint.x < 1068) {
            if(helenPrint.y < 450) {
                helenPrint.x = 200;
                helenPrint.y = 0;
        }
        }
            else if(helenPrint.x >= 1068) {
                if(helenPrint.y >= 450) {
                helenPrint.x = 200;
                helenPrint.y = 0;
                response.setText("This print does not match Veronica's records, try another person.");
            }
            }
        if(helenPrint.x >=533) 
            if(helenPrint.x <= 1066) {
            if(helenPrint.y >= 450) {
                helenPrint.destroy();
                response.setText("You got it right! The print from the newspaper belongs to the woman that neighbors know as Helen.");
            }
        }
},
}