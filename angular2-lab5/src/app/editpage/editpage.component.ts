import { Component, OnInit } from '@angular/core';
import {EditpageService} from '../editpage.service'

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css'],
  providers: [EditpageService]
})
export class EditpageComponent implements OnInit {
  
  private editpageService: EditpageService;
  
  chordSheetName:string;
  file: any;
  typedChordSheet: string;
  privacyOption: boolean;
  
  errorHappened: boolean = false;
  errorMessage: string = "";
  fileUploaded: boolean = true;
  
  uploadFileInput: any;
  
  constructor(editpageService: EditpageService) { 
    this.editpageService = editpageService;
  }
  
  //File has been attached
  fileUpload(event: any) {
    
    this.uploadFileInput = event.target;
    
    this.errorHappened = false;
    this.errorMessage = "";
    
    //Get file
    let file = event.srcElement.files[0];
    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    
    //Checks to make sure file size is less than 1Mb
    if (file.size >= Math.pow(1024, 2)) {
      console.log("File too big");
      event.target.value = "";
      this.errorMessage = "File size is too large.";
      this.errorHappened = true;
    }
    
    //File loads
    reader.onload = function(evt: any) {
       console.log(evt.target.result);
       this.fileUploaded = false;
    }.bind(this);
    
    //Error in file loading
    reader.onerror = function (evt: any) {
        this.errorMessage = "Error in loading file.";
        this.errorHappened = true;
    }.bind(this);
  }
  
  //Save button clicked
  save() {
    this.editpageService.save().subscribe(
      output => console.log(output));
      //error =>  this.errorMessage = <any>error
  }
  
  //Clear button clicked
  clear() {
    this.chordSheetName = "";
    this.typedChordSheet= "";
    this.privacyOption = false;
    this.uploadFileInput.value = "";
    this.fileUploaded = true;
  }

  ngOnInit() {
  }

}
