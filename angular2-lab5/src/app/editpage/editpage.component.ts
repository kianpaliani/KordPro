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
  
  constructor(editpageService: EditpageService) { 
    this.editpageService = editpageService;
  }
  
  fileUpload(event: any) {
    let file = event.srcElement.files[0];
    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function(evt: any) {
       console.log(evt.target.result);
    }
    reader.onerror = function (evt: any) {
        console.log("Error reading file.");
    }
  }
  
  dropdown(privacyOption) {
    this.privacyOption = privacyOption;
  }
  
  save() {
    this.editpageService.save().subscribe(
      output => console.log(output));
      //error =>  this.errorMessage = <any>error
  }
  
  clear() {
    this.chordSheetName = "";
    this.typedChordSheet= "";
    this.privacyOption = false;
    //file;
  }

  ngOnInit() {
  }

}
