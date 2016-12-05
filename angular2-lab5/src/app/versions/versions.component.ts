import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ChordprosheetserviceService } from '../chordprosheetservice.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

var chordpro = require("chordprojs");

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css']
})
export class VersionsComponent implements OnInit {

  chordpro = chordpro;

  chordProSheet = [{oldVersions: []}];
  title: string;
  owner: string;
  loggedIn: boolean;
  chordProSheetVersions = [];

  constructor(private http: Http, private chordProSheetService: ChordprosheetserviceService, private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  viewFullScreen(chordProSheetTitle: string, owner: string) {
    this.router.navigate(['/fullscreen', chordProSheetTitle, owner]);
  }

  ngOnInit() {
    
    if (this.loginService.isLoggedIn()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    
    //Get the title of the chord sheet from the paramaters (if one exists)
    this.route.params.subscribe(params => {
      this.title = params['title'];
      this.owner = params['owner'];
    
     //Get chordprosheet
      this.chordProSheetService.getChordProSheetView(this.title, this.owner)
      .subscribe(chordProSheet => {
        
        // If an error string was returned, redirect
        if (typeof chordProSheet == "string") {
          this.router.navigate(['/home']);
        }
        // Have a chordsheet
        else {
          //Get the chordprosheet and it's versions
          this.chordProSheet = chordProSheet;
          this.chordProSheetVersions = chordProSheet.oldVersions;
          
          // If there are previous versions
          if (typeof(this.chordProSheetVersions) == "object" && this.chordProSheetVersions.length > 0) {
            // Reverse order
            this.chordProSheetVersions.reverse();
          }
        }
      }, err => {
        console.log("Get chordprosheet failed");
        this.router.navigate(['/home']);
      });
    });
  }
}
