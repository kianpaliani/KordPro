import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-dmcapolicy',
  templateUrl: './dmcapolicy.component.html',
  styleUrls: ['./dmcapolicy.component.css']
})
export class DmcapolicyComponent implements OnInit {

  loggedIn: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
    if (this.loginService.isLoggedIn()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    
  }

}
