import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ChordprosheetserviceService } from '../chordprosheetservice.service';
import {LoginService} from '../login.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

var chordpro = require("chordprojs");

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  chordpro = chordpro;
  chordProSheetViews: {chordProSheet: any, visible: boolean}[] = [];

  constructor(private http: Http, private chordProSheetService: ChordprosheetserviceService, private loginService: LoginService, private router: Router) { }

  viewFullScreen(chordProSheetTitle: string, owner: string) {
    this.router.navigate(['/fullscreen', chordProSheetTitle, owner]);
  }
  
  viewVersions(chordProSheetTitle: string, owner: string) {
    this.router.navigate(['/versions', chordProSheetTitle, owner]);
  }

  ngOnInit() {
    //Navigate to loggedinhome if already logged in
    if(this.loginService.isLoggedIn()) {
      this.router.navigateByUrl('/loggedinhome');
    }
    
    //Get public chordprosheets
    this.chordProSheetService.getPublicChordProSheets()
    .subscribe((chordprosheets) => {
      if (chordprosheets != []) {
        this.chordProSheetViews = chordprosheets.map(chordprosheet => {
          return {chordProSheet: chordprosheet, visible: false};
        });
      }
    }, err => console.log("Get failed"));
    
  }

}
