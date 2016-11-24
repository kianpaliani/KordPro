import { Component, OnInit } from '@angular/core';
import {EditpageService} from '../editpage.service'

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css'],
  providers: [EditpageService]
})
export class EditpageComponent implements OnInit {
  
  testString:string = "{t:Hallelujah}\n\
{st:Jeff Buckley}\n\
{c: Sheet Music by Leonord Cohen}\n\
{define: Bm x24432}\n\
#\n\
#This tab is for Hallelujah, as i've found i've not really gotten on with the other ones\n\
#here. The song is obviously picked but if you find that too difficult it also works\n\
#well strummed but picking the root notes of the chord with your thumb. With the G and E7\n\
#the start of each verse do a 2-3 up to the G and a 2-0 on the way down to the E7 on the\n\
#E string.\n\
{sot}\n\
\n\
{eot}\n\
[G]  [Em]  [G]  [Em]\n\
\n\
[G]I heard there was a s[Em]ecret chord\n\
That [G]David played and it [Em]pleased the Lord\n\
But [C]you don't really [D7] care for music, d[G]o ya?   [D7]\n\
W[G]ell it goes like this the [C]fourth, the [D7]fifth\n\
[Em]The minor fall and the [C]major lift\n\
The [D7]baffled king [B7]composing halle[Em]lujah\n\
\n\
{soc}\n\
Ha[C]llelujah, ha[Em]llelujah, ha[C]llelujah, ha[G]llelu[D7]-u-u-u-ja[G]aah     [Em]  [G]  [Em]\n\
{eoc}";
  
  private editpageService: EditpageService;
  
  chordSheetName:string;
  file: any;
  typedChordSheet: string;
  privacyOption: boolean;
  
  errorHappened: boolean = false;
  errorMessage: string[] = [];
  warningHappened: boolean = false;
  warningMessage: string[] = [];
  fileUploaded: boolean = true;
  
  uploadFileInput: any = null;
  
  constructor(editpageService: EditpageService) { 
    this.editpageService = editpageService;
  }
  
  //File has been attached
  fileUpload(event: any) {
    
    //Reference to file input
    this.uploadFileInput = event.target;
    
    //Get rid of error
    this.errorHappened = false;
    this.errorMessage = [];
    
    //Get file
    let file = event.srcElement.files[0];
    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    
    //Checks to make sure file size is less than 1Mb
    if (file.size >= Math.pow(1024, 2)) {
      console.log("File too big");
      event.target.value = "";
      this.errorMessage.push("File size is too large.");
      this.errorHappened = true;
    }
    
    //File loads
    reader.onload = function(evt: any) {
       console.log(evt.target.result);
       this.fileUploaded = false;
    }.bind(this);
    
    //Error in file loading
    reader.onerror = function (evt: any) {
        this.errorMessage.push("Error in loading file.");
        this.errorHappened = true;
    }.bind(this);
  }
  
  //Save button clicked
  save() {
    if (this.typedChordSheet != "") {
      this.errorMessage = [];
      this.warningMessage = [];
      let errorsAndWarnings = this.chordProValidate(this.typedChordSheet);
      
      for (let error of errorsAndWarnings[0]) {
        let errorLineNum = error.slice(0, 1)
        let actualError = error.slice(1);
        this.errorMessage.push("Line " + errorLineNum + ": " + actualError);
      }
      if (this.errorMessage != undefined && this.errorMessage.length > 0) {
        this.errorHappened = true;
      }
      
      for (let warning of errorsAndWarnings[1]) {
        let warningLineNum = warning.slice(0, 1)
        let actualWarning = warning.slice(1);
        this.warningMessage.push("Line " + warningLineNum + ": " + actualWarning);
      }
      if (this.warningMessage != undefined && this.warningMessage.length > 0) {
        this.warningHappened = true;
      }
    }
    
    //if (errorsAndWarnings[0] == []) {
    //this.editpageService.save().subscribe(
      //output => console.log(output));
      //error =>  this.errorMessage = <any>error
    //}
  }
  
  //Clear button clicked
  clear() {
    if (window.confirm("Are you sure you want to clear?")) {
      this.chordSheetName = "";
      this.typedChordSheet= "";
      this.privacyOption = false;
      if (this.uploadFileInput != null) {
        this.uploadFileInput.value = "";
      }
      this.fileUploaded = true;
    }
    console.log(this.chordProValidate(this.testString));
  }
  
