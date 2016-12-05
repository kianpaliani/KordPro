import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoginService } from '../login.service';
import { ChordprosheetserviceService } from '../chordprosheetservice.service';
import { LoggedinmenuComponent } from '../loggedinmenu/loggedinmenu.component';

var chordpro = require("chordprojs");

@Component({
  selector: 'app-loggedinhome',
  templateUrl: './loggedinhome.component.html',
  styleUrls: ['./loggedinhome.component.css']
})
export class LoggedinhomeComponent implements OnInit {
  
  chordpro = chordpro;
  chordProSheetViews: {chordProSheet: any, visible: boolean}[] = [];
  
  username: string;
  chordProSheets: any = [];

  constructor(private router: Router, private loginService: LoginService, private chordProSheetService: ChordprosheetserviceService) { }
  
  createChordProSheet() {
    this.router.navigate(['/editpage']);
  }
  
  viewFullScreen(chordProSheetTitle: string, owner: string) {
    this.router.navigate(['/fullscreen', chordProSheetTitle, owner]);
  }
  
  editChordProSheet(chordProSheetTitle: string) {
    this.router.navigate(['/editpage', chordProSheetTitle]);
  }
  
  deleteChordProSheet(chordProSheetTitle: string) {
    this.chordProSheetService.deleteChordProSheet(chordProSheetTitle)
                              .subscribe(output => {
                                //Get logged in user's chordprosheets
                                this.chordProSheetService.getUsersChordProSheets()
                                .subscribe((chordprosheets) => {
                                  this.chordProSheetViews = chordprosheets.map(chordprosheet => {
                                    return {chordProSheet: chordprosheet, visible: false};
                                  });
                                }, err => console.log("Get failed"));
                                console.log(output);
                              },
                              err => console.log(err));
  }
  
  viewVersions(chordProSheetTitle: string, owner: string) {
    this.router.navigate(['/versions', chordProSheetTitle, owner]);
  }

  ngOnInit() {
    
    //Get the currently logged in user
    this.loginService.getUser().subscribe(user => this.username = user, err => console.log("Get user failed"));
    
    //Get logged in user's chordprosheets
    this.chordProSheetService.getUsersChordProSheets()
    .subscribe((chordprosheets) => {
      if (chordprosheets != []) {
        this.chordProSheetViews = chordprosheets.map(chordprosheet => {
          return {chordProSheet: chordprosheet, visible: false};
        });
      }
    }, err => console.log("Get failed"));
    
  }

}
