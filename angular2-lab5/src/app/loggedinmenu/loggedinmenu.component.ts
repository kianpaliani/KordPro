import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../login.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-loggedinmenu',
  templateUrl: './loggedinmenu.component.html',
  styleUrls: ['./loggedinmenu.component.css']
})
export class LoggedinmenuComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }
  
  logout() {
    this.loginService.loggedIn = false;
    Cookie.delete('username');
    this.router.navigateByUrl('/loginpage');
  }

  ngOnInit() {
  }

}
