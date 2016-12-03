import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoginService } from '../login.service';
import { ChordprosheetserviceService } from '../chordprosheetservice.service';
import { LoggedinmenuComponent } from '../loggedinmenu/loggedinmenu.component';

@Component({
  selector: 'app-loggedinhome',
  templateUrl: './loggedinhome.component.html',
  styleUrls: ['./loggedinhome.component.css']
})
export class LoggedinhomeComponent implements OnInit {
  
  username: string;
  chordProSheets: any = [];

  constructor(private router: Router, private loginService: LoginService, private chordProSheetService: ChordprosheetserviceService) { }
  
  createChordProSheet() {
    this.router.navigate(['/editpage']);
  }
  
  /*viewChordProSheet(string: chordProSheetTitle, string: chordProSheetOwner) {
    //this.router.navigate(['/chordprosheetview', chordProSheetTitle, chordProSheetOwner]);
  }*/
  
  editChordProSheet(chordProSheetTitle: string) {
    this.router.navigate(['/editpage', chordProSheetTitle]);
  }
  
  deleteChordProSheet(chordProSheetTitle: string) {
    this.chordProSheetService.deleteChordProSheet(chordProSheetTitle)
                              .subscribe(output => {
                                console.log(output);
                                //Get logged in user's chordprosheets
                                this.chordProSheetService.getUsersChordProSheets().subscribe(chordprosheets => this.chordProSheets = chordprosheets, err => console.log("Get failed"));
                              },
                              err => console.log(err));
  }

  ngOnInit() {
    
    //Get the currently logged in user
    this.loginService.getUser().subscribe(user => this.username = user, err => console.log("Get user failed"));
    
    //Get logged in user's chordprosheets
    this.chordProSheetService.getUsersChordProSheets().subscribe(chordprosheets => this.chordProSheets = chordprosheets, err => console.log("Get failed"));
    
  }

}
