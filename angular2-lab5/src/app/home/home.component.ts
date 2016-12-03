import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ChordprosheetserviceService } from '../chordprosheetservice.service';
import {LoginService} from '../login.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  chordProSheets: any = [];

  constructor(private http: Http, private chordProSheetService: ChordprosheetserviceService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    //Navigate to loggedinhome if already logged in
    if(this.loginService.loggedIn) {
      this.router.navigateByUrl('/loggedinhome');
    }
    
    //Get public chordprosheets
    this.chordProSheetService.getPublicChordProSheets().subscribe(chordprosheets => this.chordProSheets = chordprosheets, err => console.log("Get failed"));
    
  }

}