  chordProValidate(input: string): string[][] {
    let errors: string[] = [];
    let warnings: string[] = [];
    let errorsAndWarnings: string[][] = [];
    let lines: string[] = input.split(/\r?\n/);
    let titleOccurrences: number = 0;

    let lineNum: number = 0;

    for (let line of lines) {
      
      line.trim();
      
      if (line.indexOf("{") >= 1 || (line.indexOf("{") < 0 && line.includes("}"))) {
          errors.push(lineNum + "Starting curly brace is somewhere other than at the start of the line.");
      }
      if (((line.indexOf("}") <= line.length - 2) && (line.indexOf("}") >= 0)) || (line.indexOf("}") < 0 && line.includes("{"))) {
          errors.push(lineNum + "Ending curly brace is somewhere other than the end of the line.");
      }
      if (line.includes("{title") || line.includes("{t")) {
          titleOccurrences += 1;
          if (titleOccurrences >= 2) {
              errors.push(lineNum + "Cannot have more than one title block within the same 'new_song' block.");
          }
      }
      if (!line.includes("{") && (line.indexOf("#") >= 1 || line.indexOf("#") < 0) && line!="" && titleOccurrences == 0) {
          errors.push(lineNum + "Missing title directive before start of lyrics.");
      }
      if (!line.includes(":") && (line.includes("{title") || line.includes("{t") ||line.includes("{subtitle") || line.includes("{st") ||line.includes("{comment") || line.includes("{c") ||line.includes("{define"))) {
          errors.push(lineNum + "Missing separator (“:”) or text for “title”, “subtitle”, “comment” or “define” directives.");
      }
      if (
          (line.includes("{soc") && line != "{soc}")
          || (line.includes("{start_of_chorus") && line != "{start_of_chorus}")
          || (line.includes("{eoc") && line != "{eoc}")
          || (line.includes("{end_of_chorus") && line != "{end_of_chorus}")
          || (line.includes("{sot") && line != "{sot}")
          || (line.includes("{start_of_tab") && line != "{start_of_tab}")
          || (line.includes("{eot") && line != "{eot}")
          || (line.includes("{end_of_tab") && line != "{end_of_tab}")
      ) {
          errors.push(lineNum + "Extra characters in directive.");
      }
      if (line.includes("{") 
      && line.includes("}") 
      && !line.includes("{new_song:")
      && !line.includes("{ns:")
      && !line.includes("{title:")
      && !line.includes("{t:")
      && !line.includes("{subtitle:")
      && !line.includes("{st:")
      && !line.includes("{comment:")
      && !line.includes("{c:")
      && !line.includes("{start_of_chorus")
      && !line.includes("{soc")
      && !line.includes("{end_of_chorus")
      && !line.includes("{eoc")
      && !line.includes("{start_of_tab")
      && !line.includes("{sot")
      && !line.includes("{end_of_tab")
      && !line.includes("{eot")
      && !line.includes("{define:")
      ) {
        warnings.push(lineNum + "A directive other than a supported directive is found.");
      }
      
      if (line.includes("{define:")) {
        let defineLine = line.split(" ");
        if (defineLine[1].length != 2 || !("ABCDEFG").includes(defineLine[1].charAt(0))) {
          warnings.push(lineNum + "'name' parameter for “define” directive does not start with uppercase letters A-G or contains spaces.");
        }
        if (defineLine[2].length != 7 
        || !("xX123456789").includes(defineLine[2].charAt(0)) 
        || !("xX123456789").includes(defineLine[2].charAt(1))
        || !("xX123456789").includes(defineLine[2].charAt(2))
        || !("xX123456789").includes(defineLine[2].charAt(3))
        || !("xX123456789").includes(defineLine[2].charAt(4))
        || !("xX123456789").includes(defineLine[2].charAt(5))
        ) {
          warnings.push(lineNum + "'code' parameter for “define” directive is not exactly 6 characters long or contains characters other than x, X, 0-9.");
        }
      }
      
      lineNum += 1;
    }
  
    errorsAndWarnings.push(errors);
    errorsAndWarnings.push(warnings);
  
    return errorsAndWarnings;
  }

  ngOnInit() {
  }

}
