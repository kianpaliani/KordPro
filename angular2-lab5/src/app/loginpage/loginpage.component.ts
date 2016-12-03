import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
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
      if (isSuccess == "Login Success") {
        console.log("Logged in");
        this.router.navigateByUrl('/loggedinhome');
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
        console.log("created account");
        this.router.navigateByUrl('/loggedinhome');
      } else if (isSuccess == "Username already exists") {
        alert("Username is taken");
      } else {
        alert("Create Account Failed");
        this.createAccountUsername = "";
        this.createAccountPassword = "";
      }
    });
  }
  
  ngOnInit() {
    //Navigate to logged in home if already logged in
    if(this.loginService.loggedIn) {
      this.router.navigateByUrl('/loggedinhome');
    }
  }

}
