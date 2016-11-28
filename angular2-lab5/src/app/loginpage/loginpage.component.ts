import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  
  loginUsername: string = "";
  loginPassword: string = "";
  createAccountUsername: string = "";
  createAccountPassword: string = "";

  constructor(private loginService: LoginService, private router: Router) {}
  
  login() {
    this.loginService.login(this.loginUsername, this.loginPassword)
    .subscribe(isSuccess => {
      console.log(this.loginService.loggedIn);
      
      if (isSuccess == "Login Success") {
        this.router.navigate(['/editpage', this.loginUsername]);
      } else {
        alert("Login Failed");
        this.loginUsername = "";
        this.loginPassword = "";
      }
    });
  }
  
  createAccount() {
    this.loginService.createAccount(this.createAccountUsername, this.createAccountPassword)
    .subscribe(isSuccess => {
      
      if (isSuccess == "Create Account Success") {
        console.log("created account  ");
        this.router.navigate(['/editpage', this.loginUsername]);
      } else {
        alert("Login Failed");
        this.createAccountUsername = "";
        this.createAccountPassword = "";
      }
    });
  }
  
  ngOnInit() {
    if(this.loginService.loggedIn) {
      this.router.navigateByUrl('/home');
    }
  }

}
