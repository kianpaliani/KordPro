import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EditpageService {
    
    constructor (private http: Http) {}
    
    //Saves chordpro file and sends to server
    save(name: string, content: string, privacyOption: boolean, newChordSheet: boolean, oldChordSheetName: string) {
        
        let headers = new Headers({ 'Content-Type': 'application/json' }); //Set content type to JSON
        let options = new RequestOptions({ headers: headers }); //Create a request option
      
         //Make http post to save chordprosheet
         return this.http
            .post('/api/chordprosheet/save', JSON.stringify({name: name, content: content, privacyOption: privacyOption, newChordSheet: newChordSheet, oldChordSheetName: oldChordSheetName}), options)
            .map(res => res.text());
    }
}
