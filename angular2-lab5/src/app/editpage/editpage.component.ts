import { Component, OnInit } from '@angular/core';
import { EditpageService } from '../editpage.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoggedinmenuComponent } from '../loggedinmenu/loggedinmenu.component';
import { LoginService } from '../login.service';
import { ChordprosheetserviceService } from '../chordprosheetservice.service';

var chordpro = require("chordprojs");

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css'],
  providers: [EditpageService]
})
export class EditpageComponent implements OnInit {
  
  chordpro = chordpro;
  
  chordSheetName:string = "";
  file: any;
  typedChordSheet: string = "";
  privacyOption: boolean = false;
  
  errorHappened: boolean = false;
  errorMessage: string[] = [];
  warningHappened: boolean = false;
  warningMessage: string[] = [];
  fileUploaded: boolean = true;
  
  uploadFileInput: any = null;
  fileContent: string;
  
  username: string;
  title: string;
  chordProSheet;
  newChordSheet:boolean = true;
  oldChordSheetName: string = "";
  
  editpageTitle: string = "";
  
  constructor(private editpageService: EditpageService, private loginService: LoginService, private router: Router, private route: ActivatedRoute, private chordProSheetService: ChordprosheetserviceService) { 
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
      event.target.value = "";
      alert("File size is too large.");
    }
    
    //File loads
    reader.onload = function(evt: any) {
      //Checks to make sure the file is of type plain text
      if (file.type != "text/plain") {
        event.target.value = "";
        alert("File must be of type plain text.");
      } else {
        this.typedChordSheet = evt.target.result;
        this.errorAndWarningCheck();
      }
    }.bind(this);
    
    //Error in file loading
    reader.onerror = function (evt: any) {
        alert("Error in loading file.");
    }.bind(this);
  }
  
  //Save button clicked
  save() {
    
    //Make sure fields aren't empty
    if (this.typedChordSheet != "" && this.chordSheetName != "") {
      
      let errorsAndWarnings: string[][] = [];
      this.errorMessage = [];
      this.warningMessage = [];
      this.errorHappened = false;
      this.warningHappened = false;
      
      //Get errors and warnings
      errorsAndWarnings = this.chordProValidate(this.typedChordSheet);
      
      //Populate errors
      for (let error of errorsAndWarnings[0]) {
        let errorLineNum = error.slice(0, 1)
        let actualError = error.slice(1);
        this.errorMessage.push("Line " + errorLineNum + ": " + actualError);
      }
      if (this.errorMessage != undefined && this.errorMessage.length > 0) {
        this.errorHappened = true;
      }
      
      //Populate warnings
      for (let warning of errorsAndWarnings[1]) {
        let warningLineNum = warning.slice(0, 1)
        let actualWarning = warning.slice(1);
        this.warningMessage.push("Line " + warningLineNum + ": " + actualWarning);
      }
      if (this.warningMessage != undefined && this.warningMessage.length > 0) {
        this.warningHappened = true;
      }
      
      //Make sure there are no errors
      if (errorsAndWarnings[0] != undefined && errorsAndWarnings[0].length == 0) {

        //Save chordprosheet
        this.editpageService.save(this.chordSheetName, this.typedChordSheet, this.privacyOption, this.newChordSheet, this.oldChordSheetName)
          .subscribe(isSuccess => {
            console.log(isSuccess);
            if (isSuccess == "Save Success") {
              console.log("save success");
              this.router.navigate(['/loggedinhome']);
            } else if (isSuccess == "ChordProSheet with that title already exists") {
              alert("ChordProSheet with that title already exists");
            } else if (isSuccess == "Nothing has been edited") {
              alert("Nothing has been edited");
            } else {
              alert("Save Failed");
            }
        });
      }
      
    } else {
      alert("ChordPro sheet name and contents cannot be empty.");
    }
  }
  
  //Clear button clicked
  clear() {
    if (window.confirm("Are you sure you want to clear?")) {
      if (this.newChordSheet) {
        this.chordSheetName = "";
        this.typedChordSheet= "";
        this.privacyOption = false;
        this.errorMessage = [];
        this.warningMessage = [];
        this.errorHappened = false;
        this.warningHappened = false;
        if (this.uploadFileInput != null) {
          this.uploadFileInput.value = "";
        }
        this.fileUploaded = true;
      } else {
        this.router.navigate(['/loggedinhome']);
      }
    }
  }
  
  //Validate chordprosheet
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
      if (line.includes("{new_song") || line.includes("{ns")) {
          titleOccurrences = 0;
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
      && !line.includes("{new_song")
      && !line.includes("{ns")
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
    
    //Get the currently logged in user
    this.loginService.getUser().subscribe(user => this.username = user, err => console.log("Get user failed"));
    
    //Get the title of the chord sheet from the paramaters (if one exists)
    this.route.params.subscribe(params => {
      
      //Get title
      this.title = params['title']
      
      //Checks to see if a title parameter was passed in the url
      if (this.title != undefined) {
        
        //Get chordprosheet
        this.chordProSheetService.getChordProSheet(this.title)
                                  .subscribe(chordProSheet => {
                                    
                                    //Get the chordprosheet
                                    this.chordProSheet = chordProSheet;
                                  
                                    //Not creating a new chordsheet
                                    this.newChordSheet = false;
                                    this.editpageTitle = "Edit";
                                  
                                    //Get data from chordProSheet
                                    this.chordSheetName = this.chordProSheet.title;
                                    this.oldChordSheetName = this.chordProSheet.title;
                                    this.typedChordSheet = this.chordProSheet.content;
                                    this.privacyOption = this.chordProSheet.isPrivate;
                                  }, err => {
                                    console.log("Get chordprosheet failed");
                                    this.router.navigate(['/loggedinhome']);
                                  });
      } else {
        this.editpageTitle = "Create";
      }
    });
  }
  
  errorAndWarningCheck() {
    let errorsAndWarnings: string[][] = [];
    this.errorMessage = [];
    this.warningMessage = [];
    this.errorHappened = false;
    this.warningHappened = false;
    
    errorsAndWarnings = this.chordProValidate(this.typedChordSheet);
    
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
  
  onKey(event:any) {
    this.errorAndWarningCheck();
  }
}
