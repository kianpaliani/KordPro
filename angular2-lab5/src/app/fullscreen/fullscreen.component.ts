import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ChordprosheetserviceService } from '../chordprosheetservice.service';
import { LoggedinmenuComponent } from '../loggedinmenu/loggedinmenu.component';
import {LoginService} from '../login.service';

var chordpro = require("chordprojs");

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.css']
})
export class FullscreenComponent implements OnInit {

  chordpro = chordpro;

  chordProSheet;
  title: string;
  owner: string;
  content: string;
  loggedIn: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private chordProSheetService: ChordprosheetserviceService, private loginService: LoginService) { }

  ngOnInit() {
    
    if (this.loginService.isLoggedIn()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    
    //Get the title of the chord sheet from the paramaters (if one exists)
    this.route.params.subscribe(params => this.title = params['title']);
    this.route.params.subscribe(params => this.owner = params['owner']);
    
   //Get chordprosheet
    this.chordProSheetService.getChordProSheetView(this.title, this.owner)
    .subscribe(chordProSheet => {
      if (typeof chordProSheet == "string") {
        this.router.navigate(['/home']);
      } else {
        //Get the chordprosheet
        this.chordProSheet = chordProSheet;
        this.content = chordProSheet.content;
      }
    }, err => {
      console.log("Get chordprosheet failed");
      this.router.navigate(['/loggedinhome']);
    });
  }
}
