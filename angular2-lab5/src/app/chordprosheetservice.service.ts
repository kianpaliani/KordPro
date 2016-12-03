import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChordprosheetserviceService {

  constructor(private http: Http) { }
  
  getPublicChordProSheets() {
    return this.http
                .get('/api/chordprosheet/public')
                .map(res => res.json());
  }
  
  getChordProSheet(chordProSheetTitle: string) {
    return this.http
                .get('/api/chordprosheet/' + chordProSheetTitle)
                .map(res => res.json());
  }
  
  getUsersChordProSheets() {
    return this.http
                .get('/api/chordprosheet/')
                .map(res => res.json());
  }
  
  deleteChordProSheet(chordProSheetTitle: string) {
    return this.http
                .delete('/api/chordprosheet/' + chordProSheetTitle)
                .map(res => res.text());
  }

}
